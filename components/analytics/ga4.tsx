import Script from "next/script"

/**
 * ID de medición de GA4. Es público —viaja en el HTML de cualquier visita— así
 * que va como valor por defecto para que la medición funcione aunque nadie
 * cargue la variable en Vercel. Se puede pisar con `NEXT_PUBLIC_GA4_ID`.
 */
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "G-PFDSYDQPN7"

/**
 * Google Analytics 4 por gtag.js.
 *
 * OJO con la convivencia: gtag usa el `dataLayer` como cola de comandos, no
 * como bus de eventos. Un `dataLayer.push({event: "form_submit"})` —que es lo
 * que hace `components/cimat/track.ts`— gtag lo ignora por completo. Por eso
 * `track()` llama además a `gtag("event", ...)` cuando gtag está presente.
 *
 * Si más adelante se instala GTM, los dos conviven sin tocar nada: GTM lee los
 * pushes al dataLayer y gtag recibe sus llamadas directas.
 */
export function GoogleAnalytics() {
  if (!GA4_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');`}
      </Script>
    </>
  )
}
