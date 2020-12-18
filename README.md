# Introduction
This repository is for familiarizing myself with node tools and tricks.

## Notes
[Node Intro](https://www.youtube.com/watch?v=ENrzD9HAZK4)

[Node System Diagram](https://i.stack.imgur.com/QRePV.jpg)

### Globals
Console
- command line I/O

Global
- namespace available throughout app

Process
- current running node process

### Eventing
Useful for CPU intesive workloads.
Uses EventEmitter from 'events' module in node.

### File System
Provides blobking, non-blocking, and promised-based file system I/O through the fs module

### Modules
Equivalent to packages in C#.
Uses common js syntax (require('module_name')) and es module syntax (import/export)