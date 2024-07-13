import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import UpdatePassword from "./components/UpdatePassword";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
    
                { 
                  path: "/forgot", 
                  element: <ForgotPassword /> 
                },
                { 
                  path: "/dashboard", 
                  element: <Dashboard />,
                },
                { 
                  path: "/user/password/:token", 
                  element: <UpdatePassword /> 
                } 
    ]);

    return <RouterProvider router={router} />;
};

export default App;
