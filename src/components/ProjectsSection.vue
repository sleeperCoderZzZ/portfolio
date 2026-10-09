<script setup lang="ts">
import { projects } from '@/content'
import { useLocale } from '@/composables/useLocale'
const { locale, t } = useLocale()
</script>

<template>
  <section id="projects" class="page">
    <h2 v-reveal class="display text-primary text-h5 text-md-h4 mb-8">{{ t('navProjects') }}</h2>
    <ol class="list">
      <li v-for="(p, i) in projects" :key="p.title.en" v-reveal="i * 80">
        <a :href="p.url" target="_blank" rel="noopener" class="row">
          <span class="num">{{ i + 1 }}</span>
          <span class="body">
            <span class="title">{{ p.title[locale] }}</span>
            <span class="desc">{{ p.description[locale] }}</span>
          </span>
          <span class="meta">
            <v-chip v-for="tag in p.tags" :key="tag">{{ tag }}</v-chip>
            <v-icon icon="mdi-arrow-top-right" class="go" />
          </span>
        </a>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.list { list-style: none; padding: 0; margin: 0; border-top: 1px solid rgba(var(--v-theme-primary), 0.3); }
li { border-bottom: 1px solid rgba(var(--v-theme-primary), 0.3); }
.row { display: grid; grid-template-columns: 56px 1fr auto; gap: 20px; align-items: center; padding: 22px 8px; color: inherit; text-decoration: none; transition: padding 0.3s, background 0.3s; }
.row:hover, .row:focus-visible { padding-left: 24px; background: rgba(var(--v-theme-surface), 0.6); }
.num { display: grid; place-items: center; width: 44px; height: 44px; border: 1px solid rgb(var(--v-theme-primary)); border-radius: 50%; color: rgb(var(--v-theme-primary)); font-size: 1.1rem; transition: background 0.3s, color 0.3s; }
.row:hover .num { background: rgb(var(--v-theme-primary)); color: rgb(var(--v-theme-background)); }
.body { display: flex; flex-direction: column; gap: 4px; }
.title { font-family: 'Instrument Serif', serif; font-style: italic; font-size: clamp(1.6rem, 3.6vw, 2.8rem); line-height: 1.1; }
.desc { opacity: 0.88; font-size: 1rem; }
.meta { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; justify-content: flex-end; max-width: 280px; }
.go { transition: transform 0.3s; }
.row:hover .go { transform: translate(3px, -3px); }
@media (max-width: 760px) {
  .row { grid-template-columns: 44px 1fr; }
  .meta { grid-column: 2; justify-content: flex-start; max-width: none; }
}
</style>
