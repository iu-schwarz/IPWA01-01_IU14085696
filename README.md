# **CO2 Emission Dashboard**

A modern Vue.js application to display and analyze CO2 emissions data. This project enables users to sort, filter, and visualize data about CO2 emissions from different countries and companies.

## **Table of Contents**
- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Project Structure](#project-structure)

---

## **Features**
- 🌍 **Country and Company Data**: View CO2 emissions data categorized by country and company.
- 🔍 **Search and Filter**: Quickly search for specific entries using a dynamic search bar.
- ⬆️⬇️ **Sortable Columns**: Sort data by country, company, or emission values in ascending or descending order by clicking on the column.
- 📱 **Responsive Design**: Fully responsive layout for desktop and mobile devices.
- 🎨 **Interactive UI**: Modern and visually appealing table design with hover effects and intuitive navigation.

---

## **Getting Started**

### **Prerequisites**
To run this project locally, ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm**
- A modern browser (for development and testing)

### **Installation**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/iu-schwarz/IPWA01-01_IU14085696.git
   cd IPWA01-01_IU14085696
    ```

2. **Install Dependencies:**
   Install all necessary dependencies using the command:
   ```bash
   npm install
   ```

3. **Start the development server with:**
   ```bash
   npm run serve
   ```
    The app will be accessible at: http://localhost:8080/

---
### **Project Structure**

The project follows a structured directory layout for better readability and maintainability:
```
src/
├──components/
│   ├── AppAbout.vue          # About us component
│   ├── AppFooter.vue         # Footer component
│   ├── AppHeader.vue         # Header component
│   ├── AppLegal.vue          # AppLegal component
│   ├── AppNavigation.vue     # Navigation bar
│   └── AppTableEmissions.vue # Main table for data
├── App.vue                   # Root Vue component
├── router.js                 # Root Vue component
└── main.js                   # Entry point
```
