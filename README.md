# 🧠 TaskHub - Your Personal Task Manager

> **Manage your tasks in one place — simple, fast, and local.**

TaskHub is a clean, minimal, and fully client-side **React** app for managing your to-dos.  
It stores all your tasks in **local storage**, so your data stays right in your browser — no backend needed.

---

## 🚀 Tech Stack

- ⚛️ **React.js** (Functional Components + Hooks)
- 🎨 **Tailwind CSS** for styling
- 💾 **LocalStorage** for persistent task data
- 🆔 **uuid** for unique task IDs

---

## ✨ Features

### ✅ Core Functionalities
- **Add new tasks** with a single click or by pressing `Enter`.
- **Prevent duplicate tasks** — TaskHub checks and alerts you before adding.
- **Edit existing tasks** — brings the selected task back to the input box for quick changes.
- **Delete tasks** with confirmation prompts to avoid accidental deletions.
- **Mark tasks as completed** — toggles instantly with a satisfying line-through effect.
- **Show/Hide completed tasks** with a simple checkbox toggle.
- **Persistent storage** — your tasks are saved automatically to localStorage, even after page reload.

---

## 💡 How It Works

| Action               | Function                 | Description                                    |
|----------------------|--------------------------|------------------------------------------------|
| Add Task             | `handleAdd()`            | Adds a new task if it’s not a duplicate.       |
| Edit Task            | `handleEdit(id)`         | Moves task text to input for editing.          |
| Delete Task          | `handleDelete(id)`       | Confirms before deleting task permanently.     |
| Toggle Complete      | `toggleCheck(id)`        | Marks task as done/undone.                     |
| Show Completed       | `showCompleted` state    | Toggles visibility of completed tasks.         |
| Save to LocalStorage | `saveToLS(updatedTasks)` | Persists updated task list to browser storage. |

---

## 🖼️ UI Sneak Peek

- **Dark Mode** by default with soft gray tones and amber highlights.
- **Fully responsive** — optimized for both mobile and desktop.
- **Clean layout** — intuitive and distraction-free.

---

## 🛠️ Setup & Run Locally

1. **Clone this repo**
   ```bash
   git clone https://github.com/yourusername/taskhub.git
   cd taskhub

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start development server**
    ```bash
    npm run dev
    ```

4. **Open http://localhost:5173 (Vite default) in your browser.**

---

## 🧑‍💻 Author

[@ikeshavvarshney](https://github.com/ikeshavvarshney)

---

## 🔒 License

This project is open-source and available under the [MIT License](LICENSE).