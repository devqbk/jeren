import Script from "next/script"

/**
 * ID del contenedor. Como el de GA4, es público: viaja en el HTML de cualquier
 * visita. Va por defecto para no depender de que se cargue en Vercel, y se
 * puede pisar con `NEXT_PUBLIC_GTM_ID`.
 */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-T5J4LJMK"

/**
 * Google Tag Manager.
 *
 * OJO al configurar el contenedor: GA4 ya está instalado directo por gtag.js
 * (`components/analytics/ga4.tsx`). NO agregar adentro de GTM una etiqueta de
 * Google con el mismo `G-…`, porque se cuentan las páginas vistas dos veces.
 * GTM acá es para la etiqueta de conversión de Google Ads.
 *
 * El `dataLayer` se inicializa en `beforeInteractive`, ANTES del contenedor.
 * Sin eso, los eventos que `components/cimat/track.ts` empuja apenas hidrata
 * la página se pierden — y el primero de todos es `cta_click`, que es
 * justamente el que necesita la campaña.
 */
export function GoogleTagManager() {
  const id = GTM_ID
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
  const id = GTM_ID
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
