import { Gallerysection } from "@/components/Gallery/Gallerysection";
import { Gheader } from "@/components/Gallery/Gheader";
import React from "react";
import { Link, Outlet } from "react-router";

export const Gallery = () => {
  return (
 <div className="">
  <Gheader></Gheader>

     <Gallerysection></Gallerysection>
 </div>

 
  );
};
