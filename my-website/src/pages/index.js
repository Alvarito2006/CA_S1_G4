import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const highlights = [
  {label: 'Negocio principal', value: 'Restaurante Don Juan'},
  {label: 'Entrevistas realizadas', value: '2 negocios reales'},
  {label: 'Entregables', value: '9 documentos clave'},
];

const stages = [
  {
    tag: 'Fase 1',
    title: 'Recolección de información',
    text: 'Incluye las preguntas de entrevista, la justificación del caso seleccionado y la evidencia audiovisual del trabajo de campo.',
    href: '/docs/recoleccion/preguntas',
  },
  {
    tag: 'Fase 2',
    title: 'Análisis del caso',
    text: 'Resume los requisitos priorizados para el restaurante y documenta el flujo actual del negocio para identificar cuellos de botella.',
    href: '/docs/analisis/requisitos',
  },
  {
    tag: 'Fase 3',
    title: 'Propuesta de solución',
    text: 'Concentra los elevator pitches, la simulación de junta directiva, los acuerdos, el flujo propuesto y el postmortem.',
    href: '/docs/propuesta/junta-directiva',
  },
];

const quickLinks = [
  {
    tag: 'Resumen',
    title: 'Visión general del proyecto',
    text: 'Contexto, objetivos, integrantes y alcance del proyecto documentado en Docusaurus.',
    href: '/docs/intro',
  },
  {
    tag: 'Evidencia',
    title: 'Audios, capturas e imágenes',
    text: 'Acceso rápido a la evidencia de entrevistas, Trello, time.is y materiales entregados por el equipo.',
    href: '/docs/recoleccion/evidencias',
  },
  {
    tag: 'Cierre',
    title: 'Postmortem y lecciones',
    text: 'Análisis de la junta directiva, causas raíz, impacto y acciones a futuro para mejorar la comunicación técnica.',
    href: '/docs/propuesta/postmortem',
  },
];

export default function Home() {
  return (
    <Layout
      title="Proyecto 2"
      description="Documentación del Proyecto 2 del curso Laboratorio Comunicación Asertiva"
    >
      <main className="container">
        <div className={styles.page}>
          <section className={styles.hero}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>Laboratorio Comunicación Asertiva</div>
              <h1 className={styles.heroTitle}>
                Negociación técnica en equipos de desarrollo de software
              </h1>
              <p className={styles.heroLead}>
                Este sitio reúne la documentación del Proyecto 2 del Grupo 4:
                entrevistas a negocios reales, análisis del caso principal y una
                propuesta tecnológica orientada a mejorar la operación de
                Restaurante Don Juan.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} to="/docs/intro">
                  Ver documentación
                </Link>
                <Link
                  className={styles.secondaryButton}
                  href="https://github.com/Alvarito2006/CA_S1_G4"
                >
                  Ir al repositorio
                </Link>
              </div>
              <div className={styles.highlights}>
                {highlights.map((item) => (
                  <div key={item.label} className={styles.highlightCard}>
                    <div className={styles.highlightLabel}>{item.label}</div>
                    <div className={styles.highlightValue}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>Ruta del proyecto</h2>
                <p className={styles.sectionLead}>
                  Cada fase tiene su propia sección para que puedas ubicar rápido
                  la información, navegar entre entregables y seguir el hilo
                  lógico del trabajo realizado por el equipo.
                </p>
              </div>
            </div>
            <div className={styles.stageGrid}>
              {stages.map((item) => (
                <Link key={item.title} className={styles.stageCard} to={item.href}>
                  <div className={styles.cardTag}>{item.tag}</div>
                  <div className={styles.cardTitle}>{item.title}</div>
                  <p className={styles.cardText}>{item.text}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.sectionAlt}>
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>Puntos de entrada rápidos</h2>
                <p className={styles.sectionLead}>
                  Si solo necesitas revisar una parte puntual, aquí están los
                  accesos directos más útiles del sitio.
                </p>
              </div>
            </div>
            <div className={styles.linkGrid}>
              {quickLinks.map((item) => (
                <Link key={item.title} className={styles.linkCard} to={item.href}>
                  <div className={styles.cardTag}>{item.tag}</div>
                  <div className={styles.cardTitle}>{item.title}</div>
                  <p className={styles.cardText}>{item.text}</p>
                </Link>
              ))}
            </div>

            <div className={styles.checklist}>
              <div className={styles.checkItem}>
                <span className={styles.checkBullet}>1</span>
                <div>
                  <div className={styles.checkTitle}>Parte desde el resumen</div>
                  <p className={styles.checkText}>
                    Ahí quedó condensado el contexto del curso, el objetivo del
                    proyecto, los integrantes y la decisión de trabajar con el
                    restaurante.
                  </p>
                </div>
              </div>
              <div className={styles.checkItem}>
                <span className={styles.checkBullet}>2</span>
                <div>
                  <div className={styles.checkTitle}>Luego pasa por evidencia</div>
                  <p className={styles.checkText}>
                    Encontrarás audios, capturas y enlaces que respaldan el
                    trabajo de campo y la coordinación del grupo.
                  </p>
                </div>
              </div>
              <div className={styles.checkItem}>
                <span className={styles.checkBullet}>3</span>
                <div>
                  <div className={styles.checkTitle}>Cierra con la propuesta</div>
                  <p className={styles.checkText}>
                    Esa sección conecta los pitches, la junta directiva, los
                    trade-offs y el aprendizaje final del equipo.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
