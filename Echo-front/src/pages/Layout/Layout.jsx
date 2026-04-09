import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
