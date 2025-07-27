import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "orders",
                    element: <h1 className="title">Orders</h1>,
                },
                {
                    path: "wallets",
                    element: <h1 className="title">Wallets</h1>,
                },
                {
                    path: "vendors",
                    element: <h1 className="title">Vendors</h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
                {
                    path: "logout",
                    element: <h1 className="title">Logout</h1>,
                },
               
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
