






$(function () {
	
	window.SetVideoBG = function(el){
	
				var ratio = 16/9;
	
				function resize() {
					var cWidth = Math.floor(el.width());
					var cHeight = Math.floor(el.outerHeight());
					var  pWidth = Math.floor($(window).width());
					if(pWidth<cWidth){
						pWidth = cWidth;
					}
					var pHeight = Math.floor(pWidth/ratio);
					if(pHeight<cHeight){
						pHeight = cHeight;
						pWidth = Math.floor(pHeight*ratio);
					}
					var  position_top = 0, 
						 position_left=0;
				 
					if((cHeight - pHeight)<0){
						position_top = Math.floor((cHeight - pHeight) / 2);
					}
					if((cWidth - pWidth)<0){
						position_left = Math.floor((cWidth - pWidth) / 2);
					}
					
					el.find('.video_bg').css({
							height: pHeight,
							width: pWidth,						
							left: position_left,
							top: position_top,
					});
				}
				resize();
				$(window).resize(function(){
					resize()
				})
	
	
	
	}
	$('.section').each(function(){

		if($(this).find('.video_bg').size()){
			SetVideoBG($(this));

		}
		
		
		
	})
	
	
	
	
	



	$('body').on('click', '.popup_thanks_close, .popup_form_close', function () {
		$('.popup_thanks').hide();
                $('.popup_form').hide();
	})
	
	$('body').on('click', '.popup_form', function (event) {
		if ($(event.target).closest(".popup_form_inner").length === 0) {
				$('.popup_form').hide();
		}		
	});	
	$('body').on('click', '.popup_thanks', function (event) {
		if ($(event.target).closest(".popup_thanks_inner").length === 0) {
				$('.popup_thanks').hide();
		}		
	});	
	
	if ($('.section153').size()) {
		$('.section153').each(function(){
			SetVideoBG($(this));
		})
	}

	if ($('.section52').size()) {

		$('.section52 .logo').hover(function () {
			$(this).children('img').removeClass('grayscale')
		}, function () {
			$(this).children('img').addClass('grayscale')
		});

	}
	if ($('.section19').size()) {
		$('.section19 .policy').click(function () {
			$('#policy').remove();
			$('body').append('<div id="policy">\n\
				<div class="close  close_x">X</div>\n\
				<h1>Политика конфиденциальности</h1>\n\
				<p>\n\
				Данный сайт уважает Ваше право и соблюдает конфиденциальность при заполнении, передаче и хранении Ваших конфиденциальных сведений.\n\
				Размещение заявки на данном сайте означает Ваше согласие на обработку данных и дальнейшей передачи ваших контактных данных нашей компании.\n\
				Под персональными данными подразумевается информация, относящаяся к субъекту персональных данных, в частности имя, контактные реквизиты (адрес электронной почты) и иные данные, относимые Федеральным законом от 27 июля 2006 года № 152-ФЗ «О персональных данных» к категории персональных данных.\n\
				Целью обработки персональных данных является информирование об оказываемых услугах нашей компании.\n\
				Есть вопросы? Пишите нам на '+window.tobiz.owner_email+'.</p>\n\
				<div class="close close_btn">Закрыть</div></div>');
			$('#policy .close_x, #policy .close_btn').click(function(){
				$('#policy').remove();
			})
		});
	}

	if ($('.section119').size()) {
		$('.section119 .policy').click(function () {
			$('#policy').remove();
			$('body').append('<div id="policy">\n\
				<div class="close  close_x">X</div>\n\
				<h1>Политика конфиденциальности</h1>\n\
				<p>\n\
				Данный сайт уважает Ваше право и соблюдает конфиденциальность при заполнении, передаче и хранении Ваших конфиденциальных сведений.\n\
				Размещение заявки на данном сайте означает Ваше согласие на обработку данных и дальнейшей передачи ваших контактных данных нашей компании.\n\
				Под персональными данными подразумевается информация, относящаяся к субъекту персональных данных, в частности имя, контактные реквизиты (адрес электронной почты) и иные данные, относимые Федеральным законом от 27 июля 2006 года № 152-ФЗ «О персональных данных» к категории персональных данных.\n\
				Целью обработки персональных данных является информирование об оказываемых услугах нашей компании.\n\
				Есть вопросы? Пишите нам на '+window.tobiz.owner_email+'.</p>\n\
				<div class="close close_btn">Закрыть</div></div>');
			$('#policy .close_x, #policy .close_btn').click(function(){
				$('#policy').remove();
			})
		});
	}
        
        $('body').on('click', '.section119 .policy2', function(){
            console.log('click');
            $(this).parent().parent().children('.policy2_popup').toggle();
        })
        
        
        $('body').on('click', '.product_card', function(){
            if($(this).parent().parent().children('.extra_info_block_wrapper').eq($(this).data('id')).is(':visible')){
                $(this).parent().parent().children('.extra_info_block_wrapper').hide();
            }else{
                $(this).parent().parent().children('.extra_info_block_wrapper').hide();
                $(this).parent().parent().children('.extra_info_block_wrapper').eq($(this).data('id')).show();
            }
        })
        $('body').on('click', '.extra_info_block .close', function(){
            $(this).parent().parent().hide();
        })
        
        $('body').on('click', '.extra_info_block_wrapper', function (event) {
            if ($(event.target).closest(".extra_info_block").length === 0) {
                $('.extra_info_block_wrapper').hide();
            }		
	});
        
        

	if($('.section41 .overlay_image_box, .section42 .overlay_image_box, .section43 .overlay_image_box, .section44 .overlay_image_box, .section45 .overlay_image_box, .section46 .overlay_image_box, .section47 .overlay_image_box, .section48 .overlay_image_box').size()){
		$('.section41 .overlay_image_box, .section42 .overlay_image_box, .section43 .overlay_image_box, .section44 .overlay_image_box, .section45 .overlay_image_box, .section46 .overlay_image_box, .section47 .overlay_image_box, .section48 .overlay_image_box').click(function(){
			
			var this_section = $(this).closest('.section');
			if(this_section.hasClass('img_zoom')){
				var image_url = $(this).parent().children().attr('src');
				var t_arr = image_url.split('/');
				var new_image_url = '/img/800x600/'+t_arr[3];
				
				console.log(new_image_url);
				
				if($('#img_zoomer_bg').size()){
					$('#img_zoomer_bg').remove();
				}
				$('body').append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url('+new_image_url+')"></div><div id="img_zoomer_close">X</div></div>');
				
				
				
				
			}
			//console.log('213');	
		})
	}
	
	if($('.section141 .overlay_image_box, .section142 .overlay_image_box, .section143 .overlay_image_box, .section144 .overlay_image_box, .section145 .overlay_image_box, .section146 .overlay_image_box, .section147 .overlay_image_box, .section148 .overlay_image_box').size()){
		$('.section141 .overlay_image_box, .section142 .overlay_image_box, .section143 .overlay_image_box, .section144 .overlay_image_box, .section145 .overlay_image_box, .section146 .overlay_image_box, .section147 .overlay_image_box, .section148 .overlay_image_box').click(function(){
			
			var this_section = $(this).closest('.section');
			if(this_section.hasClass('img_zoom')){
				var image_url = $(this).parent().children().attr('src');
				var t_arr = image_url.split('/');
				var new_image_url = '/img/800x600/'+t_arr[3];
				
				console.log(1);
				console.log(new_image_url);
				
				if($('#img_zoomer_bg').size()){
					$('#img_zoomer_bg').remove();
				}
				$('body').append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url('+new_image_url+')"></div><div id="img_zoomer_close">X</div></div>');
			}
			//console.log('213');	
		})
	}
	//Альбомный режим
	if($('.section128 .image1, .section125 .image1, .section124 .image1, .section149 .image1, .section150 .image1, .section200 .image1, .section201 .image1, .section138 .image').size()){
		$('.section128 .image1, .section128 .image2, .section128 .image3,  .section125 .image1,  .section125 .image2,  .section124 .image1,  .section124 .image2,  .section124 .image3, .section149 .image1, .section149 .image2, .section149 .image3, .section150 .image1, .section150 .image2, .section200 .image1, .section200 .image2, .section200 .image3, .section200 .image4, .section201 .image1, .section201 .image2, .section201 .image3, .section201 .image4, .section201 .image5, .section138 .image').click(function(){
			
                        $('.show_extra_info').removeClass('currnet');
                        $(this).addClass('currnet');
                        
                        var parent = $(this).closest('.arr1');
                        
                        
                        var j = 0;
                        $.each(parent.find('.show_extra_info'), function(index, element){
                            if($(element).hasClass('currnet')){
                                j=index; 
                            }
                            
                        })
                        
                        
                        if($(this).hasClass('show_extra_info')){
                            
                            if($(window).width()<800){
                                return true;
                            }
                            $(this).parent().parent().children('.extra_info_block_wrapper').eq(j).show()
                            return true;
                            
                        }
                        
                        
			var this_section = $(this).closest('.section');
			if(this_section.hasClass('img_zoom')){
				var image_url = $(this).children().attr('src');
				var t_arr = image_url.split('/');
				var new_image_url = '/img/800x600/'+t_arr[3];
				
				console.log(2);
				console.log(new_image_url);
				
				if($('#img_zoomer_bg').size()){
					$('#img_zoomer_bg').remove();
				}
				$('body').append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url('+new_image_url+')"></div><div id="img_zoomer_close">X</div></div>');
			}
			//console.log('213');	
		})
	}
	
	//Портретный режим
	if($('.section151 .image1').size()){
		$('.section151 .image1, .section151 .image2, .section151 .image3, .section151 .image4').click(function(){
			
			var this_section = $(this).closest('.section');
			if(this_section.hasClass('img_zoom')){
				var image_url = $(this).children().attr('src');
				var t_arr = image_url.split('/');
				var new_image_url = '/img/400x560/'+t_arr[3];
				
				console.log(new_image_url);
				
				if($('#img_zoomer_bg').size()){
					$('#img_zoomer_bg').remove();
				}
				$('body').append('<div id="img_zoomer_bg"><div id="img_zoomer" class="portret" style="background-image:url('+new_image_url+')"></div><div id="img_zoomer_close" class="portret">X</div></div>');
			}
			//console.log('213');	
		})
	}
	
	
	$('body').on('click', '#img_zoomer_bg ,#img_zoomer_clocse', function(){
				if($('#img_zoomer_bg').size()){
					$('#img_zoomer_bg').remove();
				}		
		
	})




	$('.btn1, .btn2, .btn3, .btn4,  .btn5, .btn1x, .btn2x, .btn3x, .btn4x,  .btn5x').each(function () {
            
            if( $(this).css('background-color')=='rgb(255, 255, 255)'){
                //$(this).css({color: '#3D3D3D'})
            }
            
            
	})
	$('div.btn1, div.btn2, div.btn3, div.btn4,  div.btn5').click(function () {
		var this_section = $(this).closest('.section');
		if (this_section.find('.arr1').size()) {
			$(this).parent().find('.popup_form').show();
		} else {
			this_section.find('.popup_form').show();
		}
	})
	$('.btn1x, .btn2x, .btn3x, .btn4x,  .btn5x').click(function () {
            $('.extra_info_block_wrapper').hide();
            for(i=0; i<=5; i++){
                if($(this).parent().children('.extra_info'+i).size()){
                    $(this).closest('.arr1').find('.btn'+i).click();

                }
            }
            
	})
        
        
        
	$('.btn1, .btn2, .btn3, .btn4,  .btn5, .submit_btn, .btn1x, .btn2x, .btn3x, .btn4x,  .btn5x').hover(function () {
            if($(this).hasClass('surround')){
                // обЪемный кнопке
                var color = $(this).css('background-color');
                $(this).attr('data-color', color);
                var color2 = '#fff';
                if(color=='rgb(255, 255, 255)'){
                    color2 = '#3D3D3D';
                }                
                $(this).css({
                    backgroundColor: color2,
                    color:  color,
                    border: 'solid 2px',
                    borderRadius: '0px',
                })
                
                
            }else{
                // не объемный кнопке
                var color = $(this).css('color');
                $(this).attr('data-color', color);
                
                var color2 = '#fff';
                if(color=='rgb(255, 255, 255)'){
                    color2 = '#3D3D3D';
                }
                
                if(color=='rgb(255, 255, 255)'){
                    color = 'rgb(0, 0, 0,0.5    )';
                    color2 = '#FFF';
                }
                
                
                

                $(this).css({
                    backgroundColor: color,
                    color:  color2,
                })
            }
            $(this).addClass('hover');
        }, function(){
            
            if($(this).hasClass('surround')){
                // обЪемный кнопке
                var color = $(this).data('color');
                $(this).removeAttr('style');
                $(this).css({
                    backgroundColor: color,
                    color:  '#fff',
                    border: 'solid 1px',
                    borderRadius: '2px',                    
                })
                
                if( $(this).css('background-color')=='rgb(255, 255, 255)'){
                    $(this).css({color: '#3D3D3D'})
                }                
                
                
            }else{
                //$(this).attr('date-color', $(this).css('color'));
                var color = $(this).data('color');
                
                $(this).removeAttr('style');
                $(this).css({
                    color:  color,
                })
            }            
            
            $(this).removeAttr('date-color');
            $(this).removeClass('hover');
        })







	setInterval(function () {
		if ($('.objtimer').size()) {
			$('.objtimer').each(function () {

				var type = $(this).data('type'),
						dd = $(this).data('dd'),
						dm = $(this).data('dm'),
						dy = $(this).data('dy'),
						monthly = $(this).data('monthly'),
						weekly = $(this).data('weekly'),
						hr = $(this).data('hr'),
						min = $(this).data('min'),
						date_now = new Date();

				if (type == 'date') {
					var date_next = new Date(dy, dm - 1, dd, hr, min, 0, 0);
				}
				if (type == 'monthly') {
					var date_next = new Date(date_now.getFullYear(), date_now.getMonth(), dd, hr, min, 0, 0);
					if (date_now > date_next) {
						date_next = new Date(date_now.getFullYear(), date_now.getMonth() + 1, dd, hr, min, 0, 0);
					}
				}
				if (type == 'weekly') {

					var date_next = new Date(date_now.getFullYear(), date_now.getMonth(), date_now.getDate(), hr, min, 0, 0);
					date_next.setDate(date_now.getDate() + (weekly + 7 - date_now.getDay()) % 7);

				}
				if (type == 'daily') {
					var date_next = new Date(date_now.getFullYear(), date_now.getMonth(), date_now.getDate(), hr, min, 0, 0);
					if (date_now > date_next) {
						date_next = new Date(date_now.getFullYear(), date_now.getMonth(), date_now.getDate() + 1, hr, min, 0, 0);
					}
				}





				if (date_now > date_next) {
                                        if(window.tobiz.editor){
                                            $(this).children('.days').text('00');
                                            $(this).children('.hrs').text('00');
                                            $(this).children('.min').text('00');
                                            $(this).children('.sec').text('00');
                                        }else{
                                            $(this).closest('.section').addClass('invis');
                                            
                                        }
                                        

				} else {
					var totalSec = parseInt((date_next.getTime() - date_now.getTime()) / 1000),
							tdays = Math.floor(totalSec / (24 * 3600)),
							thrs = Math.floor((totalSec - tdays * 24 * 3600) / (3600)),
							tmin = Math.floor((totalSec - tdays * 24 * 3600 - thrs * 3600) / (3600 / 60)),
							tsec = Math.floor((totalSec - tdays * 24 * 3600 - thrs * 3600 - tmin * (3600 / 60)) / (3600 / (60 * 60)));

					if (tdays < 10)
						tdays = "0" + tdays;
					if (thrs < 10)
						thrs = "0" + thrs;
					if (tmin < 10)
						tmin = "0" + tmin;
					if (tsec < 10)
						tsec = "0" + tsec;


//							console.log('tdays:'+tdays);
//							console.log('thrs:'+thrs);
//							console.log('tmin:'+tmin);
//							console.log('tsec:'+tsec);

				}

				$(this).children('.days').text(tdays);
				$(this).children('.hrs').text(thrs);
				$(this).children('.min').text(tmin);
				$(this).children('.sec').text(tsec);

				//$(this).html('Осталось '+ tdays +' дней,  '+ thrs+ ' часов, '+ tmin+ ' минут, '+tsec);






			})


		}
	}, 1000)

	setInterval(function () {
		if ($('[data-map-obj]').size()) {
			$('[data-map-obj]').each(function (index) {
				var points = JSON.parse(_.unescape($(this).attr('data-map-obj')));
				var center = JSON.parse(_.unescape($(this).attr('data-map-center')));
				$(this).removeAttr('data-map-obj');
				$(this).removeAttr('data-map-center');
				var this_element = $(this).children('.map_inner')[0];
				function MakeMap() {
					var map;
					map = new ymaps.Map(this_element, center);
					center.controls = ["zoomControl"];



					_.each(points, function (i, num) {
						var myGeocoder = ymaps.geocode(i.address);
						myGeocoder.then(
								function (res) {
									var myPlacemark = new ymaps.Placemark(res.geoObjects.get(0).geometry.getCoordinates(), {}, {
										preset: 'islands#icon',
										iconColor: i.color
									});
									map.geoObjects.add(myPlacemark);
								},
								function (err) {
									//console.log('Ошибка');
								}
						);
					})
				}


				$.ajax({
					url: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU',
					dataType: "script",
					cache: true,
					success: function () {
						ymaps.ready(function () {
							MakeMap();
						})
					}
				});
			})
		}
	}, 200)


        setInterval(function () {
            if($('.fixed_top').size()){
               var count = $('.fixed_top').size();
               var height = 0;
               var top = 0;
               $('.fixed_top').each(function(){
                   height+=$(this).height();
                   $(this).css({top: top+'px'});
                   top+=$(this).height();
               })
               $('#wrapper').css({paddingTop: height+'px'});
            }else{
               $('#wrapper').css({paddingTop: 0+'px'});
            }
        }, 200)
        
        
        
        $(window).scroll(function(){
            $('.fixed_top').css({'left':'-'+$(window).scrollLeft()+'px'});
        }) 


	if (window.location.search == '?rk_pay=success') {
		alert('Оплата успешно завершена!');
		window.location.search = '';
	}
	if (window.location.search == '?rk_pay=fail') {
		alert('Оплата не завершена!');
		window.location.search = '';
	}





        $('.section302 .left.style2 ul li a, .section302 .left.style4 ul li a').hover(function(){
            $(this).parent().addClass('hover');
        },function(){
            $(this).parent().removeClass('hover');
        })
        
        
        $('body').on('click', '.section304 .spoiler_toggle', function(){
            if($(this).parent().hasClass('close')){
                $(this).text('-')
            }
            if($(this).parent().hasClass('open')){
                $(this).text('+')
            }
            $(this).parent().toggleClass('open');
            $(this).parent().toggleClass('close');
        })
        $('body').on('click', '.section305 .spoiler_toggle', function(){
            if($(this).parent().hasClass('close')){
                $(this).text('-')
            }
            if($(this).parent().hasClass('open')){
                $(this).text('+')
            }
            $(this).parent().toggleClass('open');
            $(this).parent().toggleClass('close');
            
        })
        $('body').on('click', '.section304 .spoiler_title', function(){
            if(typeof(window.tobiz.editor)==='undefined'){
                
                
                $(this).parent().toggleClass('open');
                $(this).parent().toggleClass('close');
            }
        })
        $('body').on('click', '.section305 .spoiler_title', function(){
            if(typeof(window.tobiz.editor)==='undefined'){
                
                
              
                
                
                $(this).parent().toggleClass('open');
                $(this).parent().toggleClass('close');
            }
        })
        
        if($('.section304 .spoiler').size() && typeof(window.tobiz.editor)==='undefined'){
            $('.section304 .spoiler').each(function(){
                $(this).removeClass('open');
                $(this).addClass('close');
            })
        }
        if($('.section305 .spoiler').size() && typeof(window.tobiz.editor)==='undefined'){
            $('.section305 .spoiler').each(function(){
                $(this).removeClass('open');
                $(this).addClass('close');
            })
        }
        


            $('body').on('click', '.section310 .image_box', function(){
                var image = $(this).children('img').data('image');
                $(this).parent().parent().parent().parent().find('.viewport').css({
                    backgroundImage: 'url('+image+')'
                });
            })  
            
            function silder310(block, way){
                var len = block.find('.image_box').size();
                
                var mr = block.find('.image_box').eq(0).css('marginRight');
                mr =mr.replace(/px/g,'')*1;
                var w = block.find('.image_box').eq(0).width()+'';
                w = w.replace(/px/g,'')*1;
                
                
                var width =  len*w + (len-1)*mr +mr;
                block.find('.image_wrapper').css({ // обновляем ширину.
                    width: width+'px'
                });
                
                
                var max_left = block.find('.section_inner').width()+mr-width;
                var min_left = 0;
                
                

                
                var this_left = block.find('.image_wrapper').css('left');
                this_left =this_left.replace(/px/g,'')*1;
                
                if(way=='left'){
                    this_left -=(mr+w);  
                    if(width<block.find('.section_inner').width()){
                        return
                    }
                    
                    if(this_left<(-1)*(len*w + (len-1)*mr)){
                        return
                    }                    
                    
                }
                if(way=='right'){
                    this_left +=(mr+w);    
                    if(this_left>0){
                        this_left=0;
                    }
                }
                
                block.find('.image_wrapper').css({
                    left: this_left+'px'
                    
                });
                
                
                
            }
            
            
            $('body').on('click', '.section310 .iamges .go_left', function(){
                silder310($(this).closest('.section'),'right');
            })   
            
            
            $('body').on('click', '.section310 .iamges .go_right', function(){
                silder310($(this).closest('.section'),'left');
            })  
            
            if($('.section.animate').size() && typeof(window.tobiz.editor)==='undefined' && $(window).width()>1000 && parseInt(window.tobiz.t)>=3){
                $('.section.animate').each(function(){
                    
                    

                    
                    
                    

                    
                    if($(this).hasClass('section118') || $(this).hasClass('section128') || $(this).hasClass('section149') || $(this).hasClass('section124')){
                        var seclector = '.col_3';
                        var objects  = $(this).find(seclector);
                        var parent_selector = '.arr1'; 
                        var parents = $(this).find(parent_selector);
                        objects.css({ opacity: 0, position: 'relative'});
                        
                        var block = $(this);
                        var extra_objects =  block.find('.title, .sub_title');
                        extra_objects.css({ opacity: 0, top: '0', position: 'relative'});   
                        
                        
                        $.each(parents, function(i,el){
                            $(el).find(seclector).eq(0).css({ left: '-200px'})
                            $(el).find(seclector).eq(2).css({ left: '200px'})
                        })
                        $(window).scroll(function(){
                            $.each(objects, function(i, el){
                                if(($(window).scrollTop()+($(window).height()/2))>($(el).closest('.arr1').offset().top) || ($(window).scrollTop()+$(window).height()>$(el).closest('.arr1').offset().top+$(el).closest('.arr1').height())){
                                    $(el).animate({opacity: 1.0, left:0}, 1500);
                                    extra_objects.animate({ opacity: 1, top:0},1500);
                                }
                            })                            
                        })
                    }
                    if($(this).hasClass('section125') || $(this).hasClass('section250')){
                        var seclector = '.col_2';
                        var objects  = $(this).find(seclector);
                        var parent_selector = '.arr1'; 
                        var parents = $(this).find(parent_selector);
                        objects.css({ opacity: 0, position: 'relative'});
                        var block = $(this);
                        var extra_objects =  block.find('.title, .sub_title');
                        extra_objects.css({ opacity: 0, top: '0', position: 'relative'});   
                        
                        $.each(parents, function(i,el){
                            $(el).find(seclector).eq(0).css({ left: '-200px'})
                            $(el).find(seclector).eq(1).css({ left: '200px'})
                        })
                        $(window).scroll(function(){
                            $.each(objects, function(i, el){
                                if(($(window).scrollTop()+($(window).height()/2))>($(el).closest('.arr1').offset().top) || ($(window).scrollTop()+$(window).height()>$(el).closest('.arr1').offset().top+$(el).closest('.arr1').height())){
                                    $(el).animate({opacity: 1.0, left:0}, 1500);
                                    extra_objects.animate({ opacity: 1, top:0},1500);
                                }
                            })                            
                        })
                    }
                    if($(this).hasClass('section307')){
                        var seclector = '.col';
                        var objects  = $(this).find(seclector);
                        var parent_selector = '.section_inner'; 
                        var parents = $(this).find(parent_selector);
                        objects.css({ opacity: 0, position: 'relative'});
                        
                        var block = $(this);
                        var extra_objects =  block.find('.title, .sub_title');
                        extra_objects.css({ opacity: 0, top: '0', position: 'relative'});                        
                        
                        
                        $.each(parents, function(i,el){
                            $(el).find(seclector).eq(0).css({ left: '-600px'})
                            $(el).find(seclector).eq(1).css({ left: '-400px'})
                            $(el).find(seclector).eq(2).css({ left: '-200px'})
                        })
                        $(window).scroll(function(){
                            $.each(objects, function(i, el){
                                if(($(window).scrollTop()+($(window).height()/2))>($(el).closest('.section_inner').offset().top) || ($(window).scrollTop()+$(window).height()>$(el).closest('.section_inner').offset().top+$(el).closest('.section_inner').height())){
                                    $(el).animate({opacity: 1.0, left:0}, 1500);
                                    extra_objects.animate({ opacity: 1, top:0},1500);
                                }
                            })                            
                        })
                    }
                    if($(this).hasClass('section309')){
                        var seclector = '.col';
                        var objects  = $(this).find(seclector);
                        var parent_selector = '.section_inner'; 
                        var parents = $(this).find(parent_selector);
                        objects.css({ opacity: 0, position: 'relative'});
                        
                        var block = $(this);
                        var extra_objects =  block.find('.title, .sub_title');
                        extra_objects.css({ opacity: 0, top: '0', position: 'relative'});   
                        
                        $.each(parents, function(i,el){
                            $(el).find(seclector).eq(0).css({ left: '-1000px'})
                            $(el).find(seclector).eq(1).css({ left: '-800px'})
                            $(el).find(seclector).eq(2).css({ left: '-600px'})
                            $(el).find(seclector).eq(3).css({ left: '-400px'})
                            $(el).find(seclector).eq(4).css({ left: '-200px'})
                        })
                        $(window).scroll(function(){
                            $.each(objects, function(i, el){
                                if(($(window).scrollTop()+($(window).height()/2))>($(el).closest('.section_inner').offset().top) || ($(window).scrollTop()+$(window).height()>$(el).closest('.section_inner').offset().top+$(el).closest('.section_inner').height())){
                                    $(el).animate({opacity: 1.0, left:0}, 1500);
                                    extra_objects.animate({ opacity: 1, top:0},1500);
                                }
                            })                            
                        })
                    }
                    if($(this).hasClass('section308')){
                        var seclector = '.col';
                        var objects  = $(this).find(seclector);
                        var parent_selector = '.section_inner'; 
                        var parents = $(this).find(parent_selector);
                        objects.css({ opacity: 0, position: 'relative'});
                        
                        var block = $(this);
                        var extra_objects =  block.find('.title, .sub_title');
                        extra_objects.css({ opacity: 0, top: '0', position: 'relative'}); 
                        
                        $.each(parents, function(i,el){
                            $(el).find(seclector).eq(0).css({ left: '-800px'})
                            $(el).find(seclector).eq(1).css({ left: '-600px'})
                            $(el).find(seclector).eq(2).css({ left: '-400px'})
                            $(el).find(seclector).eq(3).css({ left: '-200px'})
                        })
                        $(window).scroll(function(){
                            $.each(objects, function(i, el){
                                if(($(window).scrollTop()+($(window).height()/2))>($(el).closest('.section_inner').offset().top) || ($(window).scrollTop()+$(window).height()>$(el).closest('.section_inner').offset().top+$(el).closest('.section_inner').height())){
                                    $(el).animate({opacity: 1.0, left:0}, 1500);
                                    extra_objects.animate({ opacity: 1, top:0},1500);
                                }
                            })                            
                        })
                    }
                    if($(this).hasClass('section226')){
                        var seclector = '.arr1';
                        var objects  = $(this).find(seclector);
                        var parent_selector = '.section_inner'; 
                        var parents = $(this).find(parent_selector);
                        objects.css({ opacity: 0, position: 'relative'});
                        
                        
                        var block = $(this);
                        var extra_objects =  block.find('.title, .sub_title');
                        extra_objects.css({ opacity: 0, top: '0', position: 'relative'});                         
                        
                        $.each(objects, function(i,el){
                            $(el).css({ left: '-'+((i+1)*400)+'px'})
                        })
                        $(window).scroll(function(){
                            $.each(objects, function(i, el){
                                if(($(window).scrollTop()+($(window).height()/2))>($(el).closest('.section_inner').offset().top) || ($(window).scrollTop()+$(window).height()>$(el).closest('.section_inner').offset().top+$(el).closest('.section_inner').height())){
                                    $(el).animate({opacity: 1.0, left:0}, 1500);
                                    extra_objects.animate({ opacity: 1, top:0},1500);
                                }
                            })                            
                        })
                    }
                    if($(this).hasClass('section132')){ //
                        var seclector = '.text';
                        var objects  = $(this).find(seclector);
                        var parent_selector = '.section_inner'; 
                        var parents = $(this).find(parent_selector);
                        objects.css({ opacity: 0, position: 'relative'});
                        objects.eq(0).css({ left: '-'+(400)+'px'})

                        var block = $(this);
                        var extra_objects =  block.find('.title, .sub_title');
                        extra_objects.css({ opacity: 0, top: '0', position: 'relative'}); 

                        $(window).scroll(function(){
                            $.each(objects, function(i, el){
                                if(($(window).scrollTop()+($(window).height()/2))>($(el).closest('.section_inner').offset().top) || ($(window).scrollTop()+$(window).height()>$(el).closest('.section_inner').offset().top+$(el).closest('.section_inner').height())){
                                    $(el).animate({opacity: 1.0, left:0}, 1500);
                                    extra_objects.animate({ opacity: 1, top:0},1500);
                                }
                            })                            
                        })
                    }
                    if($(this).hasClass('section126')){ //
                        var seclector = '.image1, .video1, .right';
                        var objects  = $(this).find(seclector);
                        var parent_selector = '.arr1'; 
                        var parents = $(this).find(parent_selector);
                        objects.css({ opacity: 0, position: 'relative'});
                        
                        
                        $.each(parents, function(i,el){
                            $(el).find(seclector).eq(0).css({ left: '-200px'})
                            $(el).find(seclector).eq(1).css({ left: '200px'})
                        })                        
                        


                        var block = $(this);
                        var extra_objects =  block.find('.title, .sub_title');
                        extra_objects.css({ opacity: 0, top: '0', position: 'relative'}); 
                        
                        
                        $(window).scroll(function(){
                            $.each(objects, function(i, el){
                                if(($(window).scrollTop()+($(window).height()/2))>($(el).closest('.arr1').offset().top) || ($(window).scrollTop()+$(window).height()>$(el).closest('.arr1').offset().top+$(el).closest('.arr1').height())){
                                    $(el).animate({opacity: 1.0, left:0}, 1500);
                                    extra_objects.animate({ opacity: 1, top:0},1500);
                                }
                            })                            
                        })
                    }
                    
                    
                    if($(this).hasClass('section117')){ //
                        var seclector = '.col_2';
                        var objects  = $(this).find(seclector);
                        var parent_selector = '.arr1'; 
                        var parents = $(this).find(parent_selector);
                        objects.css({ opacity: 0, position: 'relative'});
                        
                        var block = $(this);
                        var extra_objects =  block.find('.title, .sub_title');
                        extra_objects.css({ opacity: 0, top: '0', position: 'relative'});                         
                        
                        $.each(parents, function(i,el){
                            if((i+1)%2){
                                $(el).find(seclector).eq(0).css({ left: '-200px'})
                                $(el).find(seclector).eq(1).css({ left: '200px'})
                            }else{
                                $(el).find(seclector).eq(0).css({ left: '200px'})
                                $(el).find(seclector).eq(1).css({ left: '-200px'})
                            }
                        })
                        $(window).scroll(function(){
                            $.each(objects, function(i, el){
                                if(($(window).scrollTop()+($(window).height()/2))>($(el).closest('.arr1').offset().top) || ($(window).scrollTop()+$(window).height()>$(el).closest('.arr1').offset().top+$(el).closest('.arr1').height())){
                                    $(el).animate({opacity: 1.0, left:0}, 1500);
                                    extra_objects.animate({ opacity: 1, top:0},1500);
                                }
                            })                            
                        })
                    }
                    
                    

                    if($(this).hasClass('section152') || $(this).hasClass('section201')){
                        var seclector = '.image_box1, .image_box2, .image_box3, .image_box4, .image_box5, .col_5 ';
                        var objects  = $(this).find(seclector);
                        var parent_selector = '.arr1'; 
                        var parents = $(this).find(parent_selector);
                        objects.css({ opacity: 0, position: 'relative'});

                        var block = $(this);
                        var extra_objects =  block.find('.title, .sub_title');
                        extra_objects.css({ opacity: 0, top: '0', position: 'relative'}); 
                        
                        
                        $.each(parents, function(i,el){
                            $(el).find(seclector).eq(0).css({ left: '-200px'})
                            $(el).find(seclector).eq(1).css({ left: '-100px'})
                            $(el).find(seclector).eq(3).css({ left: '100px'})
                            $(el).find(seclector).eq(4).css({ left: '200px'})
                        })
                        $(window).scroll(function(){
                            $.each(objects, function(i, el){
                                if(($(window).scrollTop()+($(window).height()/2))>($(el).closest('.arr1').offset().top) || ($(window).scrollTop()+$(window).height()>$(el).closest('.arr1').offset().top+$(el).closest('.arr1').height())){
                                    $(el).animate({opacity: 1.0, left:0, top:0}, 1500);
                                    extra_objects.animate({ opacity: 1, top:0},1500);
                                }
                            })                            
                        })
                    }
                    if($(this).hasClass('section121') || $(this).hasClass('section151') || $(this).hasClass('section200')){
                        var seclector = '.col_4';
                        var objects  = $(this).find(seclector);
                        var parent_selector = '.arr1'; 
                        var parents = $(this).find(parent_selector);
                        objects.css({ opacity: 0, position: 'relative'});
                        
                        var block = $(this);
                        var extra_objects =  block.find('.title, .sub_title');
                        extra_objects.css({ opacity: 0, top: '0', position: 'relative'});                         
                        
                        $.each(parents, function(i,el){
                            $(el).find(seclector).eq(0).css({ left: '-200px'})
                            $(el).find(seclector).eq(1).css({ left: '-100px'})
                            $(el).find(seclector).eq(2).css({ left: '100px'})
                            $(el).find(seclector).eq(3).css({ left: '200px'})
                        })
                        $(window).scroll(function(){
                            $.each(objects, function(i, el){
                                if(($(window).scrollTop()+($(window).height()/2))>($(el).closest('.arr1').offset().top) || ($(window).scrollTop()+$(window).height()>$(el).closest('.arr1').offset().top+$(el).closest('.arr1').height())){
                                    $(el).animate({opacity: 1.0, left:0, top:0}, 1500);
                                    extra_objects.animate({ opacity: 1, top:0},1500);
                                }
                            })                            
                        })
                    }
                    
                    
                    
                    
                })
            }
            
            
            
            if($('.section.widget').size() && typeof(window.tobiz.editor)==='undefined' && parseInt(window.tobiz.w)==1){
            
                if($('.section1000').size()){
                    var popup_1000 = 1;
                    $('html').mouseleave(function(e){
                        if(popup_1000){
                            popup_1000=0;
                            $('.section1000').find('.extra_info_block_wrapper').show();
                        }
                    })
                }
                
                
            }
        
        


})


