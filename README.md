# ✍️ BlogPen

**BlogPen** is a modern blogging web application built with React 19 and TailwindCSS. It lets users write, publish, and engage with blog posts in a clean, distraction-free interface — with dark/light mode, real-time likes, and comments.

---

## ✨ Features

- 🏠 **Landing Page** — Auto-sliding image banner with feature cards and Login/Signup entry points
- 📝 **Create Post** — Simple form to write and publish a blog post (title + content)
- 📋 **Dashboard** — View all blog posts as expandable gradient cards
  - Expand a post to read the full content
  - Like posts and individual comments
  - View comment count, add new comments
  - Delete your own posts
- 🔐 **Authentication** — Login and Signup pages, session stored in `localStorage`
- 🌗 **Dark / Light Mode** — Global theme toggle with smooth transitions, persisted across pages
- 📌 **Side Panel** — Navigation sidebar
- 🦶 **Footer** — Site-wide footer

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend UI framework |
| Vite 6 | Build tool and dev server |
| TailwindCSS v4 | Utility-first styling |
| React Router DOM v7 | Client-side navigation |
| Axios | HTTP client for backend API calls |
| Node.js / Express | Backend API server (port 5000) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- A running backend Express server (API at `http://localhost:5000`)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ADIIgits/BlogPen.git
   cd BlogPen
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   App will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

> ⚠️ Make sure your backend Express server is running at `http://localhost:5000` before using the app.

---

## 🔌 Backend API Endpoints

The frontend communicates with a local Express backend via these routes:

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/dashboard` | Fetch all blogs and user info |
| `POST` | `/createpost` | Create a new blog post |
| `POST` | `/addcomment` | Add a comment to a post |
| `POST` | `/likeupdate/:id` | Like a comment |
| `POST` | `/postlikeupdate/:id` | Like a post |
| `DELETE` | `/deleteblog/:id` | Delete a blog post |

---

## 📱 App Routes

| Route | Page |
|---|---|
| `/` | Home (landing page) |
| `/login` | Login |
| `/signup` | Sign Up |
| `/dashboard` | Blog feed & post interaction |
| `/createpost` | Write and publish a new post |

---

## 📂 Project Structure

```
src/
├── App.jsx                  # Root component with routing & theme toggle
├── main.jsx                 # React app entry point
├── pages/
│   ├── Home.jsx             # Landing page with image slider & feature cards
│   ├── login.jsx            # User login form
│   ├── Signup.jsx           # User registration form
│   ├── Dashboard.jsx        # Blog feed with likes, comments & delete
│   └── CreatePost.jsx       # Post creation form
└── components/
    ├── SidePanel.jsx        # Navigation sidebar
    └── Footer.jsx           # Site footer
```

---

## 📄 License

This project is for personal/educational use. Feel free to fork and build upon it!
