import { create } from 'zustand';

const localTheme = localStorage.getItem('theme')

if (localTheme === null) {
  localStorage.setItem('theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}

const themeStore = create((set, get) => ({
  mode: localStorage.getItem('theme'),

  toggleTheme: () => {
    set((state) => {

      let theme = 'dark';
      if (state.mode === 'dark') {
        theme = 'light'
      }

      localStorage.setItem('theme', theme)

      return {
        ...state,
        mode: theme
      }
    })

    return get().mode
  }
}))

export default themeStore