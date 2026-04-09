import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Layout from "./pages/Layout/Layout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/auth", element: <Authentication /> }],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
