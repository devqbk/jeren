/**
 * Tokens de la landing CribMaster.
 *
 * Reusa la maquinaria de `components/cimat/ui` (Section, Eyebrow, SectionTitle,
 * Lead...), que lee variables `--c-*` en el scope `[data-cimat]`. Acá se
 * redefinen bajo `[data-cribmaster]` con la dirección de arte de la marca:
 * negro como color de acción y el amarillo CribMaster como acento (regla,
 * selección, detalles). El amarillo no va de fondo de botón: con texto blanco
 * no pasa contraste.
 */
export function CribmasterTokens() {
  return (
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
[data-cribmaster]{
  --c-ink:#111111;
  --c-ink-2:#3c3c3c;
  --c-muted:#6d6d6d;
  --c-paper:#ffffff;
  --c-surface:#f1f1ef;
  --c-surface-2:#f7f7f5;
  --c-line:#e4e4e4;
  --c-dark:#0b0b0c;
  --c-dark-2:#161617;
  --c-accent:#111111;
  --c-accent-hover:#2b2b2b;
  --c-accent-2:#f6b400;
  --c-jeren:#0a2540;
  --c-jeren-2:#123c63;
  --c-grad:linear-gradient(90deg,#f6b400,#ffd24d);
  color:var(--c-ink);
  background:var(--c-paper);
}
[data-cribmaster] ::selection{background:#ffe9a8;color:#111111;}
[data-cribmaster] :focus-visible{outline:2px solid var(--c-accent-2);outline-offset:2px;}
[data-cribmaster] .c-rule{height:3px;width:56px;background:var(--c-grad);border-radius:2px;}
[data-cribmaster] .cm-yellow{color:var(--c-accent-2);}
`,
      }}
    />
  )
}
