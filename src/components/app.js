import { h } from "preact";
import { useRef, useState, useEffect } from 'preact/hooks';
import { VncScreen } from 'react-vnc';
import { MantineProvider, Flex, AppShell, Header, TextInput, Button, Text } from '@mantine/core';

function App() {
  const ref = useRef();
  const url = `ws://${window.location.hostname}:5902`;

  // Set the initial credentials state
  const [password, setPassword] = useState('');
  const [rfbOptions, setRfbOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordSubmit = (event) => {
    event.preventDefault();

    setRfbOptions({
      credentials: {
        password: password,
      },
    });

    // if (password === 'qwerty') {
    //   setRfbOptions({
    //     credentials: {
    //       password: password,
    //     },
    //   });
    //   setErrorMessage('');
    // } else {
    //   setErrorMessage('Invalid password');
    // }
  };

  const handleSecurityFailure = (e) => {
    console.log(e);
    if(e.detail.status === 1) {  // According to the VNC protocol, status code 2 represents an authentication error
      setErrorMessage('Wrong password, please try again');
      setRfbOptions({});  // Reset rfbOptions to prompt for password again
    } else {
      setErrorMessage(`Security failure: ${e.detail.reason}`);
    }
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
        {!rfbOptions.credentials && (
          <form onSubmit={handlePasswordSubmit}>
            <TextInput
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{ marginBottom: '1rem' }}
            />
            {errorMessage && (
              <Text color="red" size="sm" style={{ marginBottom: '1rem' }}>
                {errorMessage}
              </Text>
            )}
            <Button type="submit">Submit</Button>
          </form>
        )}

        {rfbOptions.credentials && (
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
            onSecurityFailure={handleSecurityFailure}
          />
        )}
      </Flex>
    </MantineProvider>
  );
}

export default App;