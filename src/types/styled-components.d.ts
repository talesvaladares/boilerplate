
//arquivo de declação de tipo
//criamos um novo tipo e colocamos dentro da biblioteca do styled components
import { theme } from '../src/styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {

  export interface DefaultTheme extends Theme { }
}