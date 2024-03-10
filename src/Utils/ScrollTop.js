import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollTop = () => {
   const path = useLocation();
//    useEffect(()=>{
  useLayoutEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
   },[path])
};

export default ScrollTop;