import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "@pages/AuthPage/AuthPage";
import PanelLayout from "@pages/NavBarLayout";
import FavoriteMoviePage from "@pages/FavoriteMoviePage";
import AddFavorite from "@pages/AddFavorite/AddFavorite";
import FavoriteLayout from "@pages/FavoriteLayout";

const router = createBrowserRouter([
  { path: "/", element: <AuthPage /> },
  {
    path: "/main",
    element: <PanelLayout />,
    children: [{ index: true, element: <FavoriteMoviePage /> }],

    
  },
  {path: "/add-favorite",
  element: <FavoriteLayout/>,
  children: [{ index: true, element: <AddFavorite /> }],
  },
]);

const App = () =>  {
  return <RouterProvider router={router} />;
};

export default App;
