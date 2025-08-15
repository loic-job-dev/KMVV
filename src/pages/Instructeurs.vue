<template>
    <section class="py-5">
        <div class="container">
            <h1 class="mb-4">Nos instructeurs</h1>
            <div class="row g-4">
                <div class="col-md-4" v-for="i in 3" :key="i">
                    <KmvvCard title="Nom Instructeur"
                        text="Description courte de l'instructeur, son parcours, son style d'enseignement."
                        image="https://via.placeholder.com/400x250">
                        <template #footer>
                            <a href="#" class="btn btn-primary btn-sm">Voir le profil</a>
                        </template>
                    </KmvvCard>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import KmvvCard from '@/components/KmvvCard.vue';
</script>
