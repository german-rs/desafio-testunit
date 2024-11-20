<script>
import Footer from '@/components/Footer.vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css'; // Puedes cambiar a otro tema si prefieres

import { onMounted } from 'vue';

export default {
    components: {
        Footer
    },
    setup() {
        onMounted(() => {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });
        });
    }
};
</script>

<template>
    <header class="container">
        <h1>Test Unitarios en Vue con Vitest</h1>
        <p>Aprende cómo mejorar la calidad de tu código probando tus 
            componentes Vue con Vitest.
        </p>
        <img src="https://via.placeholder.com/400x200" alt="Testing en Vue con Vitest">
    </header>
    <main class="container">
        <section>
            <h2>¿Qué son los test unitarios?</h2>
            <p>Los test unitarios son pruebas que verifican el correcto 
                funcionamiento de pequeñas unidades de código, como 
                funciones o componentes individuales. En aplicaciones Vue, 
                los test unitarios aseguran que los componentes se 
                comporten de la manera esperada.</p>
        </section>

        <section>
            <h2>¿Por qué usar Vitest?</h2>
            <div class="div-box">
                <div>
                    <h3>Rápido y eficiente</h3>
                    <p>Vitest es una herramienta moderna diseñada para 
                        pruebas rápidas gracias a su compatibilidad con 
                        Vite.
                    </p>
                </div>
                <div>
                    <h3>Integración con Vue</h3>
                    <p>Compatible con Vue 3 y proporciona utilidades 
                        específicas para trabajar con componentes Vue.
                    </p>
                </div>
            </div>
        </section>

        <section class="my-5">
            <h2>Ejemplo de test unitario</h2>
            <p>A continuación, un ejemplo básico de cómo escribir un test unitario para un componente Vue usando Vitest:</p>
            <pre>
                <code class="language-javascript">
    // MyComponent.test.js
    import { mount } from '@vue/test-utils';
    import { describe, it, expect } from 'vitest';
    import MyComponent from './MyComponent.vue';

    describe('MyComponent', () => {
        it('renderiza correctamente el mensaje', () => {
            const wrapper = mount(MyComponent, {
                props: { mensaje: 'Hola, Vitest!' }
            });
            expect(wrapper.text()).toContain('Hola, Vitest!');
        });
    });
                </code>
            </pre>
        </section>
    </main>
    <Footer />
</template>

<style scoped>
p{
    max-width: 600px;
}
header, section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
}

section{
    padding: 1em;
}

.div-box{
    display: flex;
    flex-direction: column;
    gap: 1em;
}
</style>