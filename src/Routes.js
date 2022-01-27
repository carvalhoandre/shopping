import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
/* pages */
import Home from "./screens/home";
import SignIn from "./screens/signin";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="*" exact element={<Home />} />
                <Route path="/login" exact element={<SignIn />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;