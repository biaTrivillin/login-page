import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import { AuthProvider } from "./context/AuthProvider";
import Profile from "./components/pages/Profile/Profile";
// import ProtectedLayout from "./components/ProtectedLayout";

function MainRoutes() {
    return(
        <AuthProvider> 
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    {/* <Route path="/profile" element={<ProtectedLayout><Profile/></ProtectedLayout>}></Route> */}
                    <Route path="/profile" element={<Profile/>}></Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default MainRoutes;