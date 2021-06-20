# My Memory Journal (Timeline App)

A Journal Application designed currently for online entries to Add and Recall life events.

### Pages
+ Landing Page
    - Login
    - Create an account
        - Username (Whatever the user wants to be addressed by)
        - Password (Unique Password required)
        - Email Address (Unique email for password recover / Email Varificaiton)
    - Password Recovery
        - Future feature not available during development (coming soon)

+ Main View
    - Greeting message
    - New Entry (Button w/ route)
        - Entry Date
        - Photo URL (future feature will be a file upload)
        - Add Entry (1000 allow charactors w/ counter)
    - Timeline Bar (Development will be a list of dates, timeline future feature)
        - Date Bar (Link w/ route)
            - Single Entry View
                - Update (Information Pre-filled with prior info)
                    - Entry Date
                    - Photo URL
                    - Entry
                - Delete (Deletes the single entry by id)

+ About
    - Information description about the reason for the app / pitch

+ Contact Us
    - For contacting admins for account issues.
    - Simple pre-pop email link for support. 
    - Additional features in later release(s)
        - Account Recovery / Lost or Forgot Password

+ Profile
    - Displays username and email
        - Will be used for changing profile information in the future
            - Username
            - Passwords
            - Email

+ Log Out
    - Routes back to Login

#

#### Project Work

```
Phase 1: Setup
    - Server Setup
    - Package Installation
        - Axios
        - Bcrypt
        - Dotenv
        - Express
        - Material UI
        - Momentjs
        - Node
        - Node Server JS
        - Passport
        - PG
        - React
        - Redux
        - Sweetalert2
    - Directory Structure
    - Route Structure / Setup
    - Route Testing (Postman)
    - Passport Setup

Phase 2: Development
    - Authentication / Authorization Testing
    - Page Skeleton Setup
    - Server configuration setups
    - Server Functionality Testing
    - Server Debugging
    - Basic Page Layout
    - Crud Performance Testing / Debugging
    - Basic / Minor CSS styling

Phase 3: (1st Stretch Goals)
    - Changed from Global to Single Entry View
    - Delete Re-Design for single entry deletion by id
    - Sweet Alerts
    - First Heroku Deployment

Phase 4: (2nd Stretch Goals)
    - Graphical Cleanup
    - Change Basic CSS to Material UI
    - Additional Restructure for client support
    - Extended Server / Page Testing and Debugging
    - 2.0 Heroku Deployment
```