---
title: Overview
lang: en
---

# Overview

Welcome to the Melon C library, 
which contains many algorithms, data structures, 
functional components, 
scripting languages and practical frameworks for developers to develop applications quickly and avoid duplication of effort.

## Function

### Data Structure

* Doubly Linked List
* Fibonacci Heap
* Hash Table
* Queue
* Red Black Tree
* Stack

### Algorithm

* Encryption algorithms: AES, DES, 3DES, RC4, RSA
* Hashing algorithm: MD5, SHA1, SHA256
* Base64
* Bit Integer calculation
* FEC
* JSON
* Matrix operations
* Reed-Solomon encoding
* Regular matching algorithm
* KMP

### Component

* Memory Pools
* Thread pools
* Data Chains
* TCP Encapsulation
* Event mechanism
* File Caching
* HTTP Processing
* Scripting Languages
* Lexical Parser
* Websocket

### Scripting Language

* Preemptive Concurrency Language - Melang

### Framework

* Multiprocess model
* Multithreaded model

## Platform Support

Melon was originally written for UNIX systems, so it is suitable for Linux, 
MacOS and other UNIX-like systems, with a few optimizations for Intel CPUs.

The initial port of Melon to Windows has also been completed, 
so it can be used on Windows. 
However, because Windows differs greatly from UNIX systems in creating processes, 
some of the above framework features are not supported in Windows for the time being.


## Architecture

Melon has two architectures -- multithread and multiprocess.

### Multiprocess

I believe you have more or less guessed what is multiprocess, but I still drew a figure to illustrate.

<img :src="$withBase('/arch-multiprocess.png')" alt="multiprocess">

### Multithread

For multithread, Melon provides a developing method which is the same as process development to build its thread
modules.

<img :src="$withBase('/arch-multithread.png')" alt="multithread">

