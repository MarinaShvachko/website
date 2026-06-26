// app/projects/page.tsx
import SiteHeader from '@/app/components/SiteHeader';
import SiteFooter from '@/app/components/SiteFooter';
import '../css/common.css';
import '../css/stylesProjects.css';
import '../css/adaptiveProjects.css';

export default function ProjectsPage() {
  return (
    <div className="container">
      {/* HEADER & NAVIGATION */}
      <SiteHeader />

      {/* PROJECTS WRAPPER GRID */}
      <div className="projectWrapper" style={{ order: 2, width: '100%' }}>
        <div className="contentSection">

          <div className="project">
            <p className="projectNameWithoutLink">Participation in translation of a book</p>
            <a href="https://uraltester.ru/2019/12/02/%d0%9c%d1%8b-%d0%bf%d0%b5%d1%80%d0%b5%d0%b2%d0%b5%d0%bb%d0%b8-%d0%ba%d0%bd%d0%b8%d0%b3%d1%83-%d0%9b%d0%b8-%d0%9a%d0%be%d1%83%d0%bf%d0%bb%d1%8d%d0%bd%d0%b4%d0%b0-%d0%9f%d1%80%d0%b0%d0%ba/" target="_blank" rel="noopener noreferrer">
              <p className="source">A Practitioner's Guide to Software Test Design by Lee Copeland</p>
            </a>
          </div>

          <div className="project">
            <a href="/aqa">
              <p className="projectName">AQA notes</p>
              <p className="source">Notes and simple examples related to software automation</p>
            </a>
          </div>

        </div>
      </div>

      {/* FOOTER BAR */}
      <SiteFooter style={{ order: 3, width: '100%' }} />

    </div>
  );
}