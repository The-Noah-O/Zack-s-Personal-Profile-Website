# Zack’s Personal Profile Website

A multi‑page interactive web application built as a semester‑long project for Web Application Development. The site showcases Zack’s interests, achievements, and personality across four themed pages: Home, Sports, Music, and Fashion.

---

## 📁 Project Structure

```
Project/
│
├── index.html
├── sports.html
├── music.html
├── fashion.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── data/
│   └── sportsAchievements.json
│
└── images/
    └── (all project images)
```

---

## ✨ Features

### 🎮 Interactive Components
- Slick Carousel (image sliders)
- Magnific Popup (full‑screen lightbox)
- jQuery‑UI Accordion (collapsible sections)
- AJAX loading for sports achievements (JSON)
- Back‑to‑top button
- Fun fact randomizer
- Hover animations for cards, images, and stats

### 🎨 Design Highlights
- Clean, modern layout with a blue accent theme (`#7BAFD4`)
- Custom underline styling for section headers
- Responsive grid layouts
- Consistent navigation bar across all pages
- Active page highlighting
- Smooth transitions and UI animations

---

## 📄 Pages Overview

### Home
- Bio section  
- Stats grid  
- Favorites grid  
- Photo strip carousel  
- Fun fact generator  
- Back‑to‑top button  

### Sports
- Sports timeline (accordion)  
- AJAX‑loaded achievements  
- Photo strip carousel  

### Music
- Music stats  
- Album‑style timeline (accordion)  
- Photo strip carousel  

### Fashion
- Fashion timeline (accordion)  
- Photo strip carousel  

---

## 🧠 Technologies Used
- HTML5  
- CSS3  
- JavaScript (ES6)  
- jQuery  
- jQuery‑UI  
- Slick Carousel  
- Magnific Popup  
- AJAX + JSON  

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/The-Noah-O/Zack-s-Personal-Profile-Website.git
```

### 2. Open the project
You can open `index.html` directly, but note:

**AJAX requires a local server**  
Browsers block JSON requests from local files.

### 3. Run a local server

#### VS Code (recommended)
- Install the **Live Server** extension  
- Right‑click `index.html` → **Open with Live Server**

#### Python
```bash
python3 -m http.server
```

Then visit:

```
http://localhost:8000
```

---

## 📈 Improvements Throughout the Semester
- Strengthened layout and structure  
- Improved visual consistency and spacing  
- Added interactive plugins and UI components  
- Implemented AJAX for dynamic content  
- Cleaned and validated HTML, CSS, and JS  
- Enhanced user experience with animations and navigation cues  

---

## 👤 Client & Purpose
This website was built for **Zack**, showcasing his:
- Personal background  
- Sports achievements  
- Music interests  
- Fashion timeline  

The site is designed to be clean, engaging, and easy to navigate.

---

## 🔮 Future Enhancements
- Add a contact form  
- Improve mobile responsiveness  
- Add more JSON‑driven dynamic content  
- Integrate embedded playlists  
- Add dark mode  
- Add backend support for storing achievements  

---

## 📜 License
This project is licensed under the **MIT License**.
