---
order: 1
next: 02.md
title: Developing And Testing InSpec Profiles
author: Aaron Lippold
---

Prior courses have been focused on the process of writing InSpec profile _code_, i.e. individual tests and resources. The following content is concerned with development best practices for your workflow for producing or updating an entire InSpec profile. The MITRE SAF team follows this process whenever we write a new profile or conduct a major overhaul of one to match an update to the underlying benchmark. 

You may note that much of this content is really just describing DevSecOps best practices. This is not a coincidence.

# Overview

Developing and testing profiles requires a variety of software tools, including (but not limited to): 

- Ruby
- Progress Chef's [Test Kitchen](https://docs.chef.io/workstation/kitchen/) suite
- [InSpec](https://inspec.io) itself
- [Ansible](https://www.ansible.com) (or your configuration management orchestration tool of choice)
- [Docker](https://www.docker.com)
- Good old fashioned shell scripting (bash/zsh)

Our profiles, and any supporting automation content to support them, are hosted by [MITRE's GitHub](https://github.com/mitre) organization. To contribute to these repos with Pull Requests and fixes, you'll need to set up your local test suite following the instructions provided below.

Our development and testing workflow is managed by Test Kitchen. This tool is integral to our GitHub Actions CI/CD Pipelines and is also used for local development, testing, and releasing updates, patches, and full releases of the profile.

Test Kitchen uses Docker (or Podman, if preferred) and AWS (using free-tier resources) for testing. For convenience, we provide example files for testing on a local Vagrant Red Hat (or other RHEL variant) box in the repository.

Additionally, Test Kitchen uses the Red Hat hardened `ubi8 base container` from Platform One for testing. To test the hardened container portion of the testing suite, you'll need to set up and log in to your P1 Free account, then obtain a CLI token to pull the Platform One Iron Bank Red Hat Enterprise Linux 8 Universal Base Image (P1 IB UBI8) image into the test suite.

## Examples in this guide

This guide will be describing the workflow that is in place around MITRE SAF's [Red Hat 8 STIG InSpec profile](https://github.com/mitre/redhat-enterprise-linux-8-stig-baseline) as a convenient example. We encourage anyone interested in contributing to one of our profiles, or writing one of their own, to poke around that repo and examine our test suite files in that repo. This guide will explain how they all work together to support the overall profile.

## Why Bother?

We anticipate a question that goes something like this:

**"I looked at a SAF repo and saw about a dozen different automation scripting files inside the InSpec profile -- why do we have to write so much automation to support an InSpec profile?! Isn't InSpec itself supposed to be automating the validation of other things?"** 

Good question. We answer with another question - **Who inspects the inspector?**

The reason that we set up our development environment for an InSpec profile this way is because setting up a full DevSecOps CI/CD pipeline makes for better code and better tests. The reason that we build the CI/CD content directly into the profile repo, and publish the pipeline artifacts on GitHub where anybody can see them, is because we want to be able to _prove that they work._

Remember that your users downstream who run your profile have no idea if the tests are necessarily accurate. We want to be able to point to evidence that InSpec produces expected results when run against a benchmarked configuration. That's why we want a full CI/CD pipeline set up for each profile; one that runs the profile against an off-the-shelf, completely fresh component (the "vanilla" test) and one that runs against a component that we have run hardening content against (the "hardened" test). Note also that we get the added benefit of testing whatever hardening content we use to produce the hardened test target.

This all hopefully reinforces the general theme of the MITRE SAF trainings on this site - it's not enough to write some slapdash test code to check if your system matches the configuration you think it should have and call it a day. Automation code needs to be _well-documented_, _easy to maintain_ and above all _proven to work_ for it to be valuable long-term.