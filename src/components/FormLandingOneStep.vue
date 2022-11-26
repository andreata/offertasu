<template>
    <div class="">

        <div>
            <article>
                <!-- <header>
                    <div class="progress">
                        <div class="progress-step" :class="{ 'active': index === activeStep }"
                            v-for="(step, index) in formSteps" :key="'step' + index">
                            {{ index + 1 }}
                            <p class="title-step">{{ formSteps[index].title }}</p>
                        </div>
                    </div>
                </header> -->
                <section :class="animation">
                    <h3>{{ formSteps[activeStep].title }}</h3>
                    <div class="input-fields">
                        <div class="input-container" v-for="(field, index) in formSteps[activeStep].fields"
                            :key="'field' + index">
                            <label class="input-label mobl">{{ field.label }}</label>
                            <input type="text" :class="{ 'wrong-input': !field.valid }" v-model="field.value" required>
                            <label class="input-label desk">{{ field.label }}</label>
                        </div>
                    </div>
                    <div class="actions">
                        <button v-if="activeStep + 1 < formSteps.length - 1" @click="checkFields">Prosegui</button>
                        <button type="submit" v-if="activeStep + 1 === formSteps.length - 1"
                            @click="subMit">Fatto</button>
                    </div>
                </section>
            </article>
        </div>

    </div>
</template>

<script>
export default {
    data: () => {
        return {
            activeStep: 0,
            animation: 'animate-in',
            formSteps: [
                {
                    title: "Voglio ricevere un'offerta personalizzata",
                    fields: [
                        { label: "Lascia il tuo numero e ti chiameremo gratuitamente!", name: 'comune', value: '', valid: true, pattern: /.+/ },

                    ]
                },
                /*{
                    title: "Tipo di Servizio",
                    fields: [
                        { label: "Il tuo nome", name: 'nome', value: '', valid: true, pattern: /.+/ },
                        { label: "Il tuo cognome", name: 'cognome', value: '', valid: true, pattern: /.+/ },
                        { label: "La tua mail?", name: 'email', value: '', valid: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
                    ]
                },
                  {
                     title: "Offerta Modem",
                     fields: [
                         { label: "Il tuo nome", name: 'nome', value: '', valid: true, pattern: /.+/ },
                         { label: "Il tuo cognome", name: 'cognome', value: '', valid: true, pattern: /.+/ },
                         { label: "La tua mail?", name: 'email', value: '', valid: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
                     ]
                 },
                 {
                     title: "Tipo di Linea",
                     fields: [
                         { label: "Il tuo nome", name: 'nome', value: '', valid: true, pattern: /.+/ },
                         { label: "Il tuo cognome", name: 'cognome', value: '', valid: true, pattern: /.+/ },
                         { label: "La tua mail?", name: 'email', value: '', valid: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
                     ]
                 }, */

                {
                    title: "Scopri l'offerta",
                }
            ],
        }
    },
    methods: {
        nextStep() {
            this.animation = 'animate-out';
            setTimeout(() => {
                this.animation = 'animate-in';
                this.activeStep += 1;
            }, 550);
        },
        checkFields() {
            let valid = true;
            this.formSteps[this.activeStep].fields.forEach(field => {
                if (!field.pattern.test(field.value)) {
                    valid = false;
                    field.valid = false;

                }
                else {
                    field.valid = true;

                    sessionStorage.setItem(field.name, field.value);
                }
            });
            if (valid) {
                this.nextStep();
            }
            else {
                this.animation = 'animate-wrong';
                setTimeout(() => {
                    this.animation = '';
                }, 400);
            }
        },
        subMit() {
            // L'ultimo step non viene salvato in sessione perché sul pulsante del submit c'è questa funzione. Quindi il codice di seguito serve a salvare i dati in sessione dell'ultimo step
            let valid = true;
            this.formSteps[this.activeStep].fields.forEach(field => {
                if (!field.pattern.test(field.value)) {
                    valid = false;
                    field.valid = false;

                }
                else {
                    field.valid = true;

                    sessionStorage.setItem(field.name, field.value);
                }
            });



            // Ottiene tutti i dati in sessione
            let comune = sessionStorage.getItem('comune');
            let nome = sessionStorage.getItem('nome');
            let cognome = sessionStorage.getItem('cognome');
            let email = sessionStorage.getItem('email');
            /*  console.log(comune);
             console.log(nome);
             console.log(cognome);
             console.log(email); */


            // Invia la richiesta tramite post ajax
            var request = new XMLHttpRequest();
            var url = "https://b7e6-79-22-201-16.ngrok.io/offertasuper_backend/php/offertasuper.php";
            request.open("POST", url, true);


            request.setRequestHeader("Content-Type", "application/json");
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {

                    console.log(this.responseText);
                }
            };



            var data = JSON.stringify({ "comune": comune, "nome": nome, "cognome": cognome, "email": email });

            request.send(data);

            console.log(request);

            // Cancella tutti i dati in sessione
            sessionStorage.clear();


        }


    }
}
</script>

