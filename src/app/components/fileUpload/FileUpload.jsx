import React, { Component } from 'react';
import { View, Mask } from 'mdbreact';
import './FileUpload.css';
import upload from './../../assets/upload.svg';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: upload
    };
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { imagePreviewUrl } = this.state;
    return (
      <div className="file-upload">
        <label htmlFor="upload" className="file-upload__label">
          <View>
            <img
              src={imagePreviewUrl}
              className="img-fluid"
              width="300"
              alt=""
            />
            <Mask className="flex-center image-overlay">
              <p className="white-text">Select image</p>
            </Mask>
          </View>
        </label>
        <input
          id="upload"
          className="file-upload__input"
          type="file"
          name="file-upload"
          onChange={e => this.handleImageChange(e)}
        />
      </div>
    );
  }
}

export default FileUpload;
