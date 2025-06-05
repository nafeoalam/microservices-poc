# LoginResponseDtoUser

User profile information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | User ID | [optional] [default to undefined]
**email** | **string** | User email address | [optional] [default to undefined]
**firstName** | **string** | User first name | [optional] [default to undefined]
**lastName** | **string** | User last name | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** | User roles | [optional] [default to undefined]

## Example

```typescript
import { LoginResponseDtoUser } from '@microservices-poc/auth-client';

const instance: LoginResponseDtoUser = {
    id,
    email,
    firstName,
    lastName,
    roles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
