<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon :addlink=addlink></page-title>
        <div class="row">
            <div class="col-md-12">
                <div class="main-card mb-3 card">
                    <div class="card-body">
                        <form class="">
                            <div class="position-relative form-group"><label for="title"
                                    class="">Title</label><input name="title" id="title"
                                    placeholder="News Title" type="text" class="form-control" autocomplete="off">
                            </div>
                            <div class="position-relative form-group"><label for="category_id" class="">Category</label><b-form-select v-model="selected" :options="options"></b-form-select>
                            </div>
                            <div class="position-relative form-group"><label for="detail" class="">Detail</label><textarea name="detail" id="detail" class="form-control"></textarea>
                            </div>
                            <button class="mt-1 btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageTitle from "../../Layout/Components/PageTitle.vue";
    // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        components: {
            PageTitle,
        },
        data: () => ({
            heading: 'Tambah Berita',
            subheading: 'Halaman untuk menambah data berita',
            icon: 'pe-7s-display1 icon-gradient bg-premium-dark',
            addlink: '',
            selected: null,
            options: [],
            category: '',
            // editor: ClassicEditor,
            // editorData: '<p>Content of the editor.</p>',
            // editorConfig: {
            //     // The configuration of the editor.
            // }
        }),
        mounted() {
            this.getCurrency()
        },
        methods: {
            getCurrency() {
                this.$http
                    .get('http://localhost:8000/api/category')
                    .then(response => (
                            this.options.value = response.data.id,
                            this.options.text = response.data.name
                        ))
                    .catch(error => console.log(error))
            }
        }
    }
</script>