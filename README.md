# Technologies Implemented

## Backend
- **NestJS**: Version ^10.0.0
- **Express**: Version ^4.21.0
- **Mongoose**: Version ^8.6.3
- **TypeScript**: Version ^5.1.3
- **Server-side Service Registry and Discovery**: Upcoming...
- **AWS Elastic Load Balancers**: Upcoming...
- **AWS API Gateway**: Upcoming...
- **AWS Lambda**: Upcoming...
- **GraphQL**: Upcoming...

## Frontend
- **ReactJS**: Version ^18.3.1
- **React Router**: Not explicitly mentioned, but typically used in React applications
- **Axios**: Version ^1.7.7 for making HTTP requests
- **TypeScript**: Version ^4.4.2

## Database
- **MongoDB**: Used with Mongoose for data persistence

## Testing
- **Jest**: Version ^29.5.0 for unit and integration testing
- **Supertest**: Version ^6.3.3 for testing HTTP requests
- **Pactum**: Upcoming...

## Development Tools
- **Docker**: Used for containerization of RabbitMQ
- **Yarn**: Version not specified, used for package management
- **Prettier**: Version ^3.0.0 for code formatting
- **ESLint**: Version ^8.42.0 for linting

## Other Libraries
- **CORS**: Version ^2.8.5 for enabling Cross-Origin Resource Sharing
- **dotenv**: Version ^16.4.5 for environment variable management

# Some Important Commands


  ```bash
  lsof -i :<PORT_NO>
  kill 4977<PID>
  ./macos-start-services.sh 
  ```


# RabbitMQ Implementation Steps

## Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed.
- Install RabbitMQ on your local machine or use a cloud-based RabbitMQ service.

## Installation

### 1. Install RabbitMQ
You can install RabbitMQ using the following methods:

- **Using Homebrew (macOS)**:
  ```bash
  brew install rabbitmq
  ```

- **Using APT (Ubuntu)**:
  ```bash
  sudo apt-get update
  sudo apt-get install rabbitmq-server
  ```

- **Using Docker**:
  ```bash
  docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3-management
  ```

### 2. Start RabbitMQ
- If you installed RabbitMQ locally, you can start it using:
  ```bash
  rabbitmq-server
  ```

- If you are using Docker, the RabbitMQ server will start automatically with the above Docker command.
