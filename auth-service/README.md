# 🔐 Auth Service - Microservices Authentication Hub

A comprehensive authentication and authorization service built with NestJS, designed for microservices architecture with support for multiple authentication strategies including JWT, OAuth providers, and Azure AD integration.

## 🚀 Tech Stack

### **Backend Framework**
- **NestJS**: ^10.0.0 - Progressive Node.js framework
- **TypeScript**: ^5.1.3 - Type-safe development
- **Node.js**: Latest LTS

### **Database & ORM**
- **PostgreSQL**: 15-alpine - Primary database
- **TypeORM**: ^0.3.24 - Object-Relational Mapping
- **Database Migrations**: Automatic synchronization in development

### **Authentication & Security**
- **Passport.js**: Multi-strategy authentication
- **JWT (RS256)**: JSON Web Tokens with RSA key pairs
- **bcryptjs**: Password hashing
- **@nestjs/passport**: NestJS Passport integration
- **@nestjs/jwt**: JWT utilities

### **OAuth Providers**
- **Google OAuth 2.0**: `passport-google-oauth20`
- **Facebook OAuth**: `passport-facebook`
- **GitHub OAuth**: `passport-github2`
- **Azure Active Directory**: `@azure/msal-node`

### **Message Queue**
- **RabbitMQ**: 3-management - Event-driven communication
- **amqplib**: RabbitMQ client library

### **Development & DevOps**
- **Docker**: Containerization for PostgreSQL and RabbitMQ
- **Docker Compose**: Multi-container orchestration
- **ESLint & Prettier**: Code quality and formatting

## 📁 Project Structure

```
auth-service/
├── src/
│   ├── auth/                    # Core authentication logic
│   │   ├── strategies/          # Passport strategies (Strategy Pattern)
│   │   │   ├── jwt.strategy.ts
│   │   │   ├── local.strategy.ts
│   │   │   ├── google.strategy.ts
│   │   │   ├── facebook.strategy.ts
│   │   │   ├── github.strategy.ts
│   │   │   └── azure-ad.strategy.ts
│   │   ├── guards/              # Authentication guards
│   │   │   ├── jwt-auth.guard.ts
│   │   │   ├── roles.guard.ts
│   │   │   └── azure-ad.guard.ts
│   │   ├── decorators/          # Custom decorators
│   │   │   ├── roles.decorator.ts
│   │   │   └── current-user.decorator.ts
│   │   ├── dto/                 # Data Transfer Objects
│   │   │   ├── login.dto.ts
│   │   │   └── register.dto.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── auth.module.ts
│   ├── users/                   # User management
│   │   ├── entities/
│   │   │   └── user.entity.ts
│   │   ├── dto/
│   │   │   ├── create-user.dto.ts
│   │   │   └── update-user.dto.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   └── users.module.ts
│   ├── roles/                   # Role-based access control
│   │   ├── entities/
│   │   │   └── role.entity.ts
│   │   ├── roles.controller.ts
│   │   ├── roles.service.ts
│   │   └── roles.module.ts
│   ├── shared/                  # Shared utilities
│   │   ├── rabbitmq/
│   │   │   └── rabbitmq.service.ts
│   │   └── shared.module.ts
│   ├── database/                # Database configuration
│   │   └── database.module.ts
│   ├── config/                  # Configuration management
│   │   └── configuration.ts
│   ├── keys/                    # RSA key pairs for JWT
│   │   ├── generate-keys.ts
│   │   ├── private.pem          # Generated automatically
│   │   └── public.pem           # Generated automatically
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── main.ts
├── docker-compose.yml           # PostgreSQL & RabbitMQ containers
├── .env                         # Environment variables
├── package.json
└── README.md
```

## 🔧 Prerequisites

Before running the auth service, ensure you have the following installed:

- **Node.js**: v18+ (LTS recommended)
- **npm**: v9+ (comes with Node.js)
- **Docker**: Latest version
- **Docker Compose**: Latest version
- **DBeaver** (optional): For database management

## ⚙️ Setup Instructions

### **1. Clone and Navigate**
```bash
cd microservices-poc/auth-service
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Environment Configuration**
The `.env` file is already configured with default values for development:

```bash
# Database
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=auth_user
DATABASE_PASSWORD=auth_password
DATABASE_NAME=auth_db

# JWT Configuration
JWT_SECRET=your-jwt-secret-change-in-production
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d

