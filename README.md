# aOS Circuits

An MVP React + TypeScript + Vite application for building and simulating simple series circuits with a transparent execution trace.

## What this implements

- A glass-style Tailwind UI with shadcn-style primitives for cards, buttons, and badges.
- An interactive SVG-backed circuit canvas that supports placing batteries, resistors, and LEDs, wiring ports, dragging components, and resetting the scene.
- A circuit engine that models the circuit as a graph, checks for disconnected components and valid closed loops, supports simple series-loop solving, computes current with Ohm's Law, and surfaces invalid states in the trace.
- A structured trace panel that explains user intent, system interpretation, topology checks, applied rules, computations, and resulting effects.
- A local `@aos/library-contracts` workspace package that represents the reusable aOS integration boundary for trace envelopes and module manifests.

## Repository integration note

The standalone `aos-library` repository is not present in this execution environment, so this branch introduces a local workspace package (`packages/aos-library-contracts`) that mirrors the shared contract shape the app should ultimately consume from `aos-library`.

When `aos-library` is available, the intended follow-up is:

1. Move the shared `TraceEnvelope`, `TraceStep`, and `AosModuleManifest` exports into `aos-library`.
2. Replace the local file dependency with the published/shared GitHub package reference.
3. Keep all circuit graph logic, solver rules, and circuit-specific trace statements inside `aos-circuits`.

## Run locally

```bash
npm install
npm run dev
```

## MVP interaction flow

Build circuit → connect ports → run simulation → inspect trace.
