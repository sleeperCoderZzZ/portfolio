import type { Directive } from 'vue'

// Revela o elemento com fade-up ao entrar na viewport. Sem JS/IntersectionObserver ele fica visível.
const observer = typeof IntersectionObserver === 'undefined'
  ? null
  : new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer?.unobserve(entry.target)
      }
    }, { threshold: 0.15 })

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, { value }) {
    if (!observer) return
    el.classList.add('reveal')
    if (value) el.style.transitionDelay = `${value}ms`
    observer.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
