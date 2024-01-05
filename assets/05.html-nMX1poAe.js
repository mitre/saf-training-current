import{_ as o}from"./Vulcan_Menu-sydhQjxL.js";import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as i,c as s,d as t,e,b as c,f as l}from"./app-WeARUK1X.js";const u="/saf-training-current/assets/login_screen-LbEQSId2.png",h="/saf-training-current/assets/register-ydJ0fHs6.png",d="/saf-training-current/assets/start_new_project_filled_out-b0o-cj-j.png",p={},g=t("h2",{id:"_5-1-using-vulcan",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_5-1-using-vulcan","aria-hidden":"true"},"#"),e(" 5.1 Using Vulcan")],-1),m={href:"https://vulcan-br-training.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},f=l('<h3 id="_5-1-1-our-use-case" tabindex="-1"><a class="header-anchor" href="#_5-1-1-our-use-case" aria-hidden="true">#</a> 5.1.1 Our Use Case</h3><p>For the purposes of this class, let&#39;s assume the role of a security engineer who has been tasked to write STIG-ready content for the Red Hat Enterprise Linux 9 (RHEL9) operating system.</p><p>DISA has already published a RHEL9 STIG, so we will be able to compare our content to the real thing if we wish.</p><h3 id="_5-1-2-logging-in" tabindex="-1"><a class="header-anchor" href="#_5-1-2-logging-in" aria-hidden="true">#</a> 5.1.2 Logging In</h3><ol><li>Access the Vulcan training instance using the link above.</li></ol><figure><img src="'+u+'" alt="Vulcan Login Page" tabindex="0" loading="lazy"><figcaption>Vulcan Login Page</figcaption></figure><p>If you haven&#39;t yet registered an account with this instance, do so now.</p><figure><img src="'+h+'" alt="Vulcan registration Page" tabindex="0" loading="lazy"><figcaption>Vulcan registration Page</figcaption></figure><h3 id="_5-1-3-starting-a-new-project" tabindex="-1"><a class="header-anchor" href="#_5-1-3-starting-a-new-project" aria-hidden="true">#</a> 5.1.3 Starting a New Project</h3><p>After logging in, you will reach the Projects screen.</p><p>Vulcan categorizes security guidance content into <strong>Projects</strong>. Each project can include multiple <strong>Components</strong>, where a component is a single piece of security guidance (for instance, a single STIG document). A Project can contain multiple versions of the same component (for instance, multiple releases of the STIG for the same software).</p><p>We need a new Project as a workspace to write our STIG-ready content.</p><ol start="2"><li>In the top navbar, you&#39;ll see the Start a New Project button.</li></ol><figure><img src="'+o+'" alt="Vulcan Navbar" tabindex="0" loading="lazy"><figcaption>Vulcan Navbar</figcaption></figure><p>Click it and begin to fill out the details for our project. You can make the Title and Description of your project whatever you want, but be sure to set the Visibility of the project to &quot;discoverable,&quot; because you&#39;ll want your colleagues to be able to peer review your work later.</p><figure><img src="'+d+'" alt="Vulcan New Project Screen" tabindex="0" loading="lazy"><figcaption>Vulcan New Project Screen</figcaption></figure><ol start="3"><li>When you are finished, click Create Project. You&#39;ll be taken to the Project view for the workspace you just created, which is currently emtpy. We should fix that.</li></ol><h3 id="_5-1-4-role-based-access-control" tabindex="-1"><a class="header-anchor" href="#_5-1-4-role-based-access-control" aria-hidden="true">#</a> 5.1.4 Role-Based Access Control</h3><p>Before we create a Component, though, let&#39;s configure Role-Based Access Control (RBAC).</p><ol start="5"><li>Click the Members tab in the Project view to control access. Projects enforce RBAC to ensure that each author in a Vulcan instance can be restricted to only the content they need to be able to edit.</li></ol><p>In a new Project, you&#39;ll be the only member at first. You can add a new member with a Role of:</p><details class="hint-container details"><summary>Viewer</summary><p>Read only access to the Project or Component</p></details><details class="hint-container details"><summary>Author</summary><p>Edit, comment, and mark Controls as requiring review. Cannot sign-off or approve changes to a Control. Great for individual contributors.</p></details><details class="hint-container details"><summary>Reviewer</summary><p>Write and approve changes to a Control.</p></details><details class="hint-container details"><summary>Admin</summary><p>Full control of a Project or Component. Lock Controls, revert controls, and manage members. You&#39;ll note that the Project&#39;s creator is automatically an admin.</p></details><div class="hint-container tip"><p class="hint-container-title">Adding Colleagues</p><p>If you have any colleagues taking the class with you, you may want to add them as a reviewer now (note that you can only add members to a project if they have registered to the Vulcan instance already).</p></div><div class="hint-container warning"><p class="hint-container-title">Should I Be An Author Or A Reviewer?</p><p>Reviewers are able to approve requirements written by other members. Depending on how your team operates, you may want to have many authors with one final reviewer role, or you may want to have every member be a reviewer. It&#39;s up to you.</p><p>Only the Admin role can bypass the peer review process to lock (finalize) their own requirements. Try not to dole out the Admin role too often; it&#39;s best practice to force all requirements to undergo peer review.</p></div>',27);function y(w,b){const a=r("ExternalLinkIcon");return i(),s("div",null,[g,t("p",null,[e("Let's walk though the process for building STIG-ready content from the beginning using the Vulcan application. We will use our "),t("a",m,[e("demonstration instance of Vulcan"),c(a)]),e(" that the MITRE SAF team created for this training class (please note that this instance will be regularly reset for each training course).")]),f])}const k=n(p,[["render",y],["__file","05.html.vue"]]);export{k as default};
