# Product Manager App

A simple full-stack CRUD application built with **Spring Boot** (backend), **Next.js** (frontend), and **MySQL** database.  
This project demonstrates a layered architecture with RESTful APIs, JPA/Hibernate, DTOs, and a modern React-based frontend.

## Features

- **Create, Read, Update, Delete (CRUD) operations** for products
- **Backend**: Spring Boot with Maven, JPA/Hibernate, layered architecture (Controller, Service, Repository, Model, DTO)
- **Frontend**: Next.js with Tailwind CSS for responsive styling
- **Database**: MySQL for persistent storage
- **CORS support** for frontend-backend communication

## Tech Stack

- **Backend**: Java 17+, Spring Boot 3.x, Maven, JPA/Hibernate, MySQL
- **Frontend**: Next.js (React)
- **Database**: MySQL

## Project Structure

src/<br>
├── main/java/com/products/productmanager/<br>
│ ├── config/<br>
│ ├── controller/<br>
│ ├── dto/<br>
│ ├── model/<br>
│ ├── repository/<br>
│ ├── service/<br>
│ └── ProductManagerApplication.java<br>
└── resources/<br>
├── application.properties<br>
frontend/<br>
├── app/<br>
│ ├── layout.js<br>
│ ├── page.jsx<br>
│ ├── add-product/<br>
│ │ └── page.js<br>
│ └── edit-product/<br>
│ └── [id]/<br>
│ └── page.jsx<br>
└── globals.css<br>


## Prerequisites

- **Java 17+**
- **Node.js 16+**
- **MySQL 8+**
- **Maven**
- **npm/yarn**

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nipun-munasinghe/productManager-springboot.git
cd productManager-springboot
```


### 2. Backend Setup

1. **Configure MySQL in `src/main/resources/application.properties`**
```bash
spring.datasource.url=jdbc:mysql://localhost:3306/product_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

2. **Build and run the backend**

The backend will start at `http://localhost:8080`.

### 3. Frontend Setup

1. **Install dependencies**
```bash
cd frontend
npm install
```

2. **Start the frontend**
```bash
npm run dev
```

The frontend will start at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint                | Description         |
|--------|-------------------------|---------------------|
| POST   | /api/products           | Create a product    |
| GET    | /api/products           | Get all products    |
| GET    | /api/products/{id}      | Get a product by ID |
| PUT    | /api/products/{id}      | Update a product    |
| DELETE | /api/products/{id}      | Delete a product    |


---

**Happy coding!**  
If you have any questions or suggestions, feel free to open an issue or submit a pull request.
