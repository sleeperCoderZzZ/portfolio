<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface Bubble { el: HTMLElement; x: number; y: number; vx: number; vy: number; age: number; life: number; phase: number }

const layer = ref<HTMLElement | null>(null)
const glow = ref<HTMLElement | null>(null)
const ring = ref<HTMLElement | null>(null)

const MAX_BUBBLES = 70
const bubbles: Bubble[] = []
const pointer = { x: -999, y: -999, nx: 0, ny: 0 }          // posição real e normalizada (-1..1)
const smooth = { x: -999, y: -999, nx: 0, ny: 0 }          // posição suavizada
let hovering = false
let raf = 0
let last = 0
let fine = false
let blobs: HTMLElement | null = null

const rand = (a: number, b: number) => a + Math.random() * (b - a)
const INTERACTIVE = 'a, button, input, textarea, select, [role="button"], .v-btn, .v-chip'

function burst(x: number, y: number) {
  const count = Math.round(rand(8, 12))
  for (let i = 0; i < count && bubbles.length < MAX_BUBBLES; i++) {
    const size = rand(12, 46)
    const el = document.createElement('i')
    el.className = 'fx-bubble'
    el.style.width = el.style.height = `${size}px`
    layer.value?.appendChild(el)
    const angle = rand(0, Math.PI * 2)
    const speed = rand(1.5, 5.5)
    bubbles.push({
      el, x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 1.5,
      age: 0, life: rand(1100, 2200), phase: rand(0, Math.PI * 2),
    })
  }
  start()
}

function pop(b: Bubble) {
  b.el.classList.add('pop')
  window.setTimeout(() => b.el.remove(), 280)
}

function frame(now: number) {
  const dt = Math.min(now - last, 50) / 16.67 // em "frames de 60fps"
  last = now

  // suaviza ponteiro
  const k = 1 - Math.pow(0.001, dt / 14)
  smooth.x += (pointer.x - smooth.x) * k
  smooth.y += (pointer.y - smooth.y) * k
  smooth.nx += (pointer.nx - smooth.nx) * 0.06 * dt
  smooth.ny += (pointer.ny - smooth.ny) * 0.06 * dt

  if (glow.value) glow.value.style.transform = `translate3d(${smooth.x}px, ${smooth.y}px, 0)`
  if (ring.value) ring.value.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) scale(${hovering ? 1.9 : 1})`
  blobs?.style.setProperty('--mx', smooth.nx.toFixed(3))
  blobs?.style.setProperty('--my', smooth.ny.toFixed(3))

  // bolhas: sobem com flutuabilidade e balançam; estouram no fim da vida
  for (let i = bubbles.length - 1; i >= 0; i--) {
    const b = bubbles[i]
    b.age += dt * 16.67
    b.vy -= 0.045 * dt
    b.vx *= Math.pow(0.97, dt)
    b.vy *= Math.pow(0.985, dt)
    b.x += (b.vx + Math.sin(b.age / 180 + b.phase) * 0.5) * dt
    b.y += b.vy * dt
    const t = b.age / b.life
    b.el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) translate(-50%, -50%)`
    b.el.style.opacity = String(t > 0.75 ? 1 - (t - 0.75) * 1.2 : 1)
    if (t >= 1) { pop(b); bubbles.splice(i, 1) }
  }

  const settling = Math.abs(pointer.x - smooth.x) > 0.3 || Math.abs(pointer.nx - smooth.nx) > 0.002
  raf = bubbles.length || settling ? requestAnimationFrame(frame) : 0
}

function start() {
  if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame) }
}

function onMove(e: PointerEvent) {
  if (e.pointerType !== 'mouse') return
  if (pointer.x === -999) { smooth.x = e.clientX; smooth.y = e.clientY }
  pointer.x = e.clientX
  pointer.y = e.clientY
  pointer.nx = (e.clientX / window.innerWidth - 0.5) * 2
  pointer.ny = (e.clientY / window.innerHeight - 0.5) * 2
  hovering = !!(e.target as Element | null)?.closest?.(INTERACTIVE)
  glow.value?.classList.add('on')
  ring.value?.classList.add('on')
  start()
}

function onDown(e: PointerEvent) {
  burst(e.clientX, e.clientY)
}

function onLeave() {
  glow.value?.classList.remove('on')
  ring.value?.classList.remove('on')
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  fine = window.matchMedia('(pointer: fine)').matches
  blobs = document.querySelector('.blobs')
  window.addEventListener('pointerdown', onDown, { passive: true })
  if (fine) {
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('pointerdown', onDown)
  window.removeEventListener('pointermove', onMove)
  document.documentElement.removeEventListener('pointerleave', onLeave)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <div class="fx" aria-hidden="true">
    <div ref="glow" class="fx-glow" />
    <div ref="ring" class="fx-ring" />
    <div ref="layer" class="fx-layer" />
  </div>
</template>

<style>
.fx { position: fixed; inset: 0; z-index: 30; pointer-events: none; overflow: hidden; }
.fx-glow, .fx-ring { position: absolute; left: 0; top: 0; opacity: 0; transition: opacity 0.4s; will-change: transform; }
.fx-glow.on, .fx-ring.on { opacity: 1; }
.fx-glow { width: 460px; height: 460px; margin: -230px 0 0 -230px; border-radius: 50%; mix-blend-mode: screen;
  background: radial-gradient(circle, rgba(var(--v-theme-secondary), 0.32), rgba(var(--v-theme-secondary), 0) 68%); }
.v-theme--light ~ .fx .fx-glow, .v-theme--light .fx-glow { mix-blend-mode: multiply; background: radial-gradient(circle, rgba(var(--v-theme-secondary), 0.22), rgba(var(--v-theme-secondary), 0) 68%); }
.fx-ring { width: 26px; height: 26px; margin: -13px 0 0 -13px; border-radius: 50%;
  border: 1.5px solid rgb(var(--v-theme-primary)); transition: opacity 0.4s, scale 0.25s, background 0.25s; }
.fx-layer { position: absolute; inset: 0; }
.fx-bubble { position: absolute; left: 0; top: 0; border-radius: 50%; will-change: transform, opacity;
  background:
    radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.95) 0 9%, transparent 22%),
    radial-gradient(circle at 50% 50%, rgba(var(--v-theme-primary), 0.12), rgba(var(--v-theme-secondary), 0.5) 78%, rgba(var(--v-theme-accent), 0.65));
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.45), 0 0 14px rgba(var(--v-theme-secondary), 0.55);
  border: 1px solid rgba(255, 255, 255, 0.45); }
.fx-bubble.pop { animation: pop 0.28s ease-out forwards; }
@keyframes pop { to { scale: 1.9; opacity: 0; filter: blur(2px); } }
@media (pointer: coarse) { .fx-glow, .fx-ring { display: none; } }
</style>
