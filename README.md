# shopping-list
adds items to shopping list
Shopping List Web App
This repository contains a simple web application for managing your shopping list. Whether you’re a seasoned programmer or a beginner, this README will guide you through understanding the code and running the app efficiently.

Features
Add Items: You can add items to your shopping list by typing them into the input field and clicking the “Add” button.
Mark as Purchased: Click on an item in the list to toggle a strikethrough effect, indicating that it’s been purchased.
Clear All Items: The “Delete All” button allows you to clear the entire shopping list.

Getting Started
Clone the Repository:
Clone this repository to your local machine using git clone.
Navigate to the Project Directory:
Open a terminal and go to the project directory.
The index.js and css files are located in the src file.

Install Dependencies:
Make sure you have Node.js installed.


Run the App:
Open your browser and go to https://interactiveshoppinglist.netlify.app

Code Explanation
HTML (index.html)
The main HTML file contains the structure of our web app.
It includes an input field, buttons, and an unordered list (<ul>) to display the shopping items.

JavaScript (index.js)
The JavaScript code handles the logic of our app.
We use document.addEventListener("DOMContentLoaded", ...) to ensure our code runs after the page has loaded.
The shoppingList array stores our items.
Event listeners are attached to the “Add” button and list items.
The renderShoppingList() function updates the list display.
The “Delete All” button clears the list.

CSS (styles.css)
The CSS file styles our app.
We set background colors, font size, and the purchased item styling.

Contributing
Feel free to contribute by opening issues or pull requests. Let’s make this shopping list app even better!

Happy shopping! 🛒🛍️
