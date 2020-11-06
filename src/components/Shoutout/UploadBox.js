import React from 'react';
import UploadButton from './UploadButton'
import UploadBoxStyles from './UploadBox.module.css'
import Spinner from './Spinner'
import { API_URL } from '../../config/config'

class UploadBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            files: [],
            successfullUploaded: false,
            uploading: false,
            userId: ''
        }
        this.upload = this.upload.bind(this);

        // let array = window.history.state.files;
        // this.state = array; 
        this.onFilesAdded = this.onFilesAdded.bind(this);
        if (typeof window !== 'undefined') {
            if(window.history.state){
                this.state.files = this.fileListToArray(window.history.state.files)
            }
        }
        this.sendRequest = this.sendRequest.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.delete = this.delete.bind(this);
        this.calc = this.calc.bind(this);
    }
    

    handleChange(e) {
        this.setState({
            userId: e.target.value
        })
        console.log(this.state.userId)
    }

    async upload() {
        // console.log(this.state);
        // console.log(typeof(this.state))
        // console.log(window.history.state.files)
        // console.log(typeof(window.history.state.files))

        console.log(this.state.files.length)
        const promises = [];

        this.state.files.forEach(file => {
            promises.push(this.sendRequest(file));
        });

        this.setState({ uploading: true });

        try {
            Promise.all(promises).then((values) => {
                console.log(values);
                this.setState({ successfullUploaded: true, uploading: false });
            }
            )

        } catch (e) {
            // Not Production ready! Do some error handling here instead...
            console.log(e)
            //this.setState({ successfullUploaded: true, uploading: false });
        }


        // this.sendRequest(this.state.files[0]); 
    }

    onFilesAdded(files) {
        if(this.state.files.length + files.length > 3){
            const msg = "Only 3 images can be uploaded."
            return alert(msg);
        }

        this.setState(prevState => ({
            files: prevState.files.concat(files)
        }));
    }

    async uploadFiles() {

    }

    sendRequest(file) {
        return new Promise((resolve, reject) => {

            // const req = new XMLHttpRequest();
            const formData = new FormData();
            formData.append("file", file, file.name);
            formData.append("userId", this.state.userId);
            // req.open("POST", "http://localhost:8080/image-upload");
            // req.send(formData);

            fetch(`${API_URL}/image-upload`, {
                method: 'POST',
                body: formData
            }).then(res => {
                resolve(res)
            })

        })
    }

    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    delete() {

        this.state.files.pop()
        console.log(this.state.files)
        this.setState({
            ...this.state,
            files: this.state.files
        }
        );
    }

    calc(length) {
        return 3 - length;
    }

    render() {
        const content = () => {
            switch (true) {
                case this.state.uploading:
                    return <div className={UploadBoxStyles.spinner}>
                        <Spinner isLoading={true} />
                    </div>
                case this.state.successfullUploaded:
                    return <div className={UploadBoxStyles.spinner}>
                        <Spinner isLoading={false} />
                    </div>
                default:
                    return <div className={UploadBoxStyles.container}>
                        <h2 className="mt-1 mb-4" style={{"color":"white" }}>Upload up to 3 pictures</h2>
                        <div className={UploadBoxStyles.wrapper}>
                            <div className={UploadBoxStyles.add}>
                                {this.state.files.length == 3 && <UploadButton disabled={true} uploadPage={UploadBoxStyles.uploadButton} uploadButton={UploadBoxStyles.inactive} onFilesAdded={this.onFilesAdded} />}
                                {this.state.files.length != 3 && <UploadButton disabled={false} uploadPage={UploadBoxStyles.uploadButton} uploadButton={UploadBoxStyles.inactive} onFilesAdded={this.onFilesAdded} />}
                                <div>
                                    <span className={UploadBoxStyles.addFiles}>
                                        Add more files
                            </span>
                                    {this.state.files.length == 1 && <span className={UploadBoxStyles.subTitle}>
                                        {this.state.files.length} file - {this.calc(this.state.files.length)} left
                        </span>}
                                    {this.state.files.length > 1 && <span className={UploadBoxStyles.subTitle}>
                                        {this.state.files.length} files - {this.calc(this.state.files.length)} left
                        </span>}

                                </div>
                            </div>

                            {this.state.files.length > 0 &&
                                this.state.files.map(file => {
                                    return (
                                        <div key={file.name} className={UploadBoxStyles.file}>
                                            <div className={UploadBoxStyles.fileName}>{file.name}</div>
                                            <div className={UploadBoxStyles.delete} onClick={this.delete}>
                                                <svg className={UploadBoxStyles.svg}>
                                                    <path fill="#797C7F" fill-rule="evenodd" d="M7 5.586L4.738 3.324c-.315-.315-.822-.31-1.136.003l-.186.186c-.315.315-.317.824-.004 1.137l2.262 2.262-2.35 2.35c-.315.315-.31.822.003 1.136l.186.186c.315.315.824.317 1.137.004L7 8.238l2.35 2.35c.315.315.822.31 1.137-.004l.186-.186c.314-.314.316-.823.003-1.136l-2.35-2.35 2.262-2.262c.315-.315.31-.822-.004-1.137l-.186-.186c-.314-.314-.823-.316-1.136-.003L7 5.586z">
                                                    </path>
                                                </svg>
                                            </div>
                                            {/* {this.renderProgress(file)} */}
                                        </div>
                                    );
                                })}
                        </div>

                        <div className={UploadBoxStyles.wrapper} >
                            <p style={{ color: "black" }} >Instagram Username</p>
                            <input value={this.state.userId} onChange={this.handleChange} placeholder="e.x. cottageCore"></input>
                        </div>

                        <button onClick={this.upload}>Upload</button>

                    </div>
            }
        }

        return (
            <div>
                {content()}
            </div>

        )
    }
}

//
export default UploadBox 