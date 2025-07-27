import React, { useState } from "react";
import AnimatedBackground from "./AnimatedBackground";

// FontAwesome icons (using CDN in index.html)

function getInitialDarkMode() {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return saved === "true";
    // Optionally, use prefers-color-scheme
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return true;
    }
  }
  return false;
}

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [jsonResponse, setJsonResponse] = useState("");
  const [messageType, setMessageType] = useState("");
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);
  const [showResults, setShowResults] = useState(false);

  const checkEmail = async () => {
    setShowResults(true);
    setMessage("");
    setMessageType("");
    setJsonResponse("");
    if (!email) {
      setMessage("Please enter an email address.");
      setMessageType("error");
      setJsonResponse(JSON.stringify({ error: "No email provided" }, null, 2));
      return;
    }
    try {
      const response = await fetch(
        "https://emailscript.pythonanywhere.com/check_disposable",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      setJsonResponse(JSON.stringify(data, null, 2));
      if (response.ok) {
        if (data.disposable) {
          setMessage("The email is likely disposable.");
          setMessageType("error");
        } else {
          setMessage("The email is not disposable.");
          setMessageType("success");
        }
      } else {
        setMessage(data.error || "An error occurred while checking the email.");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("Network error: Unable to reach the server.");
      setMessageType("error");
      setJsonResponse(
        JSON.stringify({ error: `Network error: ${error.message}` }, null, 2)
      );
    }
  };

  // Toggle dark/light mode
  const handleThemeToggle = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("darkMode", next);
      document.body.classList.toggle("dark-mode", next);
      return next;
    });
  };

  // Ensure body class matches darkMode on mount and when darkMode changes
  React.useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className={`app-wrapper${darkMode ? " dark" : ""}`}>
      <AnimatedBackground />
      <header className="main-header pro-navbar">
        <div className="header-content full-width">
          <div className="header-left">
            <span className="logo">
              <i className="fas fa-envelope"></i>
              <span className="brand">EmailScript</span>
            </span>
          </div>
          <div className="header-right">
            <nav className="nav">
              <a href="#" className="nav-link disabled">
                <i className="fas fa-layer-group"></i> Bulk Check{" "}
                <span className="soon">(Soon)</span>
              </a>
              <a href="#" className="nav-link disabled">
                <i className="fas fa-history"></i> History{" "}
                <span className="soon">(Soon)</span>
              </a>
            </nav>
            <button
              className="theme-toggle"
              onClick={handleThemeToggle}
              aria-label="Toggle dark/light mode"
            >
              {darkMode ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>
          </div>
        </div>
      </header>
      <main className="main-content">
        <div className="container">
          <h2>
            <i className="fas fa-search"></i> Disposable Email Checker
          </h2>
          <p>
            Check if an email address is disposable or not. More features coming
            soon!
          </p>
          <input
            type="email"
            id="emailInput"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 16,
              marginBottom: showResults ? 0 : 24,
            }}
          >
            <button onClick={checkEmail} style={{ minWidth: 180 }}>
              <i className="fas fa-check"></i> Check Email
            </button>
          </div>
          {showResults && (
            <>
              <div
                id="messageOutput"
                className={messageType}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontWeight: 600,
                  fontSize: "1.08rem",
                  marginBottom: 18,
                  marginTop: 36,
                }}
              >
                {messageType === "success" && (
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "#22c55e", fontSize: "1.3em" }}
                  ></i>
                )}
                {messageType === "error" && (
                  <i
                    className="fas fa-exclamation-triangle"
                    style={{ color: "#f472b6", fontSize: "1.3em" }}
                  ></i>
                )}
                <span>{message}</span>
              </div>
              <div style={{ position: "relative", marginBottom: 0 }}>
                <pre id="jsonOutput" style={{ margin: 0, paddingRight: 48 }}>
                  {jsonResponse}
                </pre>
                <button
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background:
                      "linear-gradient(90deg, #6366f1 0%, #f472b6 100%)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "4px 12px",
                    fontSize: "0.95em",
                    cursor: "pointer",
                    boxShadow: "0 1.5px 8px 0 rgba(60,40,120,0.13)",
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(jsonResponse);
                  }}
                  title="Copy JSON"
                >
                  <i className="fas fa-copy"></i> Copy
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      <footer className="main-footer">
        <div className="footer-content full-width">
          <div className="footer-left">
            <span>
              <i className="far fa-copyright"></i> {new Date().getFullYear()}{" "}
              EmailScript. All rights reserved.
            </span>
          </div>
          <div className="footer-right">
            <span className="footer-links">
              <a href="#" className="footer-link disabled">
                <i className="fas fa-book"></i> API Docs (Coming Soon)
              </a>
              <a href="#" className="footer-link disabled">
                <i className="fas fa-envelope-open-text"></i> Contact
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
