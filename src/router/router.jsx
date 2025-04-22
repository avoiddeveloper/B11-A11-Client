import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import AddBooks from "../pages/AddBooks/AddBooks";
import BorrowedBook from "../pages/BorrowedBook/BorrowedBook";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h1>Route Not Found</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'all-books',
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
            },
            {
                path: 'add-books',
                element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>,
            },
            {
                path: 'borrowed-book',
                element: <PrivateRoute><BorrowedBook></BorrowedBook></PrivateRoute>,
            },
            {
                path: 'sing-in',
                element: <SignIn></SignIn>,
            },
            {
                path: 'sing-up',
                element: <SignUp></SignUp>,
            },
            {
                path: 'sing-in',
                element: <SignIn></SignIn>,
            },
        ]
    },
]);

export default router;