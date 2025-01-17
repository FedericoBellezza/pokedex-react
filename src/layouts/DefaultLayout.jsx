import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

export default function DefaultLayout() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
