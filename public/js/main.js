function confirmacao(){return confirm("Tem certeza que deseja excluir?");}function formatTelefone(element,e){if(e.keyCode!=8){length=element.value.length;if(length==2){if(element.value.charAt(0)!="(")element.value="("+element.value+")";}if(length==3)if(element.value.charAt(0)=="(")element.value+=")";if(length==8)element.value+="-";}}jQuery(document).ready(function($){var offset=300,offset_opacity=1200,scroll_top_duration=700,$back_to_top=$('.cd-top');$(window).scroll(function(){($(this).scrollTop()>offset)?$back_to_top.addClass('cd-is-visible'):$back_to_top.removeClass('cd-is-visible cd-fade-out');if($(this).scrollTop()>offset_opacity){$back_to_top.addClass('cd-fade-out');}});$back_to_top.on('click',function(event){event.preventDefault();$('body,html').animate({scrollTop:0,},scroll_top_duration);});});$(window).load(function(){$('.flexslider').flexslider({animation:"slide",controlNav:false,directionNav:false,start:function(slider){$('body').removeClass('loading');}});});$('.cupons').owlCarousel({autoplay:true,autoplayTimeout:5000,autoplayHoverPause:true,loop:true,margin:10,nav:false,responsive:{0:{items:1},600:{items:2},1000:{items:4}}})
$('.anuncios-destaque').owlCarousel({autoplay:true,autoplayTimeout:5000,autoplayHoverPause:true,loop:true,margin:10,nav:true,responsive:{0:{items:1},600:{items:2},1000:{items:6}}})
$('.anuncios-destaque-home').owlCarousel({autoplay:true,autoplayTimeout:5000,autoplayHoverPause:true,loop:true,margin:10,nav:true,responsive:{0:{items:1},600:{items:2},1000:{items:6}}})
$('.empresas').owlCarousel({autoplay:true,autoplayTimeout:2000,autoplayHoverPause:true,loop:true,margin:10,nav:false,responsive:{0:{items:1},600:{items:3},1000:{items:5}}})
$(window).load(function(){var goTop=function(){$(window).scroll(function(){if($(this).scrollTop()>800){$('.go-top').addClass('show');}else{$('.go-top').removeClass('show');}});$('.go-top').click(function(){$("html, body").animate({scrollTop:0},1000,'easeInOutExpo');return false;});};"use strict";var dropdown=$('.dropdown');dropdown.on('show.bs.dropdown',function(e){$(this).find('.dropdown-menu').first().stop(true,true).slideDown();});dropdown.on('hide.bs.dropdown',function(e){$(this).find('.dropdown-menu').first().stop(true,true).slideUp();});});$(window).load(function(){"use strict";$('#grid-slider').flexslider({slideshowSpeed:100000,animation:"fade",smoothHeight:true,easing:"linear",controlNav:false,nextText:'<i class="ti-angle-right"></i>',prevText:'<i class="ti-angle-left"></i>'});$('#carousel').flexslider({animation:"slide",controlNav:false,animationLoop:false,slideshow:false,itemWidth:150,itemMargin:5,asNavFor:'#slider'});$('#slider').flexslider({animation:"slide",controlNav:false,animationLoop:true,slideshow:true,sync:"#carousel",slideshowSpeed:3500});$('.row-isotope').isotope({itemSelector:'.item',layoutMode:'masonry',masonry:{columnWidth:'.grid-sizer'}});$('.truncate').succinct({size:80});});(function($){"use strict";$('a[data-toggle="tab"]').on('shown.bs.tab',function(e){$('a[data-toggle="tab"]').removeClass('btn-primary');$('a[data-toggle="tab"]').addClass('btn-default');$(this).removeClass('btn-default');$(this).addClass('btn-primary');})
$('.next').click(function(){var nextId=$(this).parents('.tab-pane').next().attr("id");$('[href=#'+nextId+']').tab('show');})
$('.prev').click(function(){var prevId=$(this).parents('.tab-pane').prev().attr("id");$('[href=#'+prevId+']').tab('show');})})(jQuery);(function($){"use strict";$(".ripple-effect").click(function(e){var rippler=$(this);if(rippler.find(".ink").length==0){rippler.append("<span class='ink'></span>");}var ink=rippler.find(".ink");ink.removeClass("animate");if(!ink.height()&&!ink.width()){var d=Math.max(rippler.outerWidth(),rippler.outerHeight());ink.css({height:d,width:d});}var x=e.pageX-rippler.offset().left-ink.width()/2;var y=e.pageY-rippler.offset().top-ink.height()/2;ink.css({top:y+'px',left:x+'px'}).addClass("animate");})})(jQuery);function showRegisterForm(){$('.loginBox').fadeOut('fast',function(){$('.registerBox').fadeIn('fast');$('.login-footer').fadeOut('fast',function(){$('.register-footer').fadeIn('fast');});$('.modal-title').html('Cadastre-se');});$('.error').removeClass('alert alert-danger').html('');}function showLoginForm(){$('#loginModal .registerBox').fadeOut('fast',function(){$('.loginBox').fadeIn('fast');$('.register-footer').fadeOut('fast',function(){$('.login-footer').fadeIn('fast');});$('.modal-title').html('Logar com');});$('.error').removeClass('alert alert-danger').html('');}function openLoginModal(){showLoginForm();setTimeout(function(){$('#loginModal').modal('show');},230);}function openLoginModal2(){showLoginForm();setTimeout(function(){$('#loginModal2').modal('show');},230);}function openRegisterModal(){showRegisterForm();setTimeout(function(){$('#loginModal').modal('show');},230);}function loginAjax(){shakeModal();}function shakeModal(){$('#loginModal .modal-dialog').addClass('shake');$('.error').addClass('alert alert-danger').html("Email ou senha inválidos");$('input[type="password"]').val('');setTimeout(function(){$('#loginModal .modal-dialog').removeClass('shake');},1000);}