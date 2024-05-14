import 'styled-components';

import { ITheme } from './interfaces/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    media: {
    extraLarge: string
    large: string
    medium: string
    small: string
  }
  }
}