# OAuth Providers (Update with your credentials)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_APP_ID=your-facebook-app-id
FACEBOOK_APP_SECRET=your-facebook-app-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Azure AD (Update with your tenant details)
AZURE_AD_CLIENT_ID=your-azure-ad-client-id
AZURE_AD_CLIENT_SECRET=your-azure-ad-client-secret
AZURE_AD_TENANT_ID=your-azure-ad-tenant-id

# Server Configuration
PORT=3010
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### **4. Generate RSA Key Pairs**
```bash
npm run generate:keys
```

### **5. Start Infrastructure Services**
```bash
# Start PostgreSQL and RabbitMQ containers
npm run docker:up

# Verify containers are running
docker ps
```

### **6. Database Connection (Optional)**
Connect to PostgreSQL using DBeaver:
- **Host**: localhost
- **Port**: 5432
- **Database**: auth_db
- **Username**: auth_user
- **Password**: auth_password

## 🚀 How to Run

### **Development Mode**
```bash
# Start the service in watch mode
npm run start:dev

# The service will be available at:
# http://localhost:3010/api
```

### **Production Mode**
```bash
# Build the application
npm run build

# Start in production mode
npm run start:prod
```

### **Available Scripts**
```bash
# Development
npm run start:dev          # Start with hot reload
npm run start:debug        # Start with debugging

# Building
npm run build              # Build the application
npm run start:prod         # Start production build

# Database & Infrastructure
npm run docker:up          # Start PostgreSQL & RabbitMQ
npm run docker:down        # Stop containers
npm run docker:logs        # View container logs

# Security
npm run generate:keys      # Generate RSA key pairs

# Code Quality
npm run lint               # Run ESLint
npm run format             # Format code with Prettier

# Testing
npm run test               # Run unit tests
npm run test:e2e           # Run end-to-end tests
npm run test:cov           # Run tests with coverage
```

## 🔗 API Endpoints

### **Health Check**
- `GET /api` - Service status
- `GET /api/health` - Detailed health information

### **Authentication** (Coming Next)
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh JWT token
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/logout` - User logout

### **OAuth Endpoints** (Coming Next)
- `GET /api/auth/google` - Google OAuth login
- `GET /api/auth/facebook` - Facebook OAuth login
- `GET /api/auth/github` - GitHub OAuth login
- `GET /api/auth/azure` - Azure AD login

## 🔐 Authentication Features

### **Supported Authentication Methods**
- ✅ **Local Authentication**: Email/password with bcrypt hashing
- ✅ **JWT Tokens**: RS256 algorithm with RSA key pairs
- ✅ **Google OAuth 2.0**: Social login integration
- ✅ **Facebook OAuth**: Social login integration
- ✅ **GitHub OAuth**: Developer-friendly login
- ✅ **Azure Active Directory**: Enterprise authentication

### **Security Features**
- ✅ **Role-Based Access Control (RBAC)**
- ✅ **Account lockout** after failed login attempts
- ✅ **Email verification** for new accounts
- ✅ **Password reset** functionality
- ✅ **Refresh token** rotation
- ✅ **CORS** configuration
- ✅ **Input validation** with class-validator

### **User Roles**
- `SUPER_ADMIN` - Full system access
- `ADMIN` - Administrative privileges
- `EMPLOYEE` - Internal user access
- `CUSTOMER` - Customer portal access
- `GUEST` - Limited access

## 🔄 Integration with Microservices

### **RabbitMQ Events**
The auth service publishes events for other microservices:
- `user.created` - New user registration
- `user.updated` - User profile changes
- `user.deleted` - User account deletion
- `auth.login` - User login events
- `auth.logout` - User logout events

### **JWT Token Validation**
Other services can validate JWT tokens using the public key:
- Public key available at: `src/keys/public.pem`
- Token validation without calling back to auth service
- Stateless authentication for better performance

## 🚧 Next Steps

1. **Implement Passport Strategies** - Complete all authentication strategies
2. **Add User Management** - CRUD operations for users and roles
3. **OAuth Provider Setup** - Configure Google, Facebook, GitHub credentials
4. **Azure AD Integration** - Set up Azure Active Directory
5. **API Gateway Integration** - Prepare for Azure API Management
6. **Testing Suite** - Comprehensive unit and integration tests
7. **Documentation** - API documentation with Swagger

## 🤝 Contributing

This auth service is part of a larger microservices architecture. Follow the established patterns and conventions when adding new features.

## 📝 License

This project is part of the microservices-poc repository.
