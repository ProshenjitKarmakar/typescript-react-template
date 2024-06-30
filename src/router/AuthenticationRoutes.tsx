import AuthenticationLayout from "../components/layout/AuthLayout/AuthenticationLayout";
import {Navigate} from "react-router-dom";
import Login from "../components/auth/login";
import AssessmentIndex from "../components/assessment/AssessmentIndex";

const AuthenticationRoutes = {
    path: '/',
    element:<AuthenticationLayout/>,
    children: [
        {
            path: '',
            element: <Navigate to="login" replace={true}/>
        },
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'assessment',
            element: <AssessmentIndex />
        },
    ]

}
export default AuthenticationRoutes;
