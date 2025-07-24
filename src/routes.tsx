import Home from "./Pages/Home"
import UserList from "./Pages/Users/UserList"
import NewUser from "./Pages/newUser/NewUser"
import Products from "./Pages/products/Products"
import type { RouteObject } from "react-router-dom"
import Product from "./Pages/product/Product"
import Analytics from "./Pages/analytics/Analytics"
import Manage from "./Pages/Manage/Manage"

let routes: RouteObject[] = [
    { path: '/', element: <Home /> },
    { path: '/users', element: <UserList /> },
    { path: '/newUser', element: <NewUser /> },
    { path: '/products', element: <Products /> },
    { path: 'product/:id', element: <Product /> },
    { path: '/newProduct' },
    { path: '/analytics', element: <Analytics /> },
    { path: '/manage', element: <Manage />}
]

export default routes