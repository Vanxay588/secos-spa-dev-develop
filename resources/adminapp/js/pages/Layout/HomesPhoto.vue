<template>
    <div class="home-image">
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