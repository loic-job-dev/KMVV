<template>
    <div class="card kmvv-card h-100 shadow-sm">

        <!-- Zone image(s) -->
        <div v-if="hasImages" class="kmvv-card-media">
            <transition name="fade" mode="out-in">
                <img :key="currentImage" :src="currentImage" class="kmvv-card-img" :alt="title" />
            </transition>
        </div>

        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>

            <small v-if="date" class="kmvv-card-date d-block mb-3">
                {{ formattedDate }}
            </small>

            <p class="card-text">{{ text }}</p>
        </div>

        <div class="card-footer bg-transparent border-0">
            <slot name="footer"></slot>
        </div>
    </div>
</template>


<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
    title: { type: String, required: true },
    text: { type: String, default: "" },
    image: { type: String, default: "" },       // rétro-compatibilité
    images: { type: Array as () => string[], default: () => [] },
    date: { type: String, default: "" },
});

const allImages = computed(() => {
    if (props.images.length) return props.images;
    if (props.image) return [props.image];
    return [];
});

const hasImages = computed(() => allImages.value.length > 0);

const currentIndex = ref(0);
let interval: number | null = null;

const currentImage = computed(() => allImages.value[currentIndex.value]);

onMounted(() => {
    if (allImages.value.length > 1) {
        interval = window.setInterval(() => {
            currentIndex.value =
                (currentIndex.value + 1) % allImages.value.length;
        }, 4000); // 4s → fluide & sobre
    }
});

onUnmounted(() => {
    if (interval) clearInterval(interval);
});

const formattedDate = computed(() => {
    if (!props.date) return "";
    return new Date(props.date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
});
</script>


<style scoped>
.kmvv-card {
    border: 2px solid var(--kmvv-border);
    border-radius: 0.75rem;
    background-color: var(--kmvv-card-bg);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.kmvv-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* Zone image : PLUS HAUTE + fond sombre */
.kmvv-card-media {
    height: 420px;
    /* ⬅️ hauteur confortable */
    background-color: #050b2c;
    /* fond sombre élégant */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

/* Image : PLUS DE ROGNAGE */
.kmvv-card-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    /* ⬅️ clé anti-rognage */
}

/* Transition fade moderne */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Texte */
.card-text {
    white-space: pre-line;
    line-height: 1.8;
    font-size: 1.2rem;
}

/* Date */
.kmvv-card-date {
    color: var(--kmvv-primary);
    font-weight: bold;
    font-size: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
    .kmvv-card-media {
        height: 280px;
    }
}
</style>
