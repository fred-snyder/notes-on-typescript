# Notes part 2

Suppose the lanternfish live forever and have unlimited food and space.

What does this mean for the existing code / cyclec? >> Nothing

Node.js crashes with `days = 143` (fish count day 142: 79532559)

However:
The description mentions the word: exponentially
perhaps we can derive a mathematical function from the days?

Goal: Find the exponential function. **THIS DIDNT WORK**

## Problem

Memory issues: The 16GB of RAM in this 10year old workstation is too little memory for the OOP solution I coded.
~~Solution: try my other workstation (32GB).~~
Solution: rewrite a simpler more memory-efficient solution in Go

First attempt: `Go: signal: killed`
Still memory issues.

Try on 32GB Windows workstation

## Memory issues

The current solution just isn't efficient enough.
Test if it's possible to use another logic and data structure. 

Perhaps make use of the fact that the offspring spawns in cycles.
So bundle things together???
