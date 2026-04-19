<script setup lang="ts">
import { computed } from "vue";
import KmvvCard from "@/components/KmvvCard.vue";

interface Article {
    title: string;
    date: string;
    text: string;
    images?: string[];
    video?: string;
}

const articles: Article[] = [
    {
        title: "Le Krav Maga – Pourquoi, comment ?",
        date: "2025-09-07",
        text: `Le Krav Maga est une méthode de self-défense intuitive, construite autour des réflexes naturels du corps humain.

Dans un contexte où la violence progresse, il devient essentiel de savoir réagir face à des situations conflictuelles avec calme, lucidité et efficacité.

L’objectif n’est pas de vous transformer en guerrier, mais de vous permettre avant tout de :

- renforcer votre confiance en vous,
- apprendre à gérer le stress d’une agression,
- développer des automatismes simples et efficaces.

Accessible à toutes et à tous, le Krav Maga se pratique dans une ambiance bienveillante et familiale, où chacun progresse à son rythme.

Venez découvrir une discipline qui vous apportera autant sur le plan physique que mental.`,
    },
    {
        title: "🔥 Événement spécial : Journée découverte gratuite",
        date: "2025-09-19",
        text: `Samedi 29 novembre 2025 de 9h30 à 12h00 Venez découvrir le Krav Maga gratuitement et laissez-vous guider par Julien, notre instructeur passionné et bienveillant. 
        Il saura vous mettre en confiance et révéler le meilleur de vous-même !
        
        📩 Contact : kmvv38113@gmail.com 
        
        💌 Réservez votre place dès maintenant ! Envoyez-nous simplement un mail avec votre nom et prénom à l’adresse ci-dessus 
        et rejoignez-nous pour cette journée exceptionnelle. Les places sont limitées, ne tardez pas !`,
    },
    {
        title: "🥋 KMVV38 – Le Krav Maga à Veurey-Voroize : Défendez-vous, renforcez-vous, dépassez-vous !",
        date: "2025-10-21",
        text: `Bienvenue chez KMVV38, votre club de Krav Maga à Veurey-Voroize, entre Grenoble et le Voironnais.
        Ici, pas de compétition, pas de chichi : juste une méthode de self-défense réaliste, accessible et terriblement efficace, basée sur des réflexes simples et naturels.

        Que vous soyez débutant, confirmé, femme, homme ou adolescent, nos cours vous permettent de :

        💥 Apprendre à vous défendre efficacement face à des situations réelles

        💪 Renforcer votre corps et votre mental dans une ambiance dynamique et conviviale

        ⚡ Développer vos réflexes, votre confiance et votre sang-froid

        🤝 Rejoindre une communauté bienveillante et passionnée, encadrée par des instructeurs certifiés


        Au KMVV38, nous croyons que la self-défense est un droit pour tous.
        Nos entraînements combinent technique, condition physique et gestion du stress, pour vous aider à prendre confiance et réagir efficacement dans la vie de tous les jours.

        🔥 Rejoignez-nous à Veurey-Voroize pour un cours d’essai gratuit et découvrez pourquoi le Krav Maga séduit chaque année des milliers de pratiquants en quête de sécurité, de confiance et d’énergie !`,
        images: [
            "/Pictures/picture_001.jpg",
        ]
    },
    {
        title: "Une très belle matinée du 29 novembre",
        date: "2025-11-29",
        text: `Une dizaine de personnes ont franchi le pas et ont pu profiter de cette matinée d'initiation gratuite.

        C'est dans une ambiance chaleureuse et studieuse que nos invités ont été guidés et supervisés par Julien B notre coach.

        Le club KMVV tient à vous remercier pour votre engagement et votre bonne humeur, et espère vous revoir pour un prochain événement !

        Nous tenons également à remercier la mairie de Veurey-Voroize pour le prêt de ses infrastructures.

        Et à très vite !!!`,
        images: [
            "/Pictures/portes_ouvertes_nov_25 .jpeg",
        ]
    },
    {
        title: "Verre de fin d'année chez KMVV",
        date: "2025-12-22",
        text: `Les membres de KMVV ont pu célébrer la fin d'année autour d'un verre et de spécialités apportées par chacun, dans une ambiance chaleureuse et conviviale.
        
        Un concours du pull de Noël le plus moche avait été organisé, et remporté haut la main par Thomas, qui s'est vu offrir une boule de Noël à l'effigie du logo du club, une décoration collector !
        
        Un merci particulier à la mairie de Noyarey pour le prêt de la salle.
        
        Le bureau de KMVV ainsi que son webmaster souhaitent à tous les membres et personnes qui nous soutiennent de très belles fêtes de fin d'année !`,
        images: [
            "/Pictures/caroussel_01/1000028890.jpg",
            "/Pictures/caroussel_01/1000028891.jpg",
            "/Pictures/caroussel_01/1000028892.jpg",
            "/Pictures/caroussel_01/1000028896.jpg",
        ]
    },
    {
        title: "Chez KMVV, la galette c'est la fête !",
        date: "2026-01-22",
        text: `Afin de démarrer l'année en beauté, le club KMVV a partagé une galette des rois dans l'ambiance conviviale qui la caratérise.`,
        images: [
            "/Pictures/kmvv_galette.jpg",
        ]
    },
    {
        title: "Stage self defense - se défendre avec les objets du quotidien",
        date: "2026-01-31",
        text: `Le club KMVV vous propose un stage ayant pour thème la défense avec les objets du quotidien, le samedi 18 avril 2026 de 9h à 12h.
        
        Nous vous retrouverons à la salle des fêtes de Veurey-Voroize, dans la bonne humeur et la convivialité qui nous caractérise.
        
        Pour tout renseignement complémentaire, n'hésitez pas à nous contacter par mail.`,
        images: [
            "/Pictures/kmvv_affiche_stage_01.jpg",
        ]
    },
    {
        title: "Retour en images sur la journée du 18 avril 2026",
        date: "2026-04-19",
        text: `Vous avez été nombreux à répondre présents pour passer un moment sportif avec le club KMVV ce samedi 19 avril 2026.
        Confirmés comme nouveaux venus, l'importance du sujet abordé n'a pas empeché un entrainement bienveillant et dans la bonne humeur qui nous caractérise.
        
        Rendez-vous au prochain événement !`,
        video: "/Videos/journee_18_04_26.mov"
    },
    {
        title: "La KMVV Familly !",
        date: "2026-04-19",
        text: `Au fil des entrainements, on finit par échanger bien plus que des coups (avec retenue évidemment).
        Des liens de fraternité et d'amitié se tissent, et ainsi on rejoint la KMVV Familly !`,
        video: "/Videos/kmvv_familly.mov"
    }
    //{
    //    title: "Test",
    //    date: "2025-09-08",
    //    text: "Les cours reprennent dès le 1er septembre. Venez nombreux !",
    //    image: "/Pictures/Capture d’écran du 2025-07-17 15-32-13.png",
    //},
    // {
    //     title: "Assemblée Générale de l’association",
    //     date: "2025-07-10",
    //     text: "Un grand merci aux participants ! Retrouvez le compte-rendu dans l’espace membres.",
    // },
];

const sortedArticles = computed(() =>
    [...articles].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
);
</script>

<template>
    <!-- Hero section -->
    <section class="text-center py-5">
        <div class="container">
            <h1 class="display-5 fw-bold">Krav Maga Veurey-Voroize</h1>
            <img src="/Pictures/kmvv_logo.png" alt="Krav Maga Veurey-Voroize" style="max-height: 150px;">
            <p class="lead">Self-défense réaliste pour tous · Saison 2025–2026</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
                <RouterLink to="/contact" class="btn btn-primary btn-lg px-4">S'inscrire</RouterLink>
                <RouterLink to="/planning" class="btn btn-outline-secondary btn-lg px-4">Voir le planning</RouterLink>
            </div>
        </div>
    </section>

    <!-- Actus section -->
    <section class="py-5">
        <div class="container">
            <h2 class="mb-5 text-center">Actualités</h2>
            <div class="row justify-content-center g-4">
                <div class="col-12 col-md-10 col-lg-8" v-for="(article, index) in sortedArticles" :key="index">
                    <KmvvCard :title="article.title" :text="article.text" :images="article.images"
                        :video="article.video" :date="article.date">
                    </KmvvCard>
                </div>
            </div>
        </div>
    </section>
</template>
