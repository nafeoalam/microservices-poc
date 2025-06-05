# LoginResponseDtoTokens

Authentication tokens

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **string** | JWT access token | [optional] [default to undefined]
**refreshToken** | **string** | JWT refresh token | [optional] [default to undefined]
**expiresIn** | **number** | Token expiration time in seconds | [optional] [default to undefined]

## Example

```typescript
import { LoginResponseDtoTokens } from '@microservices-poc/auth-client';

const instance: LoginResponseDtoTokens = {
    accessToken,
    refreshToken,
    expiresIn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
