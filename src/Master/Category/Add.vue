<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon :addlink=addlink></page-title>
        <div class="row">
            <div class="col-md-12">
                <div class="main-card mb-3 card">
                    <div class="card-body">
                        <form @submit.prevent='AddCategory'>
                            <div class="position-relative form-group"><label for="name"
                                    class="">Name</label><input name="name" id="name"
                                    placeholder="Category Name" type="text" class="form-control" autocomplete="off" v-model="category.name">
                            </div>
                            <div class="position-relative form-group"><label for="description" class="">Description</label><textarea name="description" id="description" class="form-control" v-model="category.description"></textarea>
                            </div>
                            <button class="mt-1 btn btn-primary" type="submit">Submit</button>
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
            heading: 'Tambah Kategori',
            subheading: 'Halaman untuk menambah data kategori',
            icon: 'pe-7s-display1 icon-gradient bg-premium-dark',
            addlink: '',
            category: {
                name: '',
                description: '',
                is_active: 1,
                created_by: 1,
                create_date: Date.now()
            }
            // editor: ClassicEditor,
            // editorData: '<p>Content of the editor.</p>',
            // editorConfig: {
            //     // The configuration of the editor.
            // }
        }),
        methods: {  
            AddCategory(){
                this.$http.post('http://localhost:8000/api/category', this.$data.category)
                    .then((response) => {
                        this.$swal({
                            title: 'Data kategori berhasil diinput',
                            type: 'success',
                            showCloseButton: false
                        });
                        this.$router.push('/master/category');
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
        }
    }
</script>