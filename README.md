# Weather Insights Dashboard

A responsive, API-driven weather dashboard built with React that integrates live data from the Open-Meteo API.

---

## 🌐 Live Demo

🔗 https://cmi-eval-brian-s.vercel.app/

---

## 📌 Overview

This project was built as part of the Programmer Analyst technical evaluation.

The goal was to design and implement a functional, interactive UI dashboard that consumes data from a public API and presents it in a meaningful way.

I chose the Open-Meteo API because it provides structured, real-time weather data without requiring authentication, which allows the focus to remain on frontend architecture and product thinking rather than credential management.

---

## ✨ Features

- 🔍 Search by city (geocoding + forecast)
- 🌡 Current weather summary view
- 📈 7-day forecast chart
- 🎛 Interactive metric toggle (temperature, precipitation, wind speed)
- ⚠️ Error handling and empty states
- ⏳ Loading states
- 📱 Responsive layout (mobile + desktop)
- 💾 LocalStorage persistence of selected metric

---

## 🏗 Architecture & Technical Decisions

### Why React?

- Component-based architecture
- Clear separation of concerns
- Scalable structure
- Easy state management via hooks

### Project Structure

```
src/
 ├── components/
 ├── services/
 ├── hooks/
 ├── assets/
 └── styles.css
```

- **services/** → API logic
- **hooks/** → Business logic
- **components/** → UI
- **styles.css** → Design system & layout

This separation prevents large, unmaintainable files and ensures future extensibility.

---

## 📊 Data Handling

All data is fetched live at runtime from the Open-Meteo API. No mock or hardcoded data is used as stipulated.

Error handling includes:
- Network failure
- Invalid city input
- Empty API response

Loading states are displayed while asynchronous requests are in progress.

---

## 🚀 Deployment

This application is deployed via Vercel with automatic builds triggered on push to the `master` branch.

Build configuration:

- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

## 🛠 How to Run Locally

```bash
git clone https://github.com/brianStewart1993/CMIEvalBrianS.git
cd CMIEval
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## ⚙️ Known Limitations

- No server-side caching
- No offline support
- Limited accessibility testing
- No debounced search input
- No historical weather comparison

---

## 🔮 If I Had More Time

- Add dark mode
- Improve accessibility (ARIA labels, semantic enhancements)
- Add integration and E2E tests
- Add request caching
- Add multi-city comparison view
- Implement loading skeleton UI
- Add unit tests

---

## ✅ Evaluation Criteria Checklist

- ✔ Live API integration
- ✔ Two distinct data views
- ✔ Interactive control
- ✔ Error handling
- ✔ Responsive layout
- ✔ Clean architecture
- ✔ Maintainable code
- ✔ Production deployment

---

## 🧠 Final Notes

This project prioritizes clarity, maintainability, and deliberate UI decisions over unnecessary complexity.

The architecture is designed so that additional features (historical data, multi-city tracking, comparison dashboards) could be added without major restructuring.
