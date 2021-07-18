<template>
  <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" 
              href="#" 
              id="navbarDropdownMenuLink" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
            <i class="material-icons">person</i>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="/login"> {{ $t('global.login') }}</a>
            <a class="dropdown-item" href="/register"> {{ $t('global.register') }}</a>
          </div>
        </li>
</template>

<script>

export default {
 
}

</script>
