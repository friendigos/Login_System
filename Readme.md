Here’s a template for a README file detailing how to use the authentication routes in Postman:

---

# Authentication System API

This README provides instructions on how to test the authentication API using Postman. The API includes endpoints for user signup, login, password reset, 2FA, and QR code generation.

## Base URL

The base URL for the API is:

```
http://localhost:5000
```

## Endpoints

### 1. **User Signup**

- **Endpoint:** `POST /auth/signup`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "username": "exampleUser",
    "email": "user@example.com",
    "password": "examplePassword"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token_here",
    "message": "User registered successfully"
  }
  ```

### 2. **User Login**

- **Endpoint:** `POST /auth/login`
- **Description:** Logs in a user and provides a JWT token.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "examplePassword"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token_here",
    "message": "User logged in successfully"
  }
  ```

### 3. **Request Password Reset**

- **Endpoint:** `POST /auth/request-password-reset`
- **Description:** Sends a password reset link to the user's email.
- **Request Body:**
  ```json
  {
    "email": "user@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Password reset link sent to email"
  }
  ```

### 4. **Reset Password Using Token**

- **Endpoint:** `POST /auth/reset-password`
- **Description:** Resets the user's password using the reset token received via email.
- **Request Body:**
  ```json
  {
    "token": "reset_token_here",
    "newPassword": "newPassword123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Password reset successful"
  }
  ```

### 5. **Generate 2FA QR Code**

- **Endpoint:** `GET /auth/generate-qrcode`
- **Description:** Generates a QR code for 2FA setup.
- **Headers:** 
  - `Authorization: Bearer jwt_token_here`
- **Response:**
  ```json
  {
    "qrCode": "data:image/png;base64,...",
    "secret": "base32_secret_here"
  }
  ```

### 6. **Verify 2FA Token**

- **Endpoint:** `POST /auth/verify-2fa`
- **Description:** Verifies the 2FA token provided by the user.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "token": "2fa_token_here"
  }
  ```
- **Response:**
  ```json
  {
    "message": "2FA verification successful"
  }
  ```

### 7. **Access Dashboard**

- **Endpoint:** `GET /user/dashboard`
- **Description:** Accesses the user dashboard. Requires JWT authentication.
- **Headers:**
  - `Authorization: Bearer jwt_token_here`
- **Response:**
  - HTML content of the dashboard.

## How to Use Postman

1. **Open Postman.**
2. **Create a new request for each endpoint:**
   - Set the HTTP method (GET/POST) as required.
   - Enter the URL for the endpoint.
   - Go to the "Headers" tab and set `Content-Type` to `application/json` if needed.
   - Go to the "Body" tab, select "raw," and choose `JSON` from the dropdown menu for POST requests.
   - Enter the JSON body as specified in the endpoint description.
   - For authenticated endpoints, add the `Authorization` header with `Bearer jwt_token_here` as the value.

3. **Click "Send"** to execute the request and view the response.

## Notes

- **JWT Token:** You need to obtain a JWT token from the login endpoint and use it for authenticated routes.
- **Email Sending:** For development purposes, you may need to mock or manually inspect email contents if email sending is not configured.
- **Token Expiry:** Tokens may expire, so ensure you are using valid tokens for testing.

---
