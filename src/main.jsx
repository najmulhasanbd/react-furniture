import { StrictMode } from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Shop from './pages/shop/Shop.jsx';
import Contact from './pages/contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: "/",
        errorElement: <ErrorPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);