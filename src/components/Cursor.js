import { useRef } from "react";


const Cursor = () => {
    const curse = useRef(null);
    const curseOutline = useRef(null);
    
    
    return(
        <>
            <div ref={curseOutline} className="cursor-curse-outline"></div>
            <div ref={curse} className="cursor-curse"></div>
        </>
    )
}