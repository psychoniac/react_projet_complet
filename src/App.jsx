import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AllCharacters from "./pages/AllCharacters";
import ErrorPage from "./pages/ErrorPage";
import CreateCharacter from "./pages/CreateCharacter";

const router = createBrowserRouter([
  {
    // racine du site
    path:'/',
    element : <Layout />,
    children : [
      {path : "/", element: <HomePage />},
      {path : "/tous-les-persos", element:<AllCharacters />},
      {path: "/creer-un-perso", element:<CreateCharacter /> },
      {path:"/*",element:<ErrorPage />}
    ],
      // Activez le flag pour adopter le comportement de la version 7 dès maintenant
      future: {
        v7_skipActionErrorRevalidation: true,
      },
  }
])

function App() {

  
  return (
    <RouterProvider router={router} />
  )
}

export default App;
