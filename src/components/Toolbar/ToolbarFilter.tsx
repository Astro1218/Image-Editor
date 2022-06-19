import React from "react";
import { useObserver } from "mobx-react";
import useStore from "../../hooks/useStore";

const ToolbarFilter: React.FC = () => {
    const {imageStore: image} = useStore();

    const img_style = { width : "100px", height : "100px", margin : "auto", marginBottom : "10px" , border : "1px solid #fff" };

  return useObserver(() => (
    <div className="toolbar__content">
      <div
        className="image-pin-list"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
      }}
      >
        <img
          style = {img_style}
          src = "assets/img/filter/Aden.png"
          alt = "Aden"
          onClick={ () => {
            image.effects.resetAll();
            //Aden
            image.effects.brightness = 10 / 250;
            image.effects.contrast = -10 / 250;
            image.effects.saturation = -5 / 100;
            image.effects.hue = 5 /100;
            image.effects.tintColor = "3D3D3D";
            image.effects.tintOpacity = 50 / 100;
          }}
        />

        <img
          style = {img_style}
          src = "assets/img/filter/Amaro.png"
          alt = "Amaro"
          onClick={ () => {
            image.effects.resetAll();
            //Amaro
            image.effects.brightness = 10 / 250;
            image.effects.contrast = -10 / 250;
            image.effects.saturation = 50 / 100;
            image.effects.hue = 10 /100;
          }}
        />

        <img
          style = {img_style}
          src = "assets/img/filter/Inkwell.png"
          alt = "Inkwell"
          onClick={ () => {
            image.effects.resetAll();
            //Inkwell
            image.effects.brightness = 15 / 250;
            image.effects.saturation = -250 /250;
            image.effects.tintColor = "B1B1B1";
            image.effects.tintOpacity = 100 / 100;
          }}
        />

        <img
          style = {img_style}
          src = "assets/img/filter/Lofi.png"
          alt = "Lofi"
          onClick={ () => {
            image.effects.resetAll();
            //Lofi
            image.effects.contrast = 50 / 250;
            image.effects.saturation = 10 / 100;
          }}
        />

        <img
          style = {img_style}
          src = "assets/img/filter/Maven.png"
          alt = "Maven"
          onClick={ () => {
            image.effects.resetAll();
            //Maven
            image.effects.contrast = -5 / 250;
            image.effects.brightness = -5 / 250;
            image.effects.saturation = 50 / 100;
          }}
        />

        <img
          style = {img_style}
          src = "assets/img/filter/Reyes.png"
          alt = "Reyes"
          onClick={ () => {
            image.effects.resetAll();
            //Reyes
            image.effects.contrast = -15 / 250;
            image.effects.brightness = 10 / 250;
            image.effects.saturation = -25 / 100;
            image.effects.tintOpacity = 50 / 100;
            image.effects.tintColor = "C1DCEC";
          }}
        />

        <img
          style = {img_style}
          src = "assets/img/filter/Stinson.png"
          alt = "Stinson"
          onClick={ () => {
            image.effects.resetAll();
            //Stinson
            image.effects.contrast = -26 / 250;
            image.effects.brightness = -15 / 250;
            image.effects.saturation = -15 / 100;
            image.effects.tintOpacity = 50 / 100;
            image.effects.tintColor = "7B6060";
          }}
        />

        <img
          style = {img_style}
          src = "assets/img/filter/Walden.png"
          alt = "Walden"
          onClick={ () => {
            image.effects.resetAll();
            //Walden
            image.effects.brightness = 10 / 250; 
            image.effects.saturation = 60/ 100;
            image.effects.hue = 15 / 100;
            image.effects.tintColor = "F2C0C0";
            image.effects.tintOpacity = 100 / 100;  
          }}
        />

      </div>

      <button
          className="toolbar__action-btn"
          onClick={() => image.effects.resetAll()}
      >Reset</button>

    </div>
  ));
};

export default ToolbarFilter;