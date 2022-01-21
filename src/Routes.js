import Home from "./screens/home";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="*" exact element={<Home />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;