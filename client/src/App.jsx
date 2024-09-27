import { Login, Register } from "./pages/auth";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/auth"
          element={
            <div>
              <Outlet />
            </div>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<Navigate to="/auth/login" />} />
      </Routes>
    </div>
  );
};

export default App;
