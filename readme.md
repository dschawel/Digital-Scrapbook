
### User Model

| Column Name | Data Type | Notes|
|---------------- | --------------- | ------------------ |
| id | Integer | Serial Primary Key |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |
| firstname | String | Must be provided |
| lastname | String | - |
| username | String | - |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| photoUrl | String | Profile Pic |
| admin | Boolean | Defaults to false |
| birthday | Date | - |

### Default Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | ----------| ------------------ |
| GET | / | index.js | Home page |
| GET | * | index.js | Render error/404 page |
| GET | /auth/login | auth.js | Login |
| GET | /auth/signup | auth.js | Signup Form |
| POST | /auth/login | auth.js | Login User |
| POST | /auth/signup | auth.js | Creates User |
| GET | /auth/logout | auth.js | Removes session info |
| GET | /profile | profile.js | Regular User Profile | 
| GET | /profile/admin | profile.js | Admin User Profile | 


