# Khan Traders App Setup Instructions

## Step 1: Install Prerequisites
1. Download and install [Node.js](https://nodejs.org/) (this will also install `npm`).
2. Download and install a MySQL server like [XAMPP](https://www.apachefriends.org/index.html).

## Step 2: Database Setup
1. Open XAMPP and start both **Apache** and **MySQL**.
2. Click on the **Admin** button next to MySQL to open `phpMyAdmin` in your browser.
3. Once in phpMyAdmin, go to the **Import** tab.
4. Upload the `schema.sql` file located in the `database` folder of this project.
5. Click **Go** to run the import. This will automatically create the `khan_traders` database and all required tables.

## Step 3: Backend Setup
1. Open a Command Prompt or Terminal and navigate to the `backend` folder:
   `cd "path\to\Khan Traders App\backend"`
2. Install the required Node.js libraries by running:
   `npm install`
3. Edit the `.env` file in the `backend` folder if your MySQL configuration is different from the XAMPP default (XAMPP default: root user, no password).
4. Start the backend server by running:
   `npm start`
5. You should see "Server started on port 5000" in your terminal. Keep this terminal window open.

## Step 4: Frontend Setup
1. You do not need to "run" the frontend. Simply open the `index.html` file inside the `frontend` folder in your preferred web browser like Chrome or Edge.
2. Login with the demo credentials:
   - Username: `admin`
   - Password: `admin123`

You're all set! Use the navigation menu or the language toggle to switch between English and Urdu.
