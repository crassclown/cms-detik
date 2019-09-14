<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon :addlink=addlink></page-title>
        <div v-for="currency in info" :key="currency.index">
            {{currency.description}}
        </div>
        <b-card title="List Berita" class="main-card mb-4">
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

            fields: ['title', 'summary', 'tanggal_dibuat', 'penulis'],
            items: [{
                    title: 'Enma',
                    summary: 'pedang super',
                    tanggal_dibuat: '13 September 2019',
                    penulis: 'Oda'
                },
                {
                    title: 'Shusui',
                    summary: 'pedang hitam',
                    tanggal_dibuat: '12 September 2019',
                    penulis: 'Oda'
                },
                {
                    title: 'Samehada',
                    summary: 'pedang hiu',
                    tanggal_dibuat: '10 September 2019',
                    penulis: 'Kishimoto'
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