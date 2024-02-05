import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../Pages/RootPage/RootPage';
import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import SignUpPage from '../Pages/SignUpPage/SignUpPage';
import DivisionRestaurantsPage from '../Pages/DivisionRestaurantsPage/DivisionRestaurantsPage';
import OneRestaurantPage from '../Pages/OneRestaurantPage/OneRestaurantPage';
import OneFoodPage from '../Pages/OneFoodPage/OneFoodPage';
import AllFoodsPage from '../Pages/AllFoodsPage/AllFoodsPage';
import AllRestaurantsPage from '../Pages/AllRestaurantsPage/AllRestaurantsPage';
import DashboardRootPage from '../Pages/DashboardRootPage/DashboardRootPage';
import DashboardHomePage from '../Pages/DashboardHomePage/DashboardHomePage';
import AddRestaurantsPage from '../Pages/AddRestaurantsPage/AddRestaurantsPage';
import AddFoodsPage from '../Pages/AddFoodsPage/AddFoodsPage';
import ManageRestaurantsPage from '../Pages/ManageRestaurantsPage/ManageRestaurantsPage';
import UpdateRestaurantsPage from '../Pages/UpdateRestaurantsPage/UpdateRestaurantsPage';
import UpdateFoodsPage from '../Pages/UpdateFoodsPage/UpdateFoodsPage';
import ManageFoodsPage from '../Pages/ManageFoodsPage/ManageFoodsPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/signup',
                element: <SignUpPage />
            },
            {
                path: '/divres',
                element: <DivisionRestaurantsPage />
            },
            {
                path: '/oneres',
                element: <OneRestaurantPage />
            },
            {
                path: '/onecard',
                element: <OneFoodPage />
            },
            {
                path: '/allfoods',
                element: <AllFoodsPage />
            },
            {
                path: '/restaurants',
                element: <AllRestaurantsPage />
            }

        ]
    },
    {
        path: 'dashboard',
        element: <DashboardRootPage />,
        children: [
            {
                path: 'admin_dashboard',
                element: <DashboardHomePage />
            },
            {
                path: 'add_restaurants',
                element: <AddRestaurantsPage />
            },
            {
                path: 'add_foods',
                element: <AddFoodsPage />
            },
            {
                path: 'manage_restaurants',
                element: <ManageRestaurantsPage />
            },
            {
                path: 'update_restaurants',
                element: <UpdateRestaurantsPage />
            },
            {
                path: 'update_foods',
                element: <UpdateFoodsPage />
            },
            {
                path: 'manage_foods',
                element: <ManageFoodsPage />
            }
        ]
    }
])

export default router;