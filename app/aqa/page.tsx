// app/aqa/page.tsx
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "../css/common.css";
import "../css/stylesProjects.css";
import "../css/adaptiveProjects.css";

export default function AqaNotesPage() {
  return (
    <div className="container">
      {/* HEADER & NAVIGATION BAR */}
      <SiteHeader />

      {/* AQA SUB-PROJECTS DASHBOARD */}
      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <div className="contentSection">
          <div className="project projectDockerBackground">
            <a href="/aqa/docker">
              <p className="projectName">
                Docker-selenium.
                <br /> Start tests in browsers via Docker's containers
              </p>
            </a>
          </div>

          <div className="project projectJenkinsBackground">
            <a href="/aqa/jenkins">
              <p className="projectName">
                Jenkins
                <br />
                configure server on AWS. Connect to GitHub, deploy
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER BAR */}
      <SiteFooter style={{ order: 3, width: "100%" }} />
    </div>
  );
}
