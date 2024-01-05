// react
import { createContext, useCallback, useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";

// context
export const DragDropContext = createContext();

const DragDropProvider = ({ children }) => {
  const containerRefs = useRef([]);
  const [containers, setContainers] = useState([]);
  const [draggedElId, setDraggedElId] = useState(null);

  const findPositions = useCallback((refs) => {
    return refs.current.map((el) => {
      const id = el.id.toLowerCase();
      const { top, right, bottom, left } = el.getBoundingClientRect();

      return {
        id,
        positions: {
          top: top,
          right: right,
          bottom: bottom,
          left: left,
        },
      };
    });
  }, []);

  // test

  // useEffect
  useEffect(() => {
    setContainers(findPositions(containerRefs));
  }, [containerRefs]);

  const findDropContainer = (e, containers) => {
    const touchX = e.changedTouches[0]?.clientX + window.pageXOffset;
    const touchY = e.changedTouches[0]?.clientY + window.pageYOffset;

    const currentDropContainer = containers.find((el) => {
      return (
        touchX >= el.positions.left &&
        touchX <= el.positions.right &&
        touchY >= el.positions.top &&
        touchY <= el.positions.bottom
      );
    });

    return currentDropContainer.id;
  };

  const updateTasks = (e, containers) => {
    const newContainer = findDropContainer(e, containers);
    console.log(newContainer);
  };

  // const findDropContainer = (e, containers) => {
  //   const touchX = e.changedTouches[0]?.clientX;
  //   const touchY = e.changedTouches[0]?.clientY;

  //   console.log("Touch Coordinates:", touchX, touchY);

  //   const currentDropContainer = containers.find((el) => {
  //     const isInside =
  //       touchX >= el.positions.left &&
  //       touchX <= el.positions.right &&
  //       touchY >= el.positions.top &&
  //       touchY <= el.positions.bottom;

  //     console.log(`Container ${el.id}: ${isInside ? "Inside" : "Outside"}`);

  //     return isInside;
  //   });

  //   if (currentDropContainer) {
  //     console.log("Current Drop Container ID:", currentDropContainer.id);
  //   } else {
  //     console.log("No container found");
  //   }
  // };

  const valueObj = {
    containerRefs,
    containers,
    findPositions,
    findDropContainer,
    setDraggedElId,
    updateTasks,
  };

  return (
    <DragDropContext.Provider value={valueObj}>
      {children}
    </DragDropContext.Provider>
  );
};

DragDropProvider.propTypes = {
  children: PropTypes.any,
};

export default DragDropProvider;
