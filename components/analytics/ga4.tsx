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
 * GTM ya está instalado (`gtm.tsx`) y los dos conviven: GTM lee los pushes al
 * dataLayer y gtag recibe sus llamadas directas.
 *
 * PENDIENTE (fase 3 de Ads CIMAT, 10/09/2026): GA4 tendría que vivir adentro
 * de GTM y este gtag directo desaparecer de `/cimat`, para tener un tercero
 * menos en la landing paga. Hoy el contenedor NO tiene etiqueta de GA4 (ver la
 * advertencia en `gtm.tsx`), así que sacar esto dejaría a GA4 sin eventos.
 * Orden correcto: 1) agregar en GTM la etiqueta de Google con este `G-…` y
 * disparar los eventos de `components/cimat/track.ts` desde ahí; 2) recién
 * entonces borrar este componente y la llamada a `window.gtag` en `track()`.
 */
export function GoogleAnalytics() {
  if (!GA4_ID) return null

  return (
    <>
      {/* gtag.js va con `lazyOnload`: con `afterInteractive` Next agrega un
          <link rel="preload"> de prioridad alta (180 KiB) que compite con el CSS
          y la fuente del primer pantallazo. Lighthouse mobile en producción,
          28/09: LCP de 5,0 s en /cimat y de 8,1 a 8,6 s en las subpáginas, con
          este script como el más pesado de la página.

          Se inyecta a mano para avisar cuándo terminó (`ga4:cargado`): GTM
          espera ese aviso (ver `gtm.tsx`). Si los dos cargan a la vez, la
          etiqueta de Google del contenedor no encuentra gtag y baja una
          segunda copia del mismo G-…: 180 KiB más y riesgo de contar doble.

          La cola de comandos (`ga4-config`) sigue corriendo temprano:
          `window.gtag` existe desde la hidratación y lo que se dispare antes
          queda en el dataLayer hasta que gtag.js lo procese.

          En localhost GA4 queda apagado (`ga-disable-<id>`, el opt-out oficial
          de gtag): las pruebas locales del 28/09 metieron 25 sesiones y 8
          `form_error` falsos en la propiedad (11% del periodo). */}
      <Script id="ga4-config" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) { window['ga-disable-${GA4_ID}'] = true; }
window.__ga4Pendiente = true;
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');`}
      </Script>
      <Script id="ga4-loader" strategy="lazyOnload">
        {`(function(){var s=document.createElement('script');s.async=true;
s.src='https://www.googletagmanager.com/gtag/js?id=${GA4_ID}';
function listo(){window.__ga4Cargado=true;window.dispatchEvent(new Event('ga4:cargado'));}
s.onload=listo;s.onerror=listo;document.head.appendChild(s);})();`}
      </Script>
    </>
  )
}
