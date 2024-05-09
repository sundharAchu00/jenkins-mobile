import AppointmentPage from "./components/AppointmentPage";
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage";
import LoginPage from "./components/LoginPage";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import ProfilePage from "./components/ProfilePage";
import UserAppointmentList from "./components/UserAppointmentList";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/usrAppoint" element={<UserAppointmentList />} />
          <Route path="/appoint/:id" element={<AppointmentPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
