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
                            <div class="position-relative form-group"><label for="summary" class="">Summary</label><textarea name="summary" id="summary" class="form-control"></textarea>
                            </div>
                            <div class="position-relative form-group"><label for="detail" class="">Detail</label><textarea name="detail" id="detail" class="form-control"></textarea>
                            </div>
                            <div class="position-relative form-group"><label for="writer"
                                    class="">Writer</label><input name="writer" id="writer"
                                    placeholder="News Writer" type="text" class="form-control" autocomplete="off">
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
            // editor: ClassicEditor,
            // editorData: '<p>Content of the editor.</p>',
            // editorConfig: {
            //     // The configuration of the editor.
            // }
        }),
    }
</script>