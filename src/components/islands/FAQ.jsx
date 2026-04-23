import { useState } from 'react';

const faqs = [
  {
    q: '¿Necesito un celular único o de última generación?',
    a: 'No. Las técnicas funcionan con cualquier celular que tenga una cámara decente. Lo importante es la luz, el encuadre y la intención — no el hardware.',
  },
  {
    q: '¿Tengo que saber de fotografía?',
    a: 'Para nada. El ebook está pensado para emprendedores sin experiencia en fotografía. Todo está explicado desde cero, con ejemplos visuales.',
  },
  {
    q: '¿Cuánto tiempo toma aplicar las técnicas?',
    a: 'Las primeras mejoras las vas a ver en tu próxima sesión, que puede durar 30–60 minutos. El contenido es directo y aplicable de inmediato.',
  },
  {
    q: '¿Sirve para cualquier tipo de producto?',
    a: 'Sí. Está especialmente enfocado en productos físicos: gastronomía, artesanías, indumentaria, accesorios, cosmética y más.',
  },
  {
    q: '¿Se puede aplicar también para servicios?',
    a: 'En parte. La sección de Instagram estratégico aplica a cualquier rubro. Para servicios, adaptá los conceptos al “producto visual\u201d de tu marca.',
  },
  {
    q: '¿En qué formato recibo el ebook?',
    a: 'En PDF digital, de entrega inmediata al confirmar el pago. Podés leerlo desde el celular, tablet o computadora.',
  },
  {
    q: '¿Cómo es el proceso de pago y entrega?',
    a: 'El pago es por transferencia bancaria. Una vez confirmado, recibís el PDF directamente por WhatsApp. Sin demoras ni formularios.',
  },
  {
    q: '¿Funciona en un departamento pequeño, sin balcón ni luz natural directa?',
    a: 'Sí. Una de las técnicas del ebook está pensada para eso: encontrar y aprovechar cualquier fuente de luz indirecta, incluso en espacios chicos.',
  },
  {
    q: '¿Puedo consultar dudas después de comprar?',
    a: 'Sí, podés escribirle directamente a Fede por WhatsApp con cualquier pregunta sobre el contenido del ebook.',
  },
];

const styles = {
  wrapper: {
    maxWidth: '720px',
    margin: '0 auto',
  },
  item: {
    borderBottom: '1px solid rgba(0,0,0,0.08)',
    padding: '4px 0',
  },
  btn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    padding: '20px 4px',
    cursor: 'pointer',
    textAlign: 'left',
    gap: '16px',
  },
  question: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.05rem',
    fontWeight: '600',
    color: 'var(--color-ink)',
    lineHeight: '1.4',
  },
  circle: (open) => ({
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: open ? 'var(--color-teal)' : 'rgba(0,0,0,0.06)',
    color: open ? 'white' : 'var(--color-ink)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    fontSize: '1.1rem',
    fontWeight: '300',
    transition: 'background .2s, color .2s',
    transform: open ? 'rotate(45deg)' : 'none',
    transitionProperty: 'background, color, transform',
  }),
  answer: {
    paddingBottom: '20px',
    paddingLeft: '4px',
    fontSize: '.92rem',
    lineHeight: '1.75',
    color: 'var(--color-ink-2)',
    fontWeight: '300',
  },
};

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <div style={styles.wrapper}>
      {faqs.map((f, i) => (
        <div key={i} style={styles.item}>
          <button style={styles.btn} onClick={() => setOpen(open === i ? null : i)}>
            <span style={styles.question}>{f.q}</span>
            <span style={styles.circle(open === i)}>+</span>
          </button>
          {open === i && <p style={styles.answer}>{f.a}</p>}
        </div>
      ))}
    </div>
  );
}
