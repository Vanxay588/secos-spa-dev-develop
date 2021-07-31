<template>
    <div class="home-image" id="homes">
        <div class="home-text">
          <h1>{{ $t('panel.welcome') }}&nbsp;&nbsp;&nbsp;{{ $t('panel.site_title') }}</h1>
            <p class="tagline">
              <span class="change-container">
                <span class="changing">get what you want</span>
                <span class="changing">how you want it</span>
                <span class="changing">when you want it</span>
              </span>
            </p>
            <span>
                    <a href="/login"
                    class="btn btn-primary btn-round">
                    <i class="material-icons">login</i> &nbsp;
                    {{ $t('global.login') }}
                    </a> 
                </span>
                <span style="padding:20px">
                    <a href="/register"
                    class="btn btn-primary btn-round">
                    <i class="material-icons">app_registration</i>&nbsp;
                    {{ $t('global.register') }}
                    </a> 
                </span>
              <div class="select">
                <select name="slct" id="slct">
                  <option selected disabled>Choose an option</option>
                  <option value="1">Pure CSS</option>
                  <option value="2">No JS</option>
                </select>
              </div> 
        </div>
    </div>
</template>
<style>
h1 {
    font-size: 30px;
    font-weight: 500;
    color: ghostwhite;
    padding-bottom: 25px;
}
p{
   font-weight: 500;
   
    
} 

.tagline {
  margin-top:20px;
}

.tagline .change-container{
    position: relative;
    display: inline-block;
    width: 580px;
    margin-bottom: 20px;
    margin-top: 20px;
}

.changing {
    position: absolute;
    overflow: hidden;
    left:0;
    bottom:0;
    height:0;
    opacity:0;
    color: ghostwhite;
    text-transform: uppercase;
    word-spacing: 5px;
    text-align: center;
    font-size: 18px;
   
}

.changing:nth-child(1) {
  animation: revealNextWord 6s cubic-bezier(0.57, 1.52, 0.9, 1.08) 1.5s infinite;
}

.changing:nth-child(2) {
  animation: revealNextWord 6s cubic-bezier(0.57, 1.52, 0.9, 1.08) 3s infinite;
}

.changing:nth-child(3) {
  animation: revealNextWord 6s cubic-bezier(0.57, 1.52, 0.9, 1.08) 4.5s infinite;
}

@keyframes revealNextWord {
  0% { 
    opacity: 0.3; 
    height: 0.0; 
  }
  10% { 
    opacity: 1; 
    height:1.2em; 
  }
  20% { 
    opacity: 1; 
    height:1.2em; 
  }
  28% { 
    opacity: 0; 
    height:2em; 
  }
  
}

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