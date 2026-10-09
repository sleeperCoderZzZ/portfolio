<script setup lang="ts">
import { email, github, linkedin } from '@/content'
import { useLocale } from '@/composables/useLocale'
const { t } = useLocale()
</script>

<template>
  <section id="contact" class="page align-center text-center">
    <h2 v-reveal class="big">{{ t('navContact') }}</h2>
    <p v-reveal="100" class="mt-2">{{ t('contact') }}</p>
    <v-btn v-reveal="200" color="secondary" variant="flat" rounded="pill" size="x-large" class="my-8" :href="`mailto:${email}`" prepend-icon="mdi-email-outline">
      {{ t('send') }}
    </v-btn>
    <div v-reveal="300" class="d-flex flex-wrap justify-center ga-6 text-medium-emphasis">
      <span>{{ email }}</span>
      <v-btn variant="text" :href="linkedin" target="_blank" rel="noopener" prepend-icon="mdi-linkedin">LinkedIn</v-btn>
      <v-btn variant="text" :href="github" target="_blank" rel="noopener" prepend-icon="mdi-github">GitHub</v-btn>
    </div>
  </section>
</template>

<style scoped>
.big { font-family: 'Instrument Serif', serif; font-style: italic; font-weight: 400; font-size: clamp(3rem, 12vw, 9rem); line-height: 1; color: rgb(var(--v-theme-primary)); }
</style>
