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
import UpdateFoodsPage from '../Pages/UpdateFoodsPage/UpdateFoodsPage';
import ManageFoodsPage from '../Pages/ManageFoodsPage/ManageFoodsPage';
import CartPage from '../Pages/CartPage/CartPage';
import DeleveryRecordPage from '../Pages/DeleveryRecordPage/DeleveryRecordPage';
import PrivateRoutes from '../Private/PrivateRoutes';


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
                path: '/divres/:did',
                loader:({params})=>fetch(`http://localhost:5022/resfoods/${params?.did}`),
                element: <PrivateRoutes><DivisionRestaurantsPage /></PrivateRoutes>
            },
            {
                path: '/oneres/:resName',
                loader:({params})=>fetch(`http://localhost:5022/resfood/${params?.resName}`),
                element: <PrivateRoutes><OneRestaurantPage /></PrivateRoutes>
            },
            {
                path: '/onecard/:sid',
                loader:({params})=>fetch(`http://localhost:5022/onefood/${params?.sid}`),
                element: <PrivateRoutes><OneFoodPage /></PrivateRoutes>
            },
            {
                path: '/allfoods',
                element: <AllFoodsPage />
            },
            {
                path: '/restaurants',
                element: <AllRestaurantsPage />
            },
            {
                path: '/cart',
                element: <PrivateRoutes><CartPage /></PrivateRoutes>
            },
            {
                path: '/del_rec',
                element: <PrivateRoutes><DeleveryRecordPage /></PrivateRoutes>
            }

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><DashboardRootPage /></PrivateRoutes>,
        children: [
            {
                path: 'admin_dashboard',
                element: <PrivateRoutes><DashboardHomePage /></PrivateRoutes>
            },
            {
                path: 'add_restaurants',
                element: <PrivateRoutes><AddRestaurantsPage /></PrivateRoutes>
            },
            {
                path: 'add_foods',
                loader: () => fetch('http://localhost:5022/restaurant'),
                element: <PrivateRoutes><AddFoodsPage /></PrivateRoutes>
            },
            {
                path: 'manage_restaurants',
                element: <PrivateRoutes><ManageRestaurantsPage /></PrivateRoutes>
            },
            {
                path: 'update_foods/:fid',
                loader: ({params}) => fetch(`http://localhost:5022/onefood/${params?.fid}`),
                element: <PrivateRoutes><UpdateFoodsPage /></PrivateRoutes>
            },
            {
                path: 'manage_foods',
                element: <PrivateRoutes><ManageFoodsPage /></PrivateRoutes>
            },
        ]
    }
])

export default router;