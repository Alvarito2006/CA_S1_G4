// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Recolección de información',
      link: {
        type: 'generated-index',
        title: 'Recolección de información',
        description:
          'Preguntas de entrevista, justificación del caso principal y evidencias recopiladas.',
      },
      items: [
        'recoleccion/preguntas',
        'recoleccion/justificacion',
        'recoleccion/evidencias',
      ],
    },
    {
      type: 'category',
      label: 'Análisis',
      link: {
        type: 'generated-index',
        title: 'Análisis',
        description:
          'Síntesis de hallazgos, requisitos priorizados y descripción del flujo actual.',
      },
      items: ['analisis/requisitos', 'analisis/flujo-negocio'],
    },
    {
      type: 'category',
      label: 'Propuesta',
      link: {
        type: 'generated-index',
        title: 'Propuesta',
        description:
          'Soluciones planteadas, acuerdos del equipo, junta directiva y postmortem.',
      },
      items: [
        'propuesta/elevator-pitches',
        'propuesta/junta-directiva',
        'propuesta/acuerdos-tradeoffs',
        'propuesta/flujo-solucion',
        'propuesta/postmortem',
      ],
    },
  ],
};

export default sidebars;
