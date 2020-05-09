import React from "react"
import spinner from "../../img/loading.gif"

import "./LoadingUi.css"
export default function LoadingUi ({loading}){

   if(!loading.status){
  return(
    <span></span>
  )
   }
   return (
   <div className="modal" style={{background:loading.onInit ? "#fff" : "rgba(0,0,0,0.7)"}}>
     <div className="modalBoxLoad" style={{ boxShadow:loading.onInit ? "none" : "-5px 5px 5px rgba(0,0,0,0.5)"}} >
     <img src={spinner} alt="spinner"/>
       </div>{
           loading.onInit ?
           <h2>initialisng app...</h2>
           :
           <h2 style={{color:"#fff"}}>sending...</h2>
       }
    
   </div>
 )
}