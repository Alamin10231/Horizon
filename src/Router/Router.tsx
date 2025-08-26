import { ForgetPassword } from "@/components/Auth/ForgetPassword";
import { VerificationEmail } from "@/components/Auth/VerificationEmail";
import { PhotoGallery } from "@/components/Gallery/PhotoGallery";
// import { PhotoGallery } from "@/components/Gallery/PhotoGallery";
import { VideoGallery } from "@/components/Gallery/VideoGallery";
import { PcardsAll } from "@/components/Products/PcardsAll";
import { ShippingPolicy } from "@/components/Products/ShippingPolicy";
import { ShopNow } from "@/components/Products/ShopNow";
import { About } from "@/Pages/About";
import { Contact } from "@/Pages/Contact";
import { Gallery } from "@/Pages/Gallery";
import { Home } from "@/Pages/Home";
import { Login } from "@/Pages/Login";
import { MainLayout } from "@/Pages/MainLayout";
import { Products } from "@/Pages/Products";
import { Register } from "@/Pages/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/gallery",
        element: <Gallery></Gallery>,
        children: [
          {
            path: "/gallery/photogallery",
            element: <PhotoGallery></PhotoGallery>,
          },
          {
            path: "/gallery/videogallery",
            element: <VideoGallery></VideoGallery>,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },

      {
        path: "/pcardsall",
        element: <PcardsAll></PcardsAll>,
      },
      {
        path: "/shopnow",
        element: <ShopNow></ShopNow>,
      },
      {
        path: "shipping",
        element: <ShippingPolicy></ShippingPolicy>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: "/emailverification",
    element: <VerificationEmail></VerificationEmail>,
  },
]);
