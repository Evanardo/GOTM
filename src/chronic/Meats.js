import React, { useState } from "react";

const Meats = React.createContext();

const GiveIt = (props) => {
    const [gameDetails, setGameDetails]= useState(null);

    return(
        <Meats.GiveIt value={{gameDetails,setGameDetails}}>
            
            {props.children}

        </Meats.GiveIt>
    );
};

export { Meats, GiveIt}