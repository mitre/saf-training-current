import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as i,c as a,d as e,e as t,b as n,f as c}from"./app-WeARUK1X.js";const d={},l=e("p",null,"A patch update involves making minor changes to a profile to fix issues or improve functionality. Here's a step-by-step guide:",-1),u=e("strong",null,"Report the Issue:",-1),h={href:"https://github.com/mitre/redhat-enterprise-linux-8-stig-baseline/issues",target:"_blank",rel:"noopener noreferrer"},p=c("<li><strong>Fork and Branch:</strong> Fork the repository on GitHub, then create a branch off the <code>tagged</code> patch release you&#39;re targeting for the update.</li><li><strong>Set Up Testing Suites:</strong> In your forked branch, set up the AWS and Docker testing suites.</li><li><strong>Make Updates:</strong> Update the control, <code>inspec.yml</code> inputs, thresholds, etc. Don&#39;t worry about the InSpec version in the <code>inspec.yml</code> - the release process handles that.</li><li><strong>Test Your Updates Locally:</strong> Test your updates on all <code>vanilla</code> and <code>hardened</code> variants of the <code>known bad</code> and <code>known good</code> states of the <code>AWS EC2</code> and <code>Docker</code> test targets. Also, test your controls outside perfect conditions to ensure they handle non-optimal target environments. Verify that your update considers the <code>container</code>, <code>virtual machine</code>, and <code>1U machine</code> testing context of applicability.</li><li><strong>Lint Your Updates:</strong> Use the <code>bundle exec rake lint</code> and <code>bundle exec rake lint:autocorrect</code> commands from the test suite to lint your updates.</li><li><strong>Commit Your Updates:</strong> After testing and linting, commit your updates to your branch. Include <code>Fixes #ISSUE</code> in your commit messages to automatically close the issue when your PR is merged.</li><li><strong>Open a PR:</strong> Open a PR on the project repository from your fork.</li>",7),g=e("strong",null,"Check Test Suite:",-1),m={href:"https://github.com/mitre/redhat-enterprise-linux-8-stig-baseline/actions",target:"_blank",rel:"noopener noreferrer"};function f(_,y){const o=r("ExternalLinkIcon");return i(),a("div",null,[l,e("ol",null,[e("li",null,[u,t(" Open an issue on our project, detailing the problem and providing examples. Do this on "),e("a",h,[t("our issues page"),n(o)]),t(".")]),p,e("li",null,[g,t(" Ensure the GitHub Action test suite on the project side passes. You can check this at "),e("a",m,[t("our actions page"),n(o)]),t(".")])])])}const x=s(d,[["render",f],["__file","11.html.vue"]]);export{x as default};
