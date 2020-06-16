import React, { Component } from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import uploader from '../assets/uploader.png';

import { Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

import { getDroppedOrSelectedFiles } from 'html5-file-selector';






class DropZone extends Component{

  constructor(props) {
      super(props);

      this.sendToStore = this.sendToStore.bind(this);
  }

  sendToStore(files) {
      this.props.sendFiles(files)
  }

	render(){

		const customInput = () => {
            return (
                <div>
                    <div className="uploader-icon">
                        <img style={{width: '50px'}} src={uploader} alt="uploader icon" />
                    </div>
                    <div style={{fontSize: '12px', marginTop: '15px'}} >
                        <p style={{color: '#7e8c95', opacity: 0.6}} >JPG, PNG or PDF, smaller than 10MB </p>
                        <div style={{ paddingLeft:'10px'}}><p style={{ color: '#2a2c30', opacity: 0.6}} >Drag files here or click to browse</p></div>
                    </div>
                </div>
            )
        }

        const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }) => {
          return (
            <>
              <div {...dropzoneProps}>
                {files.length < maxFiles && input}
              </div>
              
              {previews}

              {files.length > 0 && submitButton == null}
            </>
          )
        }

         // specify upload params and url for your files
        const getUploadParams = () => ({ url: 'https://httpbin.org/post' })
        
        // receives array of files that are done uploading when submit button is clicked
        const handleSubmit = (files, allFiles) => {
          console.log(files.map(f => f.meta))
          allFiles.forEach(f => f.remove())
        }


        const Input = ({ accept, onFiles, files, getFilesFromEvent }) => {
          const text = files.length > 0 ? 'Add more files' : 'Choose files'

          return (
            <label style={{ backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', padding: 15, borderRadius: 3 }}>
              {text}
              <input
                style={{ display: 'none' }}
                type="file"
                accept={accept}
                multiple
                onChange={e => {
                  getFilesFromEvent(e).then(chosenFiles => {
                    onFiles(chosenFiles)
                  })
                }}
              />
            </label>
          )
        }

        const getFilesFromEvent = e => {
          return new Promise(resolve => {
            getDroppedOrSelectedFiles(e).then(chosenFiles => {
              resolve(chosenFiles.map(f => console.log(f.fileObject)))
            })
          })
        }


		return(

			<>
				<Dropzone 
          accept="image/*"
          getUploadParams={getUploadParams}
          LayoutComponent={Layout}
          inputContent={customInput}
          styles={{ dropzone: { backgroundColor: '#f9fbfc',
                    border: 'solid 1px #dfdfe7', borderRadius: '5px',
                    width: '100%', height: 200  } }}
        />

			</>

		)
	}
}

export default DropZone;