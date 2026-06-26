// app/aqa/docker/page.tsx
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "../../css/common.css";
import "../../css/stylesAqaNotes.css";
import "../../css/adaptiveStylesAqaNotes.css";

export default function DockerNotesPage() {
  return (
    <div className="container">
      {/* HEADER & NAVIGATION BAR */}
      <SiteHeader />

      {/* DOCKER CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <p className="note">
          NOTE:
          <br />
          1. The purpose of provided code is only for running fast practical
          example of using Docker - Selenium
          <br />
          2. Sometimes you should start tests by running testng.xml file. To run
          it - right click on it and select "run"
          <br />
          3. I use IntelliJ IDEA, the project with Maven dependencies. If you
          want to copy pieces of code and paste them in your IDE don't forget to
          copy dependencies from pom.xml
          <br />
          4. All time Docker Desktop has to be running
        </p>

        <h4>Docker-selenium - start tests in parallel in different browsers</h4>
        <p>
          <a
            href="https://github.com/MarinaShvachko/AqaNotes.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            My examples of code on the Github
          </a>
        </p>
        <p>
          Docker is a platform for managing containers. It's possible to
          "package" for example a web application with all environment and
          dependencies into a container and easily and simply manage it: scale,
          transfer and ets. For automatisation purpose Docker containers can be
          use to start test in parallel in different browsers or systems.
        </p>

        <h3>Image</h3>
        <p>
          An image is a read-only template with instructions for creating a
          Docker container. The Docker run command creates a container from a
          specific image.
        </p>

        <h3>Container</h3>
        <p>
          A container is a runnable instance of an image. You can create, start,
          stop, move, or delete a container.
        </p>

        <h3>Docker compose</h3>
        <p>
          A file with different predefined settings for not to typing all
          commands by hands.
        </p>

        <h4>Install docker and run the first simplest test</h4>
        <p>
          <a
            href="https://github.com/SeleniumHQ/docker-selenium#quick-start"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official documentation
          </a>
        </p>
        <p>
          My examples of code are in a package{" "}
          <b>\src\test\java\docker\_1_startTestInFirefox</b>
        </p>

        <h3>1. Download</h3>
        <p>
          <a
            href="https://docs.docker.com/desktop/windows/install/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download "Docker Desktop on Windows"
          </a>
          . Just double click on the downloaded file and run the installer.
        </p>
        <p>
          For fast checking that Docker is successfully installed open terminal
          in Windows and run a command <code>docker --version</code>
        </p>

        <h3>2. Start a Docker container with Firefox</h3>
        <p>
          Run a command in Windows terminal:{" "}
          <code>
            docker run -d -p 4444:4444 -p 7900:7900 --shm-size="2g"
            selenium/standalone-firefox:4.2.1-20220531
          </code>{" "}
          you will see that a unique key is generated{" "}
        </p>
        <p>
          To check container's Id run in Windows terminal <code>docker ps</code>
        </p>

        <h3>3. Watch the created container on UI</h3>
        <p>
          Open in browser{" "}
          <a
            href="http://localhost:4444/"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:4444
          </a>{" "}
          You should see one Firefox container is created.
        </p>
        <p>
          <img
            className="fullImgInText"
            src="/img/docker/startFirefoxStandaloneUI.jpg"
            alt="Container on UI Selenium Grid"
          />
        </p>

        <h3>
          4. Run the test that will be executed in Docker Firefox container
        </h3>
        <p>Just run "main" method:</p>
        <pre>
          <code>{`public class OneTestInFirefox {
    public static void main(String[] args) throws MalformedURLException, InterruptedException {
        FirefoxOptions options = new FirefoxOptions();
        WebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444/"), options);
        driver.get("https://google.com");
        driver.findElement(By.id("input")).sendKeys("Hello World!");
        Thread.sleep(5000); //this is added to watch test execution on UI
        driver.quit();
    }
}`}</code>
        </pre>

        <h3>5. Watch creation of session</h3>
        <p>
          After start the test, a session for Firefox is created. You can watch
          it on UI{" "}
          <a
            href="http://localhost:4444/ui#/sessions"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:4444/ui#/sessions
          </a>
          . You can see it only while test is running and you might need to
          update the page.
        </p>
        <p>
          <img
            className="fullImgInText"
            src="/img/docker/FirefoxSession.jpg"
            alt="Creation of Firefox session on UI"
          />
        </p>

        <h3>6. Watch execution of the test on UI</h3>
        <p>
          Go to{" "}
          <a
            href="http://localhost:7900/"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:7900
          </a>{" "}
          and connect with a password "secret". Start the test. You will see how
          browser Firefox is opened and code from the test is executed. You can
          see it only while test is executing. For longer execution I added
          Thread.sleep(5000).
        </p>
        <p className="note">
          NOTE: Test execution can be seen only if container starts including
          "-p 7900:7900"{" "}
          <code>
            docker run -d -p 4444:4444 <b>-p 7900:7900</b> --shm-size="2g"
            selenium/standalone-firefox:4.2.1-20220531{" "}
          </code>
        </p>

        <h3>7. Stop container</h3>
        <p>
          To stop container use: <code>docker stop put_here_id</code>
        </p>

        <h4> Run the same test in different browsers</h4>
        <p>
          <a
            href="https://github.com/SeleniumHQ/docker-selenium#hub-and-nodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official documentation
          </a>
        </p>
        <p>
          My examples of code are in a package{" "}
          <b>\src\test\java\docker\_2_startTestInTwoBrowsers</b>
        </p>

        <h3>1. Create a Grid with a Hub and Nodes</h3>
        <p>In Windows terminal run commands:</p>
        <p>Create grid:</p>
        <code>docker network create grid</code>
        <br />
        <code>
          docker run -d -p 4442-4444:4442-4444 --net grid --name selenium-hub
          selenium/hub:4.2.1-20220531
        </code>
        <br />
        <br />
        <p>Start Chrome container:</p>
        <code>
          docker run -d --net grid -e SE_EVENT_BUS_HOST=selenium-hub
          --shm-size="2g" -e SE_EVENT_BUS_PUBLISH_PORT=4442 -e
          SE_EVENT_BUS_SUBSCRIBE_PORT=4443 selenium/node-chrome:4.2.1-20220531
        </code>
        <br />
        <br />
        <p>Start Firefox container:</p>
        <code>
          docker run -d --net grid -e SE_EVENT_BUS_HOST=selenium-hub
          --shm-size="2g" -e SE_EVENT_BUS_PUBLISH_PORT=4442 -e
          SE_EVENT_BUS_SUBSCRIBE_PORT=4443 selenium/node-firefox:4.2.1-20220531
        </code>
        <p>
          Now you can see on{" "}
          <a
            href="http://localhost:4444/ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            http://localhost:4444/ui
          </a>{" "}
          that 2 containers are running
        </p>
        <p>
          <img
            className="fullImgInText"
            src="/img/docker/twoContainersAreRunning.jpg"
            alt="Creation of Firefox session on UI"
          />
        </p>

        <h3>
          2. Run testng.xml to run tests in Docker in Firefox and Chrome
          containers
        </h3>
        <p>
          This time you need run a testng.xml file, just right click on the file
          and select "run".
        </p>

        <h3>3. Watch creation of sessions</h3>
        <p>
          This time 2 sessions are created, one for Firefox and one for Chrome.
          The method from the class is executed in two different browsers at a
          time.{" "}
          <a
            href="http://localhost:4444/ui#/sessions"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:4444/ui#/sessions
          </a>
        </p>
        <p>
          <img
            className="fullImgInText"
            src="/img/docker/TwoSessionsSeleniumGrid.jpg"
            alt="Run testNg.xml file"
          />
        </p>

        <h3>4. Stop containers and remove Grid:</h3>
        <p>
          Get to know ids by command <code>docker ps</code>
        </p>
        <p>
          Stop nodes and hub run <code>docker stop put_here_id</code>
        </p>
        <p>
          Remove the grid network run <code>docker network rm grid</code>
        </p>

        <h4>SET UP DOCKER VIA DOCKER COMPOSE FILE</h4>
        <p>
          <a
            href="https://github.com/SeleniumHQ/docker-selenium#docker-compose"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official documentation
          </a>
        </p>
        <p>
          My examples of code are in a package{" "}
          <b>\src\test\java\docker\_3_DockerCompose</b>
        </p>

        <h3>1. Create a Grid with a Hub and Nodes</h3>
        <p>
          Copy the docker-compose-v3.yml file Version 3 from{" "}
          <a
            href="https://github.com/SeleniumHQ/docker-selenium#docker-compose"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/SeleniumHQ/docker-selenium#docker-compose
          </a>
          , open it in a text editor and save on a PC. There are settings to
          start browsers and a selenium-hub, so you don't need to run separate
          command in Windows terminal anymore. I deleted settings for Edge
          browser and saved .yml file in the project{" "}
          <b>\src\test\java\docker\_3_DockerCompose\docker-compose-v3.yml</b>
        </p>
        <p>
          In a Windows terminal go to a folder where you saved the
          docker-compose-v3.yml file and run{" "}
          <code>docker-compose -f docker-compose-v3.yml up</code>
        </p>

        <h3>2. Run testng.xml</h3>
        <p>
          Start tests by runnin testng.xml and watch creation of sessions in the
          same way as earlier{" "}
          <a
            href="http://localhost:4444/ui#/sessions"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:4444/ui#/sessions
          </a>
          . Again 2 sessions are created, one for Firefox and one for Chrome.
        </p>

        <h3>3. Stop containers and remove Grid</h3>
        <p>in Windows terminal:</p>
        <p>
          Run <code>Ctrl + c</code>{" "}
        </p>
        <p>
          Run <code>docker-compose -f docker-compose-v3.yml down</code>
        </p>

        <h4>SET UP NUMBER OF CREATED BROWSER IN COMPOSE FILE</h4>
        <p>
          My examples of code are in a package{" "}
          <b>\src\test\java\docker\_3_DockerCompose</b>
        </p>
        <p>
          Here you should do almost the same steps, that you did in a previous
          section, but only with 2 differences: 1) Add "--scale chrome=5 -d"
          when starting hub and nodes 2) Run another testng file with the name
          "testngRun5tests.xml".
        </p>
        <p>You don't need to modify .yml file.</p>

        <h3>1. Create a Grid with a Hub and Nodes</h3>
        <p>
          In a Windows terminal go to a folder where you saved the .yml file and
          run{" "}
          <code>
            docker-compose -f docker-compose-v3.yml up{" "}
            <b>--scale chrome=5 -d</b>
          </code>
        </p>
        <p>
          "--scale chrome=5 -d" means that 5 Chrome browsers will be created
        </p>

        <h3>2. Run tests</h3>
        <p>
          To run test this time use "testngRun5tests.xml" from the package
          \src\test\java\docker\_3_DockerCompose . It starts the same method
          from the class "OneTestInTwoBrowsers", but 5 times according to
          settings in testngRun5tests.xml. So 5 sessions will be created in
          Docker and tests will be executed at the same time. Watch creation of
          sessions in the same way as earlier{" "}
          <a
            href="http://localhost:4444/ui#/sessions"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:4444/ui#/sessions
          </a>
        </p>

        <h3>3. Stop containers and remove Grid</h3>
        <p>
          Run <code>Ctrl + c</code> in Windows terminal{" "}
        </p>
        <p>
          Run <code>docker-compose -f docker-compose-v3.yml down</code>
        </p>

        <p>Summary:</p>
        <p>
          1 – Docker is safe. Applications run safely and securely in their
          respective containers
        </p>
        <p>
          2 – Containers are lightweight and contain everything needed to run
          the application
        </p>
      </div>

      {/* FOOTER BAR */}
      <SiteFooter style={{ order: 3, width: "100%" }} />
    </div>
  );
}
