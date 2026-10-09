<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'

// Leque de roxos: cada bolha usa um par (claro → escuro) diferente.
const DARK = [['#7c3aed', '#1e0b4a'], ['#a855f7', '#2e1065'], ['#6d28d9', '#150c2b'], ['#c084fc', '#3b0f6e'], ['#8b5cf6', '#1a0b3b']]
const LIGHT = [['#ede9fe', '#a78bfa'], ['#f3e8ff', '#c084fc'], ['#ddd6fe', '#8b5cf6'], ['#faf5ff', '#d8b4fe'], ['#e9d5ff', '#a78bfa']]

const theme = useTheme()
const pairs = computed(() => (theme.current.value.dark ? DARK : LIGHT))
const style = (i: number) => ({ '--c1': pairs.value[i][0], '--c2': pairs.value[i][1] })
</script>

<template>
  <div class="blobs" aria-hidden="true">
    <i v-for="n in 5" :key="n" :class="`blob b${n}`" :style="style(n - 1)" />
  </div>
</template>

<style scoped>
.blobs {
  position: fixed; inset: -40px; z-index: 0; overflow: hidden; pointer-events: none;
  opacity: 0.85;
  filter: blur(var(--blob-blur, 20px)); /* desfoque do fundo: aumente para ler melhor o texto */
}
.blob {
  position: absolute; border-radius: 999px; will-change: transform;
  background: radial-gradient(circle at 30% 25%, var(--c1), var(--c2) 72%);
  box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.08), 0 30px 80px rgba(88, 28, 135, 0.35);
  translate: calc(var(--mx, 0) * var(--depth, 2) * -1vw) calc(var(--my, 0) * var(--depth, 2) * -1vh);
  animation: drift var(--t) ease-in-out infinite alternate;
  animation-delay: var(--delay, 0s);
}
.blob::after {
  content: ''; position: absolute; top: 18%; left: 22%; width: 14%; height: 4%;
  border-radius: 50%; background: rgba(255, 255, 255, 0.6); filter: blur(3px); transform: rotate(-30deg);
}
/* --r: rotação base | --dx/--dy: deslocamento | --dr: giro extra */
.b1 { --depth: 3; width: 46vw; height: 16vw; left: -10vw; top: 2vh; --r: 35deg; --dx: 7vw; --dy: 6vh; --dr: 10deg; --t: 16s; }
.b2 { --depth: 5; width: 20vw; height: 20vw; left: 38vw; top: -8vw; --r: 0deg; --dx: -5vw; --dy: 9vh; --dr: 0deg; --t: 13s; --delay: -4s; }
.b3 { --depth: 2.5; width: 44vw; height: 16vw; right: -8vw; top: 4vh; --r: -12deg; --dx: -8vw; --dy: 7vh; --dr: -9deg; --t: 19s; --delay: -8s; }
.b4 { --depth: 4; width: 42vw; height: 18vw; left: -6vw; bottom: -4vw; --r: 25deg; --dx: 6vw; --dy: -8vh; --dr: 8deg; --t: 17s; --delay: -2s; }
.b5 { --depth: 6; width: 18vw; height: 32vw; right: 14vw; bottom: -10vw; --r: 0deg; --dx: -6vw; --dy: -7vh; --dr: 12deg; --t: 21s; --delay: -6s; }

@keyframes drift {
  from { transform: translate3d(0, 0, 0) rotate(var(--r)); }
  to   { transform: translate3d(var(--dx), var(--dy), 0) rotate(calc(var(--r) + var(--dr))); }
}
@media (prefers-reduced-motion: reduce) { .blob { animation: none; transform: rotate(var(--r)); } }
</style>
