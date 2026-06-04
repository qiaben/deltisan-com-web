---
slug: high-precision-sub-assembly
title: What "complete sub-assembly" should actually mean when you order it
authors: [suhesma]
tags: [assembly, quality, manufacturing]
date: 2026-06-02
description: A lot of suppliers say they deliver complete sub-assemblies. Here's what that should mean in practice — and what to ask for when it doesn't.
image: /img/stock/workshop-1.jpg
---

![Assembly on the workshop floor](/img/stock/workshop-1.jpg)

"We supply complete sub-assemblies" gets said a lot. What it means in practice ranges from "we put the parts in the same bag" to "we built, tested, and documented a functional unit ready to drop into your line." Those are not the same thing, and the difference matters when you're integrating someone else's sub-assembly into your production flow.

<!--truncate-->

## The child-component problem

A sub-assembly is only as consistent as its weakest input. The most common failure mode we see is a customer who specs the assembly output tightly but leaves the child-component specifications vague. Springs, rubber seals, fasteners, and turned parts all have tolerances that stack — if any of them are loose, the assembled unit will be inconsistent even if every assembly step is correct.

When we quote a sub-assembly job, we ask for drawings on the child components, not just the final assembly. If those drawings don't exist, we write them before production starts. It adds time upfront and saves it later.

## Testing is not optional

The four tests that matter for most fluid-handling and mechanical sub-assemblies are straightforward:

- **Leakage test** — every unit, not a sample. Leaks are a binary failure and the cost of a field return is much higher than the cost of a test rig.
- **Functional test** — confirms the assembly operates through its required range. What "operates" means should be defined on the drawing, not left to the assembler's judgment.
- **Priming test** — for pumps and systems that need to establish flow from rest. A unit that won't self-prime in the field is a problem that's cheap to catch at the bench.
- **Shut-off pressure test** — confirms the assembly holds against the maximum pressure it will see in service.

If a supplier is doing "visual inspection at the end of the line," that's finishing, not testing. Useful, but not sufficient for anything mechanical.

## What the delivery documentation should include

A complete sub-assembly delivery should come with:

- A first-article inspection report on the first-off unit when a new job starts
- A batch record tying the delivered units to their component lots
- Test results per unit, or per batch if sampling is agreed upfront

The batch record is the one most often skipped and the one most often needed when something goes wrong. If there's a field failure three months later and you can't trace which component lot the unit came from, you're guessing.

## The Poka-Yoke point

Well-designed assembly lines build mistakes out rather than inspect them out. If a component can be assembled backwards, it will be — eventually. Designing the fixture or the component geometry to make the wrong orientation physically impossible is worth doing before production starts, not after the first field return. We raise this in the DFM review on every assembly job. Sometimes the customer has already thought of it; often they haven't.
