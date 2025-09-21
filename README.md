# Node.js CRUD API with MongoDB

A simple RESTful API built using Node.js, Express, and MongoDB with Mongoose.  
This project demonstrates how to perform basic CRUD operations (Create, Read, Update, Delete) on products.



## 📂 Project Structure


    ├── controllers/              # Handles business logic for products         
    │ └── product.controller.js    
    ├── models/                   # Mongoose schemas/models
    │ └── product.model.js
    ├── routes/                   # API endpoints                
    │ └── product.route.js
    ├── index.js                  # Server setup + DB connection                 
    ├── package.json



### Features

-Create new products 🆕

-Get all products 📦

-Get a single product 🔍

-Update a product ✏️

-Delete a product 🗑️


### Tech Stack

-Node.js (runtime)

-Express.js (framework)

-MongoDB Atlas (database)

-Mongoose (ODM)

-Nodemon (dev dependency)


### Getting Started
1️⃣ Clone repo
```bash
git clone https://github.com/aryankumarx/Simple-CRUD-Backend.git
cd Simple-CRUD-Backend
```

2️⃣ Install dependencies
```
npm install
```
3️⃣ Run server
Development mode (with hot reload):

```
npm run dev
```

Production mode:
```
npm start
```
🌐 API Endpoints

Base URL:
```
http://localhost:3000/api/products
```

### Routes:
- **GET** `/` → Get all products  
- **GET** `/:id` → Get a single product  
- **POST** `/` → Create a new product  
- **PUT** `/:id` → Update a product  
- **DELETE** `/:id` → Delete a product  


 ### Example Product JSON
```
{
  "name": "iPhone 16 Pro",
  "quantity": 10,
  "price": 1499
}
```

-📌 Future Improvements
```
-Add user authentication (JWT)
-Input validation (Joi / Yup)
-Dockerize the project
-Add unit tests
```
---

 # Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss.

## License

[MIT](https://choosealicense.com/licenses/mit/)
