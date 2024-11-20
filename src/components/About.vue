<template>
    <main class="container">
        <section>
            <h2>¿Qué es Vue?</h2>
            <p>Vue.js es un framework progresivo de JavaScript para 
                construir interfaces de usuario. Su enfoque en la 
                simplicidad y flexibilidad lo hace ideal tanto para 
                pequeños proyectos como para aplicaciones complejas.
            </p>
            <img src="https://via.placeholder.com/400x200" alt="Framework Vue.js">
        </section>

        <section>
            <h2>¿Qué es Vitest?</h2>
            <p>Vitest es un framework moderno para pruebas, optimizado para proyectos que utilizan Vite. Ofrece un entorno rápido, sencillo de configurar y con excelentes capacidades para pruebas unitarias y de integración.</p>
            <img src="https://via.placeholder.com/400x200" alt="Herramienta Vitest">
        </section>

        <section>
            <h2>¿Por qué usar Vue y Vitest juntos?</h2>
            <div class="div-box">
                <div>
                    <h3>Velocidad <span>⚡</span> </h3>
                    <p>Vitest aprovecha las características de Vite, ofreciendo una experiencia de prueba ultrarrápida.</p>
                </div>
                <div>
                    <h3>Compatibilidad <span>🔧</span> </h3>
                    <p>Vitest incluye herramientas específicas para trabajar con componentes Vue sin complicaciones.</p>
                </div>
                <div>
                    <h3>Ecosistema <span>📦</span> </h3>
                    <p>Ambos forman parte de un ecosistema de desarrollo moderno, optimizado para desarrolladores actuales.</p>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
p{
    text-align: center;
    max-width: 600px;
}
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5em;
    margin-bottom: 3em;
}
h3{
    padding: 0.5em;
    text-align: center;
}

.div-box{
    display: flex;
    flex-direction: column;
    padding: 1em;
    gap: 2em;
}
</style>