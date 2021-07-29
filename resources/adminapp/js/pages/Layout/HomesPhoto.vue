<template>
    <div class="home-image" id="homes">
        <div class="home-text">
          <h1>{{ $t('panel.welcome') }}</h1>
          <p>And I'm a Photographer</p>
                <span style="padding:20px">
                    <a href="/login"
                    class="btn btn-primary btn-round btn-lg">
                    <i class="material-icons">login</i> &nbsp;
                    {{ $t('global.login') }}
                    </a> 
                </span>
                <span style="padding:20px">
                    <a href="/register"
                    class="btn btn-primary btn-round btn-lg">
                    <i class="material-icons">app_registration</i>&nbsp;
                    {{ $t('global.register') }}
                    </a> 
                </span>
        </div>
    </div>
</template>
<style>
    h1 {
        font-size: 60px;
        font-weight: 700;
        color: ghostwhite;
        padding-bottom: 25px;
    }
    p{
        font-size: 18px;
        color: ghostwhite;
        font-weight: 600;
        padding-bottom: 20px;
    }
</style>