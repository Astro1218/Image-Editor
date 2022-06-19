import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useObserver } from "mobx-react";

import { ReactComponent as Close } from "../../assets/close.svg";
import useStore from "../../hooks/useStore";

import ToolbarCrop from "./ToolbarCrop";
import ToolbarRotate from "./ToolbarRotate";
import ToolbarFilter from "./ToolbarFilter";
import ToolbarDrawing from "./ToolbarDrawing";
import ToolbarText from "./ToolbarText";
import ToolbarEffects from "./ToolbarEffects";
import ToolbarOverlay from "./ToolbarOverlay";

const Toolbar: React.FC = () => {
  const { UIStore, canvasStore } = useStore();
  const contentMap: {[name: string]: JSX.Element} = {
    Transform: <ToolbarCrop />,
    Rotate: <ToolbarRotate />,
    Filter: <ToolbarFilter />,
    Adjust: <ToolbarEffects />,
    Text: <ToolbarText />,
    Drawing: <ToolbarDrawing />,
    Overlay: <ToolbarOverlay />,
  };

  const nodeRef = React.useRef(null);

  return useObserver(() => (
    <TransitionGroup component={null}>
      {UIStore.isToolbarOpen && (
        <CSSTransition
          timeout={600}
          classNames="toolbar"
          nodeRef={nodeRef}
        >

          <section className={`toolbar custom-scrollbar ${
            canvasStore.mode === "search" ? "toolbar_search" : ""
          }`}>
            <div className="toolbar__header">
              <h4 className="toolbar__title">{canvasStore.mode}</h4>
              <Close onClick={() => {
                canvasStore.resetToBaseScale();
                UIStore.closeToolbar();
              }}/>
            </div>
            {contentMap[canvasStore.mode]}
          </section>
        </CSSTransition>
      )}
    </TransitionGroup>
  ));
};

export default Toolbar;