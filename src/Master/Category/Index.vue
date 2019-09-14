<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon :addlink=addlink></page-title>
        <b-card title="List Category" class="main-card mb-4">
            <b-table :striped="striped" :bordered="bordered" :outlined="outlined" :small="small" :hover="hover"
                :items="items" :dark="dark" :fixed="fixed" :foot-clone="footClone" :fields="fields"
                :current-page="currentPage" :per-page="perPage" :filter="filter">
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
            heading: 'Master Kategori',
            subheading: 'Halaman untuk mengelola data kategori berita.',
            icon: 'pe-7s-news-paper icon-gradient bg-happy-itmeo',
            addlink: 'category/add',
            fields: ['name', 'description'],
            items: [],
            currentPage: 1,
            perPage: 5,
            filter: null,
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
            getCurrency() {
                this.$http
                    .get('http://localhost:8000/api/category')
                    .then(response => (this.items = response.data))
                    .catch(error => console.log(error))
            }
        }
    }
</script>