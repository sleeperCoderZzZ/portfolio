<script setup lang="ts">
import { skills, timeline } from '@/content'
import { useLocale } from '@/composables/useLocale'
const { locale, t } = useLocale()
</script>

<template>
  <section id="about" class="page">
    <h2 v-reveal class="display text-primary text-h5 text-md-h4 mb-10">{{ t('navAbout') }}</h2>
    <v-row>
      <v-col v-reveal cols="12" md="6">
        <p class="text-body-1 mb-4">{{ t('about1') }}</p>
        <p class="text-body-1 mb-6">{{ t('about2') }}</p>
        <div class="d-flex flex-wrap ga-2">
          <v-chip v-for="s in skills" :key="s.en" size="default">{{ s[locale] }}</v-chip>
        </div>
      </v-col>
      <v-col v-reveal="150" cols="12" md="6">
        <v-timeline side="end" density="compact" line-color="primary" truncate-line="both">
          <v-timeline-item v-for="item in timeline" :key="item.title.en" dot-color="primary" size="x-small">
            <div class="text-caption text-primary">{{ item.when[locale] }}</div>
            <div class="font-weight-medium">{{ item.title[locale] }}</div>
            <div v-if="item.subtitle" class="text-medium-emphasis">
              <a v-if="item.url" :href="item.url" target="_blank" rel="noopener" class="company-link">{{ item.subtitle[locale] }} ↗</a>
              <template v-else>{{ item.subtitle[locale] }}</template>
            </div>
            <p class="text-medium-emphasis mt-2">{{ item.description[locale] }}</p>
            <ul v-if="item.bullets" class="text-medium-emphasis mt-2 pl-5">
              <li v-for="b in item.bullets[locale]" :key="b">{{ b }}</li>
            </ul>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
.company-link { color: rgb(var(--v-theme-primary)); text-decoration: none; border-bottom: 1px solid currentColor; }
.company-link:hover { opacity: 0.8; }
</style>
