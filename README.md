# 🛒 Product API

A simple product management API using Node.js, Express, Sequelize, and SQLite.

---

## ⚙️ Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# (or to run normally)
npm start

📁 Folder Structure
product-api/
├── app.js                      # Main application file
├── package.json                # Project metadata and scripts
├── config/
│   └── database.js             # Sequelize SQLite connection config
├── controllers/
│   └── product.controller.js   # Logic for product endpoints
├── models/
│   └── product.model.js        # Sequelize product model
├── routes/
│   └── product.routes.js       # API route definitions
├── validators/
│   └── product.validator.js    # Joi schema for product input
├── middleware/
│   ├── errorHandler.js         # Centralized error handling
│   └── validate.js             # Request validation middleware
├── utils/
│   └── response.js             # Standardized response helper
├── .gitignore
└── README.md

🧪 Example cURL

curl -X POST http://localhost:3000/products \
-H "Content-Type: application/json" \
-d '{"name":"Macbook Air","price":45000,"stock":5}'

Get Product
http://localhost:3000/products
