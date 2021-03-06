import React, { Component } from "react";
import Dropzone from 'react-dropzone';
import styled from 'styled-components';


class Upload extends Component {
    constructor() {
        super();
        this.onDrop = (files) => {
          this.setState({files})
        };
        this.state = {
          files: []
        };
      }
    
    Upload() {
        alert("File Uploaded...");
    }
    
  render() {
  
        const files = this.state.files.map(file => (
          <li key={file.name}>
            {file.name} - {file.size} bytes
          </li>
        ));
    
    return (
      <StyledWrapper>
          <h1>Drag and Drop here</h1>
          <Dropzone 
          onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section     >
            <div  style={border} {...getRootProps({className: 'dropzone'})}>
              <input   {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
          <input type="file"/>
          <button onClick={this.Upload}>Upload</button>
      </StyledWrapper>
    );
  }
}

export default Upload;

const StyledWrapper = styled.div`
 text-align: center;
`;


const border = {
  height: '200px',
  width: '700px',
  display: 'inline-block',
  border: '1px dotted black',
};
