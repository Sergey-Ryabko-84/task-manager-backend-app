## Task manager backend app 1.0.0 

## The API documentation

## Description

This project is a backend application designed to serve as a task manager for managing company personnel. It utilizes various technologies for its development, including:

Node.js: A runtime environment for executing JavaScript code on the server.
Nest.js: A powerful and scalable framework for building efficient server-side applications using TypeScript.
TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
PostgreSQL: A powerful and popular open-source relational database management system.
Docker Compose: A tool for defining and running multi-container Docker applications.

Implemented Features:

1. Nest.js Framework: The application has been developed using the Nest.js framework, which provides a solid foundation for building efficient and scalable server-side applications.

2. Docker Compose: A Docker Compose file has been created to facilitate the containerization of both the PostgreSQL database and the Nest.js application.

3. JWT Registration and Authorization: User registration and authorization have been implemented using JSON Web Tokens (JWT) to ensure secure access to the application's resources.

4. Users Module: A module has been created to manage users, including features such as user creation and retrieval.

5. Categories Module: Another module has been implemented to handle categories, allowing for the creation, retrieval, update, and deletion of category information.

6. Tasks Module: A module has been developed to manage tasks, providing functionalities such as task creation, retrieval, update, and deletion.

7. Table Relationships: All necessary relationships between tables (such as users, categories, and tasks) have been established to ensure proper data integrity and efficient querying.

By combining these technologies and successfully implementing the specified requirements, this backend application serves as a reliable task manager for efficiently managing company personnel.

## Routs:

## Users

[POST]  
/users  
Create user

[GET]  
/users  
Get all users

[POST]  
/users/role  
Assign a role

## User Roles

[POST]  
/user-roles  
Create user role

[GET]  
/user-roles  
Get all user roles

[GET]  
/user-roles/{value}  
Get user role by value

## Authorization

[POST]  
/auth/login  
Login

[POST]  
/auth/registration  
Registration

[GET]  
/auth/current  
Get Current User

## Categories

[POST]  
/categories  
Create category

[GET]  
/categories  
Get all categories

[PATCH]  
/categories  
Edit category

[DELETE]  
/categories  
Delete category

[GET]  
/categories/{id}  
Get category by id

## Tasks


[POST]  
/tasks  
Create task

[GET]  
/tasks  
Get all tasks

[PATCH]  
/tasks  
Edit task

[DELETE]  
/tasks  
Delete task

[GET]  
/tasks/{id}  
Get task by id

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Stay in touch

- Author - [Serhii Riabko]
- LinkedIn - [serhii-ryabko-250247255](https://www.linkedin.com/in/serhii-ryabko-250247255/)
- Email - [serhii.ryabko@gmail.com](serhii.ryabko@gmail.com)
