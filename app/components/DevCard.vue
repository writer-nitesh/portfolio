<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const containerRef = ref<HTMLElement | null>(null)
const rotateX = ref(0)
const rotateY = ref(0)
const mouseX = ref(50)
const mouseY = ref(50)
const isOutside = ref(true)
const isFlipped = ref(false)

const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.value) return
    isOutside.value = false
    const rect = containerRef.value.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Map mouse position to percentages for the glare effect
    mouseX.value = (x / rect.width) * 100
    mouseY.value = (y / rect.height) * 100

    // Calculate rotation (max 15 degrees to prevent corner jitter)
    rotateY.value = ((x / rect.width) - 0.5) * 30
    rotateX.value = ((y / rect.height) - 0.5) * -30
}

const handleMouseLeave = () => {
    isOutside.value = true
    rotateX.value = 0
    rotateY.value = 0
    mouseX.value = 50
    mouseY.value = 50
}

const handleTouchMove = (e: TouchEvent) => {
    if (!containerRef.value) return
    isOutside.value = false
    e.preventDefault() // Prevent scrolling while rotating

    const rect = containerRef.value.getBoundingClientRect()
    const touch: any = e.touches[0]
    const x = touch.clientX - rect.left
    const y = touch.clientY - rect.top

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseX.value = (x / rect.width) * 100
        mouseY.value = (y / rect.height) * 100
        rotateY.value = ((x / rect.width) - 0.5) * 30
        rotateX.value = ((y / rect.height) - 0.5) * -30
    } else {
        handleMouseLeave()
    }
}

const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
    if (!isOutside.value) return
    if (e.beta !== null && e.gamma !== null) {
        rotateY.value = Math.max(-25, Math.min(25, e.gamma))
        rotateX.value = Math.max(-25, Math.min(25, e.beta - 45))
        mouseX.value = 50 + rotateY.value * 2
        mouseY.value = 50 - rotateX.value * 2
    }
}

onMounted(() => {
    if (typeof window !== 'undefined' && window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', handleDeviceOrientation)
    }
})

onUnmounted(() => {
    if (typeof window !== 'undefined' && window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleDeviceOrientation)
    }
})

const cardStyle = computed(() => {
    let rx = rotateX.value
    let ry = rotateY.value
    if (isFlipped.value) {
        ry += 180
    }
    return `rotateX(${rx}deg) rotateY(${ry}deg)`
})

const glareStyle = computed(() => {
    return {
        background: `radial-gradient(circle at ${mouseX.value}% ${mouseY.value}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 60%)`,
        opacity: isOutside.value ? 0 : 1
    }
})

const toggleFlip = () => {
    isFlipped.value = !isFlipped.value
    // Reset tilt on flip for a smooth transition
    rotateX.value = 0
    rotateY.value = 0
    mouseX.value = 50
    mouseY.value = 50
}
</script>

<template>
    <div ref="containerRef"
        class="card-container cursor-pointer w-full max-w-[340px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] mx-auto z-10"
        style="perspective: 1200px;" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave"
        @touchmove="handleTouchMove" @touchend="handleMouseLeave" @click="toggleFlip">
        <div class="card-inner relative w-full h-full transition-transform duration-200 ease-out preserve-3d"
            :style="{ transform: cardStyle }">
            <!-- Front side -->
            <div
                class="card-front absolute inset-0 backface-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] group overflow-hidden">
                <img src="/images/card/Front.png" alt="DevCard Front" class="w-full h-full object-cover" />
                <!-- Glare effect overlay -->
                <div class="absolute inset-0 transition-opacity duration-300 pointer-events-none" :style="glareStyle">
                </div>
            </div>

            <!-- Back side -->
            <div class="card-back absolute inset-0 backface-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] group overflow-hidden"
                style="transform: rotateY(180deg);">
                <img src="/images/card/Back.png" alt="DevCard Back" class="w-full h-full object-cover" />
                <!-- Glare effect overlay -->
                <div class="absolute inset-0 transition-opacity duration-300 pointer-events-none" :style="glareStyle">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.preserve-3d {
    transform-style: preserve-3d;
}

.backface-hidden {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.card-container {
    /* Landscape format (standard credit card/ID ratio) */
    aspect-ratio: 85.6 / 53.98;
}
</style>
