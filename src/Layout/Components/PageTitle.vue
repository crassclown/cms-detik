<template>
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i :class="icon"/>
                </div>
                <div>
                    {{heading}}
                    <div
                        class="page-title-subheading">
                        {{subheading}}
                    </div>
                </div>
            </div>
            <div class="page-title-actions">
                <div v-if="addlink">
                    <router-link :to="addlink">
                        <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success">
                            <font-awesome-icon class="mr-2" icon="plus"/>
                            Create New
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faStar,
        faPlus
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faStar,
        faPlus,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        props: {
            icon: String,
            heading: String,
            subheading: String,
            addlink: String,
        }
    }
</script>

<style lang="stylus" scoped>
    a{
        text-decoration: none;
        color: black;
    }
    a:hover{
        color: white;
    }
</style>