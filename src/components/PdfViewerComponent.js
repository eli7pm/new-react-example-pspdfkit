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
        licenseKey: "bEQpse3IYlLiE9KzDMFwN4JzSuBo1pUQOsofZLgmQoFglhEwNjicbEM8hW7I_gkr0_w09TfHsykm2bon76qeNgSLsbeC0hnQa24nxsyzQJKXrF4qeA1-mQTgQDCPrY4CudBDecbshdXvyx8auo14hn7iogNz--6Y1ZK0pNLim12vVpsx3QYmc3GTuRjN7Crz1Mn2dZVn712wOGbuuSW6NMHb1QBD6idpoGKhjcOZMdXXS2P7n57_koiVxQZbnGmlWrYW5Kb86BajbDRkNHKAGzbRPl-3ofok4pzOkcP9GwyzqY1SQIqIGgeiwt98XxOi9Y5FiQVakmRo9lGMp4XssWXWTwIMFJeyNTRxH9_hWw7DFfTIf9CTOzC9yKMkPotBKTDu4zI0kGVG2nURnLs0VjRyzez9K73-HlWKWvi3efR7Xdt6YgXAkQgNYujkUQPNeMb-nRXHFhz6kgkoXXftCcZPBI8TNFhQSNGzRjJkAu7UKxZ7NnMp0oNKsnvp_wML4pM-FOyQg8207Ht5LqHNOUS2ZA9-V1Trggpfo-5TdyJS9qq72X3FwDR3WavDEo43ZNFg_JlnNFsXrmwXkFWjVBwKWTQvlhPs09D24OhUkqL-atBVKFcYtiOJM0Y3i9kF"
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
