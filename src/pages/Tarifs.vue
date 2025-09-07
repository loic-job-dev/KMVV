<template>
    <section class="container py-5">
        <h1 class="mb-4">Tarifs</h1>

        <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-4" v-for="(tarifs, index) in tarifs" :key="index">
                <div class="kmvv-card p-3 h-100">
                    <h5 class="card-title">{{ tarifs.nom }}</h5>
                    <p class="card-text">
                        <strong>Tarif :</strong> {{ tarifs.annuel }}<br />
                        {{ tarifs.assurance }}<br />
                        <strong>Fréquence :</strong> {{ tarifs.récurrence }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Tarifs {
    nom: string;
    annuel: string;
    assurance: string;
    récurrence: string;
}

const tarifs: Tarifs[] = [
    {
        nom: "Ados",
        annuel: "190 euros pour l'année",
        assurance: "+ 39 euros d'assurance FFK",
        récurrence: "1 cours par semaine",
    },
    {
        nom: "Adultes débutants",
        annuel: "210 euros pour l'année",
        assurance: "+ 39 euros d'assurance FFK",
        récurrence: "1 cours par semaine",
    },
    {
        nom: "Adultes confirmés",
        annuel: "270 euros pour l'année",
        assurance: "+ 39 euros d'assurance FFK",
        récurrence: "2 cours par semaine",
    },
];
</script>
