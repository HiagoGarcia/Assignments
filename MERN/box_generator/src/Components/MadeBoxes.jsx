import React from "react";

const BoxDisplay = (props) => {
    return(
        <div>
            <p>{props.currBox}</p>
            {
                props.boxes.map((unicorn, i) => {
                    return(
                        <div key={i} style={{backgroundColor:unicorn, height:"100px", width:"100px" , margin:"15px", display:"inline-block"}} />
                    )
                })
            }
        </div>
    )
}

export default BoxDisplay