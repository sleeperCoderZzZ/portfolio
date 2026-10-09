<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import BlobBackground from '@/components/BlobBackground.vue'
import HeroSection from '@/components/HeroSection.vue'
import MarqueeBand from '@/components/MarqueeBand.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import InteractiveFx from '@/components/InteractiveFx.vue'
import CertificationsSection from '@/components/CertificationsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <v-app>
    <BlobBackground />
    <InteractiveFx />
    <AppHeader />
    <v-main>
      <HeroSection />
      <MarqueeBand />
      <ProjectsSection />
      <AboutSection />
      <CertificationsSection />
      <ContactSection />
    </v-main>
    <v-footer class="justify-center text-caption text-medium-emphasis bg-transparent">
      © {{ new Date().getFullYear() }} João Pedro Cabral Pavarin
    </v-footer>
  </v-app>
</template>
