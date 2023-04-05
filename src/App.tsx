import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "@pages/AuthPage/AuthPage";
import MainPage from "@pages/MainPage/MainPage";
import NavBarLayout from "@pages/NavBarLayout";
import AddFavoritePage from "@pages/AddFavoritePage/AddFavoritePage";

const router = createBrowserRouter([
  { path: "/", element: <AuthPage /> },
  {
    path: "/main",
    element: <NavBarLayout />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: "/add-favorite",
    element: <NavBarLayout />,
    children: [{ index: true, element: <AddFavoritePage /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
