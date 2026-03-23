declare module 'react' {
  export type ReactNode = unknown
  export type HTMLAttributes<T> = Record<string, unknown>
  export type ButtonHTMLAttributes<T> = Record<string, unknown>
  export interface ForwardRefExoticComponent<P> {
    (props: P): unknown
  }
  export interface RefAttributes<T> {
    ref?: unknown
  }
  export function forwardRef<T, P = Record<string, unknown>>(
    render: (props: P, ref: unknown) => unknown,
  ): ForwardRefExoticComponent<P & RefAttributes<T>>
  export function useState<S>(initialState: S | (() => S)): [S, (value: S | ((prevState: S) => S)) => void]
  export function useMemo<T>(factory: () => T, deps: unknown[]): T
  export const StrictMode: (props: { children?: unknown }) => unknown
}

declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment): {
    render(children: unknown): void
  }
}

declare module 'react/jsx-runtime' {
  export const Fragment: unique symbol
  export function jsx(type: unknown, props: unknown, key?: unknown): unknown
  export function jsxs(type: unknown, props: unknown, key?: unknown): unknown
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}
