<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon :addlink=addlink></page-title>
        <div class="row">
            <div class="col-md-12">
                <div class="main-card mb-3 card">
                    <div class="card-body">
                        <form class="">
                            <div class="position-relative form-group"><label for="name"
                                    class="">Name</label><input name="name" id="name"
                                    placeholder="Category Name" type="text" class="form-control" autocomplete="off">
                            </div>
                            <div class="position-relative form-group"><label for="description" class="">Description</label><textarea name="description" id="description" class="form-control"></textarea>
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
            heading: 'Tambah Kategori',
            subheading: 'Halaman untuk menambah data kategori',
            icon: 'pe-7s-display1 icon-gradient bg-premium-dark',
            addlink: '',
            // editor: ClassicEditor,
            // editorData: '<p>Content of the editor.</p>',
            // editorConfig: {
            //     // The configuration of the editor.
            // }
        }),
    }
</script>