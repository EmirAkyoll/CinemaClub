import { useState, useEffect, DetailedHTMLProps, HTMLAttributes } from 'react';
import ReactDOM from 'react-dom';

const usePortal = (id: string) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [portalContainer, setPortalContainer] = useState<any>(null);

  useEffect(() => {
    // create portal container element
    const container = document.createElement('div');
    container.id = id;
    document.body.appendChild(container);
    setPortalContainer(container);

    // set mounted state to true
    setMounted(true);

    // cleanup function to remove the portal container element
    return () => {
      document.body.removeChild(container);
      setPortalContainer(null);
    };
  }, [id]);

  return (children: any) => {
    if (!mounted || !portalContainer) {
      return null;
    }

    return ReactDOM.createPortal(children, portalContainer);
  };
};

export default usePortal;
