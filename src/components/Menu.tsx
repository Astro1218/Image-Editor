import React from "react";
import { ReactComponent as Tranform } from "../assets/transform.svg";
import { ReactComponent as Flip } from "../assets/flip.svg";
import { ReactComponent as Draw } from "../assets/pencil.svg";
import { ReactComponent as Text } from "../assets/text.svg";
import { ReactComponent as Adjust } from "../assets/adjust.svg";
import { ReactComponent as Filter } from "../assets/filter.svg";
import { ReactComponent as Overlay } from "../assets/overlay.svg";
import Tooltip from "./Tooltip";
import useStore from "../hooks/useStore";
import { useObserver } from "mobx-react";
import { ModeName } from "../stores/canvasStore";

interface IMenuItems {
  icon: React.ReactElement;
  name: ModeName;
  handler: () => void;
  tooltip?: string;
}

const Menu: React.FC = () => {
  const { UIStore, canvasStore, imageStore } = useStore();

  const handleClick = (modeName: ModeName) => {
    if (!imageStore.url && modeName !== "search") {
      return;
    }

    UIStore.toggleToolbar(modeName);

    if (canvasStore.mode && canvasStore.scale !== 1) {
      if (canvasStore.mode !== "search") {
        canvasStore.setScale(1);
      }
    }

    if (!canvasStore.mode) {
      canvasStore.resetToBaseScale();
    }
  };

  const items: IMenuItems[] = [
    {
      icon: <Tranform />,
      name: "Transform",
      handler: () => handleClick("Transform"),
    },
    {
      icon: <Flip />,
      name: "Rotate",
      handler: () => handleClick("Rotate"),
    },
    {
      icon: <Filter />,
      name: "Filter",
      handler: () => handleClick("Filter"),
    },
    {
      icon: <Adjust />,
      name: "Adjust",
      handler: () => handleClick("Adjust"),
    },
    {
      icon: <Text />,
      name: "Text",
      handler: () => handleClick("Text"),
    },
    {
      icon: <Draw />,
      name: "Drawing",
      handler: () => handleClick("Drawing"),
    },
    {
      icon: <Overlay />,
      name: "Overlay",
      handler: () => handleClick("Overlay"),
    },
  ];
  return useObserver(() => (
    <section className="menu">
      <div className="menu__wrapper">
        {items.map((item, index) => {
          const tooltip = item.tooltip || item.name;
          return (
            <Tooltip key={index} content={tooltip} placement="right">
              <div
                className={`menu__item ${
                  canvasStore.mode === item.name ? "menu__item_active" : ""
                } ${!imageStore.url && item.name !== "search" ? "disabled" : ""}`}
                onClick={item.handler}
              >
                {item.icon}
              </div>
            </Tooltip>
          );
        })}
      </div>
    </section>
  ));
};

export default Menu;