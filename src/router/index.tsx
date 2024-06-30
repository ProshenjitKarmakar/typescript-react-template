import {useRoutes} from "react-router-dom";
import AuthenticationRoutes from "./AuthenticationRoutes";

const ThemeRoutes = () : any => {
   return useRoutes([AuthenticationRoutes]);
}

export default ThemeRoutes;
