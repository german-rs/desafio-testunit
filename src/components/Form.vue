<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            comment: '',
            showMessageError: false,
            showMessageSuccess: false
        };
    },
    methods: {
        checkFields() {
            if (!this.name || !this.email || !this.comment) {
                this.showMessageError = true;
                this.showMessageSuccess = false;
            } else {
                this.showMessageError = false;
                this.showMessageSuccess = true;

                // Limpiar los campos del formulario
                this.name = '';
                this.email = '';
                this.comment = '';
            }
        }
    }
};
</script>

<template>
    <div class="form-container container">
        <div class="form-field">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="name">
        </div>
        <div class="form-field">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email">
        </div>
        <div class="form-field">
            <label for="comment">Comentario:</label>
            <textarea id="comment" v-model="comment"></textarea>
        </div>
        <div class="form-field">
            <button @click="checkFields">Enviar</button>
        </div>
        <p class="text-error" v-if="showMessageError">Debes llenar todos los campos</p>
        <p class="text-success" v-if="showMessageSuccess">Formulario enviado correctamente</p>
    </div>
</template>

<style scoped>
.form-container {
    padding: 2em 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
}
.form-field {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    gap: .2em;
}
.text-error {
    color: #ef4444;
    margin-top: 1em;
    font-weight: 500;
    font-size: 18px;
}
.text-success {
    color: #22c55e;
    margin-top: 1em;
    font-weight: 500;
    font-size: 18px;
}
</style>
