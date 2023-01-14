import React from "react";
import { createRoot } from "react-dom/client";
import CopyrightDate from "./components/copyright";

function Card(props) {
  return (
    <div className="divStyling">
    <div className="cardDetails">
    <h5>{props.name}</h5>
     <p>{props.email}</p>
     <p>{props.tel}</p>
    </div>
    <div><img src ={props.img} alt ="" height={"200px"} width={"200px"} /></div>
   </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div>
    <h5 className="heading">Employers Details</h5>
    <Card name="James Art" 
    tel="+44 56 78 234" 
    email="james234@yahoo.com" 
     img ="https://i.pinimg.com/474x/e4/c5/9f/e4c59fdbb41ccd0f87dc0be871d91d98.jpg"
    /><br/>
    <Card
     name="Madeline Thomson"
     tel="+233 56 467 356"
     email="madelson@gmail.com"
     img ="https://img.freepik.com/free-photo/worldface-american-woman-white-background_53876-146191.jpg?w=2000"
    /><br/>
    <Card 
     name="Park Mark"
     tel="+234 70 43 45 22 30"
     email= "pmark23@yahoo.com"
     img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTRlmRh2CbO4_bXr7VRZeO2FW1BLcXGFiPA&usqp=CAU"
    />
    <CopyrightDate/>
  </div>
);
