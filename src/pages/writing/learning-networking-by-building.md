---
layout: ../../layouts/WritingPost.astro
title: "Learning Networking by Building Things"
date: 2026-08-24
description: "A practical method for learning networking through testable questions and observable evidence."
category: networking
tags:
  - networking
  - troubleshooting
  - hands-on
---

## Build a mental model you can test

Networking becomes easier when concepts stop being only diagrams and become packets, ports, routes, sockets, and failures you can observe.

I want to understand not just which command to run, but what its result can and cannot tell me.

## Separate the layers of the problem

When a connection fails, these are different questions:

- Does the machine have a sensible address and route?
- Can it reach its local gateway?
- Can it reach a public IP address?
- Can the system resolve a hostname through DNS?
- Does the actual HTTP(S) service respond?

A failure at one step can guide the next test, but it does not automatically explain every other step. For example, a failed ping can mean that ICMP is blocked; it does not prove that a website or every other network service is unavailable.

## The loop I want to keep practising

1. Write down the expected behaviour.
2. Change one variable or test one boundary at a time.
3. Record the command and its relevant output.
4. Compare a successful case with a failing case.
5. State the conclusion narrowly enough that the evidence supports it.

This is one of the reasons I built EthioNet Pulse: a sequence of timestamped measurements is more useful than trying to remember when a connection seemed slow.

## Make the evidence readable

A screenshot or log is most useful when it has context: what was tested, when it happened, what the expected result was, and what limitations apply. Measurements without context can create false confidence.

## The takeaway

Good networking practice is not just getting a packet from A to B. It is learning how to tell what happened along the way—and being honest about what I still do not know.
