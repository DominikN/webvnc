import { h } from 'preact';

import { useEffect, useRef } from 'preact/hooks';
import { RFB } from 'novnc';

const RemoteDesktopViewer = ({ url }) => {
  const vncContainerRef = useRef(null);

  useEffect(() => {
    const vncContainer = vncContainerRef.current;
    const rfb = new RFB(vncContainer, url);

    return () => {
      rfb.disconnect();
    };
  }, [url]);

  return <div ref={vncContainerRef} />;
};

export default RemoteDesktopViewer;
