<template>
    <div class="card kmvv-card h-100 shadow-sm">
        <img v-if="image" :src="image" class="card-img-top" :alt="title" />
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <small v-if="date" class="kmvv-card-date d-block mb-2">
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
import { computed } from "vue";

const props = defineProps({
    title: { type: String, required: true },
    text: { type: String, default: "" },
    image: { type: String, default: "" },
    date: { type: String, default: "" },
});

const formattedDate = computed(() => {
    if (!props.date) return "";
    const d = new Date(props.date);
    return d.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
});

defineSlots<{
    default?: () => any;
    footer?: () => any;
}>();
</script>

<style scoped>
.kmvv-card {
    border: 2px solid var(--kmvv-border);
    border-radius: 0.75rem;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    background-color: var(--kmvv-card-bg);
}

.kmvv-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* Texte de la carte */
.card-text {
    white-space: pre-line;
    /* conserve retours à la ligne */
    line-height: 1.8;
    /* plus aéré */
    font-size: 1.2rem;
    /* taille de police augmentée */
}

/* Date */
.kmvv-card-date {
    color: var(--kmvv-primary);
    /* bleu vif pour contraste */
    font-weight: bold;
    font-size: 1rem;
}
</style>
