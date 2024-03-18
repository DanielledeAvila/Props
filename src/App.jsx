import React from "react";
import ComponenteComProps from "./ComponenteComProps.jsx"
import Dani from "./assets/dani.jpeg"
import Debora from "./assets/debora.png"
import Grazi from "./assets/grazi.png"


export default function App (){
  return(
   <>
     <ComponenteComProps 
      nome="Débora" 
      idade="21 anos" 
      email="debora@email.com" 
      imagem={Debora}  
      />
      

    <ComponenteComProps 
    nome="Graziele"
     idade="19 anos"
      email="grazi@email.com"
       imagem={Grazi} >
        <h2>Eu amo pizza</h2>
       </ComponenteComProps>

       
          
    <ComponenteComProps 
    nome="Danielle" 
    idade="17 anos"
    email="dani@email.com" 
    imagem={Dani}
    />


  </>
  )
}

