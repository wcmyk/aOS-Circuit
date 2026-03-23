declare module 'vite' {
  export function defineConfig(config: unknown): unknown
}

declare module '@vitejs/plugin-react' {
  export default function react(): unknown
}

declare module 'node:path' {
  const path: {
    resolve: (...segments: string[]) => string
  }
  export default path
}

declare const __dirname: string
