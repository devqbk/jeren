import type { Metadata } from "next"

/**
 * Layout de la landing CribMaster. Igual que /cimat: sin `Providers`
 * (next-themes), todo en claro forzado.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.jeren.com"),
}

export default function CribmasterLayout({ children }: { children: React.ReactNode }) {
  return children
}
