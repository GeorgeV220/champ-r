import { createTheme, darkThemePrimitives, DarkTheme } from 'baseui';

  const overrides = {
    colors: {
        ...DarkTheme.colors,
      background: '#1a1c1f',
      color: '#ffffff',
    },
  };

  export const darkTheme = createTheme(darkThemePrimitives, overrides);