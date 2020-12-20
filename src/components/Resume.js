import React from 'react'
// import {makeStyles} from "@"
import myResume from "../MiguelChiauResume.pdf"

const Resume = () => {
    return (
        // <div style={{backgroundColor: "#fff", height: "100px"}}>
        <div>

           <p>
               Hello this is my Resume
            <a target="_blank" href={myResume}>Click to Download</a>
            </p> 
        </div>
        // <>
        // {/* <myResume/> */}
        // </>
    )
}

export default Resume