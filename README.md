<div align="center">

# 🛒 Microservices E-Commerce Platform

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white)](https://www.rabbitmq.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

*A modern, scalable microservices architecture demonstrating enterprise-level patterns and technologies*

[🚀 Quick Start](#-quick-start) • [🏗️ Architecture](#️-architecture) • [🛠️ Technologies](#️-technologies) • [📝 Documentation](#-documentation)

</div>

---

## 🎯 Project Overview

This project demonstrates a **production-ready microservices architecture** for an e-commerce platform, implementing modern software engineering practices including:

- 🔄 **Event-Driven Architecture** with RabbitMQ
- 🔐 **Multi-Provider Authentication** (JWT, OAuth, Azure AD)
- 🏗️ **Service-Oriented Design** with clear separation of concerns
- 📊 **Polyglot Persistence** (PostgreSQL + MongoDB)
- 🎨 **Modern Frontend** with React and TypeScript
- 🧪 **Comprehensive Testing** strategy

## 🏗️ Architecture Overview
## 🛠️ Technologies

<div align="center">

### 🎨 Frontend
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.4.2-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Axios](https://img.shields.io/badge/Axios-1.7.7-5A29E4?style=flat-square&logo=axios)](https://axios-http.com/)

### 🔧 Backend
[![NestJS](https://img.shields.io/badge/NestJS-10.0.0-E0234E?style=flat-square&logo=nestjs)](https://nestjs.com/)
[![Express](https://img.shields.io/badge/Express-4.21.0-000000?style=flat-square&logo=express)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

### 💾 Databases
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-with_Mongoose-4EA94B?style=flat-square&logo=mongodb)](https://www.mongodb.com/)

### 📨 Messaging
[![RabbitMQ](https://img.shields.io/badge/RabbitMQ-3.12.0-FF6600?style=flat-square&logo=rabbitmq)](https://www.rabbitmq.com/)

### 🔐 Authentication
[![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens)](https://jwt.io/)
[![OAuth](https://img.shields.io/badge/OAuth-Google%20|%20Facebook%20|%20GitHub-4285F4?style=flat-square)](https://oauth.net/)
[![Azure AD](https://img.shields.io/badge/Azure_AD-0078D4?style=flat-square&logo=microsoft-azure)](https://azure.microsoft.com/en-us/services/active-directory/)

### 🧪 Testing & Development
[![Jest](https://img.shields.io/badge/Jest-29.5.0-C21325?style=flat-square&logo=jest)](https://jestjs.io/)
[![Supertest](https://img.shields.io/badge/Supertest-6.3.3-25A162?style=flat-square)](https://github.com/visionmedia/supertest)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Prettier](https://img.shields.io/badge/Prettier-3.0.0-F7B93E?style=flat-square&logo=prettier)](https://prettier.io/)
[![ESLint](https://img.shields.io/badge/ESLint-8.42.0-4B32C3?style=flat-square&logo=eslint)](https://eslint.org/)

</div>


### 🔮 Upcoming Features
- ☁️ **Cloud Integration**: AWS CloudWatch / Azure Monitor
- 🔍 **Service Discovery**: Server-side registry and discovery
- ⚖️ **Load Balancing**: AWS ELB / Azure Load Balancers  
- 🚪 **API Gateway**: AWS API Gateway / Azure API Management
- ⚡ **Serverless**: AWS Lambda / Azure Functions
- 🔗 **GraphQL**: Advanced query capabilities
- 🧪 **Contract Testing**: Pact implementation

# Some Important Commands

  ```bash
  lsof -i :<PORT_NO>
  kill 4977<PID>
  ./macos-start-services.sh 
  ```
## 🚀 Quick Start

### 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Docker](https://www.docker.com/) (for RabbitMQ)
- [Git](https://git-scm.com/)

### ⚡ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd microservices-poc
   ```

2. **Install RabbitMQ**

   **Option 1: Docker (Recommended)**
   ```bash
   docker run -d --hostname my-rabbit --name some-rabbit \
     -p 5672:5672 -p 15672:15672 rabbitmq:3-management
   ```

   **Option 2: Local Installation**
   ```bash
   # macOS
   brew install rabbitmq
   
   # Ubuntu
   sudo apt-get update
   sudo apt-get install rabbitmq-server
   ```

3. **Start all services**
   ```bash
   # macOS/Linux
   chmod +x macos-start-services.sh
   ./macos-start-services.sh
   
   # Windows
   .\windows-start-services.ps1
   ```

4. **Access the applications**
   - 🎨 **Frontend**: http://localhost:3000
   - 🔐 **Auth Service**: http://localhost:3010
   - 📦 **Product Service**: http://localhost:3001
   - 📊 **Inventory Service**: http://localhost:3003
   - 📋 **Order Service**: http://localhost:3004
   - 💳 **Payment Service**: http://localhost:3002
   - 🐰 **RabbitMQ Management**: http://localhost:15672

---

## 📊 Service Details

### 🔐 Auth Service (NestJS - Port 3010)
- **Purpose**: Centralized authentication and authorization
- **Database**: PostgreSQL
- **Features**:
  - JWT token management with RSA key pairs
  - OAuth integration (Google, Facebook, GitHub)
  - Azure Active Directory support
  - Role-based access control (RBAC)
  - User and role management

### 📦 Product Service (NestJS)
- **Purpose**: Product catalog management
- **Features**:
  - CRUD operations for products
  - Product validation and categorization
  - TypeScript generics implementation
  - RESTful API endpoints

### 📊 Inventory Service (Express - Port 3003)
- **Purpose**: Stock and inventory management
- **Database**: MongoDB
- **Features**:
  - Real-time inventory tracking
  - Stock level management
  - Integration with payment processing
  - RESTful API for inventory operations

### 📋 Order Service (Express - Port 3004)
- **Purpose**: Order processing and management
- **Status**: In Development
- **Features**:
  - Order lifecycle management
  - Order status tracking
  - Integration with payment and inventory

### 💳 Payment Service (NestJS)
- **Purpose**: Payment processing and event publishing
- **Features**:
  - Payment transaction handling
  - RabbitMQ message publishing
  - Inventory update notifications
  - Background worker processes

### 🎨 Frontend (React - Port 3000)
- **Purpose**: User interface and experience
- **Features**:
  - Modern React with TypeScript
  - Service-specific API clients
  - Responsive design
  - Real-time updates

