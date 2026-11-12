# VECTOR — Jet Flight & Combat

A browser-based arcade flight simulator built with React, TypeScript, and a Canvas 3D renderer. Fly an F/A-18C Hornet over a procedural Nordic coastline, intercept five hostile aircraft, or explore in free flight.

## Run

```sh
bun install
bun run dev
```

## Controls

- W / S: pitch down / up
- A / D: bank and turn
- Arrow keys: alternate flight controls
- Shift / Control: increase / decrease throttle
- Space: fire cannon
- E: launch missile (six available; aim at a target to acquire guidance)
- P / Escape: pause or resume

Use the toolbar for audio, flight manual, and optional fullscreen. Choose Combat mission or Free flight before launch. Terrain collisions and enemy fire damage your aircraft; eliminating all five hostiles completes the mission.

## Validation

```sh
bun run typecheck
bun run build
bun test flight.test.ts
```

The new simulation is in `src/flight.ts`, with the interface in `src/App.tsx` and `src/index.css`. Original arena-fighter modules and their tests remain available as legacy code.
