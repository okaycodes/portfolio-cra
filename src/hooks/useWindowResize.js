import { useEffect, useState } from "react";

export function useWindowResize(){
   const [dimension, setDimension] = useState({
      width: window.innerWidth,
      height: window.innerHeight
   })

   useEffect(()=>{
      const handleResize =()=>{
         return setDimension({
            width: window.innerWidth,
            height: window.innerHeight
         })
      }
      window.addEventListener('resize', handleResize)
      return ()=>window.removeEventListener('resize', handleResize)
   })

   return dimension
}