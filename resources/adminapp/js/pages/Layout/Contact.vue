<template>
     <div class="about-section" id="contactUs">
    	<div class="container">
        	<div class="row clearfix">
                <div class="image-column col-md-6 col-sm-12 col-xs-12">
                	<div class="map"></div>
                </div>
                <div class="content-column col-md-6 col-sm-12 col-xs-12">
                    	<div class="sec-title">
                    		<div class="title" >{{ $t('cruds.contactUs.title') }}</div>
                        </div>
                        <div class="text">
                             <h4>{{ $t('cruds.contactUs.office_location') }}</h4>
                             <div class="singel-address">
                               <i class="fa fa-home" aria-hidden="true" style="padding:15px"></i>
                                {{ $t('cruds.contactUs.full_location') }}
                             </div>
                             <div class="singel-address">
                                <i class="fa fa-phone" aria-hidden="true" style="padding:15px"></i>
                                {{ $t('cruds.contactUs.phone') }}
                             </div>
                             <div class="singel-address">
                                <i class="fa fa-envelope-o" aria-hidden="true" style="padding:15px"></i>
                               <a href="mailto:Inthapunya@gmail.com">Inthapunya@gmail.com</a>
                             </div>
                        </div>
                </div>
            </div>
        </div>
     </div>
</template>
<style scoped>
    a{
        color: #333333;
    }
    a:hover{
        color:#ffc600;
    }
</style>