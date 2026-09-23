# chronos-core-

[![License: AGPL-3.0-only](https://img.shields.io/badge/license-AGPL--3.0--only-blue)](LICENSE)
[![dual-license](https://img.shields.io/badge/dual--license-AGPL--3.0--only%20or%20commercial-blueviolet)](LICENSING.md)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## License

This project is dual-licensed under **AGPL-3.0-only** OR a commercial license.

- [LICENSE](LICENSE) — GNU AGPL-3.0-only (the free track)
- [LICENSING.md](LICENSING.md) — how the two tracks work
- [COMMERCIAL-LICENSE.md](COMMERCIAL-LICENSE.md) — the commercial agreement
- [NOTICE](NOTICE) — copyright, SPDX identifier, and provenance

Chronos Operating Layer - TypeScript minimal core

Install:
  npm install
Build:
  npm run build
Run (dev):
  npm run dev   # requires ts-node
Run built:
  npm run build && npm start

What it contains:
- EventBus: pub/sub with auto event ids and arrow label synthesis
- PermissionSystem: declare/grant/revoke + incentive token accounting
- StateMachine: guarded transitions with hooks and simple audit
- ChronosEngine: composition layer with small persistence hooks
