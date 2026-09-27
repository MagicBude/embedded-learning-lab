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
- Expand a term at first use, for example `DMA（直接内存访问）`, then use the professional term consistently.
- Keep each lesson within one working-memory-sized objective and provide a tangible win.
- Use retrieval practice and delayed review to build storage strength; do not mistake rereading for mastery.
- Exercises must include feedback or a verifiable result. Hardware exercises must specify safe wiring, expected evidence, failure cases, and recovery.
- Never infer mastery from material merely being displayed. Record progress only from user action or explicit evidence, using the project's approved learning-state model.
- Preserve the project's progression from generic concepts to STM32F103C8T6 details; platform examples must not masquerade as universal behavior.

## Course output

When producing a course, follow `docs/product/course-package-protocol.md`. A course must have stable course and unit IDs, prerequisites, objectives, source links, Knowledge relationships, exercises, acceptance evidence, versioning, and review state. Interactive HTML is a reviewed build artifact, not the original authority. Do not call a generated artifact approved or verified without the required review.

## Stop conditions

Stop and mark a gap rather than inventing facts when a source, hardware result, license, prerequisite, or publication review is missing. Do not widen the current vertical slice merely to make a course look complete.
