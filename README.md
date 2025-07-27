<p align="center">
  <img width="1312" height="342" alt="image" src="https://github.com/user-attachments/assets/3773588a-d1d7-4700-a697-7500aef85c1d" />
</p>



# 📧 EmailScript

> Detect and block temporary/disposable email addresses in real time to reduce spam and enhance user authenticity.

<div align="center">
  
[![GitHub Stars](https://img.shields.io/github/stars/EmailScript/EmailScript?style=social)](https://github.com/EmailScript/EmailScript/stargazers)
[![Open Issues](https://img.shields.io/github/issues/EmailScript/EmailScript)](https://github.com/EmailScript/EmailScript/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/EmailScript/EmailScript)](https://github.com/EmailScript/EmailScript/pulls)
[![License](https://img.shields.io/github/license/EmailScript/EmailScript)](LICENSE)

</div>

---

## 🌟 Project Overview

**EmailScript** is a simple yet powerful tool that checks whether a given email is disposable or legitimate. It's perfect for developers looking to protect their platforms from fake signups and spam using temporary emails.

> Built during [GSSoC '25](https://gssoc.girlscript.tech/) to encourage contributions and learning!

---

## ✨ Contributing to EmailScript

First off, thanks for checking out the project! 🙌  
This app aims to detect and block temporary/disposable email addresses in real time — helping websites reduce spam, protect data, and improve user authentication.

We’d love your help in making it even better. Here’s how to get started 👇

---

## 📸 Preview

> Here’s how it looks:

<img src="https://user-images.githubusercontent.com/00000000/sample-emailscript-demo.gif" alt="EmailScript Demo" width="80%" />

---

## 📦 Tech Stack

- **Frontend:** React (Create React App)
- **Languages:** JavaScript, HTML, CSS
- **Package Manager:** npm
- **API:** Hosted on [PythonAnywhere](https://emailscript.pythonanywhere.com)

### Project Structure

```
emailscript-frontend/
├── public/        # Static files
├── src/           # Main React codebase
├── package.json   # Dependencies and scripts
```

---

## 🛠️ Getting Started Locally

### 1. Fork the Repo  
Click the **Fork** button in the top-right and clone your fork:

```bash
git clone https://github.com/YOUR-USERNAME/emailscript-frontend.git
cd emailscript-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App Locally

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧠 How It Works

```js
const response = await fetch("https://emailscript.pythonanywhere.com/check_disposable", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
});
```

Returns a response like:

```json
{
  "email": "temp@mailinator.com",
  "disposable": true
}
```

Based on this, the UI shows whether it's safe to accept the email.

---

## 🔧 Code Standards

- `camelCase` for variables/functions
- `PascalCase` for React components
- Keep components modular & reusable

---

## 🚀 Submitting Changes

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Stage + Commit

```bash
git add .
git commit -m "✨ Added cool feature"
```

### 3. Push & Open PR

```bash
git push origin feature/your-feature-name
```

Then go to GitHub and open a Pull Request. Be sure to:

- Mention related issue (e.g., `Fixes #1`)
- Provide screenshots/video of the change
- Keep PR focused and clean

---

## 🤝 Contribution Guidelines

- Check out [CONTRIBUTING.md](CONTRIBUTING.md)
- Respect the Code of Conduct
- Star ⭐ the repo if you like the project!

---

## 📣 Need Help?

Open an [issue](https://github.com/EmailScript/EmailScript/issues) or start a discussion. We're happy to help!

---

## ❤️ Acknowledgements

Thanks to all the amazing contributors and mentors of **GSSOC '25** who are helping build EmailScript better each day.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

> Together, we can make the web less spammy 🛡️✨  
Let’s build something awesome 🚀

