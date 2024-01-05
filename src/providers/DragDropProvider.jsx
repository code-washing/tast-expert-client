// react
import { createContext, useCallback, useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";

// context
export const DragDropContext = createContext();

const DragDropProvider = ({ children }) => {
  const containerRefs = useRef([]);
  const [pointerX, setPointerX] = useState(0);
  const [pointerY, setPointerY] = useState(0);

  // useEffect
  useEffect(() => {
    if (containerRefs.current.length > 0) {
      containerRefs.current.forEach((value) => {});
    }
  }, []);

  const collectPositions = useCallback((ref, el) => {
    if (!ref.current.includes(el) && el !== null) {
      const { top, right, bottom, left } = el.getBoundingClientRect();
      const id = el.id.toLowerCase();
      ref.current.push({ id, position: { top, right, bottom, left } });
    }
  }, []);

  const findDropContainer = (e) => {
    const touchX = e.changedTouches[0]?.clientX;
    const touchY = e.changedTouches[0]?.clientY;

    console.log([...new Set(containerRefs.current)]);
  };

  const valueObj = {
    containerRefs,
    collectPositions,
    pointerX,
    pointerY,
    setPointerX,
    setPointerY,
    findDropContainer,
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
