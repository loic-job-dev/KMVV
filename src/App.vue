<template>
  <div id="app" class="app-container d-flex flex-column min-vh-100">
    <Navbar />

    <main class="flex-fill">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>
