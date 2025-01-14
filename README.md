# Event-and-Reservation-Management-System---Symfony-PHP-Application

## Overview
This project is a web application for event and reservation management, built with Symfony Twig. Administrators can add and manage event details with a limited number of available places. Users can make reservations until the event reaches its capacity. Stripe is integrated for secure payment processing, and the application also provides features like search, filters, and PDF generation.

## Key Features:
- **Admin Event Management**: Add and manage events, including event details and seat availability.
- **User Reservations**: Users can make reservations for events until all places are booked.
- **Stripe Integration**: Secure payment processing for reservations using Stripe.
- **Search & Filters**: Easily search for events and apply filters to find suitable options.
- **PDF Generation**: Generate PDFs for event details and reservation confirmations.

## Technologies Used:
- **Symfony (Twig)**: Backend framework and templating engine.
- **PHPMyAdmin & SQL**: Database for managing event and user data.
- **Stripe API**: For payment integration.
- **PDF Libraries**: For generating event and reservation-related documents.

## Installation Instructions:
1. Clone the repository:
   
   git clone https://github.com/your-username/event-reservation-management-system.git

2. Install Symfony and the required dependencies:

composer install

3. Set up the SQL database and configure your .env file for the database connection.

4. Configure your Stripe API credentials for payment processing.

5. Run the Symfony server:

symfony server:start


###Contributing:
Contributions are welcome! Please submit pull requests or open issues for any improvements or bug fixes.