import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AllCharacters from "./pages/AllCharacters";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    // racine du site
    path:'/',
    element : <Layout />,
    children : [
      {path : "/", element: <HomePage />},
      {path : "/tous-les-persos", element:<AllCharacters />},
      {path:"/*",element:<ErrorPage />}
    ]
  }
])

function App() {

  
  return (
    <RouterProvider router={router} />
  )
}

export default App;
