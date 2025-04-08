# Bookstore API

This project is a NestJS-based RESTful API for a Bookstore application. It supports full CRUD operations for books, user authentication via JWT, PostgreSQL integration, and includes Swagger API documentation. The application is containerized using Docker.

## ✨ Features

- ✅ **User Authentication (JWT)**: Signup/Login endpoints with hashed passwords
- ✅ **Books CRUD**: Create, Read, Update, Delete books
- ✅ **Filtering & Search**: Query books by title, author, etc.
- ✅ **Swagger Documentation**: Explore API at `/api`
- ✅ **PostgreSQL Integration**: TypeORM with PostgreSQL
- ✅ **Docker Support**: Easily run the app with Docker Compose

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ishaan-mishraa/bookstore-api
cd bookstore-api
```

### 2. Run Locally

```bash
npm run start:dev
```

### OR Using Docker

```bash
docker-compose build --no-cache
docker-compose up
```
