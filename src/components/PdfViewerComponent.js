import {useRef, useLayoutEffect, useState} from "react";

import PSPDFKit from "pspdfkit"

export default function PdfViewerComponent({document}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current
    let instance;
    (async function() {
      instance = await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,
        // The document to open.
        document: document,
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}/`,
        licenseKey: process.env.LICENSE_KEY
      });
    })();
    return () => {
      return container && PSPDFKit.unload(container)
    }
  }, [document]);


  return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh"}}/>
  );
}
