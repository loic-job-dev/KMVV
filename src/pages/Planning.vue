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
        horaire: "20:45 - 21:45",
        lieu: "Dojo Veurey-Voroize",
    },
    {
        nom: "Krav Maga Intermédiaires/confirmés",
        jour: "Mercredi",
        horaire: "20:15 - 21:45",
        lieu: "Dojo Veurey-Voroize",
    },
];
</script>
