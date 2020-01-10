# Digital Scrapbook

## User Stories
I want a user to be able to log in and be able to create a memory and upload a picture for that memory.  They will also be able to see a map of where that memory happened.  A user will also be able to see a list of all their memories.

## Summary 

### User Model

| Column Name | Data Type | Notes |
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

### Place Model
| Column Name | Data Type | Notes |
| ------------- | ----------- | ---------- |
| id | Integer | Serial Primary Key |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |
| name | String | - |
| userId | Integer | Foreign Primary Key |
| date | Date | - |
| city | String | - |
| state | String | - |
| country | String | - | 
| latitude | Integer | - |
| longitude | Integer | - |
| description | Text | Description for the memory |
| imgUrl | String | Picture for the memory |

### Routes

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
| PUT | /profile | profile.js | Able to upload profile pic if profile not created with one
| GET | /profile/admin | profile.js | Admin User Profile | 
| GET | /memory | memory.js | Renders memories associated with users
| GET | /memory/new | memory.js | Create a new memory
| GET | /memory/:id | memory.js | View memory by the id
| PUT | /memory/:id | memory.js | Upload a picture to the memory page
| POST | /memory/new | memory.js | Creates new memory
| DELETE | /memory/:id | memory.js | Deletes memory by the id


