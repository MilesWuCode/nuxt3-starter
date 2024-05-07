import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    darkTheme: 'light',
  },
}
