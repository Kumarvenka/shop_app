
### E-Commerce React Application

This project is a responsive and modern e-commerce web application developed using React, Redux, and other contemporary web technologies. The application enables users to explore a variety of products, add them to their shopping cart, and manage their cart items seamlessly.

#### **Key Features**

- **Product Listing:** Dynamically fetches and displays a list of products from the FakeStore API, presented in a user-friendly grid layout.
- **Product Details:** Offers detailed information about each product, including title, description, image, and price, allowing users to make informed purchasing decisions.
- **Cart Management:** Users can easily add products to their cart, view the contents of their cart, and remove items as needed. The global state of the cart is efficiently managed using Redux, ensuring consistency across the application.
- **Toast Notifications:** Implements `react-hot-toast` for real-time notifications, providing users with immediate feedback on actions like adding or removing items from the cart.
- **Client-Side Routing:** Utilizes `react-router-dom` for smooth and intuitive navigation between the Home and Cart pages, enhancing the overall user experience.
- **Loading Spinner:** Displays a visually appealing loading spinner during data fetching operations, maintaining user engagement even while data is being loaded.

#### **Technologies Used**

- **React:** The core library for building the dynamic user interface.
- **Redux:** For robust and scalable state management across the application.
- **React Router:** For efficient client-side routing.
- **React Hot Toast:** To display elegant toast notifications.
- **FakeStore API:** A source for fetching realistic product data.
- **Tailwind CSS:** For modern, responsive styling that adapts to different devices.

#### **Project Structure**

The project is organized as follows:

- **`index.js`**: The entry point of the application, responsible for setting up the Redux store, routing, and rendering the main `App` component.
- **`App.jsx`**: The main component that includes the `Navbar` and sets up the routes for the Home and Cart pages.
- **`Navbar.jsx`**: Contains the navigation bar with links to the Home and Cart pages, and displays the number of items currently in the cart.
- **`Home.jsx`**: Responsible for fetching and displaying a grid of products. Includes a loading spinner to indicate when data is being fetched.
- **`Cart.jsx`**: Displays the items in the cart and the total amount. Users can proceed to checkout or remove items from the cart.
- **`CartItem.jsx`**: Represents an individual item in the cart, with options to adjust the quantity or remove it.
- **`Product.jsx`**: Represents an individual product with options to add it to the cart or remove it if it's already added.
- **`Spinner.jsx`**: A reusable loading spinner component used across the application.
- **`redux/Store.js`**: Configures the Redux store and integrates it with the application.
- **`redux/Slices/cartSlice.js`**: Defines the cart slice, managing actions to add and remove items from the cart.

#### **How to Run the Project**

To run this project locally:

1. **Clone the repository.**
2. **Install dependencies:** Run `npm install` to install the necessary packages.
3. **Start the development server:** Use `npm start` to launch the application in your local environment.

---
