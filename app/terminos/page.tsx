import type { Metadata } from 'next';
import LegalPage from '@/components/legal-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description:
    'Condiciones de uso de hectorcastillo.net: alcance del sitio, propiedad intelectual, productos enlazados, comunicaciones por WhatsApp y ley aplicable.',
  alternates: { canonical: '/terminos' },
  openGraph: {
    title: 'Términos y condiciones | Héctor Castillo',
    description:
      'Condiciones de uso del sitio, de los productos enlazados y de las comunicaciones por WhatsApp.',
    url: `${site.url}/terminos`,
  },
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <LegalPage
      title="Términos y condiciones"
      subtitle="Las reglas de uso de este sitio. Claras, cortas y sin letra pequeña escondida."
    >
      <h2>1. Aceptación</h2>
      <p>
        Al navegar en <a href={site.url}>hectorcastillo.net</a> aceptas estos términos. Si no estás de
        acuerdo, simplemente no uses el sitio. Estos términos aplican al sitio y no reemplazan las
        condiciones que se acuerden por escrito para un proyecto o servicio.
      </p>

      <h2>2. Objeto del sitio</h2>
      <p>
        Este es mi portafolio profesional: muestra servicios, proyectos, productos propios y datos de
        contacto. La información es informativa y no constituye una oferta comercial vinculante ni
        asesoría legal, contable o médica.
      </p>

      <h2>3. Uso permitido</h2>
      <p>Puedes leer, citar con atribución y compartir el contenido. No puedes:</p>
      <ul>
        <li>Usar el sitio para actividades ilícitas o para vulnerar derechos de terceros.</li>
        <li>Intentar acceder sin autorización a sistemas, cuentas o datos.</li>
        <li>Introducir código malicioso, automatizar ataques o extraer contenido de forma abusiva.</li>
        <li>Suplantar mi identidad o la de un cliente en comunicaciones derivadas del sitio.</li>
      </ul>

      <h2>4. Propiedad intelectual</h2>
      <p>
        El diseño, los textos, las ilustraciones y el código de este sitio son de mi autoría, salvo
        las marcas y recursos de terceros, que pertenecen a sus titulares. El nombre y los productos
        MediCitas y BarberControl son proyectos propios. No se concede licencia de uso sobre la marca
        ni sobre el código por el simple hecho de navegar.
      </p>

      <h2>5. Productos y enlaces externos</h2>
      <p>
        MediCitas y BarberControl son aplicaciones independientes con su propia operación. Su uso se
        rige por las condiciones que se acuerdan con cada cliente. Los enlaces a sitios de terceros se
        ofrecen por comodidad y no implican responsabilidad sobre su contenido o sus políticas.
      </p>

      <h2>6. Comunicaciones por WhatsApp</h2>
      <p>
        Los recordatorios y confirmaciones de citas se envían solo a clientes con consentimiento
        previo y se limitan a información de la cita. Cualquier persona puede responder{' '}
        <strong>BAJA</strong> (o <strong>STOP</strong>) para dejar de recibirlos. El detalle está en la{' '}
        <a href="/privacidad">política de privacidad</a> y en la página de{' '}
        <a href="/eliminacion-de-datos">eliminación de datos</a>.
      </p>

      <h2>7. Exactitud de la información</h2>
      <p>
        Procuro que la información del sitio esté actualizada, pero los productos, alcances y
        disponibilidad pueden cambiar sin aviso. Las cifras, capturas y descripciones son referencias
        del estado del proyecto en un momento dado y no garantizan resultados futuros.
      </p>

      <h2>8. Disponibilidad</h2>
      <p>
        El sitio se ofrece «tal como está». No garantizo disponibilidad ininterrumpida ni ausencia de
        errores; puedo suspenderlo, modificarlo o retirar secciones en cualquier momento.
      </p>

      <h2>9. Limitación de responsabilidad</h2>
      <p>
        En la medida permitida por la ley, no respondo por daños indirectos, lucro cesante ni pérdida
        de datos derivados del uso del sitio o de la imposibilidad de usarlo. Nada en estos términos
        limita derechos que la ley colombiana reconozca al consumidor de forma irrenunciable.
      </p>

      <h2>10. Cambios y vigencia</h2>
      <p>
        Puedo actualizar estos términos. La versión vigente es la publicada en esta página, con la
        fecha de actualización indicada arriba. El uso posterior a un cambio implica su aceptación.
      </p>

      <h2>11. Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia se
        someterá a los jueces competentes de Barranquilla, sin perjuicio de las normas de protección
        al consumidor que resulten aplicables.
      </p>
    </LegalPage>
  );
}
