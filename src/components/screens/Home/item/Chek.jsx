import React from "react";
import { ImTux } from "react-icons/im";

const Check = ({isCompleted}) => {
    return (
       <div className={`border-2 rounded-lg border-white 
            ${isCompleted ? 'bg-white' : ''} w-7 h-7 mr-3 />
            `}
        >
            {isCompleted &&
                <ImTux size={24} className="text-black"/>
        }
        </div>
        
    )
}

export default Check