# 🍔 FoodDel: Full-Stack MERN Ecosystem

<div align="center">
  <img src="https://via.placeholder.com/800x400?text=FoodDel+Landing+Page+Preview" alt="FoodDel Banner" width="100%" style="border-radius: 10px;">
  
  <p align="center">
    <code style="color: #4CAF50; font-weight: bold;">MongoDB</code> • 
    <code style="color: #2196F3; font-weight: bold;">Express</code> • 
    <code style="color: #61DAFB; font-weight: bold;">React</code> • 
    <code style="color: #339933; font-weight: bold;">Node.js</code>
  </p>
  
  <p><i>A professional, dual-interface delivery platform with integrated Stripe payments.</i></p>
</div>

---

### 📖 Overview
**FoodDel** is a high-performance MERN stack application designed to handle the entire lifecycle of food ordering. It features a sleek **User Storefront** and a robust **Admin Control Center**.

<details open>
<summary><b style="font-size: 1.2rem; color: #ff4d4d;">🔥 Key Features</b></summary>

#### 👤 Customer App (`/frontend`)
* **Secure Auth:** JWT-based login and persistent sessions.
* **Smart Menu:** Dynamic filtering and category-based browsing.
* **Seamless Checkout:** Fully functional **Stripe Payment** integration.
* **Order Tracking:** Real-time status updates from "Ordered" to "Delivered."

#### ⚙️ Admin Dashboard (`/admin`)
* **Inventory Control:** Comprehensive CRUD for food items (Images, Prices, Desc).
* **Order Management:** Global view of sales and delivery logistics.
* **User Oversight:** Monitor registration and activity.
</details>

---

### 🛠️ Installation & Setup

1. **Clone & Root Entry**
   ```bash
   git clone git@github.com:Ajousman/FoodDelivery.git
   cd foodDel
   

   ###````Backend Setup
   cd backend
npm install
# Create a .env file with: MONGO_URI, STRIPE_SECRET_KEY, JWT_SECRET
npm start

<div>
###```Frontend & Admin Setup
# For Frontend

cd frontend && npm install && npm run dev

</div>
# For Admin

cd admin && npm install && npm run dev

Project folder Structure

*** ``

fooddel/
├── admin/          # Admin Dashboard (Vite + React)
├── frontend/       # Customer Interface (Vite + React)
├── backend/        # RESTful API (Node, Express, MongoDB)
└── README.md       # Project Documentation


```<div align="center">
<p><b>Finally made with ABDU</b></p>
<sub>© 2026 FoodDel Project</sub>
</div>