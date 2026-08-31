import Script from "next/script"

/**
 * Google Tag Manager.
 *
 * Se monta solo si está `NEXT_PUBLIC_GTM_ID`, así que el sitio funciona igual
 * sin la variable: no hay que tocar código para apagarlo.
 *
 * El `dataLayer` se inicializa en `beforeInteractive`, ANTES del contenedor.
 * Sin eso, los eventos que `components/cimat/track.ts` empuja apenas hidrata
 * la página se pierden — y el primero de todos es `cta_click`, que es
 * justamente el que necesita la campaña.
 */
export function GoogleTagManager() {
  const id = process.env.NEXT_PUBLIC_GTM_ID
  if (!id) return null

  return (
    <>
      <Script id="gtm-datalayer" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];`}
      </Script>
      <Script id="gtm-loader" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`}
      </Script>
    </>
  )
}

/** Fallback sin JavaScript. Va apenas abre el <body>. */
export function GoogleTagManagerNoScript() {
  const id = process.env.NEXT_PUBLIC_GTM_ID
  if (!id) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${id}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
