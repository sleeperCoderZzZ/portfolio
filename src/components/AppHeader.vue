<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useLocale } from '@/composables/useLocale'

const theme = useTheme()
const { locale, t, toggle } = useLocale()
const isDark = computed(() => theme.current.value.dark)

function toggleTheme() {
  const next = isDark.value ? 'light' : 'dark'
  theme.change(next)
  try { localStorage.setItem('theme', next) } catch { /* storage indisponível */ }
}

try {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') theme.change(saved)
} catch { /* storage indisponível */ }
</script>

<template>
  <header class="pill-nav rise" style="--d: 0ms">
    <a href="#home" class="display text-primary logo" aria-label="Início">JP</a>
    <nav class="links d-none d-sm-flex" aria-label="Principal">
      <a href="#projects">{{ t('navProjects') }}</a>
      <a href="#about">{{ t('navAbout') }}</a>
      <a href="#certifications">{{ t('navCerts') }}</a>
    </nav>
    <div class="actions">
      <v-btn variant="text" size="small" icon :aria-label="locale === 'pt' ? 'English' : 'Português'" @click="toggle">
        <span class="text-caption font-weight-bold">{{ locale === 'pt' ? 'EN' : 'PT' }}</span>
      </v-btn>
      <v-btn
        variant="text" size="small" aria-label="Tema"
        :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="toggleTheme"
      />
      <v-btn color="secondary" variant="flat" rounded="pill" size="small" href="#contact">{{ t('navContact') }}</v-btn>
    </div>
  </header>
</template>

<style scoped>
.pill-nav {
  position: fixed; z-index: 20; top: 16px; left: clamp(12px, 4vw, 60px); right: clamp(12px, 4vw, 60px);
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 6px 8px 6px 22px; border-radius: 999px;
  border: 1px solid rgba(var(--v-theme-primary), 0.45);
  background: rgba(var(--v-theme-surface), 0.55); backdrop-filter: blur(14px);
}
.logo { font-size: 1.15rem; font-weight: 800; text-decoration: none; }
.links { gap: 28px; }
.links a { color: inherit; text-decoration: none; font-size: 0.9rem; opacity: 0.95; transition: opacity 0.2s, color 0.2s; }
.links a:hover { opacity: 1; color: rgb(var(--v-theme-primary)); }
.actions { display: flex; align-items: center; gap: 2px; }
</style>
