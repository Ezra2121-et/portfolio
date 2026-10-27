---
layout: ../../layouts/WritingPost.astro
title: "Notes from Learning Linux"
date: 2026-08-30
description: "An inspection-first checklist for learning Linux and troubleshooting more methodically."
category: linux
tags:
  - linux
  - troubleshooting
  - systems
---

## Start with the symptom, not a random command

A Linux problem becomes easier to reason about when I first describe exactly what is wrong. “The network is broken” is a conclusion; “the machine has an address but cannot reach its default gateway” is a testable observation.

That small difference changes what I check next.

## Keep an inspection-first toolkit

These commands are useful starting points because they show system state before I change anything:

- `ip addr`: inspect network interfaces and addresses.
- `ip route`: inspect the routing table and default route.
- `ss -tulpn`: inspect listening sockets and services.
- `journalctl -b`: review logs from the current boot.

The goal is not to run every command every time. It is to choose one that can answer the question I actually have.

## A repeatable troubleshooting loop

1. State the symptom in one sentence.
2. Check whether it affects one app, one destination, or the whole machine.
3. Inspect the relevant state and collect evidence.
4. Change one thing at a time.
5. Retest and write down what changed.

This is slower than guessing for the first few seconds, but it gives me a better chance of finding the cause rather than accidentally hiding the symptom.

## Keep notes safe

Terminal output can contain internal addresses, usernames, hostnames, file paths and other details. Before publishing a command transcript, remove private information and secrets.

## What I learned

I want Linux to feel less like a list of commands to memorise and more like a system I can inspect. A useful command is one that helps answer a specific question.
