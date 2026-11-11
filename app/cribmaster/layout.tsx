import type { Metadata } from "next"
import { WhatsappPaso } from "@/components/whatsapp-paso"

/**
 * Layout de la landing CribMaster. Igual que /cimat: sin `Providers`
 * (next-themes), todo en claro forzado.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.jeren.com"),
}

export default function CribmasterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <WhatsappPaso campana="cribmaster" />
    </>
  )
}
