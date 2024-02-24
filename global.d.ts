import { SystemStyleObject } from '@mui/system'

declare module 'react' {
  export type CP<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = ComponentProps<T> // eslint-disable-line @typescript-eslint/no-explicit-any
  export type CT<P = {}> = ComponentType<P> // eslint-disable-line @typescript-eslint/ban-types
}

declare module '@mui/material' {
  export type SX = SystemStyleObject<Theme>
}
