import React, { useState, useEffect} from 'react';
const MouseTracker = () => {
  const [ positions, setPositions ] = useState({x: 0, y: 0})
  useEffect(() => {
    const updateMouse = (event) => {
      setPositions({x: event.clientX,y: event.clientY})
    }
    document.addEventListener('click', updateMouse)
    return () => {
      document.removeEventListener('click', updateMouse)
    }
  })
  return (
    <p>X: {positions.x}, Y: {positions.y}</p>
  )
}
export default MouseTracker