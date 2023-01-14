import React from "react";

const year = new Date();
const newYear = year.getFullYear()

const styling ={
    textAlign : "center",
    fontSize : "large",
    color : "blue"
}
function CopyrightDate (params) {
    return(
        <p style={styling}>All Rights Reserved by Joel Copyright © {newYear}
    </p>)
}
    
    
export default CopyrightDate
