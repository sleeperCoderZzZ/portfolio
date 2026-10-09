<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'
const { t } = useLocale()
</script>

<template>
  <section id="home" class="page align-center text-center">
    <h1 class="hero-title rise" style="--d: 100ms">
      {{ t('hi') }} <strong>João Pedro</strong><br>
      {{ t('call') }} <strong>Cabral</strong>
    </h1>
    <p class="role rise" style="--d: 350ms">{{ t('role') }}</p>
    <div class="d-flex flex-wrap justify-center align-center ga-6 mt-8 rise" style="--d: 600ms">
      <v-btn color="secondary" variant="flat" rounded="pill" size="large" href="#projects" append-icon="mdi-arrow-down">{{ t('cta1') }}</v-btn>
      <v-btn variant="text" href="#about" prepend-icon="mdi-arrow-right">{{ t('cta2') }}</v-btn>
    </div>
    <p class="hint rise" style="--d: 900ms"><v-icon icon="mdi-creation" size="small" /> {{ t('hint') }}</p>
  </section>
</template>

<style scoped>
/* Syncopate: fonte larga com contornos limpos (o Unbounded mostra sobreposições no contorno) */
.hero-title {
  font-family: 'Syncopate', sans-serif; font-weight: 700; text-transform: uppercase;
  font-size: clamp(1.1rem, 3.8vw, 2.9rem); line-height: 1.3;
  color: transparent; -webkit-text-stroke: 1px rgb(var(--v-theme-primary));
}
.hero-title strong {
  -webkit-text-stroke: 0; font-family: 'Unbounded', sans-serif; font-weight: 600; font-size: 0.92em;
  background: linear-gradient(90deg, #ddd6fe, #a855f7, #7c3aed); -webkit-background-clip: text; background-clip: text;
}
.role { margin-top: 20px; font-family: 'Instrument Serif', serif; font-style: italic; font-size: clamp(1.3rem, 3vw, 2rem); }
.hint { margin-top: 36px; font-size: 0.85rem; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.8; animation-name: rise, nudge; animation-duration: 0.9s, 2.4s; animation-iteration-count: 1, infinite; animation-delay: var(--d), 1.8s; animation-timing-function: cubic-bezier(0.2,0.7,0.2,1), ease-in-out; }
@keyframes nudge { 50% { transform: translateY(-4px); } }
</style>
