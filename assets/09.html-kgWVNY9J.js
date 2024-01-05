import{_ as u}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as r,c as d,b as i,w as s,d as n,e,f as o}from"./app-WeARUK1X.js";const k="/saf-training-current/assets/triggered_workflow-MJxO3PKI.png",m="/saf-training-current/assets/workflow_view-IdIa_fIH.png",h="/saf-training-current/assets/job-07jYrFBm.png",b="/saf-training-current/assets/many_commits_are_ok-KcQIrC5Z.png",v={},g=o(`<h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> GitHub Actions</h2><p>Let&#39;s create a GitHub Action workflow to define our pipeline.</p><h3 id="the-workflow-file" tabindex="-1"><a class="header-anchor" href="#the-workflow-file" aria-hidden="true">#</a> The Workflow file</h3><p>Pipeline orchestration tools are usually configured in a predefined workflow file, which defines a set of tasks and the order they should run in. Workflow files live in the <code>.github</code> folder for GitHub Actions (the equivalent is the <code>gitlab-ci</code> file for GitLab CI, for example).</p><p>Let&#39;s create a new file to store our workflow.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> .github
<span class="token function">mkdir</span> .github/workflows
<span class="token function">touch</span> .github/workflows/pipeline.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Neither command has output, but you should see a new file if you examine your <code>.github</code> directory:</p>`,7),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`tree .github
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`.github
└── workflows
    └── pipeline.yml
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=o(`<p>Open that file up for editing.</p><h3 id="workflow-file-complete-example" tabindex="-1"><a class="header-anchor" href="#workflow-file-complete-example" aria-hidden="true">#</a> Workflow File - Complete Example</h3><p>For reference, this is the complete workflow file we will end up with at the end of the class:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Demo Security Validation Gold Image Pipeline

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> main<span class="token punctuation">,</span> pipeline <span class="token punctuation">]</span>                <span class="token comment"># trigger this action on any push to main branch</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">gold-image</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Gold Image NGINX
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">20.04</span>
    <span class="token key atrule">env</span><span class="token punctuation">:</span>
      <span class="token key atrule">CHEF_LICENSE</span><span class="token punctuation">:</span> accept                      <span class="token comment"># so that we can use InSpec without manually accepting the license</span>
      <span class="token key atrule">PROFILE</span><span class="token punctuation">:</span> my_nginx                         <span class="token comment"># path to our profile</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> PREP <span class="token punctuation">-</span> Update runner              <span class="token comment"># updating all dependencies is always a good start</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> sudo apt<span class="token punctuation">-</span>get update
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> PREP <span class="token punctuation">-</span> Install InSpec executable 
        <span class="token key atrule">run</span><span class="token punctuation">:</span> curl https<span class="token punctuation">:</span>//omnitruck.chef.io/install.sh <span class="token punctuation">|</span> sudo bash <span class="token punctuation">-</span>s <span class="token punctuation">-</span><span class="token punctuation">-</span> <span class="token punctuation">-</span>P inspec <span class="token punctuation">-</span>v 5

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> PREP <span class="token punctuation">-</span> Check out this repository  <span class="token comment"># because that&#39;s where our profile is!</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> LINT <span class="token punctuation">-</span> Run InSpec Check           <span class="token comment"># double-check that we don&#39;t have any serious issues in our profile code</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> inspec check $PROFILE

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> DEPLOY <span class="token punctuation">-</span> Run a Docker container from nginx
        <span class="token key atrule">run</span><span class="token punctuation">:</span> docker run <span class="token punctuation">-</span>dit <span class="token punctuation">-</span><span class="token punctuation">-</span>name nginx nginx<span class="token punctuation">:</span>latest

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> DEPLOY <span class="token punctuation">-</span> Install Python for our nginx container
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          docker exec nginx apt-get update -y
          docker exec nginx apt-get install -y python3</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> HARDEN <span class="token punctuation">-</span> Fetch Ansible role
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          git clone --branch docker https://github.com/mitre/ansible-nginx-stigready-hardening.git || true
          chmod 755 ansible-nginx-stigready-hardening</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> HARDEN <span class="token punctuation">-</span> Fetch Ansible requirements
        <span class="token key atrule">run</span><span class="token punctuation">:</span> ansible<span class="token punctuation">-</span>galaxy install <span class="token punctuation">-</span>r ansible<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>stigready<span class="token punctuation">-</span>hardening/requirements.yml

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> HARDEN <span class="token punctuation">-</span> Run Ansible hardening
        <span class="token key atrule">run</span><span class="token punctuation">:</span> ansible<span class="token punctuation">-</span>playbook <span class="token punctuation">-</span><span class="token punctuation">-</span>inventory=nginx<span class="token punctuation">,</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>connection=docker ansible<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>stigready<span class="token punctuation">-</span>hardening/hardening<span class="token punctuation">-</span>playbook.yml

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> VALIDATE <span class="token punctuation">-</span> Run InSpec
        <span class="token key atrule">continue-on-error</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>                 <span class="token comment"># we dont want to stop if our InSpec run finds failures, we want to continue and record the result</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          inspec exec $PROFILE \\
          --input-file=$PROFILE/inputs.yml \\
          --target docker://nginx \\
          --reporter cli json:results/pipeline_run.json</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> VALIDATE <span class="token punctuation">-</span> Save Test Result JSON  <span class="token comment"># save our results to the pipeline artifacts, even if the InSpec run found failing tests</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> results/pipeline_run.json

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> VERIFY <span class="token punctuation">-</span> Display our results summary 
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> mitre/saf_action@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">command_string</span><span class="token punctuation">:</span> <span class="token string">&quot;view summary -i results/pipeline_run.json&quot;</span>
          
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> VERIFY <span class="token punctuation">-</span> Ensure the scan meets our results threshold
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> mitre/saf_action@v1             <span class="token comment"># check if the pipeline passes our defined threshold</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">command_string</span><span class="token punctuation">:</span> <span class="token string">&quot;validate threshold -i results/pipeline_run.json -F threshold.yml&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is a bit much all in one bite, so let&#39;s construct this full pipeline piece by piece.</p><h3 id="workflow-triggers" tabindex="-1"><a class="header-anchor" href="#workflow-triggers" aria-hidden="true">#</a> Workflow Triggers</h3><p>Pipeline orchestrators need you to define some set of events that should trigger the pipeline to run. The first thing we want to define in a new pipeline is what triggers it.</p><p>In our case, we want this pipeline to be a continuous integration pipeline, which should trigger every time we push code to the repository. Other options include &quot;trigger this pipeline when a pull request is opened on a branch,&quot; or &quot;trigger this pipeline when someone opens an issue on our repository,&quot; or even &quot;trigger this pipeline when I hit the manual trigger button.&quot;</p><div class="hint-container note"><p class="hint-container-title">Saving Files vs. Pushing Code</p><p>In all class content so far, we have been taking advantage of Codespaces&#39; autosave feature. We have been saving our many edits to our profiles locally.</p><p><em>Pushing code</em>, by contrast, means taking your saved code and officially adding it to your base repository&#39;s committed codebase, making it a permanent change. Codespaces won&#39;t do that automatically.</p></div><p>Let&#39;s give our pipeline a name and add a workflow trigger. Add the following into the <code>pipeline.yml</code> file:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Demo Security Validation Gold Image Pipeline

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span> <span class="token comment"># trigger this action on any push to main branch</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),_={href:"https://docs.github.com/en/actions/using-workflows/triggering-a-workflow",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"main",-1),I=o('<div class="hint-container warning"><p class="hint-container-title">YAML Syntax</p><p>We will be heavily editing <code>pipeline.yml</code> throughout this part of the class. Recall that YAML files like this are whitespace-delimited. If you hit confusing errors when we run these pipelines, always be sure to double-check your code lines up with the examples.</p></div><div class="hint-container note"><p class="hint-container-title">Why Is `[main]` in brackets?</p><p>The <code>branches</code> attribute in a workflow file can accept an array of branches we want to trigger the pipeline if they see a commit. We are only concerned with <code>main</code> at present, so we wind up with &#39;<code>[main]</code>&#39;.</p></div><h3 id="our-first-step" tabindex="-1"><a class="header-anchor" href="#our-first-step" aria-hidden="true">#</a> Our First Step</h3><p>Next, we need to define some kind of task to complete when the event triggers.</p><p>First, we&#39;ll define a <code>job</code>, the logical group for our tasks. In our <code>pipeline.yml</code> file, add:</p>',5),E=n("code",null,"pipeline.yml",-1),A=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"jobs"),n("span",{class:"token punctuation"},":"),e(`
  `),n("span",{class:"token key atrule"},"gold-image"),n("span",{class:"token punctuation"},":"),e(`
    `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),e(` Gold Image NGINX
    `),n("span",{class:"token key atrule"},"runs-on"),n("span",{class:"token punctuation"},":"),e(" ubuntu"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token number"},"20.04"),e(`
    `),n("span",{class:"token key atrule"},"env"),n("span",{class:"token punctuation"},":"),e(`
      `),n("span",{class:"token key atrule"},"CHEF_LICENSE"),n("span",{class:"token punctuation"},":"),e(" accept "),n("span",{class:"token comment"},"# so that we can use InSpec without manually accepting the license"),e(`
      `),n("span",{class:"token key atrule"},"PROFILE"),n("span",{class:"token punctuation"},":"),e(" my_nginx "),n("span",{class:"token comment"},"# path to our profile"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),e(` Demo Security Validation Gold Image Pipeline

`),n("span",{class:"token key atrule"},"on"),n("span",{class:"token punctuation"},":"),e(`
  `),n("span",{class:"token key atrule"},"push"),n("span",{class:"token punctuation"},":"),e(`
    `),n("span",{class:"token key atrule"},"branches"),n("span",{class:"token punctuation"},":"),e(),n("span",{class:"token punctuation"},"["),e("main"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token comment"},"# trigger this action on any push to main branch"),e(`

`),n("span",{class:"token key atrule"},"jobs"),n("span",{class:"token punctuation"},":"),e(`
  `),n("span",{class:"token key atrule"},"gold-image"),n("span",{class:"token punctuation"},":"),e(`
    `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),e(` Gold Image NGINX
    `),n("span",{class:"token key atrule"},"runs-on"),n("span",{class:"token punctuation"},":"),e(" ubuntu"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token number"},"20.04"),e(`
    `),n("span",{class:"token key atrule"},"env"),n("span",{class:"token punctuation"},":"),e(`
      `),n("span",{class:"token key atrule"},"CHEF_LICENSE"),n("span",{class:"token punctuation"},":"),e(" accept "),n("span",{class:"token comment"},"# so that we can use InSpec without manually accepting the license"),e(`
      `),n("span",{class:"token key atrule"},"PROFILE"),n("span",{class:"token punctuation"},":"),e(" my_nginx "),n("span",{class:"token comment"},"# path to our profile"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=o('<ul><li><code>gold-image</code> is an arbitrary name we gave this job. It would be more useful if we were running more than one.</li><li><code>name</code> is a simple title for this job.</li><li><code>runs-on</code> declares what operating system we want our runner node to be. We picked Ubuntu (and we suggest you do to to make sure the rest of the workflow commands work correctly).</li><li><code>env</code> declares environment variables for use by any step of this job. We will go ahead and set a few variables for running InSpec later on: <ul><li><code>CHEF_LICENSE</code> will automatically accept the license prompt when you run InSpec the first time so that we don&#39; hang waiting for input!</li><li><code>PROFILE</code> is set to the path of the InSpec profile we will use to test. This will make it easier to refer to the profile multiple times and still make it easy to swap out.</li></ul></li></ul><h3 id="the-next-step" tabindex="-1"><a class="header-anchor" href="#the-next-step" aria-hidden="true">#</a> The Next Step</h3><p>Now that we have our job metadata in place, let&#39;s add an actual task for the runner to complete, which GitHub Actions refer to as <strong>steps</strong> -- a quick update on our runner node&#39;s dependencies (this shouldn&#39;t be strictly necessary, but it&#39;s always good to practice good dependency hygiene!). In our <code>pipeline.yml</code> file, add:</p>',3),S=n("code",null,"pipeline.yml",-1),N=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"steps"),n("span",{class:"token punctuation"},":"),e(`
  `),n("span",{class:"token punctuation"},"-"),e(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),e(" PREP "),n("span",{class:"token punctuation"},"-"),e(" Update runner "),n("span",{class:"token comment"},"# updating all dependencies is always a good start"),e(`
    `),n("span",{class:"token key atrule"},"run"),n("span",{class:"token punctuation"},":"),e(" sudo apt"),n("span",{class:"token punctuation"},"-"),e(`get update
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),e(` Demo Security Validation Gold Image Pipeline

`),n("span",{class:"token key atrule"},"on"),n("span",{class:"token punctuation"},":"),e(`
  `),n("span",{class:"token key atrule"},"push"),n("span",{class:"token punctuation"},":"),e(`
    `),n("span",{class:"token key atrule"},"branches"),n("span",{class:"token punctuation"},":"),e(),n("span",{class:"token punctuation"},"["),e("main"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token comment"},"# trigger this action on any push to main branch"),e(`

`),n("span",{class:"token key atrule"},"jobs"),n("span",{class:"token punctuation"},":"),e(`
  `),n("span",{class:"token key atrule"},"gold-image"),n("span",{class:"token punctuation"},":"),e(`
    `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),e(` Gold Image NGINX
    `),n("span",{class:"token key atrule"},"runs-on"),n("span",{class:"token punctuation"},":"),e(" ubuntu"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token number"},"20.04"),e(`
    `),n("span",{class:"token key atrule"},"env"),n("span",{class:"token punctuation"},":"),e(`
      `),n("span",{class:"token key atrule"},"CHEF_LICENSE"),n("span",{class:"token punctuation"},":"),e(" accept "),n("span",{class:"token comment"},"# so that we can use InSpec without manually accepting the license"),e(`
      `),n("span",{class:"token key atrule"},"PROFILE"),n("span",{class:"token punctuation"},":"),e(" my_nginx "),n("span",{class:"token comment"},"# path to our profile"),e(`
    `),n("span",{class:"token key atrule"},"steps"),n("span",{class:"token punctuation"},":"),e(`
      `),n("span",{class:"token punctuation"},"-"),e(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),e(" PREP "),n("span",{class:"token punctuation"},"-"),e(" Update runner "),n("span",{class:"token comment"},"# updating all dependencies is always a good start"),e(`
        `),n("span",{class:"token key atrule"},"run"),n("span",{class:"token punctuation"},":"),e(" sudo apt"),n("span",{class:"token punctuation"},"-"),e(`get update
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"Again, be very careful about your whitespacing when filling out this structure!")],-1),T=n("p",null,"We now have a valid workflow file that we can run. We can trigger this pipeline to run by simply committing what we have written so far to our repository -- because of the event trigger we set, GitHub will catch the commit event and trigger our pipeline for us. Let's do this now. At your terminal:",-1),j=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"git"),e(),n("span",{class:"token function"},"add"),e(` .github
`),n("span",{class:"token function"},"git"),e(" commit "),n("span",{class:"token parameter variable"},"-s"),e(),n("span",{class:"token parameter variable"},"-m"),e(),n("span",{class:"token string"},'"adding the github workflow file"'),e(`
`),n("span",{class:"token function"},"git"),e(` push origin main
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("$"),n("span",{class:"token operator"},">"),e(),n("span",{class:"token function"},"git"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token builtin class-name"},"."),e(`
$`),n("span",{class:"token operator"},">"),e(),n("span",{class:"token function"},"git"),e(" commit "),n("span",{class:"token parameter variable"},"-s"),e(),n("span",{class:"token parameter variable"},"-m"),e(),n("span",{class:"token string"},'"adding the github workflow file"'),e(`
`),n("span",{class:"token punctuation"},"["),e("main c2c357b"),n("span",{class:"token punctuation"},"]"),e(" adding the github workflow "),n("span",{class:"token function"},"file"),e(`
 `),n("span",{class:"token number"},"1"),e(),n("span",{class:"token function"},"file"),e(" changed, "),n("span",{class:"token number"},"16"),e(" insertions"),n("span",{class:"token punctuation"},"("),e("+"),n("span",{class:"token punctuation"},")"),e(`
 create mode `),n("span",{class:"token number"},"100644"),e(` .github/workflows/pipeline.yml
$`),n("span",{class:"token operator"},">"),e(),n("span",{class:"token function"},"git"),e(` push origin main
Enumerating objects: `),n("span",{class:"token number"},"6"),e(`, done.
Counting objects: `),n("span",{class:"token number"},"100"),e("% "),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),e("/6"),n("span",{class:"token punctuation"},")"),e(`, done.
Delta compression using up to `),n("span",{class:"token number"},"2"),e(` threads
Compressing objects: `),n("span",{class:"token number"},"100"),e("% "),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),e("/3"),n("span",{class:"token punctuation"},")"),e(`, done.
Writing objects: `),n("span",{class:"token number"},"100"),e("% "),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),e("/5"),n("span",{class:"token punctuation"},")"),e(", "),n("span",{class:"token number"},"713"),e(" bytes "),n("span",{class:"token operator"},"|"),e(),n("span",{class:"token number"},"713.00"),e(` KiB/s, done.
Total `),n("span",{class:"token number"},"5"),e(),n("span",{class:"token punctuation"},"("),e("delta "),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),e(", reused "),n("span",{class:"token number"},"0"),e(),n("span",{class:"token punctuation"},"("),e("delta "),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),e(", pack-reused "),n("span",{class:"token number"},"0"),e(`
remote: Resolving deltas: `),n("span",{class:"token number"},"100"),e("% "),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),e("/1"),n("span",{class:"token punctuation"},")"),e(", completed with "),n("span",{class:"token number"},"1"),e(),n("span",{class:"token builtin class-name"},"local"),e(` object.
To https://github.com/`),n("span",{class:"token operator"},"<"),e("your githiub profile"),n("span",{class:"token operator"},">"),e(`/saf-training-lab-environment
   199b158`),n("span",{class:"token punctuation"},".."),e("c2c357b  main -"),n("span",{class:"token operator"},">"),e(` main
$`),n("span",{class:"token operator"},">"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=o('<p>Once we push our code, you can go to another tab in our browser, load up your personal code repository for the class content that you forked earlier, and check out the Actions tab to see your pipeline executing.</p><figure><img src="'+k+'" alt="The Pipeline Run" tabindex="0" loading="lazy"><figcaption>The Pipeline Run</figcaption></figure><p>Note the little green checkmark next to your pipeline run. This indicates that the pipeline has finished running. You may also see a yellow circle to indicate that the pipeline has not completed yet, or a red X mark to indicate an errr, depending on the status of your pipeline when you examine it.</p><p>If we click on the card for our pipeline run, we get more detail:</p><figure><img src="'+m+'" alt="The Workflow" tabindex="0" loading="lazy"><figcaption>The Workflow</figcaption></figure><p>You can see some info on the triggered run, including a card showing the job that we defined earlier. Clicking it gives us a view of the step we&#39;ve worked into our pipeline -- we can even see the stdout (terminal output) of running that step on the runner.</p><figure><img src="'+h+'" alt="The Job" tabindex="0" loading="lazy"><figcaption>The Job</figcaption></figure><p>Congratulations, you&#39;ve run a pipeline! Now we just need to make it do something useful for us.</p><details class="hint-container details"><summary>How Often Should I Push Code? Won&#39;t Each Push Trigger a Pipeline Run?</summary><p>It&#39;s up to you.</p><p>Some orchestration tools let you run pipelines locally, and in a real repo, you&#39;d probably want to do this on a branch other than the <code>main</code> one to keep it clean. But in practice it has been the authors&#39; experience that everyone winds up simply creating dozens of commits to the repo to trigger the pipeline and watch for the next spot where it breaks. There&#39;s nothing wrong with doing this.</p><p>For example, consider how many failed pipelines the author had while designing the test pipeline for this class, and how many of them involve fixing simple typos. . .</p><figure><img src="'+b+'" alt="No Big Deal!" tabindex="0" loading="lazy"><figcaption>No Big Deal!</figcaption></figure></details>',9);function G(H,D){const l=c("CodeTabs"),p=c("ExternalLinkIcon");return r(),d("div",null,[g,i(l,{id:"19",data:[{id:"Tree Command"},{id:"Expected Output - .github folder structure"}],"tab-id":"shell"},{title0:s(({value:a,isActive:t})=>[e("Tree Command")]),title1:s(({value:a,isActive:t})=>[e("Expected Output - .github folder structure")]),tab0:s(({value:a,isActive:t})=>[y]),tab1:s(({value:a,isActive:t})=>[f]),_:1},8,["data"]),w,n("p",null,[e("GitHub Actions has a number of "),n("a",_,[e("pre-defined workflow triggers"),i(p)]),e(" we can lean on and refer to as attributes in our YAML file. GitHub will now watch for pushes to our "),x,e(" branch and run the workflow when it sees a push.")]),I,i(l,{id:"83",data:[{id:"Adding a Job"},{id:"<code v-pre>pipeline.yml</code> after adding a job"}],"tab-id":"shell"},{title0:s(({value:a,isActive:t})=>[e("Adding a Job")]),title1:s(({value:a,isActive:t})=>[E,e(" after adding a job")]),tab0:s(({value:a,isActive:t})=>[A]),tab1:s(({value:a,isActive:t})=>[P]),_:1},8,["data"]),C,i(l,{id:"131",data:[{id:"Adding a Step"},{id:"<code v-pre>pipeline.yml</code> after adding a step"}],"tab-id":"shell"},{title0:s(({value:a,isActive:t})=>[e("Adding a Step")]),title1:s(({value:a,isActive:t})=>[S,e(" after adding a step")]),tab0:s(({value:a,isActive:t})=>[N]),tab1:s(({value:a,isActive:t})=>[L]),_:1},8,["data"]),R,T,i(l,{id:"144",data:[{id:"Committing And Pushing Code"},{id:"Output of Pushing Code"}],"tab-id":"shell"},{title0:s(({value:a,isActive:t})=>[e("Committing And Pushing Code")]),title1:s(({value:a,isActive:t})=>[e("Output of Pushing Code")]),tab0:s(({value:a,isActive:t})=>[j]),tab1:s(({value:a,isActive:t})=>[F]),_:1}),O])}const V=u(v,[["render",G],["__file","09.html.vue"]]);export{V as default};
