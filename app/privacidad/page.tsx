import type { Metadata } from 'next';
import LegalPage from '@/components/legal-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description:
    'Qué datos personales trata Héctor Rafael Castillo Pérez en hectorcastillo.net, MediCitas y BarberControl, para qué los usa y cómo ejercer tus derechos.',
  alternates: { canonical: '/privacidad' },
  openGraph: {
    title: 'Política de privacidad | Héctor Castillo',
    description:
      'Tratamiento de datos personales, consentimiento para recordatorios por WhatsApp y derechos del titular.',
    url: `${site.url}/privacidad`,
  },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      subtitle="Cómo trato tus datos personales en este sitio y en los productos MediCitas y BarberControl. Escrita para leerse sin abogado al lado."
    >
      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable es <strong>{site.name}</strong>, persona natural con domicilio en{' '}
        {site.location}. Puedes contactarme por correo en{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a> o por teléfono y WhatsApp en{' '}
        <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>.
      </p>

      <h2>2. Qué datos personales trato</h2>
      <ul>
        <li>
          <strong>Formulario de contacto:</strong> nombre, correo electrónico y el mensaje que
          escribes. No se pide teléfono ni dirección.
        </li>
        <li>
          <strong>Recordatorios por WhatsApp:</strong> nombre, número de WhatsApp y los datos de la
          cita (servicio, fecha, hora y estado), cuando el cliente autoriza los mensajes.
        </li>
        <li>
          <strong>Métricas de uso:</strong> datos agregados de navegación del sitio (páginas vistas y
          dispositivo), sin cookies publicitarias y sin identificar personalmente al visitante.
        </li>
      </ul>
      <p>
        No se tratan datos sensibles, datos financieros ni documentos de identidad desde este sitio.
      </p>

      <h2>3. Para qué se usan</h2>
      <ul>
        <li>Responder tu mensaje y sostener la conversación comercial o técnica.</li>
        <li>Agendar, confirmar, recordar, reprogramar o cancelar citas en MediCitas y BarberControl.</li>
        <li>Registrar y respetar las solicitudes de baja de mensajes.</li>
        <li>Mantener la seguridad del sitio y cumplir obligaciones legales.</li>
      </ul>
      <p>
        No uso tus datos para publicidad de terceros, no vendo bases de datos y no envío mensajes
        promocionales por WhatsApp.
      </p>

      <h2>4. Consentimiento y recordatorios por WhatsApp</h2>
      <p>
        Los recordatorios y confirmaciones de citas se envían únicamente a clientes que dieron su
        consentimiento previo, expreso e informado al agendar la cita o al activar las notificaciones
        por WhatsApp en su cuenta. Sin esa autorización no se envía ningún mensaje.
      </p>
      <p>
        El consentimiento se puede revocar en cualquier momento respondiendo{' '}
        <strong>BAJA</strong> (o <strong>STOP</strong>) al mensaje recibido, o escribiendo a{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>. La baja se registra y se aplica a todos
        los envíos posteriores a ese número.
      </p>
      <p>
        Los mensajes se envían a través de la plataforma de WhatsApp Business de Meta. El uso de
        WhatsApp como usuario se rige además por las políticas de Meta.
      </p>

      <h2>5. Cookies y analítica</h2>
      <p>
        Este sitio no usa cookies de publicidad ni de seguimiento entre sitios. Las métricas de uso
        son agregadas y sirven para saber qué secciones se leen y mejorar el contenido.
      </p>

      <h2>6. Con quién se comparten</h2>
      <p>
        Los datos se comparten solo con proveedores que permiten operar el servicio, y en la medida
        necesaria:
      </p>
      <ul>
        <li>
          <strong>Resend</strong>, para entregar por correo los mensajes del formulario de contacto.
        </li>
        <li>
          <strong>Meta Platforms y WhatsApp LLC</strong>, para entregar los recordatorios por
          WhatsApp Business.
        </li>
        <li>
          <strong>Proveedores de infraestructura y alojamiento</strong>, para servir el sitio y
          mantener registros técnicos de seguridad.
        </li>
        <li>
          <strong>Autoridades</strong>, cuando exista una obligación legal o un requerimiento
          válido.
        </li>
      </ul>
      <p>
        Algunos de estos proveedores pueden estar ubicados fuera de Colombia. Esas transferencias se
        hacen con base en el consentimiento del titular o en las excepciones previstas por la ley.
      </p>

      <h2>7. Cuánto tiempo se conservan</h2>
      <p>
        Los mensajes del formulario se conservan mientras sean necesarios para atender la solicitud y
        el seguimiento comercial, y luego se eliminan. Los datos de citas y recordatorios se
        conservan mientras el cliente mantenga la relación con el consultorio o negocio y hasta que
        solicite su eliminación. La evidencia de una baja se conserva para no volver a contactar a
        ese número.
      </p>

      <h2>8. Tus derechos</h2>
      <p>
        De acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013, puedes conocer, actualizar,
        rectificar y suprimir tus datos, revocar la autorización y presentar quejas ante la
        Superintendencia de Industria y Comercio.
      </p>
      <p>
        Para ejercerlos, escribe a <a href={`mailto:${site.email}`}>{site.email}</a> con el asunto
        «Datos personales» o llama al <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>.
        Las consultas se atienden en un máximo de 15 días hábiles y los reclamos en un máximo de 15
        días hábiles, prorrogables según la ley. En la página de{' '}
        <a href="/eliminacion-de-datos">eliminación de datos</a> está el paso a paso.
      </p>

      <h2>9. Seguridad</h2>
      <p>
        Aplico medidas técnicas y administrativas razonables: cifrado en tránsito, acceso restringido
        a los sistemas y revisión de los proveedores que intervienen. Ningún sistema es infalible,
        pero si ocurre un incidente que afecte tus datos te lo informaré por los canales disponibles.
      </p>

      <h2>10. Menores de edad</h2>
      <p>
        Este sitio y los recordatorios por WhatsApp no están dirigidos a menores de 18 años. Si
        detecto datos de un menor sin autorización de su representante legal, los elimino a solicitud
        de este.
      </p>

      <h2>11. Cambios en esta política</h2>
      <p>
        Si cambia el tratamiento de datos, actualizo esta página y su fecha de actualización. Los
        cambios sustanciales se comunican por los canales de contacto disponibles.
      </p>
    </LegalPage>
  );
}
