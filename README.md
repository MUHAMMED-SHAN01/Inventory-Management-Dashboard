Inventory Management System

A responsive web-based Inventory Management System built using HTML, CSS, and JavaScript. The application allows users to add, view, categorize, and delete products while storing product data in the browser using Local Storage.

🚀 Features

- Add new products
- Validate product form fields
- Store products using Local Storage
- Display saved products
- Delete products
- View total number of products
- Calculate total stock quantity
- Identify low-stock products
- Display product categories and product counts
- Separate Dashboard, Products, and Categories pages
- Responsive design for different screen sizes
- Data remains available after page refresh

🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Local Storage
- JSON

📂 Project Structure

Inventory-Management-System/
│
├── index.html
├── products.html
├── categories.html
├── style.css
└── script.js

⚙️ How It Works

Adding Products

The user enters:

- Product name
- Category
- Price
- Quantity

JavaScript creates a product object and adds it to the products array.

const product = {
    name: ProductName.value,
    category: Categories.value,
    price: Price.value,
    quantity: Quantity.value
};

The product is then added to the array:

products.push(product);

Local Storage

The products array is converted into a JSON string before being saved:

localStorage.setItem(
    "inventoryData",
    JSON.stringify(products)
);

When the application loads, the saved data is retrieved and converted back into a JavaScript array:

const products =
    JSON.parse(localStorage.getItem("inventoryData")) || [];

Dashboard

The dashboard provides an overview of the inventory:

- Total Products
- Total Stock
- Low Stock Products

JavaScript uses array methods such as "reduce()" and "filter()" to calculate these values.

Products

The Products page displays the saved products and allows the user to:

- View product details
- Delete products

Categories

The Categories page displays the available product categories and the number of products belonging to each category.

📱 Responsive Design

The application is designed to work across different screen sizes, including:

- Desktop
- Tablet
- Mobile

CSS media queries are used to adjust the layout and components for smaller screens.

▶️ How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open "index.html" in a web browser.

No backend or database is required because the application uses browser Local Storage.

🎯 Learning Goals

This project was built to practice JavaScript fundamentals and DOM manipulation, including:

- Arrays and objects
- Functions and arrow functions
- DOM manipulation
- Event listeners
- Form handling
- "forEach()"
- "filter()"
- "reduce()"
- "push()"
- "splice()"
- "dataset"
- JSON
- Local Storage
- Responsive CSS design

🔮 Future Improvements

Possible future improvements include:

- Edit product functionality
- Product search and sorting
- Backend database
- REST API
- User authentication
- Inventory reports

👨‍💻 Author

Muhammed Shan

Computer Engineering | Frontend Development
