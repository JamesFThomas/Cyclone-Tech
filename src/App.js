import { useState, useEffect } from 'react'
import './App.css';

const App = () => {
  const [width, setWindowWidth] = useState(0);

  const [height, setWindowHeight] = useState(0);


  const updateWindow = () => {

    const iWidth = window.document.body.clientWidth

    const iHeight = window.innerHeight

    setWindowWidth(iWidth)

    setWindowHeight(iHeight)

  }

  useEffect(() => {

    updateWindow();

    window.addEventListener('resize', updateWindow)

    return () =>
      window.removeEventListener('resize', updateWindow)

  }, [])



  return (
    <div className="App container" style={{ 'height': height, 'width': width, 'background-color': 'aqua' }}>
      <h1> {`Container // width: ${width}px & height: ${height}px`} </h1>

    </div>
  );
}

export default App;
