
import React from 'react';
import Button from 'react-bootstrap/Button'
import {navigate} from 'gatsby';
import ShoutoutStyles from '../../pages/about/ShoutoutPage.module.css'

class UploadButton extends React.Component{

    constructor(props) {
        super(props);
        this.fileInputRef = React.createRef();
        this.openFileDialog = this.openFileDialog.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
    }


    openFileDialog() {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }

    // toast = notify.createShowQueue()

    onFilesAdded(evt) {
        if (this.props.disabled) return;
        const files = evt.target.files;

        if (files.length > 3) {
            const msg = 'Only 3 images can be uploaded at a time'
            // return this.toast(msg, 'custom', 2000, toastColor)  
            return alert(msg)
        }

        const types = ['image/png', 'image/jpeg', 'image/gif']

        for (const file of files) {
        
            if (types.every(type => file.type !== type)) {
              return alert(`'${file.type}' is not a supported format`)
            }
      
            if (file.size > 6000000) {
              console.log(file.size)
              return alert(`'${file.name}' is too large, please pick a smaller file`)
            }
      
        }

        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }

        navigate(this.props.path, {
            state: {files}
        })
        // Forward to next page 
    }
    
    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    render(){
        return (
            <div onClick={this.openFileDialog} className={ShoutoutStyles.buttonHeading}>
                <input
                    style={{ display: 'none' }}
                    ref={this.fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    onChange={this.onFilesAdded}
                />
                <Button className={this.props.uploadButton}>Upload Photo</Button>
                <div className={this.props.uploadPage}></div> 
            </div>
        )
    }
}


export default UploadButton