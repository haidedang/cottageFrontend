import React from 'react'
import uploadStyles from './uploadStyles.module.css'
import UploadBox from '../components//Shoutout/UploadBox'
import { Link } from "gatsby"


class Upload extends React.Component {
    render() {
        return (
            <div className={uploadStyles.container}>
                <div className={uploadStyles.header} >
                    <Link style={{ color: "black" }} to="/">Cottage Shoutouts
                    </Link>
                </div>
                <UploadBox />
            </div>
        )
    }
}

export default Upload