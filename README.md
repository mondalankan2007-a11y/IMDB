# 🎬 IMDb Clone (React)

A React-based IMDb Clone that replicates the basic layout and functionality of the IMDb website. This project demonstrates React component architecture, API integration, and responsive UI design by displaying movies fetched from the OMDb API.

---

## 🚀 Features

- 🎥 Browse movie listings
- 🔍 Search movies by title
- ⭐ View IMDb ratings
- 🖼 Display movie posters
- 📅 Movie release information
- 📱 Responsive UI
- ⚡ Fast rendering using React

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Core UI framework |
| JavaScript (ES6+) | Modern JS features |
| CSS | Component-scoped styling |
| OMDb API | Movie data source |
| Vite | Dev server & bundler |

---
## 📂 Project Structure

```
imdb-clone/
├── public/
└── src/
    ├── components/
    │   ├── Navbar/
    │   │   ├── Navbar.jsx
    │   │   └── Navbar.css
    │   ├── NavMenu/
    │   │   ├── NavMenu.jsx
    │   │   └── NavMenu.css
    │   ├── Features/
    │   │   ├── Features.jsx
    │   │   └── Features.css
    │   └── BodySection/
    │       ├── BodySection.jsx
    │       └── BodySection.css
    ├── App.jsx
    ├── main.jsx
    ├── App.css
    └── index.css
├── .env
├── package.json
└── README.md
```

## 🧩 Component Overview

### Navbar
The top navigation bar similar to IMDb that contains branding and main navigation controls.

### NavMenu
Displays the navigation menu and categories for exploring different sections of the application.

### Features
Shows featured movies or highlighted content on the homepage.

### BodySection
Displays movie cards fetched from the OMDb API, including posters, titles, and ratings.

---

## 🔑 Environment Variables

This project uses the OMDb API for movie data.

Create a `.env` file in the root folder and add:

```env
VITE_OMDB_API_KEY= fbb38fe4
```

Get your free API key from: [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)

---

## ⚙️ Installation

**1. Clone the repository**
```bash
git clone https://github.com/mondalankan2007-a11y/IMDB.git
```

**2. Navigate to the project folder**
```bash
cd https://github.com/mondalankan2007-a11y/IMDB
```

**3. Install dependencies**
```bash
npm install
```

**4. Start the development server**
```bash
npm run dev
```

## 🔮 Future Improvements

- 🎥 Movie trailers
- 🌙 Dark mode
- 🎭 Filter movies by genre
- 📊 Pagination for movie lists
- 👤 User authentication
- ⭐ Watchlist feature

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add my feature'`)
5. Push to your branch (`git push origin feature/my-feature`)
6. Open a Pull Request

---

## 📜 License

This project is for educational and learning purposes only.

---

## 👨‍💻 Authors

**Ankan Mondal**
GitHub: [https://github.com/mondalankan2007-a11y](https://github.com/mondalankan2007-a11y)

**Ekansh Khatri**
GitHub: [https://github.com/EkanshKhatri](https://github.com/EkanshKhatri)

**Aman Verma**
GitHub: [https://github.com/itsamanverma6233-beep](https://github.com/itsamanverma6233-beep)
