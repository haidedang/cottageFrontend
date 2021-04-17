import React from "react"
import { Link } from "gatsby"
import {  FaArrowRight, FaArrowLeft, FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Pager = ({pageContext }) => {
    const { previousPagePath, nextPagePath } = pageContext; 

    return (
        <div className="mt-4">
            {previousPagePath && (
                <span className="mr-12"><Link to ={previousPagePath}><FaAngleLeft size="24px" className="inline mr-12" style={{color: "#456b45"}}/></Link></span>
            )}
            {
                nextPagePath && (
                    <span><Link to = {nextPagePath}><FaAngleRight size="24px" className="inline ml-12" style={{color: "#456b45"}}   /></Link></span>
                )
            }
        </div>
    )
}

export default Pager
