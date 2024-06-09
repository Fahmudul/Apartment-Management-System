# Cozy Nest

Cozy Nest is a comprehensive apartment management system designed to facilitate efficient building management. This README.md provides an overview of the features and functionalities of the website, as well as important information for users and administrators.

## Live Site URL

[Visit Cozy Nest](https://cozynest-cbb8e.web.app)

## Admin Credentials

- **Admin Username:** hassan23@gmail.com
- **Admin Password:** Siam1234

## Features

1. **Responsive Design**

   - The website is fully responsive and accessible on mobile, tablet, and desktop devices. The dashboard layout is also optimized for different screen sizes.

2. **User Authentication**

   - Implemented using JWT for both email/password and social logins. Tokens are securely stored in localStorage.

3. **Home Page**

   - **Navbar:** Displays logo, website name, and dynamic login/profile icon.
   - **Banner:** Features an automatic sliding banner with beautiful images of the building/apartments.
   - **About Section:** Fancy typography detailing the building's features.
   - **Coupons Display:** Coupons are showcased prominently for easy access.
   - **Location Details:** Provides information about the apartment’s location with map integration.
   - **Footer:** Includes social links and other relevant information.

4. **Apartment Listings**

   - Display of apartment images, floor number, block name, apartment number, rent, and an agreement button.
   - **Pagination:** Supports viewing 6 apartments per page.
   - **Agreement Process:** Users can apply for apartments, with details stored in the database.

5. **User Dashboard**

   - **My Profile:** Shows user details and agreement status.
   - **Announcements:** Displays announcements made by the admin.

6. **Member Dashboard**

   - **My Profile:** Detailed member information including rented apartment details.
   - **Make Payment:** Form for making payments with coupon application feature.
   - **Payment History:** Table of payment details with search functionality.
   - **Announcements:** Displays announcements made by the admin.

7. **Admin Dashboard**

   - **Admin Profile:** Shows admin details and various statistics (e.g., total rooms, available rooms).
   - **Manage Members:** Table of members with removal functionality.
   - **Make Announcement:** Form for creating announcements.
   - **Agreement Requests:** List of agreement requests with accept/reject functionality.
   - **Manage Coupons:** Table of coupons with add and manage functionality.

8. **Notifications and Alerts**

   - Sweet alerts/toasts for all CRUD operations and authentication actions.

9. **Environment Variables**

   - Firebase config keys and MongoDB credentials are hidden using environment variables.

10. **Data Fetching**
    - All GET requests are handled using Tanstack Query for efficient data fetching.

## GitHub Repositories

- **Client Side Repository:** [Cozy Nest Front-end](https://github.com/programming-hero-web-course1/b9a12-client-side-Fahmudul)
- **Server Side Repository:** [Cozy Nest Back-end](https://github.com/programming-hero-web-course1/b9a12-server-side-Fahmudul)

## Optional Features

- **Axios Interceptor:** For enhanced HTTP request handling.
