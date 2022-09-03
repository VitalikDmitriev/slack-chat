import SignInPage from "../components/pages/SignIn";
import SignUpPage from "../components/pages/SignUp/SignUp";
import Dashboards from "../components/pages/Dashboard/Dashboard";
import Tables from "../components/pages/Table/Table";

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
        type: 'loggedIn',
        component: < Dashboards />
    },
    {
        path: '/table',
        type: 'all',
        component: < Tables/ >
    },
];

export default routes;