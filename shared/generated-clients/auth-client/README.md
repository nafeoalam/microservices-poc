## @microservices-poc/auth-client@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @microservices-poc/auth-client@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost:3010*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AppApi* | [**appControllerGetHealth**](docs/AppApi.md#appcontrollergethealth) | **GET** /health | 
*AppApi* | [**appControllerGetHello**](docs/AppApi.md#appcontrollergethello) | **GET** / | 
*AuthApi* | [**authControllerGetProfile**](docs/AuthApi.md#authcontrollergetprofile) | **GET** /auth/profile | Get user profile
*AuthApi* | [**authControllerLogin**](docs/AuthApi.md#authcontrollerlogin) | **POST** /auth/login | User login
*AuthApi* | [**authControllerRegister**](docs/AuthApi.md#authcontrollerregister) | **POST** /auth/register | User registration
*AuthApi* | [**authControllerValidateToken**](docs/AuthApi.md#authcontrollervalidatetoken) | **POST** /auth/validate | Validate JWT token


### Documentation For Models

 - [AuthControllerLogin401Response](docs/AuthControllerLogin401Response.md)
 - [AuthControllerValidateToken200Response](docs/AuthControllerValidateToken200Response.md)
 - [AuthControllerValidateToken200ResponseUser](docs/AuthControllerValidateToken200ResponseUser.md)
 - [LoginDto](docs/LoginDto.md)
 - [LoginResponseDto](docs/LoginResponseDto.md)
 - [LoginResponseDtoTokens](docs/LoginResponseDtoTokens.md)
 - [LoginResponseDtoUser](docs/LoginResponseDtoUser.md)
 - [RegisterDto](docs/RegisterDto.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="JWT-auth"></a>
### JWT-auth

- **Type**: Bearer authentication (JWT)

