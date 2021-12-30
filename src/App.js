import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  state = {
    defaultimg: "http://www.tgsin.in/images/joomlart/demo/default.jpg",
  };
  imgHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ defaultimg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { defaultimg } = this.state;
    return (
      <div className="container">
        <div className="sidebar"></div>

        <div className="image-holder">
          <div className="main-image">
            <img src={defaultimg} alt="Upload an image here!" className="img" />
            <div className="upload">
              <a>
                <input
                  type="file"
                  name="img-upload"
                  id="input"
                  accept="image/*"
                  onChange={this.imgHandler}
                />
              </a>
              <label htmlFor="input" className="img-upload" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
