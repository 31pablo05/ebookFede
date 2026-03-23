import { useState } from 'react';

const faqs = [
  {
    q: '¿Necesito un celular específico para aplicar las técnicas?',
    a: 'No. Las técnicas funcionan con cualquier celular que tenga una cámara decente. Lo más importante es la luz y la composición — no el equipo. Si podés hacer una foto, podés aplicar todo lo del ebook.'
  },
  {
    q: '¿Hace falta saber de fotografía para entender el contenido?',
    a: 'Para nada. Está pensado para empezar completamente desde cero. No hay tecnicismos ni jerga fotográfica. Cada técnica está explicada de forma simple, visual y directa.'
  },
  {
    q: '¿Cómo recibo el ebook después de pagar?',
    a: 'Inmediatamente después de confirmar el pago, te llega un email con el link de descarga del PDF. En segundos ya lo tenés en tu dispositivo, listo para leer.'
  },
  {
    q: '¿El ebook incluye los videos de ejemplo?',
    a: 'Sí. Dentro del PDF hay links a videos donde Fede muestra en tiempo real cómo aplica cada técnica. Son ejemplos prácticos que complementan la parte escrita.'
  },
  {
    q: '¿En qué formato está y dónde lo puedo leer?',
    a: 'Es un PDF de aproximadamente 50 páginas. Podés leerlo en el celular, tablet, computadora o cualquier dispositivo. No expira ni tiene restricciones de uso.'
  },
  {
    q: '¿El precio está en pesos argentinos?',
    a: 'Sí, $20.000 ARS. El pago se procesa por MercadoPago, podés pagar con tarjeta de crédito, débito o dinero en cuenta.'
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${open === i ? 'is-open' : ''}`}>
          <button
            className="faq-question"
            onClick={() => toggle(i)}
            aria-expanded={open === i}
          >
            <span>{faq.q}</span>
            <span className={`faq-icon ${open === i ? 'rotated' : ''}`}>+</span>
          </button>
          <div className="faq-answer-wrap" style={{ maxHeight: open === i ? '400px' : '0' }}>
            <p className="faq-answer">{faq.a}</p>
          </div>
        </div>
      ))}

      <style>{`
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 720px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 1.5px solid rgba(42,157,143,0.15);
        }

        .faq-item:first-child {
          border-top: 1.5px solid rgba(42,157,143,0.15);
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 22px 0;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: #1e1e1e;
          text-align: left;
          transition: color 0.2s;
        }

        .faq-question:hover {
          color: #2A9D8F;
        }

        .faq-icon {
          font-size: 1.4rem;
          font-weight: 300;
          color: #2A9D8F;
          flex-shrink: 0;
          transition: transform 0.25s ease;
          line-height: 1;
        }

        .faq-icon.rotated {
          transform: rotate(45deg);
        }

        .faq-answer-wrap {
          overflow: hidden;
          transition: max-height 0.35s ease;
        }

        .faq-answer {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: #7a756c;
          line-height: 1.7;
          padding-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
