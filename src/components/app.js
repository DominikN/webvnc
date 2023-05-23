import { h } from "preact";

import { useRef, useState, useEffect } from 'preact/hooks';

// https://www.npmjs.com/package/react-vnc
import { VncScreen } from 'react-vnc';

import { MantineProvider, Flex, AppShell, Header } from '@mantine/core';

function App() {
  const ref = useRef();

  let url = `ws://${window.location.hostname}:5902`;

  // // Set the initial credentials state
  const [rfbOptions, setRfbOptions] = useState({
    ...rfbOptions, // Keep the rest of the RFB options unchanged
    credentials: {
      password: 'qwerty',  // Replace 'yourPasswordHere' with your actual password
    },
  });

  // Set the initial credentials state
  // const [rfbOptions, setRfbOptions] = useState({});

  // useEffect(() => {
  //   setRfbOptions({
  //     ...rfbOptions, // Keep the rest of the RFB options unchanged
  //     credentials: {
  //       password: 'qwerty',  // Replace 'yourPasswordHere' with your actual password
  //     },
  //   });

  // }, []);

  // Define the onCredentialsRequired callback function
  const onCredentialsRequired = () => {
    // For the sake of this example, we're using a fixed password
    // In a real application, you might prompt the user for this, or get it from a secure location
    console.log('onCredentialsRequired');
    setRfbOptions({
      ...rfbOptions, // Keep the rest of the RFB options unchanged
      credentials: {
        password: 'qwerty',  // Replace 'yourPasswordHere' with your actual password
      },
    });
  };



  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: "dark" }}>
      <Flex
        justify="center"
        align="center"
        direction="column"
        gap="lg"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          maxWidth: '50%',
        }}
      >
        
        <VncScreen
          url={url}
          rfbOptions={rfbOptions}

          scaleViewport
          background="#000000"
          style={{
            width: '75vw',
            height: '75vh',
          }}
          ref={ref}
          // onCredentialsRequired={onCredentialsRequired}
        />
      </Flex>
    </MantineProvider >
  );
}

export default App;
