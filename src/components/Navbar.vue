<template>
    <nav class="navbar navbar-expand-lg kmvv-navbar">
        <div class="container">
            <RouterLink to="/" class="navbar-brand fw-bold">KMVV</RouterLink>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
                aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav ms-auto align-items-lg-center">
                    <li class="nav-item">
                        <RouterLink to="/planning" class="nav-link">Planning</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/tarifs" class="nav-link">Tarifs</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/contact" class="btn btn-primary ms-lg-3 px-3">
                            S'inscrire
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.kmvv-navbar {
    background-color: var(--kmvv-border);
    /* bleu très foncé pour la navbar */
}

.kmvv-navbar .navbar-brand {
    color: #fff;
}

.kmvv-navbar .navbar-brand:hover {
    color: var(--kmvv-primary);
    /* bleu vif au hover */
}

.kmvv-navbar .nav-link {
    color: #fff;
}

.kmvv-navbar .nav-link:hover {
    color: var(--kmvv-primary);
    /* bleu vif au hover */
    text-decoration: underline;
}

/* Bouton "S'inscrire" */
.kmvv-navbar .btn-primary {
    background-color: var(--kmvv-primary);
    border-color: var(--kmvv-primary);
}

.kmvv-navbar .btn-primary:hover,
.kmvv-navbar .btn-primary:focus {
    background-color: #187bcd;
    /* bleu légèrement plus sombre */
    border-color: #187bcd;
}

/* Hamburger toggler icon */
.navbar-toggler {
    border-color: #fff;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255,255,255,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
</style>
