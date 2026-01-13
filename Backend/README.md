# User Registration API Documentation

## Endpoint: `/users/register`

### Description
This endpoint allows users to register a new account in the Uber Clone application. It handles user registration by validating input data, hashing the password, and creating a new user account in the database. Upon successful registration, an authentication token is generated and returned.

---

## Request Method
**POST**

---

## Request Headers
```
Content-Type: application/json
```

---

## Request Body

The endpoint requires the following data in JSON format:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

### Required Fields

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `fullname.firstname` | string | Required, minimum 3 characters | User's first name |
| `fullname.lastname` | string | Optional, minimum 3 characters | User's last name |
| `email` | string | Required, unique, minimum 5 characters | User's email address |
| `password` | string | Required | User's password (will be hashed using bcrypt) |

---

## Response Codes

### Success Response

**Status Code: 201 Created**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null
  }
}
```

---

### Error Responses

**Status Code: 400 Bad Request**

Returned when validation fails or required fields are missing:

```json
{
  "errors": [
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body"
    }
  ]
}
```

**Status Code: 500 Internal Server Error**

Returned when:
- Required fields (firstname, email, password) are missing
- Database error occurs
- Email already exists (unique constraint violation)

---

## Example Request

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "SecurePassword123"
  }'
```

---

## Example Response (Success)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJhMWMyMTQwNWY0YzAwMWE4OGU0MjMiLCJpYXQiOjE2NjM3NTA0MTd9.kX3...",
  "user": {
    "_id": "632a1c21405f4c001a88e423",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null,
    "__v": 0
  }
}
```

---

## Validation Rules

- **Email**: Must be unique in the database, minimum 5 characters
- **Password**: Must be provided (will be securely hashed with bcrypt)
- **Firstname**: Required field, minimum 3 characters
- **Lastname**: Optional field, minimum 3 characters if provided

---

## Security Notes

- Passwords are hashed using bcrypt with salt rounds of 10
- JWT tokens are generated using the JWT_SECRET environment variable
- Password field is not returned in the response for security
- Email field is enforced as unique to prevent duplicate accounts

---

# User Login API Documentation

## Endpoint: `/users/login`

### Description
This endpoint allows users to log in to their existing Uber Clone account. It validates the provided email and password, compares the password against the stored hashed password, and returns an authentication token if credentials are valid. The endpoint provides secure authentication without storing sensitive password data in the response.

---

## Request Method
**POST**

---

## Request Headers
```
Content-Type: application/json
```

---

## Request Body

The endpoint requires the following data in JSON format:

```json
{
  "email": "string",
  "password": "string"
}
```

### Required Fields

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `email` | string | Required, valid email format | User's registered email address |
| `password` | string | Required, minimum 6 characters | User's password |

---

## Response Codes

### Success Response

**Status Code: 200 OK**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null
  }
}
```

---

### Error Responses

**Status Code: 400 Bad Request**

Returned when validation fails:

```json
{
  "errors": [
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body"
    }
  ]
}
```

**Status Code: 401 Unauthorized**

Returned when email doesn't exist or password is incorrect:

```json
{
  "message": "Invalid email or password"
}
```

---

## Example Request

```bash
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePassword123"
  }'
```

---

## Example Response (Success)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJhMWMyMTQwNWY0YzAwMWE4OGU0MjMiLCJpYXQiOjE2NjM3NTA0MTd9.kX3...",
  "user": {
    "_id": "632a1c21405f4c001a88e423",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null,
    "__v": 0
  }
}
```

---

## Validation Rules

- **Email**: Must be a valid email format
- **Password**: Required field, minimum 6 characters
- **Email validation**: User must exist in the database
- **Password validation**: Must match the stored hashed password

---

## Security Notes

- Passwords are compared using bcrypt's secure comparison method
- Invalid credentials return a generic error message to prevent user enumeration attacks
- JWT tokens are generated using the JWT_SECRET environment variable
- Password field is not returned in the response for security
- This endpoint uses proper authentication flow to prevent unauthorized access

---

# Profile and Logout Endpoints

## GET /users/profile

Description
Returns the authenticated user's profile information. Requires a valid JWT sent either as a `token` cookie or in the `Authorization` header (`Bearer <token>`). The response does not include the user's password.

Request Method
GET

Request Headers
```
Cookie: token=<jwt>
Authorization: Bearer <jwt>
Content-Type: application/json
```

Success Response (200)
```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "socketId": null
}
```

Error Response (401)
```json
{
  "message": "Authentication failed"
}
```

Example (Authorization header)
```bash
curl -X GET http://localhost:3000/users/profile \
  -H "Authorization: Bearer <token>"
