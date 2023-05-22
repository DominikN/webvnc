import { h } from "preact";

import { useRef } from 'preact/hooks';

// https://www.npmjs.com/package/react-vnc
import { VncScreen } from 'react-vnc';

function App() {
  const ref = useRef();

  return (
    <VncScreen
      url='ws://localhost:5902'
      scaleViewport
      background="#000000"
      style={{
        width: '75vw',
        height: '75vh',
      }}
      ref={ref}
    />
  );
}

export default App;
