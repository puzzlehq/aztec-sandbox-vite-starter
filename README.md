# aztec sandbox vite starter

a starter template for working with the Aztec Sandbox and Vite

## contents

* [Vite](https://vitejs.dev)-powered React app (with all the necessary polyfills)
* built-in Aztec Sandbox connection
* [Jotai](https://jotai.org) for simple state management
* [shadcn/ui](https://ui.shadcn.com/) for headless UI (Radix + Tailwind)

## setup

* make sure you're on the correct noir version for aztec-nr development - `noirup -v 0.17.0-aztec.2`
* if you make changes to the contract, compile it with `aztec-cli compile contracts/contract_name`

## development

note: this example uses `pnpm`, but you can use `npm` or `yarn` too
```bash
pnpm i
pnpm install:sandbox
pnpm start:sandbox
pnpm dev
```

## building

```bash
pnpm build
pnpm preview
```
