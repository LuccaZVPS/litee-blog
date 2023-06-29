## Introduction

API for a blog system developed with TypeScript and Express, exploring concepts from clean architecture, token-based authentication, email confirmation, and microservices.

### Services

- **Accounts**: Responsible for managing user accounts. This service allows users to create an account, confirm the associated email, and update profile data such as the profile picture and username.

  - **Routes**:
    - `(POST) "/accounts"`: Route to create an account.
    - `(PUT) "/verify/:accountId/:secret"`: Route to verify the account's email.
    - `(GET) "/accounts/media/:imageName"`: Route to retrieve the user's profile picture.
    - `(PUT) "/accounts/change-name"`: Route to change the username.
    - `(PUT) "/accounts/change-picture"`: Route to change the profile picture.
    </br>
    

- **Auth**: Responsible for authenticating user accounts.

  - **Routes**:
    - `(POST) "/auth/signin"`: Route to authenticate a user.

This service handles the authentication process for user accounts.
    </br>
    
- **Categories**: Responsible for managing the post categories in the system.

  - **Routes**:
    - `(POST) "/api/categories"`: Route to add a category.
    - `(GET) "/api/categories"`: Route to list all categories.
    - `(DELETE) "/api/categories/:id"`: Route to delete a category by ID.
     </br>

- **Mail**: Responsible for sending emails in response to events emitted by other applications.

This service listens to events triggered by other applications and handles the email sending functionality. For example, it is responsible for sending verification emails when a new account is created.
    </br>

- **Posts**: Responsible for managing posts.
  Note: Each user can only modify or delete their own posts.

  - **Routes**:
    - `(POST) "/posts/"`: Route to create a post.
    - `(GET) "/posts/media/:imageName"`: Route to retrieve the post cover photo.
    - `(PUT) "/posts/media/:id"`: Route to update the post cover photo based on the provided ID.
    - `(PUT) "/posts/:id"`: Route to update the post content, such as the title or body.
    - `(GET) "/posts/list/:page"`: Route to list posts(10 per page). Some post data is omitted, such as the post content.
    - `(GET) "/posts/:id"`: Route to retrieve all information about a post.
    - `(DELETE) "/posts/:id"`: Route to delete a post.


    </br>
### To-Do

- Implement route for password change.
- Implement password recovery email sending functionality.
- Develop comments service.
- Create admin roles capable of managing system categories and deleting other posts, even if not owned by the admin.
- Change the categories of a post (currently only image, title, and content can be modified).
- Build the front-end of the application.
- Add post filters, such as listing posts by category.
