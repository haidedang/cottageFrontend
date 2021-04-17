import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Pager = ({pageContext }) => {
    const { previousPagePath, nextPagePath } = pageContext; 

    return (
        <div>
            {previousPagePath && (
                <span className="mr-12"><Link to ={previousPagePath}>Previous</Link></span>
            )}
            {
                nextPagePath && (
                    <span><Link to = {nextPagePath}>Next</Link></span>
                )
            }
        </div>
    )
}

export default Pager
