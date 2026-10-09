import { ref, watch } from 'vue'
import { messages } from '@/content'
import type { Locale } from '@/types'

const read = (): Locale => {
  try {
    return localStorage.getItem('lang') === 'en' ? 'en' : 'pt'
  } catch {
    return 'pt'
  }
}

const locale = ref<Locale>(read())

watch(locale, (value) => {
  document.documentElement.lang = value === 'pt' ? 'pt-BR' : 'en'
  try { localStorage.setItem('lang', value) } catch { /* storage indisponível */ }
}, { immediate: true })

export function useLocale() {
  const t = (key: string) => messages[locale.value][key] ?? key
  const toggle = () => { locale.value = locale.value === 'pt' ? 'en' : 'pt' }
  return { locale, t, toggle }
}
