<template>
    <nav class="navbar navbar-expand-lg kmvv-navbar">
        <div class="container">
            <RouterLink to="/" class="navbar-brand fw-bold text-white">KMVV</RouterLink>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
                aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav ms-auto align-items-lg-center">
                    <li class="nav-item">
                        <RouterLink to="/planning" class="nav-link text-white">Planning</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/tarifs" class="nav-link text-white">Tarifs</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/contact" class="btn btn-light ms-lg-3 px-3">
                            S'inscrire
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>