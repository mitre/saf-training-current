import{_ as r}from"./TestDrivenDevelopment-05PE0ry4.js";import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as h,c,d as e,e as t,b as n,w as s,f as d}from"./app-WeARUK1X.js";const p="/saf-training-current/assets/SAF_Capabilities_Validate-xGn42mxu.png",f="/saf-training-current/assets/Github_Rhel8-8mU9iabL.png",u="/saf-training-current/assets/Github_nginx-kPFLbuTV.png",m={},g=d('<h2 id="_5-from-plan-to-validate" tabindex="-1"><a class="header-anchor" href="#_5-from-plan-to-validate" aria-hidden="true">#</a> 5. From &quot;Plan&quot; to &quot;Validate&quot;</h2><p>After identifying software components for your environment and knowing what security guidance exists for those components, a great next step is validation, or in other words, testing.</p><figure><img src="'+p+'" alt="The Validation Capability" tabindex="0" loading="lazy"><figcaption>The Validation Capability</figcaption></figure><div class="hint-container info"><p class="hint-container-title">WAIT!</p><p>But what about the &quot;Harden&quot; pillar? Why would we focus on testing that a software component is secure before we secure it?</p><p>Actually, starting with the tests, rather than the changes to be tested, can level-set the expectations and see what the current state of the software is while giving a clear understanding of the goal or measurement of success.</p><p>When using this mindset in software development, this kind of development can be referred to as Test Driven Development.</p></div><details class="hint-container details"><summary>A note on Test Driven Development (TDD)</summary><p>The idea of using Test Driven Development (in other words, having the code driven by tests and therefore, the requirements) helps the humans confirm that the software does exactly what it is supposed to do - not more and not less.</p><p>This process starts with a FAILING test. Then, the minimal amount of change required is done to fix the code so that the test passes. Once the test passes, the code can be refactored to be cleaner, more readable, etc. This is a cycle, and returns to the top to create a new failing test. As development continues, all tests should be run to confirm that all tests still pass! These tests can be put in an automated suite to validate the code set whenever there are changes overall.</p><p>The SAF team values this methodology and helps teams implement security compliance tests using InSpec so they can understand the state of the system and the goal state of a secured system, using automated tests to get this information easier, quicker, and more often.<br><img src="'+r+'" alt="Test-Driven Development" loading="lazy"></p></details><h2 id="_5-1-what-is-inspec" tabindex="-1"><a class="header-anchor" href="#_5-1-what-is-inspec" aria-hidden="true">#</a> 5.1 What is InSpec?</h2>',6),_={href:"https://www.chef.io/downloads/tools/inspec",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"The SAF uses InSpec profiles to test software components against a security baseline. These automated tests produce data showing what security controls passed or failed, or were skipped or not reviewed and gives the reason and more information to fix it if not passing.",-1),v={class:"hint-container note"},w=e("p",{class:"hint-container-title"},"What is an InSpec profile?",-1),x=e("strong",null,"InSpec profile",-1),y=e("br",null,null,-1),T=e("h2",{id:"_5-2-examples-of-inspec-profiles",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-2-examples-of-inspec-profiles","aria-hidden":"true"},"#"),t(" 5.2 Examples of InSpec profiles")],-1),k=e("p",null,"Let's review the READMEs for each profile for more information and specific run instructions. The README is the first document in the GitHub repository, and contains the following information:",-1),I=e("ol",null,[e("li",null,"The name of the profile"),e("li",null,"The security guidance that the profile is based on (ex: a DISA STIG)"),e("li",null,"Available inputs for tailoring to your environment"),e("li",null,"Instructions for running the profile")],-1),S=e("h3",{id:"_5-2-1-rhel8-baseline-profile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-2-1-rhel8-baseline-profile","aria-hidden":"true"},"#"),t(" 5.2.1 RHEL8 baseline profile")],-1),A={href:"https://github.com/CMSgov/redhat-enterprise-linux-8-stig-baseline",target:"_blank",rel:"noopener noreferrer"},D={href:"https://saf.mitre.org/libs/validate",target:"_blank",rel:"noopener noreferrer"},N=e("figure",null,[e("img",{src:f,alt:"The Red Hat 8 Profile",tabindex:"0",loading:"lazy"}),e("figcaption",null,"The Red Hat 8 Profile")],-1),L=e("h3",{id:"_5-2-2-nginx-baseline-profile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-2-2-nginx-baseline-profile","aria-hidden":"true"},"#"),t(" 5.2.2 NGINX baseline profile")],-1),E={href:"https://github.com/mitre/nginx-stigready-baseline",target:"_blank",rel:"noopener noreferrer"},G={href:"https://saf.mitre.org/libs/validate",target:"_blank",rel:"noopener noreferrer"},q=e("figure",null,[e("img",{src:u,alt:"The NGINX Profile",tabindex:"0",loading:"lazy"}),e("figcaption",null,"The NGINX Profile")],-1);function R(V,F){const i=o("ExternalLinkIcon"),a=o("RouterLink");return h(),c("div",null,[g,e("p",null,[t('"Chef '),e("a",_,[t("InSpec"),n(i)]),t(' is an infrastructure security and compliance testing framework with a human- and machine-readable language for comparing actual versus desired system state."')]),b,e("div",v,[w,e("p",null,[t("The term "),x,t(" refers a collection of security tests written in InSpec (the programming language)."),y,t(" To learn more, look at the Beginner Developer's section on "),n(a,{to:"/courses/beginner/02.md/#what-is-an-inspec-profile"},{default:s(()=>[t("What is an InSpec Profile")]),_:1}),t(" and test your understanding in "),n(a,{to:"/courses/beginner/02.md/#check-in"},{default:s(()=>[t("this comprehension check")]),_:1}),t(".")])]),T,k,I,S,e("p",null,[t("Let's take the "),e("a",A,[t("RHEL8 baseline profile"),n(i)]),t(" as an example. You can find this InSpec profile at the provided link or through the "),e("a",D,[t("validation library of the SAF site"),n(i)]),t(".")]),N,L,e("p",null,[t("Let's take the "),e("a",E,[t("NGINX baseline profile"),n(i)]),t(" as an example. You can find this InSpec profile at the provided link or through the "),e("a",G,[t("validation library of the SAF site"),n(i)]),t(".")]),q])}const W=l(m,[["render",R],["__file","05.html.vue"]]);export{W as default};
