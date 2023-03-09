import {useRef, useLayoutEffect, useEffe} from "react";

import PSPDFKit from "pspdfkit"

export default function PdfViewerComponent({document}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current
    let instance;
    document && (async function() {
      instance = await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,
        // The document to open.
        document: document,
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}/`,
        licenseKey: 'XJrs7vjFNGxYLf1hHEZPET-91IzwphAjJF843PEQERXygJMsiLeWN1L45iKhq8UT4JGZ1w7cmQC385kBA3bCw2DSErja3Z_u9ikBH-MD0IcSt0BO3JS3qh00I68J6xpYFxDQv-yxyszvk3-qyDxWQggru0txSvcidYQH2-4WX284n9nvZ70JT4O0SaPHVV-VB5S4VGEhv3HjR6tLv-MN73nwRer0nOFsBNX6aoMyfSnenLdDajmat3tIES2jPEc2SdCtsB_Nja4cLa1qOKOfWgGkeZ2xogmiOn8j7LPLARhF_Awg_TnaBFentsCWkNyMBLHddw6UDV6fve1Nc_MVck7kT7YDGzQt16mwbJ9qW6OwaRl6gF8qqauEnlyVsk8bka95YX7Fj7q-vj5zWV6tzL5lRc4r2qw9-pQxj94fYI_8GVnXucMkwYuJ4dOj_y2JRxFP58xG3zHZ_-GQ2UlkIwpVcpSBz8pk9MABDqVe21CPw8Mb44rM5X1xRmSxTjKV25AkgCOsq1ros6i9yRZSmZ2IYs7sRAVoL0QC5DDiATC62Tjg_HO2w_YalybO2kMAdCugxXt7PQkRKIzuV-Ffi71lYwFxhHc2FCGq2Vjf0QUycRln8Q_v7ijxsBeNs8W2'
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
