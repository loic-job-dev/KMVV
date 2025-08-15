<template>
    <section class="container py-5">
        <h1 class="mb-4">Planning des cours</h1>

        <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-4" v-for="(cours, index) in planning" :key="index">
                <div class="kmvv-card p-3 h-100">
                    <h5 class="card-title">{{ cours.nom }}</h5>
                    <p class="card-text">
                        <strong>Jour :</strong> {{ cours.jour }}<br />
                        <strong>Horaire :</strong> {{ cours.horaire }}<br />
                        <strong>Lieu :</strong> {{ cours.lieu }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Cours {
    nom: string;
    jour: string;
    horaire: string;
    lieu: string;
}

const planning: Cours[] = [
    {
        nom: "Krav Maga Débutants",
        jour: "Lundi",
        horaire: "19:00 - 20:30",
        lieu: "Dojo KMVV",
    },
    {
        nom: "Krav Maga Intermédiaire",
        jour: "Mercredi",
        horaire: "19:00 - 20:30",
        lieu: "Dojo KMVV",
    },
    {
        nom: "Krav Maga Avancé",
        jour: "Vendredi",
        horaire: "20:00 - 21:30",
        lieu: "Dojo KMVV",
    },
    {
        nom: "Self-défense féminine",
        jour: "Samedi",
        horaire: "10:00 - 11:30",
        lieu: "Dojo KMVV",
    },
];
</script>
