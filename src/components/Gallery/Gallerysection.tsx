import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";

export const Gallerysection = () => {
  const [activeTab, setActiveTab] = useState<"photo" | "video">("photo");
const navigate = useNavigate()

useEffect(()=>{
  navigate("photogallery")
},[navigate])
  return (
    <div className=" px-4 py-10   ">
     

      {/* Tabs */}
      <div className="flex gap-4 mb-6 text-center items-center justify-center">
        <Link
          to="photogallery"
          className={`px-4 py-2 font-semibold ${
            activeTab === "photo" ? "border-b-2 border-green" : ""
          }`}
          onClick={() => setActiveTab("photo")}
        >
          Photo Gallery
        </Link>

        <Link
          to="videogallery"
          className={`px-4 py-2 font-semibold ${
            activeTab === "video" ? "border-b-2 border-green" : ""
          }`}
          onClick={() => setActiveTab("video")}
        >
          Video Gallery
        </Link>
      </div>

      {/* Render nested routes */}
      <Outlet />
    </div>
  );
};
