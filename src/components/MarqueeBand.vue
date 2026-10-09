<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'
const { t } = useLocale()
const words = () => [t('navProjects'), t('marquee')]
</script>

<template>
  <div class="marquee" aria-hidden="true">
    <div class="track">
      <template v-for="n in 2" :key="n">
        <span v-for="i in 4" :key="`${n}-${i}`" class="item">
          <span v-for="w in words()" :key="w" class="word">{{ w }}<i class="dot" /></span>
        </span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.marquee { position: relative; z-index: 1; overflow: hidden; padding: 22px 0; border-block: 1px solid rgba(var(--v-theme-primary), 0.3); background: rgba(var(--v-theme-surface), 0.5); }
.track { display: flex; width: max-content; animation: scroll 32s linear infinite; }
.item { display: inline-flex; }
.word { display: inline-flex; align-items: center; gap: 28px; padding-right: 28px; font-family: 'Instrument Serif', serif; font-style: italic; font-size: clamp(2rem, 6vw, 4.5rem); line-height: 1; white-space: nowrap; }
.dot { width: 0.5em; height: 0.5em; border-radius: 50%; background: rgb(var(--v-theme-secondary)); display: inline-block; }
@keyframes scroll { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .track { animation: none; } }
</style>
