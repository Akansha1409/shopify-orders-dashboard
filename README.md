🛍️ Shopify Orders Dashboard App
A public Shopify app that displays the last 60 days of orders in a dashboard with full order details including items and images.

🚀 Features
✅ Public Shopify App
Handles app installation and authentication using Shopify OAuth 2.0 flow.

Implements @shopify/shopify-api library with required scopes.

Uses Shopify GraphQL Admin API to fetch the last 60 days' orders.

🧑‍💼 Merchant Dashboard
Displays all fetched orders from the database.

View full order details including:

Order ID

Status

CreatedAt

Line Items

Quantity

Reason for return

Image Previews (if available)

🔥 UI Features
🔍 Search orders by Order ID or Shop name

🎯 Filter orders by Fulfilled, Unfulfilled, or Cancelled status

📄 Pagination to navigate through orders with ease

🌓 Dark Mode Toggle for better accessibility and user preference

⚡ Fast and responsive UI powered by Tailwind CSS

🔗 Clean code and component-based architecture

🌐 API Endpoints
GET /orders — Fetch all orders from the database with associated items and images.

🧩 Database Schema
orders — (id, shop, orderId, status, createdAt)

fulfilment_items — (returnId, lineItemId, qty, reason, imageURL)

images — (imageURL, returnItemId)

🧪 Tech Stack
Frontend: Tailwind CSS

Backend: Node.js, Express.js

Database: PostgreSQL

API Integration: Shopify Admin GraphQL API

Authentication: OAuth-based public app installation

Database Management: pg (Node PostgreSQL client)

⚙️ Setup Instructions
Clone the repo

bash
Copy
Edit
git clone https://github.com/Akansha1409/shopify-orders-dashboard.git
cd shopify-orders-dashboard
Install dependencies

bash
Copy
Edit
npm install
Configure environment variables

Create a .env file using .env.example as a reference:

ini
Copy
Edit
SHOPIFY_API_KEY=your_key
SHOPIFY_API_SECRET=your_secret
SCOPES=read_orders
HOST=https://your-app-url.com
POSTGRES_URL=your_postgres_connection_url
Run the app

bash
Copy
Edit
node index.js

📬 Submission Info
GitHub Repo: https://github.com/Akansha1409/shopify-orders-dashboard

🌍 Deployment
This app can be deployed to any Node.js-compatible platform such as:

Render

Railway

Heroku

Vercel (with backend functions)

Fly.io

To deploy:

Add your environment variables to the deployment platform.

Connect your GitHub repo.

Make sure PostgreSQL is hosted (e.g., on Supabase, Neon, or Railway).

Add your Shopify App's App URL and Redirect URLs in the Shopify Partner Dashboard, matching the deployed URLs.
