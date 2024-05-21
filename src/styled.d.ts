import 'styled-components';

interface ITheme {

  media: {
    large: string
    medium: string
    small: string
    extraSmall: string
  },

  mediaHeight: {
      small: string
    },
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    media: {
      large: string
      medium: string
      small: string
      extraSmall: string
    },

    mediaHeight: {
      small: string
    },
  }
}
