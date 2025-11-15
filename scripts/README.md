This folder contains helper scripts that inspect or modify imports across the project.

Important notes

- This codebase uses project-absolute imports (via `tsconfig.json` baseUrl set to `.`). Examples: `components/Header/Header`, `lib/sanitizer`, `utils/formValidation`.
- Node scripts executed directly (e.g. `node scripts/check-imports.js`) run under plain Node resolution and therefore cannot resolve project-absolute imports automatically.

What the helper scripts do

- `check-imports.js` — scans source files for unresolved imports. It attempts Node resolution and also falls back to checking the repository root for project-absolute imports (so it's aware of `components/...` style imports).
- `convert-absolute-imports.js` — tries to convert deep relative imports into project-absolute imports when it can safely resolve the target file under allowed roots (components, lib, utils, styles, scripts, public).
- `fix-absolute-imports.js` — a minimal transformer that replaces common `../components/...` patterns inside `app/` files with `components/...`.

If you run the scripts and still see "Cannot find module" messages:

1. Make sure you run the scripts from the project root (the directory that contains `tsconfig.json`).
2. Use `node` v14+ (recommended) and ensure dependencies are installed.
3. To inspect how the scripts resolve imports, open `scripts/check-imports.js` and `scripts/convert-absolute-imports.js` — they contain straightforward filesystem-based resolution logic.

Run examples

```powershell
# check imports
node .\scripts\check-imports.js

# convert deep relative imports to absolute where possible
node .\scripts\convert-absolute-imports.js

# fix common ../components patterns inside app/
node .\scripts\fix-absolute-imports.js
```

If you prefer always to use relative imports in `app/`, run `convert-absolute-imports.js` and then add a CI lint step to enforce the convention.

If you'd like, I can:
- Convert the entire `app/` folder to relative imports instead, or
- Keep project-absolute imports and update all `app/*.tsx` files to use them (I already converted common ones in this session), and ensure scripts are fully compatible.
