import React from "react";
import { ImTux } from "react-icons/im";

const Check = ({isCompleted}) => {
    return (
       <div className="border-2 rounded-lg border-black w-5 h-5">
        {isCompleted &&
            <ImTux size={24} className="text-gray-900"/>
        }
        </div>
        
    )
}

export default Check