<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.create') }}
                <strong>{{ $t('cruds.blog.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.title,
                      'is-focused': activeField == 'title'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.blog.fields.title')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.title"
                      @input="updateTitle"
                      @focus="focusField('title')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label class="required">{{
                      $t('cruds.blog.fields.body')
                    }}</label>
                    <ckeditor
                      :editor="editor"
                      :value="entry.body"
                      @input="updateBody"
                      required
                    >
                    </ckeditor>
                  </div>
                  <div class="form-group">
                    <label class="required">{{
                      $t('cruds.blog.fields.photo')
                    }}</label>
                    <attachment
                      :route="getRoute('blogs')"
                      :collection-name="'blog_photo'"
                      :media="entry.photo"
                      :max-file-size="10"
                      :component="'pictures'"
                      :accept="'image/*'"
                      @file-uploaded="insertPhotoFile"
                      @file-removed="removePhotoFile"
                      :max-files="1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Attachment from '@components/Attachments/Attachment'

export default {
  components: {
    ClassicEditor,
    Attachment
  },
  data() {
    return {
      status: '',
      activeField: '',
      editor: ClassicEditor
    }
  },
  computed: {
    ...mapGetters('BlogsSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('BlogsSingle', [
      'storeData',
      'resetState',
      'setTitle',
      'setBody',
      'insertPhotoFile',
      'removePhotoFile'
    ]),
    updateTitle(e) {
      this.setTitle(e.target.value)
    },
    updateBody(value) {
      this.setBody(value)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'blogs.index' })
          this.$eventHub.$emit('create-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
