---
name: teach
description: Teach an embedded-systems topic through the Embedded Learning Lab repository, producing source-backed Knowledge, sequenced course material, practice, and learning feedback that follow the project's content model and release rules.
disable-model-invocation: true
argument-hint: "想学什么嵌入式主题，或继续哪一课？"
---

# Teach in Embedded Learning Lab

Use this skill only inside the `embedded-learning-lab` repository. It turns a learning request into a small, source-backed teaching increment that can serve both the project owner and public readers.

## Project is the teaching workspace

Do not create the generic `MISSION.md`, `RESOURCES.md`, `lessons/`, `reference/`, or `assets/` workspace from the original Teach workflow. This repository already has authoritative equivalents:

- `docs/project/project-charter.md` defines the mission;
- `docs/product/learning-roadmap.md` defines long-term learning order;
- `docs/project/current-state.md` and `backlog.md` define the current teaching increment;
- `content/` contains framework-independent authoritative content;
- `docs/product/content-schema.md` and `course-package-protocol.md` define metadata and course artifacts;
- `docs/standards/quality-standard.md` defines verification and publication gates.

Read `AGENTS.md`, the files above, and the content directly related to the requested topic before authoring. Follow repository-local instructions when they differ from this skill.

## Separate facts from teaching

- Put stable, independently useful facts in Knowledge exactly once.
- Let courses own sequence, analogy, worked examples, retrieval practice, exercises, feedback, and transitions.
- Let labs own observable experiments and evidence.
- Let interview questions link back to Knowledge or experiment evidence instead of duplicating answers.
- Do not publish a course step whose prerequisites do not yet exist or are not explicitly taught in that step.

## Teaching increment

For each request:

1. Locate the learner on the roadmap and inspect existing prerequisites. If the requested topic starts above their current floor, add or link the smallest prerequisite bridge first.
2. Research claims from current primary or authoritative sources. AI memory is not a source. Record source locators and the exact claims each source supports.
3. State a small observable learning objective: something the learner can explain, calculate, implement, measure, or debug.
4. Build the shortest coherent sequence: activate prior knowledge, explain one model, show one example, require retrieval or action, give immediate feedback, and end with a real-world check or next step.
5. Update the appropriate Knowledge, course manifest/chapter, lab, question, and relationship fields. Do not create a second authority for the same fact.
6. Keep unfinished material `draft` or `review` and normally `unlisted`. Only `verified` + `public` content may enter navigation and search.
7. Run the repository's content, type, build, link, responsive, keyboard, and visual checks in proportion to the change. Synchronize `current-state.md`, `backlog.md`, decisions, navigation, and diagrams when their facts changed.

## Learning design

- Start from the concrete problem before introducing terminology.
- Treat “from zero” literally. Before teaching a mechanism, establish what the thing is, what problem it solves, where it sits in a real system, what goes in and comes out, and what it does not define. Never use a downstream exercise as a substitute for this concept map.
- Expand a term at first use, for example `DMA（直接内存访问）`, then use the professional term consistently.
- Keep each lesson within one working-memory-sized objective and provide a tangible win.
- A lesson is not a summary card. Give enough connective explanation that a learner can reconstruct the reasoning without already knowing the answer. Normally include a motivating situation, a plain-language model, a concrete worked example, at least one contrast or common misconception, guided practice, independent retrieval, feedback, and a closing transfer question. Omit an element only when it genuinely does not help that lesson.
- Do not hide prerequisite teaching behind optional Knowledge links. Knowledge may provide deeper reference material, but every course unit must teach the concepts required to complete its own objective.
- Place practice immediately after the explanation it exercises. Do not render several lessons first and collect unrelated interactives at the bottom of the page.
- Use diagrams or structured text when three or more roles, layers, signals, or state transitions must be related. A diagram must explain a relationship; decoration does not count.
- Explain observable meaning at each representation boundary, for example character → numeric code → byte in memory → framed bits → voltage over time. Name the transformation and the component responsible for it.
- Include “容易混淆” corrections for likely category errors, especially UART versus voltage standard, connector, terminal program, message protocol, USART, RS-232, RS-485, and USB-UART.
- Use retrieval practice and delayed review to build storage strength; do not mistake rereading for mastery.
- Exercises must include feedback or a verifiable result. Hardware exercises must specify safe wiring, expected evidence, failure cases, and recovery.
- Never infer mastery from material merely being displayed. Record progress only from user action or explicit evidence, using the project's approved learning-state model.
- Preserve the project's progression from generic concepts to STM32F103C8T6 details; platform examples must not masquerade as universal behavior.

## Course output

When producing a course, follow `docs/product/course-package-protocol.md`. A course must have stable course and unit IDs, prerequisites, objectives, source links, Knowledge relationships, exercises, acceptance evidence, versioning, and review state. Interactive HTML is a reviewed build artifact, not the original authority. Do not call a generated artifact approved or verified without the required review.

Before marking a unit `available`, perform a beginner-entry audit:

- Can a learner state what the subject is and why it exists without following an external link?
- Are every first-use term and representation change explained?
- Does at least one worked example show all intermediate steps?
- Does practice occur next to the relevant explanation and return actionable feedback?
- Are the limits of the model and the next real-world observation stated?

If any answer is no, keep the unit `in-progress` even when the page builds successfully.

## Stop conditions

Stop and mark a gap rather than inventing facts when a source, hardware result, license, prerequisite, or publication review is missing. Do not widen the current vertical slice merely to make a course look complete.
