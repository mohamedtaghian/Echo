import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import Layout from "./pages/Layout/Layout";
import AuthProvider from "./providers/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";
import AddPost from "./pages/AddPost/AddPost";
import EditPost from "./pages/EditPost/EditPost";
import LoginProtectedRoute from "./ProtectedRoutes/LoginProtectedRoute/LoginProtectedRoute";
import EditAddProtectedRoute from "./ProtectedRoutes/EditAddProtectedRoute/EditAddProtectedRoute";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/auth",
          element: (
            <LoginProtectedRoute>
              <Authentication />
            </LoginProtectedRoute>
          ),
        },
        { path: "/", element: <Home /> },
        {
          path: "/add-post",
          element: (
            <EditAddProtectedRoute>
              <AddPost />
            </EditAddProtectedRoute>
          ),
        },
        {
          path: "/edit-post/:id",
          element: (
            <EditAddProtectedRoute>
              <EditPost />
            </EditAddProtectedRoute>
          ),
        },
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
