---
title: Overview
lang: en
---

# Overview

Melon is a C framework library for simplifying development.

Why is a library? Because it includes many implementations about data structures, algorithms, architectures and
many other useful components that you can choose that only use these APIs or whole framework (especially
architectures) based on your demand.

## Architecture

Melon has two architectures -- multithread and multiprocess.

### Multiprocess

I believe you have more or less guessed what is multiprocess, but I still drew a figure to illustrate.

<img :src="$withBase('/arch-multiprocess.png')" alt="multiprocess">

### Multithread

For multithread, Melon provides a developing method which is the same as process development to build its thread
modules.

<img :src="$withBase('/arch-multithread.png')" alt="multithread">

