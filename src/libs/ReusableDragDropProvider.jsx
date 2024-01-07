// react
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

import { PropTypes } from "prop-types";

export const createDragDropContext = () => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const dropContainersRef = useRef([]);
    const [containers, setContainers] = useState([]);

    // const [containerHeightChanged,setContainerHeightChanged] = useState

    // find the x and y coordinates and id of the drop containers
    const findPositions = useCallback((refs) => {
      return refs.current.map((el) => {
        const id = el.id.toLowerCase();
        const { top, right, bottom, left } = el.getBoundingClientRect();

        return {
          id,
          positions: {
            top: top + window.pageYOffset,
            right: right + window.pageXOffset,
            bottom: bottom + window.pageYOffset,
            left: left + window.pageXOffset,
          },
        };
      });
    }, []);

    // function for detecting drop container id
    const findDropContainerId = useCallback(
      (e, dropContainersRef, device) => {
        const containers = findPositions(dropContainersRef);
        let pointX, pointY;

        if (device === "touch") {
          pointX = e.changedTouches[0]?.clientX;
          pointY = e.changedTouches[0]?.clientY;
        }

        if (device === "mouse") {
          pointX = e.clientX;
          pointY = e.clientY;
        }

        pointX = pointX + window.pageXOffset;
        pointY = pointY + window.pageYOffset;

        const currentDropContainer = containers.find((el) => {
          return (
            pointX >= el.positions.left &&
            pointX <= el.positions.right &&
            pointY >= el.positions.top &&
            pointY <= el.positions.bottom
          );
        });

        if (
          !currentDropContainer ||
          currentDropContainer.id ===
            e.target.closest(".drop-target").id.toLowerCase()
        ) {
          return undefined;
        }
        return currentDropContainer.id;
      },
      [findPositions]
    );

    const valueObj = {
      containers,
      findDropContainerId,
      dropContainersRef,
      setContainers,
      findPositions,
    };

    return <Context.Provider value={valueObj}>{children}</Context.Provider>;
  };

  Provider.propTypes = {
    children: PropTypes.node,
  };

  const useProvider = () => {
    return useContext(Context);
  };

  return { Provider, useProvider };
};