```

Example (cookie)
```bash
curl -X GET http://localhost:3000/users/profile \
  --cookie "token=<token>"
```

---

## GET /users/logout

Description
Logs out the authenticated user by clearing the `token` cookie and adding the token to the blacklist (stored for 24 hours). Accepts the JWT via cookie or `Authorization` header. Requires authentication.

Request Method
GET

Request Headers
```
Cookie: token=<jwt>
Authorization: Bearer <jwt>
Content-Type: application/json
```

Success Response (200)
```json
{
  "message": "User Logout Successfully"
}
```

Error Response (401)
```json
{
  "message": "Authentication failed"
}
```

Example
```bash
curl -X GET http://localhost:3000/users/logout \
  -H "Authorization: Bearer <token>"
```

Or with cookie
```bash
curl -X GET http://localhost:3000/users/logout \
  --cookie "token=<token>"
```

Security Notes
- Logout blacklists the token in `BlacklistToken` which expires after 24 hours.
- Clients should remove stored tokens on logout and handle 401 responses by redirecting to login.

---

# Captain Registration API Documentation

## Endpoint: `/captains/register`

### Description
This endpoint allows captains to register a new account in the Uber Clone application. It handles captain registration by validating input data, hashing the password, creating a new captain account in the database, and associating vehicle information. Upon successful registration, an authentication token is generated and returned. Captains start with an 'inactive' status by default.

---

## Request Method
**POST**

---

## Request Headers
```
Content-Type: application/json
```

---

## Request Body

The endpoint requires the following data in JSON format:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": "number",
    "vehicleType": "car|motorcycle|auto"
  }
}
```

### Required Fields

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `fullname.firstname` | string | Required, minimum 3 characters | Captain's first name |
| `fullname.lastname` | string | Optional, minimum 3 characters | Captain's last name |
| `email` | string | Required, unique, minimum 5 characters | Captain's email address |
| `password` | string | Required, minimum 6 characters | Captain's password (will be hashed using bcrypt) |
| `vehicle.color` | string | Required, minimum 3 characters | Vehicle color |
| `vehicle.plate` | string | Required, minimum 3 characters | Vehicle plate number |
| `vehicle.capacity` | number | Required, minimum 1 | Vehicle passenger capacity |
| `vehicle.vehicleType` | string | Required, enum: ['car', 'motorcycle', 'auto'] | Type of vehicle |

---

## Response Codes

### Success Response

