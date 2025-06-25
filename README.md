# Coders Circle

**Coders Circle** is a RESTful web service built with Spring Boot that allows users to register, log in, and manage their reviews. Each review can contain a title, content, and multiple resources (links, images, or files) categorized by type.

---
## Features
- User Registration & Login (basic endpoints, authentication pending)  
- Create, Update, Delete Reviews  
- Attach Resources to Reviews (URL, Image, or File)  
- Get Reviews by User  
- View All Users, Reviews, and Resources
---
## Technologies Used
- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate 
- MySQL
- RESTful API Principles
- Jackson (for JSON serialization)
---
## API Endpoints
### User Endpoints

| Method | Endpoint                | Description                     |
| ------ | ----------------------- | ------------------------------- |
| POST   | `/user/register`        | Register a new user             |
| POST   | `/user/login`           | Log in an existing user         |
| GET    | `/user/{id}/my-reviews` | Get all reviews by a user       |
| GET    | `/user/find-all`        | Get all users (name & username) |
| DELETE | `/user/delete/{id}`     | Delete user by ID               |

---
### Review Endpoints

| Method | Endpoint              | Description                   |
| ------ | --------------------- | ----------------------------- |
| POST   | `/review/add`         | Add a new review              |
| PUT    | `/review/update`      | Update existing review        |
| DELETE | `/review/delete/{id}` | Delete review by ID           |
| GET    | `/review/{id}`        | Get review by ID              |
| GET    | `/review/find-all`    | Get all reviews in the system |

---
### Resource Endpoints

| Method | Endpoint                              | Description                       |
| ------ | ------------------------------------- | --------------------------------- |
| POST   | `/resource/add`                       | Add resource to a review          |
| PUT    | `/resource/update`                    | Update existing resource          |
| DELETE | `/resource/delete/{id}`               | Delete resource by ID             |
| GET    | `/resource/find-all`                  | Get all resources in the system   |
| GET    | `/resource/find-by-review/{reviewId}` | Get resources related to a review |

---
## Prerequisites:  
- Java 17+  
- Maven  
- MySQL
---
## Installation

1. **Clone the repository**

```bash
git clone https://github.com/roaa46/coders-circle.git
cd coders-circle
```

2. **Configure the database**

- Create a MySQL database named `coders_circle`
- Update `src/main/resources/application.properties` with your database credentials if needed

3. **Build and run the Spring Boot application**

```bash
mvn spring-boot:run
```

The backend will be available at:  
`http://localhost:8080`