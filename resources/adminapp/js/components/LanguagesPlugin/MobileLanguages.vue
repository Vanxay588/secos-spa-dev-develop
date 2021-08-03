<template>
     <div>
          <div class="select">
                <select name="slct" id="slct">
                  <option selected disabled>{{ $t('panel.Choose_language') }}</option>
                  <option 
                    @click.prevent="setLocale(language.short_code)"
                    v-for="language in languages"
                    :key="language.short_code"
                  >
                    {{ language.title }}
                    <i class="pl-1 material-icons" v-show="language.short_code === locale">
                      done
                    </i>
              </option>
          </select>
          </div> 
        <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdownLanguage"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="material-icons">language</i>
              <div class="fixed-width">{{ locale }}</div>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownLanguage"
            >
              <a
                class="dropdown-item"
                href="#"
                @click.prevent="setLocale(language.short_code)"
                v-for="language in languages"
                :key="language.short_code"
              >
                {{ language.title }}
                <i class="pl-1 material-icons" v-show="language.short_code === locale">
                  done
                </i>
              </a>
            </div>
          </li>
     </div>
              
</template>
<style scoped>
    
/* Reset Select */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #2c3e50;
  background-image: none;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
  position: relative;
  display: flex;
  width: 18em;
  height: 3em;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: .25em;
  margin-top:  20px ;
}
select {
  flex: 1;
  padding: 0 .5em;
  color: #fff;
  cursor: pointer;
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: #34495e;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
/* Transition */
.select:hover::after {
  color: #f39c12;
}

</style>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters('I18NStore', ['locale', 'languages'])
    },
    methods: {
      ...mapActions('I18NStore', ['setLocale'])
    }
  }
</script>