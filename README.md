Inventory Management System

A responsive web-based Inventory Management System built using HTML, CSS, and JavaScript. The application allows users to add, view, categorize, and delete products while storing product data in the browser using Local Storage.

🌐 Live Demo

"Open the Live Inventory Management System" (https://inventory-management-system-sable-nu.vercel.app/)

The project is deployed using Vercel and can be opened directly in a web browser.

🚀 Features

- Add new products
- Validate product form fields
- Store product data using Local Storage
- Display saved products
- Delete products
- Calculate total number of products
- Calculate total stock quantity
- Identify low-stock products
- Display product categories and product counts
- Dashboard for inventory overview
- Responsive design for desktop, tablet, and mobile
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

Users can enter:

- Product name
- Category
- Price
- Quantity

JavaScript creates an object for each product and adds it to the products array.

const product = {
    name: ProductName.value,
    category: Categories.value,
    price: Price.value,
    quantity: Quantity.value
};

products.push(product);

💾 Local Storage

Product data is stored in the browser using Local Storage.

Before saving, the JavaScript array is converted into a JSON string:

localStorage.setItem(
    "inventoryData",
    JSON.stringify(products)
);

When the application loads, the saved data is retrieved and converted back into a JavaScript array:

const products =
    JSON.parse(localStorage.getItem("inventoryData")) || [];

This allows the product data to remain available even after refreshing the page.

📊 Dashboard

The Dashboard provides an overview of the inventory, including:

- Total Products
- Total Stock
- Low Stock Products

"reduce()" is used to calculate total stock, while "filter()" is used to find products with low stock.

📦 Products

The Products page displays saved products and allows users to:

- View product information
- Delete products

🏷️ Categories

The Categories page displays product categories and the number of products belonging to each category.

📱 Responsive Design

The application is designed to work on different screen sizes, including:

- Desktop
- Tablet
- Mobile

CSS media queries are used to adjust the layout for smaller screens.

▶️ How to Open

Option 1 — Live Demo

Open the deployed application:

"Inventory Management System" (https://inventory-management-system-sable-nu.vercel.app/)

Option 2 — Run Locally

1. Clone the repository.
2. Open the project folder in VS Code.
3. Open "index.html" using Live Server or a web browser.
4. Start adding and managing products.

No backend or database is required because the project uses browser Local Storage.

🎯 JavaScript Concepts Practiced

This project helped practice:

- Variables and constants
- Arrays
- Objects
- Functions
- Arrow functions
- DOM manipulation
- Event listeners
- Form handling
- Input validation
- "forEach()"
- "filter()"
- "reduce()"
- "push()"
- "splice()"
- "dataset"
- "JSON.stringify()"
- "JSON.parse()"
- Local Storage

🔮 Future Improvements

- Edit product functionality
- Product search and sorting
- Backend database
- REST API
- User authentication
- Inventory reports
- User accounts

👨‍💻 Author

Muhammed Shan

Computer Engineering | Frontend Developer
