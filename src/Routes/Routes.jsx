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

const router = createBrowserRouter([
    {
        path: '/',
        element : <RootPage/>,
        children : [
            {
                path : '/',
                element : <HomePage/>
            },
            {
                path : '/login',
                element : <LoginPage/>
            },
            {
                path : '/signup',
                element : <SignUpPage/>
            },
            {
                path : '/divres',
                element : <DivisionRestaurantsPage/>
            },
            {
                path : '/oneres',
                element : <OneRestaurantPage/>
            },
            {
                path : '/onecard',
                element : <OneFoodPage/>
            },
            {
                path : '/allfoods',
                element : <AllFoodsPage/>
            },
            {
                path : '/restaurants',
                element : <AllRestaurantsPage/>
            }
            
        ]
    }
])

export default router;