<style lang="scss" scoped>
@mixin flexbox() {
    display: flex;
    justify-content: center;
    align-items: center;
}




article {
    margin: 10px;
    margin: auto;
    max-width: 720px;
    min-height: 380px;
    perspective: 1000px;
    width: 100%;
    @media screen and (max-width: 768px) {
        min-height: 30px;
    }

    header {
        border-bottom: 0;
        @include flexbox();
        display: flex;

        .progress {
            margin-left: 90px;
            display: flex;

            @media screen and (max-width: 768px) {
                font-size: 40px;
            }

            .title-step {
                display: block;
                margin-top: 90px;
                position: absolute;
                color: gray;
                text-align: center;
                font-size: 14px;
                text-transform: uppercase;
                line-height: 1.3;
                font-weight: 400;

                @media screen and (max-width: 768px) {
                    font-size: 12px;
                }

            }
        }
    }

    .progress-step {
        @include flexbox();
        position: relative;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-bottom: 20px;
        color: #fff;
        background-color: var(--orang-color);
        font-weight: bold;
        margin-right: 90px;

        @media screen and (max-width: 768px) {
            margin-right: 40px;
        }

        &.active {
            background-color: var(--orang-color);

            ~.progress-step {
                color: white;
                background-color: var(--grey-body-color);
            }

            ~.progress-step::before {
                background-color: var(--grey-body-color);
            }
        }

        &:before {
            content: '';
            position: absolute;
            left: -90px;
            width: 90px;
            height: 1px;
            background-color: var(--orang-color);
            z-index: 10;

            @media screen and (max-width: 768px) {
                left: -40px;
                width: 40px;
            }
        }

        &:first-child::before {
            display: none;
        }
    }

    section {
        @include flexbox();
        flex-direction: column;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 10px 20px rgba(116, 116, 116, .16),
            0 5px 5px rgba(116, 116, 116, .16);
        margin-top: 40px;

        h3 {
            font-size: 1.6rem;
            color: var(--orang-color);
            margin: 0;
            padding: 10px;
            @media screen and (max-width: 768px) {
                text-align: center;
            }
        }

        .input-fields {
            @include flexbox();
            flex-direction: column;
            width: 100%;
        }

        .input-container {
            position: relative;
            padding: 30px 20px 20px 20px;
            width: calc(100% - 40px);
            max-width: 550px;

            @media screen and (max-width: 768px) {
                padding: 0px 20px 20px 20px;

                .input-label {
                    position: relative;
                    top: 0px;
                    left: 0px;
                    font-size: 17px;
                    font-weight: normal;
                    color: #232D36;
                    line-height: 1.3;
                    text-align: center;
                }
            }

            input {
                position: relative;
                width: 100%;

                font-size: 1.35rem;
                outline: none;
                background: transparent;
                box-shadow: none;
                border: 1px solid #8989A2;
                border-radius: 3px;

                @media screen and (min-width: 768px) {
                    &:valid+.input-label {
                        top: 10px;
                        left: 20px;
                        font-size: .7rem;
                        font-weight: normal;
                        color: #999;
                    }
                }



                &.wrong-input+.input-label {
                    color: #B92938;
                }
            }
        }

        .input-label {
            color: #8989A2;
            position: absolute;
            top: 35px;
            left: 30px;
            font-size: 0.8rem;
            pointer-events: none;
            transition: .2s ease-in-out;
        }

        .actions {
            margin: 0;
            width: 100%;
            padding: 0 40px;
            @media screen and (min-width: 768px) {
            
                    padding: 0px 20px 20px 20px;
                    width: calc(100% - 40px);
                    max-width: 550px;
                }

            button {
                width: 100%;
                margin-bottom: 30px !important;
                outline: none;
                border: none;
                color: #fff;
                background-color: var(--orang-color);
                font-size: 16px;
                padding: 5px 20px;
                margin: 0;
                text-transform: uppercase;
                border-radius: 3px;
                cursor: pointer;

            }
        }
    }
}

@media screen and (max-width: 768px) {
    article {
        .progress-step {
            font-size: 15px;
        }

        header {
            .progress {
                margin-left: 40px;
            }
        }
    }
}

.animate-in {
    transform-origin: left;
    animation: in .6s ease-in-out;
}

.animate-out {
    transform-origin: bottom left;
    animation: out .6s ease-in-out;
}

.animate-wrong {
    animation: wrong .4s ease-in-out;
}

@keyframes in {
    0% {
        opacity: 0;
        transform: rotateY(90deg);
    }

    100% {
        opacity: 1;
        transform: rotateY(0deg);
    }
}

@keyframes out {
    0% {
        transform: translateY(0px) rotate(0deg);
    }

    60% {
        transform: rotate(10deg);
    }

    100% {
        transform: translateY(1000px);
    }
}

@keyframes wrong {
    0% {
        transform: translateX(0);
    }

    20% {
        transform: translateX(40px);
    }

    40% {
        transform: translateX(20px);
    }

    60% {
        transform: translateX(40px);
    }

    80% {
        transform: translateX(20px);
    }

    100% {
        transform: translateX(0);
    }
}
</style>