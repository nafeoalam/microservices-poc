# RegisterDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | User email address | [default to undefined]
**password** | **string** | User password (min 8 chars, must contain uppercase, lowercase, number, and special character) | [default to undefined]
**firstName** | **string** | User first name | [default to undefined]
**lastName** | **string** | User last name | [default to undefined]
**avatar** | **string** | User avatar URL | [optional] [default to undefined]

## Example

```typescript
import { RegisterDto } from '@microservices-poc/auth-client';

const instance: RegisterDto = {
    email,
    password,
    firstName,
    lastName,
    avatar,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
