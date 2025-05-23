# 🔍 Product Autocomplete React App

A **React autocomplete component** that provides real-time product search suggestions using the [DummyJSON API](https://dummyjson.com/products/search).

---

## 🚀 Features

- 🔤 Debounced input to optimize API calls
- 🔎 Fetches product suggestions dynamically
- ⏳ Loading and error states
- 📄 Clean, responsive dropdown UI
- ✅ Triggers API only for queries ≥ 2 characters
- 🎨 Minimal and modern styling

---

## 🛠️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Shubh6665/autocomplete.git
   cd autocomplete
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

   The app will run at: [http://localhost:3000](http://localhost:3000)

---

## 🧠 Approach & Thought Process

- Implemented debounced API calls using lodash to reduce unnecessary network requests
- Added a minimum input length check (≥ 2 characters) before triggering any search.
- Used React Hooks (useState, useEffect) for managing query, results, loading, and error states.
- Designed API integration with pagination support using limit and skip parameters.
- Built a clean dropdown-style UI to display suggestions along with proper feedback (loading, error, or no results).

---

## 📦 Tech Stack

- **React**: For building the UI
- **Lodash**: For debouncing API calls
- **Fetch API**: For querying the DummyJSON API
- **CSS**: For minimal, responsive styling

---

## 📂 Project Structure

```
src/
├── App.css          
├── App.jsx          
├── main.jsx        
└── components/
    └── Autocomplete.jsx  
```
---
