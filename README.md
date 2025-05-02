# 🌤️ React Weather App — `useEffect` Hook Example

This project is a **modern Weather Forecast App** built using **React**. It showcases how to use the `useEffect` hook to handle side effects such as **fetching weather data from an external API** when a component mounts or when a query changes.

---

## 📘 What is `useEffect`?

The `useEffect` hook is used to perform side effects in functional components. Side effects include things like:
- Fetching data from APIs
- Setting up subscriptions
- Updating the DOM
- Handling timers

### Example Usage in This App:

```jsx
useEffect(() => {
  // fetch data from OpenWeatherMap API
}, [query]);
