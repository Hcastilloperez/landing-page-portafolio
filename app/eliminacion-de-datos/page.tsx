import type { Metadata } from 'next';
import LegalPage from '@/components/legal-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Eliminación de datos',
  description:
    'Cómo solicitar la eliminación de tus datos personales de los recordatorios por WhatsApp y del formulario de contacto de hectorcastillo.net, y qué ocurre después.',
  alternates: { canonical: '/eliminacion-de-datos' },
  openGraph: {
    title: 'Eliminación de datos | Héctor Castillo',
    description:
      'Pasos para eliminar tus datos de WhatsApp, del formulario de contacto y de los registros asociados.',
    url: `${site.url}/eliminacion-de-datos`,
  },
  robots: { index: true, follow: true },
};

export default function EliminacionDeDatosPage() {
  return (
    <LegalPage
      title="Eliminación de datos"
      subtitle="Puedes pedir que borre tus datos cuando quieras. Aquí está el paso a paso, qué se elimina y en cuánto tiempo."
    >
      <h2>1. Qué datos puedes eliminar</h2>
      <ul>
        <li>
          <strong>Recordatorios por WhatsApp:</strong> tu nombre, tu número y el registro de mensajes
          de citas enviados a ese número.
        </li>
        <li>
          <strong>Formulario de contacto:</strong> el nombre, el correo y el mensaje que enviaste
          desde este sitio.
        </li>
        <li>
          <strong>Citas asociadas:</strong> los datos de contacto vinculados a tus citas en MediCitas
          o BarberControl, cuando ya no sean necesarios para la operación del negocio.
        </li>
      </ul>

      <h2>2. Cómo solicitar la eliminación</h2>
      <p>Elige el canal que te resulte más fácil. Los tres funcionan.</p>
      <ol>
        <li>
          <strong>Respondiendo BAJA por WhatsApp.</strong> Envía la palabra <strong>BAJA</strong> (o{' '}
          <strong>STOP</strong>) al mismo número que te escribió. El número sale de la lista de
          recordatorios de inmediato y no vuelve a recibir mensajes.
        </li>
        <li>
          <strong>Por correo.</strong> Escribe a <a href={`mailto:${site.email}`}>{site.email}</a>{' '}
          con el asunto <strong>«Eliminación de datos»</strong> e indica el número de WhatsApp o el
          correo que usaste. No necesitas explicar el motivo.
        </li>
        <li>
          <strong>Por teléfono.</strong> Llama o escribe por WhatsApp al{' '}
          <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a> y pide la eliminación de tus
          datos.
        </li>
      </ol>
      <p>
        Si actúas en representación de otra persona, adjunta la autorización correspondiente. Si
        pides datos de un menor de edad, indica tu calidad de representante legal.
      </p>

      <h2>3. Qué ocurre después</h2>
      <ul>
        <li>Confirmo la recepción de la solicitud por el mismo canal.</li>
        <li>Verifico que la solicitud corresponda al titular o a su representante.</li>
        <li>Elimino los datos de las bases activas y de la lista de recordatorios.</li>
        <li>Te confirmo la eliminación cuando termina el proceso.</li>
      </ul>
      <p>
        El plazo máximo es de <strong>15 días hábiles</strong> contados desde la solicitud, conforme a
        la Ley 1581 de 2012. Si la solicitud llega por WhatsApp con la palabra BAJA, el cese de
        mensajes es inmediato y la eliminación del registro se completa dentro del mismo plazo.
      </p>

      <h2>4. Qué se conserva y por qué</h2>
      <p>
        Algunos registros mínimos pueden conservarse aunque solicites la eliminación:
      </p>
      <ul>
        <li>
          <strong>Evidencia de la baja:</strong> el número en una lista de exclusión, para garantizar
          que no se te vuelva a escribir.
        </li>
        <li>
          <strong>Obligaciones legales:</strong> registros que la ley exija conservar por motivos
          contables, fiscales o de seguridad.
        </li>
        <li>
          <strong>Registros técnicos:</strong> trazas de seguridad anonimizadas o agregadas, sin datos
          de contacto.
        </li>
      </ul>
      <p>
        Estos registros se conservan solo durante el tiempo exigido y no se usan para contactarte de
        nuevo.
      </p>

      <h2>5. Si llegaste desde Facebook o Instagram</h2>
      <p>
        Este sitio no recibe datos de tu perfil de Facebook o Instagram. Solo trata el número de
        WhatsApp que autorizaste para recordatorios y los datos que enviaste por el formulario de
        contacto. Si en algún momento se habilitara un inicio de sesión con Meta, los datos obtenidos
        se limitarían a lo que autorices y podrías revocar el acceso desde la configuración de tu
        cuenta de Meta.
      </p>
      <p>
        La información que permanece dentro de la aplicación de WhatsApp (chats, copias de seguridad,
        cuenta) se administra desde tu propio dispositivo y se rige por las políticas de Meta. Para
        borrarla, elimina la conversación o la cuenta desde WhatsApp.
      </p>

      <h2>6. Efecto de la eliminación</h2>
      <p>
        Si eliminas tus datos, dejas de recibir recordatorios y confirmaciones de citas por WhatsApp.
        Las citas ya agendadas se mantienen en el sistema del negocio, salvo que pidas también su
        cancelación. Puedes volver a autorizar los mensajes cuando quieras, dando de nuevo tu
        consentimiento al agendar.
      </p>

      <h2>7. Reclamos</h2>
      <p>
        Si consideras que tu solicitud no fue atendida correctamente, puedes presentar una queja ante
        la Superintendencia de Industria y Comercio de Colombia. También puedes escribirme primero
        para resolverlo directamente.
      </p>
    </LegalPage>
  );
}
