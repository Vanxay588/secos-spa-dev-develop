<template>
    <div class="Allrightsreserved"> 
        <p>
            &copy;
            {{ $t('global.allRightsReserved') }}
            2021-{{ new Date().getFullYear() }} 
            Made with  
            {{ $t('panel.site_title') }} 
        </p>
    </div>
</template>
<style scoped>
    .Allrightsreserved{
    bottom: 0px;
    background-color: #1e1e1e;
    width: 100%;
    text-align: center;
    padding: 10px;
    color: aliceblue;
    position: fixed;
    border-top: 5px solid darkslateblue;  
    }
</style>