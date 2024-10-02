<template>
<!--     <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <v-app>
        <v-main>
            <Calendar />
        </v-main>
    </v-app>
</template>

<script>
    import Calendar from './Calendar';

    export default {
        name: 'App',
        components: {
            Calendar,
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>