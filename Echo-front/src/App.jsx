import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import Layout from "./pages/Layout/Layout";
import AuthProvider from "./providers/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";
import AddPost from "./pages/AddPost/AddPost";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/auth", element: <Authentication /> },
        { path: "/", element: <Home /> },
        { path: "/add-post", element: <AddPost /> },
      ],
    },
  ]);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={routes} />
        <Toaster />
      </AuthProvider>
    </>
  );
}

export default App;
