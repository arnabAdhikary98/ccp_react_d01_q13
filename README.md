# ccp_react_d01_q13

# React vs Vanilla JS: Virtual DOM Efficiency Demonstration

## Problem Statement

The goal of this project is to demonstrate how React's Virtual DOM handles updates more efficiently compared to traditional DOM manipulation using Vanilla JavaScript.

## Project Overview

This project includes two parts:

1. **Vanilla JS Example (Plain HTML + JS + CSS)**  
   A basic HTML file with a button that directly manipulates the DOM to change the title and track update counts.

2. **React Application**  
   A React app that updates the title using React state, leveraging the Virtual DOM, and tracks the number of updates performed.

## Features

### Common Features

- Both implementations include:
  - A button to change the webpage title.
  - A counter showing the number of DOM updates triggered.

### Vanilla JS

- Uses direct DOM manipulation (e.g., `document.getElementById`, `innerText`, etc.).
- Increments and displays a count each time the button is clicked.

### React

- Uses `useState` to manage title and update count.
- Updates are handled via React's Virtual DOM diffing algorithm, which efficiently re-renders only necessary parts of the UI.

## How to Run

### Vanilla JS

1. Open `vanilla.html` in your browser.
2. Click the **"Change Title (Vanilla JS)"** button to see updates.

### React App

1. Navigate to the `react-app` folder.
2. Run `npm install` to install dependencies.
3. Run `npm start` to launch the React app.
4. Click the **"Change Title (React)"** button to see updates.

## Expected Outcome

- In the Vanilla JS example, each button click directly modifies the DOM and increments the update count.
- In the React example, state changes trigger Virtual DOM diffing, and React efficiently updates the actual DOM only where needed.
- While both approaches will update the DOM and count, React’s Virtual DOM approach is conceptually more optimized and scales better with complex UIs.

## File Structure

ccp-react-d01-q13/
├── vanilla.html
├── vanilla.js
├── vanilla.css
├── react-app/
│ ├── package.json
│ ├── public/
│ ├── src/
│ │ ├── App.js
│ │ └── ...
│ └── ...
└── README.md
