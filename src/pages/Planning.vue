<template>
    <section class="container py-5">
        <h1 class="mb-4">Planning des cours</h1>

        <p class="kmvv-info text-center mt-4 mb-5">
            Planning au format PDF disponible à la page "S'inscrire".
        </p>

        <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-4" v-for="(cours, index) in planning" :key="index">
                <div class="kmvv-card p-3 h-100">
                    <h5 class="card-title">{{ cours.nom }}</h5>
                    <p class="card-text">
                        <strong>Jour et horaire :</strong> {{ cours.jour }}<br />
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
    lieu: string;
}

const planning: Cours[] = [
    {
        nom: "Krav Maga Enfants (de 7 à 11 ans)",
        jour: "Lundi de 18:00 à 19:00 \nET \nMercredi de 17:30 à 18:30",
        lieu: "Gymnase de Noyarey",
    },
    {
        nom: "Krav Maga Ados (de 12 à 15 ans)",
        jour: "Lundi de 19:00 à 20:00 \nET \nMercredi de 18:30 à 19:30",
        lieu: "Gymnase de Noyarey",
    },
    {
        nom: "Krav Maga Débutants",
        jour: "Lundi de 20:45 à 21:45",
        lieu: "Dojo Veurey-Voroize",
    },
    {
        nom: "Krav Maga Intermédiaires/confirmés",
        jour: "Mercredi de 20:15 à 21:45",
        lieu: "Dojo Veurey-Voroize",
    },
    {
        nom: "Krav Maga confirmés intensif (extra mensuel)",
        jour: "Vendredi de 18:00 à 19:30",
        lieu: "Gymnase de Noyarey",
    },
    {
        nom: "Boxe",
        jour: "Mardi de 18:00 à 19:00",
        lieu: "Gymnase de Noyarey",
    },
    {
        nom: "Krav'Fit (à partir de 16 ans)",
        jour: "Mardi de 19:00 à 20:00",
        lieu: "Gymnase de Noyarey",
    },
    {
        nom: "Renfo musculaire",
        jour: "Mardi de 20:00 à 21:00",
        lieu: "Gymnase de Noyarey",
    },
];
</script>
