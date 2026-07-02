// app/aqa/jenkins/page.tsx
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import "../../css/common.css";
import "../../css/stylesAqaNotes.css";

export default function JenkinsPage() {
  return (
    <div className="container">
      {/* HEADER & NAVIGATION BAR */}
      <SiteHeader />

      {/* JENKINS CONTENT SECTION */}
      <div className="projectWrapper" style={{ order: 2, width: "100%" }}>
        <h4>CI/CD with Jenkins</h4>
        <p>
          I use AWS Linux web server, Linux command Line, GitHub project where
          index.html page is created.
        </p>
        <p className="note">ATTENTION!!!! AWS is NOT free.</p>

        <p>Steps:</p>
        <ol>
          <li>Create server</li>
          <li>Install Apache HTTP Server (need for examples)</li>
          <li>Install Java from 8 to 11 (need for Jenkins)</li>
          <li>Install Jenkins</li>
          <li>Install Git (needed for working with GitHub repo)</li>
          <li>Open permission to write data to server's folder</li>
          <li>
            Add plugin Publish Over SSH (need to push files to the server)
          </li>
          <li>Link created server with Jenkins</li>
          <li>
            Set up the first job that takes code from GutHub and pushes it to
            the server
          </li>
        </ol>

        <p>
          <b>CREATE SERVER</b>
        </p>
        <ol>
          <li>Go to https://aws.amazon.com/</li>
          <li>Create an account and log in</li>
          <li>Type in a search field EC2 and open EC2 page</li>
          <li>
            Click "Launch instance" (instance == server) and you can just follow
            predifined settings, but activate a checkbox "Allow HTTP traffic
            from the internet", also you can set your storage size up to 30 Gib
          </li>
          <li>Click "Launch instance" = launch server</li>
        </ol>
        <p>
          Open Linux console, go to the file with server's key and run command{" "}
          <code>chmod 400 NAME_OF_FILE_WITH_SERVER_KEY.pem</code>. Then connect
          to the server{" "}
          <code>
            ssh -i "NAME_OF_FILE_WITH_SERVER_KEY.pem" ec2-user@YOUR_PUBLIC_DNS
          </code>
          . Examples and the instruction how to connect to the server via SSH
          you can find if click on your instance in EC2 page and click
          "Connect".
        </p>

        <p>
          <b>INSTALL APACHE HTTP SERVER</b>
        </p>
        <p>
          Connect to the EC2 server via Linux console and install Apache server
          (below if I write about Linux console I mean this console, where you
          connected to the server) <code>sudo yum install httpd</code>. A new
          directory /car/www/html was created on the server. Later there will be
          your index.html page, but now it is empty.
        </p>
        <p>
          Start the server via Linux console{" "}
          <code>sudo service httpd start</code>. I'm not sure for what this
          command is, but I did <code>chkconfig on</code>. Now you can put your
          server's IP in a browser ans see the welcome Test Page.
        </p>

        <p>
          <b>INSTALL JAVA</b>
        </p>
        <p>
          Jenkins works only with Java versions from 8 to 11. To install 11
          version type in the Linux console{" "}
          <code>sudo amazon-linux-extras install java-openjdk11</code>. To check
          if it was installed and to know a number of the version, type in the
          console <code>java -version</code> and you will see openjdk version
          11.
        </p>

        <p>
          <b>INSTALL JENKINS</b>
        </p>
        <p>
          Ensure that your software packages are up to date type to Linux
          console <code>sudo yum update -y</code>, then add the Jenkins
          repository{" "}
          <code>
            sudo wget -O /etc/yum.repos.d/jenkins.repo \
            https://pkg.jenkins.io/redhat-stable/jenkins.repo
          </code>
        </p>

        <p>
          Import a key file from Jenkins-CI to enable installation from the
          package{" "}
          <code>
            sudo rpm --import
            https://pkg.jenkins.io/redhat-stable/jenkins.io.key
          </code>{" "}
          and <code>sudo yum upgrade</code>
        </p>
        <p>
          Install Jenkins <code>sudo yum install jenkins -y</code> and enable
          the Jenkins service to start at boot{" "}
          <code>sudo systemctl enable jenkins</code>
        </p>
        <p>
          Start Jenkins <code>sudo systemctl start jenkins</code> and check the
          status <code>sudo systemctl status jenkins</code>, it should bu
          "running"
        </p>

        <p>
          To open jenkins UI in a browser you have to open the port 8080 in your
          server:
        </p>

        <ol>
          <li>login to AWS</li>
          <li>go to you running instance (=server) and click on it</li>
          <li>below find "Security groups" and open settings</li>
          <li>
            edit "Inbound rules" -&gt; and add a new row with the port 8080
          </li>
        </ol>

        <p>
          <img
            className="fullImgInText"
            src="/img/jenkins/port8080.png"
            alt="Add porp 8080"
          />
        </p>

        <p>
          After you did it you can open Jenkins UI in a browser
          http://SERVER_IP:8080. To log in you need an Administrator password,
          so type in the same Linux console{" "}
          <code>sudo cat /var/lib/jenkins/secrets/initialAdminPassword</code>,
          copy the password and log in.
        </p>

        <p>
          Click "Install suggested plugins". After installation is completed you
          will see "Create first Admin User" window, so create login and
          password for Jenkins and log in.
        </p>

        <p>
          <b>INSTALL GIT</b>
        </p>
        <p>
          In Linux console type <code>sudo yum install git -y</code>. To check
          if Git was installed and it's version <code>git version</code>
        </p>

        <p>
          <b>OPEN PERMISSION TO WRITE DATA TO SERVER FOLDER(S)</b>
        </p>
        <p>
          Run this code in Linux console to be able to change data in a
          specified directory <code>sudo chmod -R 777 /var/www</code>
        </p>

        <p>
          <b>ADD PLUGIN "PUBLISH OOVER SSH"</b>
        </p>
        <p>
          This plugin is needed for sending files from Jenkins to the server via
          SSH.
        </p>
        <ol>
          <li>Click "Manage Jenkins"</li>
          <li>Find and click "Manage Plugins"</li>
          <li>Open "Available" tab and type there "Publish Over SSH"</li>
          <li>Install the plugin and restart Jenkins.</li>
        </ol>

        <p>
          <b>LINK YOUR SERVER TO JENKINS</b>
        </p>
        <ol>
          <li>Click "Manage Jenkins"</li>
          <li>Find and click "Configure System"</li>
          <li>Find "Publish over SSH"</li>
          <li>
            In the field "Key" put you server's key that was created and
            automatically downloaded when you were creating server. Put not a
            file, but the key data itself
          </li>
        </ol>

        <p>
          <img
            className="fullImgInText"
            src="/img/jenkins/AddServersKey.jpg"
            alt="Add server's key"
          />
        </p>

        <p>
          Below the "Key" field find "SSH Server" and click "Add". In the field
          "Name" type the name of your server, the name can be anything, it's
          needed only for setting up Jenkins. In the field "Hostname" type
          server's IP address. In the field "Username" add the username that
          specified on the server, usually it's ec2-user. In the field "Remote
          Directory" add path to the html folder on the server, the path is:
          /var/www/html
        </p>

        <p>
          <img
            className="fullImgInText"
            src="/img/jenkins/SSHServerSettings.png"
            alt="SSH server's settings"
          />
        </p>

        <p>Click the button "Test configuration", you should see "Success".</p>

        <p>
          <b>SET UP THE FIRST JOB</b>
        </p>

        <p>
          You will need set up connection with GitHub via SSH. In short: Jenkins
          will connect to GitHub &rarr; clone the repository &rarr;
          build/compile/test this code (depends on settings) &rarr; deploy to
          the server.
        </p>

        <p>
          First of all we need to create keys. Clone the GitHub repo to your PC
          and do git Bash in the folder with the project(I did it on Windows,
          think you can use Linux console), type in the console{" "}
          <code>ssh-keygen</code>. You will be asked how to name the file, for
          example the name is "jenkins". Then type Enter and Enter. Two keys
          were created: "jenkins" and "jenkins.pub". You can see their files by
          typing command <code>ls</code> in the same console.
        </p>

        <p>
          To see the key itself type <code>cat jenkins.pub</code> This is the
          public key. Copy the key itself, not the file. Then add the key on
          GitHub:
        </p>
        <ol>
          <li>Open your GitHub</li>
          <li>
            Open general settings (click on the icon in the right upper angle
          </li>
          <li>Open "Settings"</li>
          <li>Select "SSH and GPG keys"</li>
          <li>Click "New SSH key"</li>
          <li>
            Add a name and paste the key you copied from the console earlier
          </li>
        </ol>

        <p>
          Then see and copy the private key itself <code>cat jenkins</code>, you
          will need it later. (just copy, not to add to GitHub)
        </p>

        <p>
          Go to Jenkins UI and create a new job with the type "Freestyle
          project". In job's settings find "Source Code Management" section.
          Activate "Git" radiobutton. In the field "Repository URL" put URL of
          your repository that you want to deploy to the server (it's the same
          URL we use for clonning the repository, but select "Clone" via SSH).
          As you add URL you will see an error because we didn't add the private
          key yet (if use https link - everithing will work without keys). To
          add the private key to the Jenkins repo click "+ Add" button and
          select "Jenkins".
        </p>

        <p>
          <img
            className="fullImgInText"
            src="/img/jenkins/errorConnectionToGitRepoViaSSH.png"
            alt="Error message if connection to Git via SSH wasn't set"
          />
        </p>

        <p>
          In the opened window find "Kind" and select "SSH Username with private
          key". Username = your GitHub username (to get to know your user name
          type in git Bash console <code>git config --list</code>). Find
          "Private Key" and select "Enter directly", then past there the private
          key that was copied earlier. Add ID and Description so you can
          understand later for what connection this credential is. Click "Add"
          button to save all settings.
        </p>

        <p>
          You will be automatically returned to the job's settings page and now
          in "Credentials" select newly created credential. The error under
          "Repository URL" will disappear.
        </p>

        <p>
          Find "Post-build Actions" and click on it &rarr; select "Send build
          artifact over SSH" &rarr; select the server's name &rarr; in "Source
          files" type <code>**/*</code>. Run the job. Open your IP in a browser
          and you will see your site.
        </p>

        <h3>Add new Node and Slaves</h3>
        <ol>
          <li>Click "Manage Jenkins"</li>
          <li>Find and click "Manage Nodes"</li>
          <li>Click "New Node"</li>
          <li>
            Add any name, activate a radiobutton "Permanent agent" and click
            "Create"
          </li>
        </ol>

        <p>
          Fill the field "Remote root directory" this is the path where all
          node's files will be kept on server, can specify any folder or create
          a new one, don't forget to add permission to write files to this
          folder <code>sudo chmod -R 777 /PATH_TO_FOLDER</code>. Fill the field
          "Labels", you will use labels to select a partucular node to run jobs.
        </p>

        <p>
          Find "Launch method" and select "Launch agent via SSH". Field "Host" =
          server's IP. Credentials &rarr; click "Add" &rarr; select Jenkins
          &rarr; Field "Kind" select "SSH Username with private key". Type
          "Username" from your server, usually it's ec2-user and "Private key"
          &rarr; "Enter directly" &rarr; past your server's key (not the file,
          but the key data itself). It's better to fill "ID" field and give a
          recognazible name of this credential.
        </p>
        <p>
          In the drop-down list "Host Key Verification Strategy" select
          "Manually trusted key Verification Strategy" and save all settings.
          After saving the node will be automatically started and it's name will
          be added on the left sidebar of Jenkins.
        </p>

        <h3>To start a job on a particular node</h3>
        <p>
          Go to job's settings, activate the checkbox "Restrict where this
          project can be run" and start typing the label of the node you want to
          select. Select node from drop-down list and don't forget to delete
          white space after the label's name because it is added automatically.
          (to select some labels just add labels' names splitted by white
          spaces). Save settings.
        </p>

        <p>
          <img
            className="fullImgInText"
            src="/img/jenkins/newNodeAdded.png"
            alt="New Node added"
          />
        </p>

        <h3>Start job from URL or Linux console</h3>
        <p>Create token:</p>
        <ol>
          <li>In Jenkins UI open accoun't settings</li>
          <li>Find "API Token"</li>
          <li>Click "Add new Token" and set name</li>
          <li>Click "Generate" and copy the token</li>
        </ol>
        <p>
          Create a new job with a type "Freestyle project". In job's settings
          find "Build Triggers" &rarr; activate the checkbox "Trigger builds
          remotely (e.g., from scripts)" &rarr; put your token to the field
          "Authentication Token". Construct URL as shown on Jenkins UI and put
          in to the browser. You will see nothing in browser, however if open
          Jenkins UI you will see that this job was started. Example:
          http://SERVER_IP:8080/job/NAME_OF_JOB/build?token=TOKEN_NUMBER.
        </p>

        <p>
          To start the job from Linux console you need to specify login and
          password, don't show your password, generte a new token instead of it.
          Then to start job from Linux console type{" "}
          <code>
            curl
            http://LOGIN_TO_JENKINS:NEW_TOKEN@SERVER_IP:8080/job/NAME_OF_JOB/build?token=TOKEN_NUMBER
          </code>
        </p>

        <h3>Build periodically</h3>
        <p>
          For example Jenkins can check every 2 hours\days\weeks if there is a
          new code in a repository and if there is start the job. Create a new
          job with the type "Freestyle project", in job's settings find "Source
          Code Management" &rarr; add HTTPS link to GitHub repository. Find
          "Build Triggers" &rarr; activate the checkbox "Poll SCM" and set how
          often Jenkins should check the repository.
        </p>

        <h3>Build if there was a new push in a repository</h3>
        <p>In Jenkins</p>
        <ol>
          <li>Install the plugin "GitHub plugin"</li>
          <li>Create a new job with the type "Freestyle project"</li>
          <li>
            In job's settings find "GitHub project" and add HTTPS link to a
            GitHub repository.
          </li>
          <li>find "Source Code Management" and add the same link</li>
          <li>
            Find "Build Triggers" and activate the checkbox "GitHub hook trigger
            for GITScm polling"
          </li>
        </ol>

        <p>In GitHub</p>
        <ol>
          <li>Open repository's settings</li>
          <li>Click "Webhooks" and add webhooks</li>
          <li>
            In the field "Payload URL" put http://SERVER_IP:8080/github-webhook/
          </li>
          <li>Select "Content type" json</li>
          <li>
            Specify "Which events would you like to trigger this webhook?"
            select "Just the push event"
          </li>
          <li>Click "Add"</li>
        </ol>

        <h3>Jenkins pipeline</h3>
        <p>Install the plugin "Pipeline"</p>
        <p>
          Create a new job with the type "Pipeline" &rarr; in job's settings
          find "Pipeline" and add this script
        </p>

        <pre>
          <code>{`pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Start Build'
                echo 'Test Build'
                echo 'Finish Build'
            }
        }
    }
    stages {
        stage('Test') {
            steps {
                echo 'Start Test'
                echo 'Test Test'
                echo 'Finish Test'
            }
        }
    }
    stages {
        stage('Deploy') {
            steps {
                echo 'Start Deploy'
                echo 'Test Deploy'
                echo 'Finish Deploy'
            }
        }
    }
}`}</code>
        </pre>

        <p>
          Run this job and you will see on UI information about each stage from
          the script. If you click on the stage you can see all logs connected
          to it.
        </p>

        <p>
          <img
            className="fullImgInText"
            src="/img/jenkins/stages.png"
            alt="Pipeline"
          />
        </p>

        <p>
          Instead of typing all this script in Jenkins console it is possible
          automatically take a file with the script from GitHub:
        </p>

        <ol>
          <li>Create a job with Pypeline type</li>
          <li>In job's settings find "Pipeline"</li>
          <li>Select "Pipeline script from SCM"</li>
          <li>In "SCM" field select Git</li>
          <li>Specify an URL of a repository</li>
        </ol>

        <h3>Examples of Groovy commands</h3>
        <p>
          Click "Manage Jenkins" &rarr; click "Script Console" and type there
          commands. For example to change number of executors:{" "}
          <code>Jenkins.instance.setNumExecutors(2)</code>
        </p>
        <p>Check all builds of a job and their results:</p>
        <pre>
          <code>{`job = Jenkins.instance.getItemByFullName("DeployToTest")
job.getBuilds().each{
println("Build " + it + "result " + it.result)
}`}</code>
        </pre>

        <p>Delete all jobs with specified result</p>

        <pre>
          <code>{`job = Jenkins.instance.getItemByFullName("DeployToTest")
job.getBuilds().each{
  if(it.result == Result.FAILURE) {
  it.delete()
  }
}`}</code>
        </pre>

        <p>Delete all job's builds and start the nex build from 1</p>

        <pre>
          <code>{`job = Jenkins.instance.getItemByFullName("DeployToTest")
job.builds.each() { build ->
build.delete()
}

job.updateNextBuildNumber(1)`}</code>
        </pre>

        <p>Summary:</p>
        <p>
          1 – It's not possible to set up a webhook if you use Jenkins in
          localhost
        </p>
      </div>

      {/* FOOTER BAR */}
      <SiteFooter style={{ order: 3, width: "100%" }} />
    </div>
  );
}
