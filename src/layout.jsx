import { Outlet } from "react-router-dom";
import Header from "./Assets/header";
import Footer from "./Assets/footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
