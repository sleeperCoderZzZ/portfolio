import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#150c2b', surface: '#20123f',
          primary: '#c4b5fd', secondary: '#a855f7', accent: '#e879f9',
          'on-surface': '#f8f5ff', 'on-background': '#f8f5ff',
        },
        variables: { 'border-color': '#c4b5fd', 'border-opacity': 0.22, 'medium-emphasis-opacity': 0.88 },
      },
      light: {
        dark: false,
        colors: {
          background: '#f4efff', surface: '#e9dffc',
          primary: '#6d28d9', secondary: '#7c3aed', accent: '#c026d3',
          'on-surface': '#1c0c40', 'on-background': '#1c0c40',
        },
        variables: { 'border-color': '#6d28d9', 'border-opacity': 0.22, 'medium-emphasis-opacity': 0.85 },
      },
    },
  },
  defaults: {
    VCard: { rounded: 'xl', variant: 'outlined' },
    VChip: { variant: 'outlined', color: 'primary', size: 'small' },
  },
})
