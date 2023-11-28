Core_Techies_Assignment Readme
Introduction
This repository contains a web application developed using the MERN stack (MongoDB, Express.js, React, Node.js). All sensitive credentials are securely stored in a .env file for enhanced security.

Steps to Run the Application Locally
1. Clone the Repository
To get started, clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/ArunodaySingh/Core_Techies_Assignment.git
2. Set Up Environment Variables
Create a .env file in the root directory of the project and add your credentials. Ensure that this file is added to the .gitignore to prevent sensitive information from being pushed to version control.

Example .env file:

env
Copy code
# MongoDB Connection
MONGO_URI=your_mongo_db_connection_string

# Express Server Port
PORT=3000

# Other Environment Variables
# ...
Replace your_mongo_db_connection_string with the actual connection string for your MongoDB database.

3. Install Dependencies
Navigate to the project directory and install the necessary dependencies for both the server and client:

bash
Copy code
cd Core_Techies_Assignment
npm install       # Install server dependencies
cd client
npm install       # Install client dependencies
4. Run the Application
Start the server and client to run the application locally:

bash
Copy code
# In the root directory of the project
npm run dev
This command concurrently starts the server and the client. The application should be accessible at http://localhost:3000 by default.

Accessing the Live Website Hosted on Azure Cloud
The live version of the Core_Techies_Assignment website is hosted on Azure Cloud and can be accessed using the following URL:
http://98.70.40.244:5173/

To access the admin panel of the Core_Techies_Assignment website, use the following login credentials:
Email: admin@gmail.com
Password: admin@123