**Status Code: 201 Created**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null,
    "status": "inactive",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "location": {
      "lat": null,
      "lng": null
    }
  }
}
```

---

### Error Responses

**Status Code: 400 Bad Request**

Returned when validation fails or required fields are missing:

```json
{
  "errors": [
    {
      "type": "field",
      "value": "auto",
      "msg": "Invalid vehicle",
      "path": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

**Status Code: 500 Internal Server Error**

Returned when:
- Required fields are missing
- Database error occurs
- Email already exists (unique constraint violation)

---

## Example Request

```bash
curl -X POST http://localhost:3000/captains/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "SecurePassword123",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }'
```

---

## Example Response (Success)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJhMWMyMTQwNWY0YzAwMWE4OGU0MjMiLCJpYXQiOjE2NjM3NTA0MTd9.kX3...",
  "captain": {
    "_id": "632a1c21405f4c001a88e423",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null,
    "status": "inactive",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "location": {
      "lat": null,
      "lng": null
    },
    "__v": 0
  }
}
```

---

## Validation Rules

- **Email**: Must be unique in the database, minimum 5 characters
- **Password**: Required field, minimum 6 characters, will be securely hashed with bcrypt
- **Firstname**: Required field, minimum 3 characters
- **Lastname**: Optional field, minimum 3 characters if provided
- **Vehicle Color**: Required field, minimum 3 characters
- **Vehicle Plate**: Required field, minimum 3 characters
- **Vehicle Capacity**: Required field, must be a number with minimum value of 1
- **Vehicle Type**: Required field, must be one of: 'car', 'motorcycle', 'auto'

---

## Default Values

- **Status**: 'inactive' (captain must be activated to accept rides)
- **SocketId**: null (assigned when captain connects to the socket)
- **Location**: lat and lng are null initially (updated when captain goes online)

---

## Security Notes

- Passwords are hashed using bcrypt with salt rounds of 10
- JWT tokens are generated using the JWT_SECRET environment variable
- Password field is not returned in the response for security
- Email field is enforced as unique to prevent duplicate accounts
- Captains start as 'inactive' and must be activated before accepting rides

---

# Captain Login API Documentation

## Endpoint: `/captains/login`

### Description
This endpoint allows captains to log in to their existing Uber Clone account. It validates the provided email and password, compares the password against the stored hashed password, and returns an authentication token if credentials are valid. The token is set as a cookie and also returned in the response.

---

## Request Method
**POST**

---

## Request Headers
```
Content-Type: application/json
```

---

## Request Body

The endpoint requires the following data in JSON format:

```json
{
  "email": "string",
  "password": "string"
}
```

### Required Fields

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `email` | string | Required, valid email format | Captain's registered email address |
| `password` | string | Required, minimum 6 characters | Captain's password |

---

## Response Codes

### Success Response

**Status Code: 200 OK**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null,
    "status": "inactive",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "location": {
      "lat": null,
      "lng": null
    }
  }
}
```

---

### Error Responses

**Status Code: 400 Bad Request**

Returned when validation fails:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

**Status Code: 401 Unauthorized**

Returned when email doesn't exist or password is incorrect:

```json
{
  "message": "Invalid email or password"
}
```

---

## Example Request

```bash
curl -X POST http://localhost:3000/captains/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePassword123"
  }'
```

---

## Example Response (Success)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJhMWMyMTQwNWY0YzAwMWE4OGU0MjMiLCJpYXQiOjE2NjM3NTA0MTd9.kX3...",
  "captain": {
    "_id": "632a1c21405f4c001a88e423",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null,
    "status": "inactive",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "location": {
      "lat": null,
      "lng": null
    },
    "__v": 0
  }
}
```

---

## Validation Rules

- **Email**: Must be a valid email format
- **Password**: Required field, minimum 6 characters
- **Email validation**: Captain must exist in the database
- **Password validation**: Must match the stored hashed password

---

## Security Notes

- Passwords are compared using bcrypt's secure comparison method
- Invalid credentials return a generic error message to prevent user enumeration attacks
- JWT tokens are generated using the JWT_SECRET environment variable
- Password field is not returned in the response for security
- Token is set as an HTTP-only cookie for enhanced security
- This endpoint uses proper authentication flow to prevent unauthorized access

---

# Captain Profile API Documentation

## Endpoint: `/captains/profile`

### Description
Returns the authenticated captain's profile information including their vehicle details. Requires a valid JWT sent either as a `token` cookie or in the `Authorization` header (`Bearer <token>`). The response does not include the captain's password.

---

## Request Method
**GET**

---

## Request Headers
```
Cookie: token=<jwt>
Authorization: Bearer <jwt>
Content-Type: application/json
```

---

## Response Codes

### Success Response

**Status Code: 200 OK**

```json
{
  "_id": "captain_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "socketId": null,
  "status": "inactive",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  },
  "location": {
    "lat": null,
    "lng": null
  }
}
```

---

### Error Responses

**Status Code: 401 Unauthorized**

Returned when authentication is missing or the token is invalid:

```json
{
  "message": "Authentication failed"
}
```

---

## Example Requests

Using `Authorization` header:

```bash
curl -X GET http://localhost:3000/captains/profile \
  -H "Authorization: Bearer <token>"
```

Using cookie:

```bash
curl -X GET http://localhost:3000/captains/profile \
  --cookie "token=<token>"
```

---

## Security Notes

- Requires valid JWT authentication
- Password field is excluded from response
- Captain vehicle information is included in profile
- Status reflects whether captain is active or inactive

---

# Captain Logout API Documentation

## Endpoint: `/captains/logout`

### Description
Logs out the authenticated captain by clearing the `token` cookie and adding the token to the blacklist (stored for 24 hours). Accepts the JWT via cookie or `Authorization` header. Requires authentication.

---

## Request Method
**GET**

---

## Request Headers
```
Cookie: token=<jwt>
Authorization: Bearer <jwt>
Content-Type: application/json
```

---

## Response Codes

### Success Response

**Status Code: 200 OK**

```json
{
  "message": "Captain Logout Successfully"
}
```

---

### Error Responses

**Status Code: 401 Unauthorized**

Returned when authentication is missing or the token is invalid:

```json
{
  "message": "Authentication failed"
}
```

---

## Example Requests

Using `Authorization` header:

```bash
curl -X GET http://localhost:3000/captains/logout \
  -H "Authorization: Bearer <token>"
```

Or with cookie:

```bash
curl -X GET http://localhost:3000/captains/logout \
  --cookie "token=<token>"
```

---

## Security Notes

- Requires valid JWT authentication
- Logout blacklists the token in `BlacklistToken` collection which expires after 24 hours
- Token cookie is cleared immediately upon logout
- Clients should remove stored tokens on logout and handle 401 responses by redirecting to login
