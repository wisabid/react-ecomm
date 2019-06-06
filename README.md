## How to view the application online
- Please take a look at the application [here](https://wisabid.github.io/react-ecomm/)   
- The code base is located at https://github.com/wisabid/react-ecomm  

## How to build and run in local environment
### Pre-requisites
- Node & git
- Set npm registry to https://registry.npmjs.org/ (npm config set https://registry.npmjs.org/)  

### Please follow below steps :  
- git clone https://github.com/wisabid/react-ecomm.git  
- cd react-ecomm  
- npm run start
- The application would generally run on http://localhost:3000 if the port 3000 is available  

### How to Navigate (user Manual)  
- Landing page is a sample login page.  
- Please feel free to skip entering email & password for redirecting to homepage (Products listing page)  
- Entering email at login screen would persist the login session, so would recommend filling just the email field.  
- Click on Sign in button  
- Application logo & Title are at the Top Left corner and clicking on those will redirect the user to homepage (Products listing page)  
- At the top right corner, there are two button actions - Cart & Logout.  
- Clicking on Cart and logout would take the user to respective screens.
- All products are listed with an option to Add to Cart  
- The price, product name, availability, category name & product description details are displayed on each product.  
- On click of `Add to Cart`, the availability will decrease by 1 unit (in Products listing page) & the added item to cart is indicated with a badge display on Cart icon (Top right)  
- When there is no availability of a product, that is indicated with a little blurred display in products listing page.  
- In Cart page, a Remove icon has been provided against each item.  
- Clicking on remove icon, the item added will be removed from cart. But if there is more than 1 unit, a single unit will be decremeneted instead of removing all the units from Cart page.  
- Discount Vouchers can be selected from a drop down. Selecting a value will add up the discounted figure on display and the total value is calculated accordingly.
- Click on Continue Shopping to go back to homepage.  
- Click on Checkout for doing the checkout.  
- Checkout, Login, Shipping & Payment, Review (except Cart details, Discount & Total) etc are beyond the scope of this application.  

### Tech Stack
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- The application is built using Material UI 4 & React Hooks (Absolutely no Class components except Error boundary Component).  
- React Context Api has been used for state management instead of Redux. 
- The data part has been mocked using json files under `src/services/mocks`.  
- gh-pages has been used for deployment.  
- Absolutely no server required to run this beautiful application.  
- Semver Compatible and a CHANGELOG is attached within the project.

# “Happiness is not in money, but in shopping.” !!


