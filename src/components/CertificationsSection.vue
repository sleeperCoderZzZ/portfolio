<script setup lang="ts">
import { certifications } from '@/content'
import { useLocale } from '@/composables/useLocale'
const { locale, t } = useLocale()
</script>

<template>
  <section id="certifications" class="page">
    <h2 v-reveal class="display text-primary text-h5 text-md-h4 mb-8">{{ t('navCerts') }}</h2>
    <ul class="list">
      <li v-for="(c, i) in certifications" :key="c.title" v-reveal="i * 80">
        <a :href="c.url" target="_blank" rel="noopener" class="row">
          <span class="issuer">{{ c.issuer }}</span>
          <span class="body">
            <span class="title">{{ c.title }}</span>
            <span class="desc">{{ c.date[locale] }}<template v-if="c.hours"> · {{ c.hours }} {{ t('hoursLabel') }}</template></span>
          </span>
          <span class="meta">{{ t('verify') }} <v-icon icon="mdi-arrow-top-right" class="go" /></span>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section.page { min-height: auto; }
.list { list-style: none; padding: 0; margin: 0; border-top: 1px solid rgba(var(--v-theme-primary), 0.3); }
li { border-bottom: 1px solid rgba(var(--v-theme-primary), 0.3); }
.row { display: grid; grid-template-columns: 90px 1fr auto; gap: 20px; align-items: center; padding: 22px 8px; color: inherit; text-decoration: none; transition: padding 0.3s, background 0.3s; }
.row:hover, .row:focus-visible { padding-left: 24px; background: rgba(var(--v-theme-surface), 0.6); }
.issuer { font-family: 'Unbounded', sans-serif; font-size: 0.8rem; letter-spacing: 0.08em; color: rgb(var(--v-theme-primary)); border: 1px solid rgb(var(--v-theme-primary)); border-radius: 999px; padding: 6px 14px; text-align: center; }
.body { display: flex; flex-direction: column; gap: 4px; }
.title { font-family: 'Instrument Serif', serif; font-style: italic; font-size: clamp(1.5rem, 3.2vw, 2.4rem); line-height: 1.1; }
.desc { opacity: 0.88; font-size: 1rem; }
.meta { display: inline-flex; align-items: center; gap: 6px; font-size: 0.9rem; opacity: 0.95; }
.go { transition: transform 0.3s; }
.row:hover .go { transform: translate(3px, -3px); }
@media (max-width: 760px) { .row { grid-template-columns: 1fr; gap: 10px; } .issuer { justify-self: start; } }
</style>
