<template>
    <div class="card kmvv-card h-100">
        <img v-if="image" :src="image" class="card-img-top" :alt="title" />
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
                <slot>{{ text }}</slot>
            </p>
        </div>
        <div class="card-footer bg-transparent border-0">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String, required: true },
    text: { type: String, default: '' },
    image: { type: String, default: '' },
});
</script>
