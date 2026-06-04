---
slug: cold-winding-process-quality-dfm
title: Cold winding — the DFM decisions that cost you most often
authors: [suhesma]
tags: [springs, dfm, manufacturing, quality]
date: 2026-06-01
description: Most cold-wound spring and wire-form rejections trace back to a small number of avoidable design and process decisions. Here's what to watch.
image: /img/stock/cnc-1.jpg
---

![CNC precision manufacturing](/img/stock/cnc-1.jpg)

Cold winding is one of those processes that looks simple until it isn't. Feed wire, bend it around a mandrel, cut to length — what's complicated about that? Quite a lot, as it turns out, mostly because of decisions made before the machine ever starts.

<!--truncate-->

## Spring back: the number that moves without warning

When you cold-form wire, the material tries to return toward its original shape after the forming force is removed. For a compression spring, this means the free diameter and pitch you set are not quite the free diameter and pitch you get. Every material has a different spring-back coefficient, and that coefficient shifts with wire hardness, diameter, and how much the wire has already work-hardened on the spool.

The practical consequence: if your design specifies a coil diameter to tight tolerance (say ±0.2 mm), your supplier needs a calibration procedure that accounts for spring back on that specific wire lot — not just a standard offset baked in from the last job. If they can't explain how they compensate for it, that's worth asking about.

## Material consistency is not guaranteed by the certificate

Cold winding is not forgiving of wire variation. Even within a certified batch, differences in hardness across the spool can shift the coil diameter by a tenth of a millimetre or more — enough to matter in a precision assembly.

The right response is to inspect incoming wire — diameter and hardness at minimum — and to treat a change in wire supplier or batch the same as a process change: set up fresh, run first-offs, confirm before committing the batch. Shops that load a new spool and keep running will produce bad parts eventually.

## Three DFM decisions that account for most of the extra cost

**Bend radius tighter than the process needs.** Very small bend radii increase internal stress during forming, raise rejection rates, and accelerate mandrel wear. If you're specifying a radius smaller than 1× the wire diameter, there should be a functional reason for it. The default in most CAD packages is not that reason — it's just whatever the software drew.

**Tolerances specified tighter than the function needs.** Every increment of tighter tolerance on a spring dimension means more frequent calibration, slower production, and higher scrap. Cold winding can hold tight tolerances, but not for free. Specify to the function of the part, not to what the drawing template will accept.

**Post-processing left unspecified.** Shot peening, stress relief, and surface coatings are not optional extras on springs in real service — they're what determines whether the part survives its load cycles. If the drawing doesn't call them out, you'll get inconsistent results between suppliers, because some include them and some don't. That inconsistency looks like a quality problem when it's actually a specification problem.

## What good inspection looks like

At minimum, dimensional inspection on a cold-wound spring should cover free length, coil diameter, pitch, and wire diameter — all with a calibrated instrument, all recorded against the batch. For springs in load-bearing applications, compression rate and solid height should also be confirmed on a sample basis.

"100% visual inspection" is not this. Visual checks catch bent ends and visible surface cracks. They don't catch a free length that's 0.3 mm out. If a supplier describes their inspection process in visual terms only, that's worth clarifying before the order goes in.
