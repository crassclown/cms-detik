<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon :addlink=addlink></page-title>
        <div v-for="currency in info" :key="currency.index">
            {{currency.description}}
        </div>
        <b-card title="Bootstrap Table Options" class="main-card mb-4">
            <b-form-checkbox v-model="striped">Striped</b-form-checkbox>
            <b-form-checkbox v-model="bordered">Bordered</b-form-checkbox>
            <b-form-checkbox v-model="outlined">Outlined</b-form-checkbox>
            <b-form-checkbox v-model="small">Small</b-form-checkbox>
            <b-form-checkbox v-model="hover">Hover</b-form-checkbox>
            <b-form-checkbox v-model="dark">Dark</b-form-checkbox>
            <b-form-checkbox v-model="fixed">Fixed</b-form-checkbox>
            <b-form-checkbox v-model="footClone">Foot Clone</b-form-checkbox>
        </b-card>
        <b-card title="Example" class="main-card mb-4">
            <b-table :striped="striped" :bordered="bordered" :outlined="outlined" :small="small" :hover="hover"
                :dark="dark" :fixed="fixed" :foot-clone="footClone" :items="items" :fields="fields">
            </b-table>
        </b-card>
    </div>
</template>

<script>
    import PageTitle from "../../Layout/Components/PageTitle.vue";

    export default {
        components: {
            PageTitle,
        },
        data: () => ({
            heading: 'Master Berita',
            subheading: 'Halaman untuk mengelola data berita.',
            icon: 'pe-7s-news-paper icon-gradient bg-happy-itmeo',
            addlink: 'berita/add',

            fields: ['first_name', 'last_name', 'age'],
            items: [{
                    age: 40,
                    first_name: 'Dickerson',
                    last_name: 'Macdonald'
                },
                {
                    age: 21,
                    first_name: 'Larsen',
                    last_name: 'Shaw'
                },
                {
                    age: 89,
                    first_name: 'Geneva',
                    last_name: 'Wilson'
                }
            ],
            striped: false,
            bordered: false,
            outlined: false,
            small: false,
            hover: false,
            dark: false,
            fixed: false,
            footClone: false,
            info: '',
        }),
        mounted() {
            this.getCurrency()
        },
        methods: {
            getCurrency(){
                this.$http
                    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                    .then(response => (this.info = response.data.bpi))
                    .catch(error => console.log(error))
            }
        }
    }
</script>