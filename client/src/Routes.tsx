import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import Profile from "./components/pages/Profile/Profile";

function MainRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MainRoutes;