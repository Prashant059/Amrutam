# 🏥 Affiliate Doctor Dashboard

A fully responsive Affiliate Dashboard built using **React + Vite**, **Tailwind CSS**, and **React Router**.  
This project includes a clean layout, sidebar navigation, breadcrumb system, referral tool, product details view, and multiple dashboard features.

---

## 🚀 Features

### ✅ **1. Modern Layout**
- Sticky header  
- Collapsible sidebar  
- Fully mobile responsive  
- Center-aligned content with dynamic spacing  

### ✅ **2. Automatic Breadcrumb**
Breadcrumb shows the exact page user is currently on based on the route, e.g.:

- `Home › Dashboard`
- `Home › Referral Tool`
- `Home › Product Details`

No manual setup needed — auto-detected from the URL.

### ✅ **3. Referral Tool System**
- Select a product  
- Click **Get**  
- ReferralTool component hides  
- Full **ProductDetails component** opens  
- Clean product link + coupon display  

### ✅ **4. Product Details Page**
Shows:
- Product image  
- Auto-generated product link  
- Coupon code  
- Referral stats (Total Referral, Orders, Revenue, Total Coupons)  
- Copy-to-clipboard buttons  

### ✅ **5. Sidebar Navigation**
Includes pages:
- Dashboard  
- Referral Tool  
- Patients  
- Payment  
- Settings  
(You can easily add more)

### ✅ **6. Built With Modern Tools**
- ⚡ **React + Vite**
- 🎨 **Tailwind CSS**
- 🧭 **React Router DOM**
- 📦 Clean component structure
- 🔁 Reusable UI components

---

## 📂 Folder Structure

```
src/
  components/
    Breadcrums.jsx
    SearchInput.jsx
  features/
    affiliate/
     Dashboard.jsx
     IntroPopUp.jsx
     ProductDeatils.jsx
     ReferralTable.jsx
     StatCard.jsx
     Tabs.jsx
    layout/
     Header.jsx
     Layout.jsx
     Sidebar.jsx
   routes/
    DashBoard.jsx
    EarningHistory.jsx
    EarningPage.jsx
    NotFoundPage.jsx
    PatientsPage.jsx
    RefarralTool.jsx
  App.jsx
  main.jsx
```


---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/<your-username>/<your-repo-name>.git
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start development server

```
npm run build
```

### 🟢 Start the app

```
http://localhost:5173/
```
