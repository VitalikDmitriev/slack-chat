import SignInPage from "../components/pages/SignIn";
import SignUpPage from "../components/pages/SignUp/SignUp";
import WelconePage from "../components/pages/Welcome";

const routes = [{
        path: '/groups',
        type: 'loggedIn',
        component: () => < div > groups </div>
    },
    {
        path: '/signin',
        type: 'all',
        component: <SignInPage/>
    },
    {
        path: '/signup',
        type: 'all',
        component: < SignUpPage />
    },
    {
        path: '/',
        type: 'all',
        component: < WelconePage />
    },
];

export default routes;