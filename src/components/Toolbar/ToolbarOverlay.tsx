import React from "react";
import { useObserver } from "mobx-react";
import Slider from "../Slider";
import useStore from "../../hooks/useStore";

const ToolbarOverlay: React.FC = () => {
    const {imageStore: image} = useStore();
    const img_style = { width : "100px", height : "100px", marginBottom : "10px" , border : "1px solid #fff" };
    const overlayImageArray = [
      "assets/img/overlay/content/1.jpg",
      "assets/img/overlay/content/2.jpg",
      "assets/img/overlay/content/3.jpg",
      "assets/img/overlay/content/4.jpg",
      "assets/img/overlay/content/5.jpg",
      "assets/img/overlay/content/6.jpg",
      "assets/img/overlay/content/7.jpg",
      "assets/img/overlay/content/8.jpg",
      "assets/img/overlay/content/9.jpg",
      "assets/img/overlay/content/10.jpg",
      "assets/img/overlay/content/11.jpg",
    ];

  return useObserver(() => (
    <div className="toolbar__content">
    <Slider
      title="Opacity"
      value={Math.round(image.effects.overlayopacity * 100)}
      min={0}
      max={100}
      callback={(value) => (image.effects.overlayopacity = value / 100)}
    />
    <div
      className="image-pin-list"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src = "assets/img/overlay/toolbar/1.jpg"
        loading="lazy"
        style={img_style}
        alt = "overlay1"
        onClick={() => {
          image.effects.overlayimg = overlayImageArray[0];
        }}
      />

      <img
        src = "assets/img/overlay/toolbar/2.jpg"
        loading="lazy"
        style={img_style}
        alt = "overlay2"
        onClick={() => {
          image.effects.overlayimg = overlayImageArray[1];
        }}
      />

      <img
        src = "assets/img/overlay/toolbar/3.jpg"
        loading="lazy"
        style={img_style}
        alt = "overlay3"
        onClick={() => {
          image.effects.overlayimg = overlayImageArray[2];
        }}
      />

      <img
        src = "assets/img/overlay/toolbar/4.jpg"
        loading="lazy"
        style={img_style}
        alt = "overlay4"
        onClick={() => {
          image.effects.overlayimg = overlayImageArray[3];
        }}
      />

      <img
        src = "assets/img/overlay/toolbar/5.jpg"
        loading="lazy"
        style={img_style}
        alt = "overlay5"
        onClick={() => {
          image.effects.overlayimg = overlayImageArray[4];
        }}
      />

      <img
        src = "assets/img/overlay/toolbar/6.jpg"
        loading="lazy"
        style={img_style}
        alt = "overlay6"
        onClick={() => {
          image.effects.overlayimg = overlayImageArray[5];
        }}
      />
      
      <img
        src = "assets/img/overlay/toolbar/7.jpg"
        loading="lazy"
        style={img_style}
        alt = "overlay7"
        onClick={() => {
          image.effects.overlayimg = overlayImageArray[6];
        }}
      />

      <img
        src = "assets/img/overlay/toolbar/8.jpg"
        loading="lazy"
        style={img_style}
        alt = "overlay8"
        onClick={() => {
          image.effects.overlayimg = overlayImageArray[7];
        }}
      />

      <img
        src = "assets/img/overlay/toolbar/9.jpg"
        loading="lazy"
        style={img_style}
        alt = "overlay9"
        onClick={() => {
          image.effects.overlayimg = overlayImageArray[8];
        }}
      />

      <img
        src = "assets/img/overlay/toolbar/10.jpg"
        loading="lazy"
        style={img_style}
        alt = "overlay10"
        onClick={() => {
          image.effects.overlayimg = overlayImageArray[9];
        }}
      />

      <img
        src = "assets/img/overlay/toolbar/11.jpg"
        loading="lazy"
        style={img_style}
        alt = "overlay11"
        onClick={() => {
          image.effects.overlayimg = overlayImageArray[10];
        }}
      />
    </div>
    <button
      className="toolbar__action-btn"
      onClick={() => {
        image.effects.overlayimg = "";
      }}
    >
      Reset
    </button>
  </div>
  ));
};

export default ToolbarOverlay;