$(function() {



		$.fn.autocomplete = function(options) {
			var isUrl = true;//(typeof link == "string");
			var link = true;
			var timeWritten; 
			var timeToWrite = 300; // limit of time in order to know if the user has finished typing.
			var element = $(this);
			defaults = {
				inputClass: "autocomplete-input",
				resultsClass: "autocomplete-results",
				loadingClass: "autocomplete-loading",
				minChars: 1,
				delay: 400,
				matchCase: false,
				matchSubset: true,
				matchContains: false,
				cacheLength: 10,
				max: 100,
				mustMatch: false,
				extraParams: {},
				selectFirst: true,
				formatItem: function(row) { return row[0]; },
				formatMatch: null,
				autoFill: false,
				width: 0,
				multiple: false,
				multipleSeparator: ", ",
				highlight: function(value, term) {
					return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
				},
			    scroll: true,
			    scrollHeight: 180
			},
			options = $.extend({}, defaults, {
				url: isUrl ? link : null,
				data: isUrl ? null : link,
				delay: isUrl ? defaults.delay : 10,
				max: options && !options.scroll ? 10 : 150
			}, options),
			KEY = {
				UP: 38,
				DOWN: 40,
				LEFT: 37,
				RIGHT: 39,
				DEL: 46,
				TAB: 9,
				ENTER: 13,
				ESC: 27,
				COMMA: 188,
				PAGEUP: 33,
				PAGEDOWN: 34,
				BACKSPACE: 8
			},
			keyUp = function (e) {
				clearTimeout(timeWritten);
				switch (e.which) {
					case KEY.BACKSPACE: break; // backspace
					case KEY.TAB: break; // tab	
					case KEY.ENTER: break; // enter
						break;		
					case 16: break; // shift
					case 17: break; // ctrl
					case 18: break; // alt
					case KEY.ESC: break; // escape
					case 32: break; // space
					case 35: break; // end
					case 36: break; // home
					case KEY.LEFT: break; // left
					case KEY.RIGHT: break; // right
					case KEY.UP: break; // up
					case KEY.DOWN: break; // down
					case 112: break; // f1
					case 113: break; // f2
					case 114: break; // f3
					case 115: break; // f4
					case 116: break; // f5
					case 117: break; // f6
					case 118: break; // f7
					case 119: break; // f8
					case 120: break; // f9
					case 121: break; // f10
					case 122: break; // f11
					case 123: break; // f12
					default:
						if (element.is('.autocomplete-input')){
							// tiempoEscrito = setTimeout(cargarMusicaYT,tiempoDeEscribir);
							// $('.'+defaults.loadingClass).css({'display': 'block'});
							timeWritten = setTimeout(function(){
								alert('time have passed');
								$('.'+defaults.loadingClass).fadeIn(200); // I choosed this one
							},timeToWrite);
						} 
				}
			},
			keyDown = function (e) {
				clearTimeout(timeWritten);
				switch(e.which) {
					case KEY.ENTER: // enter
						alert('Do something');
						// selectItem(); // >> Create a function called selectItem
						break; 
					case KEY.ESC: // esc
						// clearSearch(); //>> Create a function called clearSearch
						break;
					case KEY.LEFT: break; // left
					case KEY.RIGHT: break; // right
					case KEY.UP: // up
						// move(-1); //>> Create a function called moveSelection
						break;
					case KEY.DOWN: 
						// move(1); //>> Create a function called moveSelection
						break; // down
				}
			};
			
			var configuration = $.extend({
            	// These are default settings.
            	color: "#666",
            	backgroundColor: "white"
        	}, options);

        	$(this).keyup(function(e){
        		keyUp(e);
        	});
        	$(this).keydown(function(e){
        		keyDown(e);
        	});
			if (isUrl) {
				var loadingDiv = $('.'+defaults.loadingClass);
				loadingDiv.css({
					'display': 'none',
					'position': 'absolute',
					'left': '100%',
					'top': $(this).position().top + 5
				});
			}

        	$(this).css({
        		"background-color":configuration.backgroundColor,
        		"color": configuration.color

        	});
		};
		// url:'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewcount&type=video+&videoDefinition=high&key=AIzaSyDS4CW6iMg0U8uVQ4Iu7CtYFBQ6g9E06MM'
		// var autocompletar = $.fn.autocomplete;
		// alert(autocompletar);
		
		$('.autocomplete-input').autocomplete();

		var tiempoEscrito; 
		var tiempoDeEscribir = 300; // Tiempo limite para verificar si el usuario termino de escribir
		
		

		$('html').click( function() {
			clearSearch();
		});
		
		$("#txtLinkVideo").click(function(){
			$("#txtLinkVideo").select();
			
		});
	
		$("#txtLinkVideo, #txtNombreCancion").keyup(function(e){
			clearTimeout(tiempoEscrito);
			switch (e.which) {
				case 8: break; // backspace
				case 9: break; // tab	
				case 13: break; // enter
					break;		
				case 16: break; // shift
				case 17: break; // ctrl
				case 18: break; // alt
				case 27: break; // escape
				case 32: break; // space
				case 35: break; // end
				case 36: break; // home
				case 37: break; // left
				case 39: break; // right
				case 38: break; // up
				case 40: break; // down
				case 112: break; // f1
				case 113: break; // f2
				case 114: break; // f3
				case 115: break; // f4
				case 116: break; // f5
				case 117: break; // f6
				case 118: break; // f7
				case 119: break; // f8
				case 120: break; // f9
				case 121: break; // f10
				case 122: break; // f11
				case 123: break; // f12
				default:
					if ($(this).is('#txtNombreCancion')){
						tiempoEscrito = setTimeout(cargarMusicaYT,tiempoDeEscribir);

					} else {
						$("#txtLinkVideo").removeClass("autocomplete-loading");
						tiempoEscrito = setTimeout(autocomplete,tiempoDeEscribir);
					}
					
			}
			
		});
		//$("#txtLinkVideo").live('paste', function() {
		// 	setTimeout(autocomplete,tiempoDeEscribir);
		//});
		$("#txtLinkVideo, #txtNombreCancion").keydown(function(e){			
			clearTimeout(tiempoEscrito);
			// alert(e.which);
			switch(e.which) {
				case 13: // enter
					// alert('Do something');
					selectItem();
					break; 
				case 27: // esc
					clearSearch();
					break;
				case 37: break; // left
				case 39: break; // right
				case 38: // up
					move(-1);
					break;
				case 40: 
					move(1);
					break; // down
				
					
					// $("#btnBuscar").attr("disabled","true");
					// $("#btnBuscar").css("background-color","gray");
			}

		});
		$('#selectNombreArtista').change(function(){
			cargarMusicaYT();
		});
		function verificarInput(element) {
			var verified = true;
			if (element === true) {
				cargarMusicaYT();
			} else {
				
				var message = 'Completa el titulo de la cancion y el nombre del artista';
				!$('#panelCompleteMsg').is(":visible") ? $('#panelCompleteMsg').show(): true;
				if (element.is('#txtNombreCancion') && element.val()) {
					message = !$('#selectNombreArtista').val() ? 'Solo falta el artista.': '';
					verified = $('#selectNombreArtista').val() ? true : false;
				} else {
					verified = false;
				}
				mostrarMensajePanel(message);
			}
			return verified;
		}
		function mostrarMensajePanel(message) {
			$('#panelCompleteMsg p').html(message);
		}

		function autocomplete2(){

			valor = $("#txtLinkVideo").val();
			posicion = $("#txtLinkVideo").position(); // Obtener la posicion del Input en la ventana
			direccion = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewcount&type=video+&videoDefinition=high&key=";
			claveDeAPI = 'AIzaSyDS4CW6iMg0U8uVQ4Iu7CtYFBQ6g9E06MM';
			if (valor.length > 2) { // Si el input tiene mas de dos caracteres ejecutar el codigo de abajo
				
				$("#txtLinkVideo").addClass("autocomplete-loading");
				// search(); Esto se utiliza con el archivo search.js
				//Peticion al servidor para obtener un JSON con el listado del autocomplete
				$.getJSON(direccion+claveDeAPI, { "q":valor }, function( response ){
					var str = JSON.stringify(response);
			        $('#search-container').html('<ul id="search-container-ul" class="media-list"></ul>');
			        for (x1 in response.items) {
			            if (response.items[x1].id.kind != 'youtube#channel' && response.items[x1].id.kind != 'youtube#playlist') {
			                $('#search-container-ul').append('<li class="media" id="'+response.items[x1].id.videoId+'">'
			                    +'<div class="media-left pull-left">'
			                        +'<a href="https://youtu.be/'+response.items[x1].id.videoId+'"><img style="width: 94px; height: 64px;" class="media-object" src="'+ response.items[x1].snippet.thumbnails.default.url +'" alt="..."></a>'
			                    +'</div>'
			                    +'<div class="media-body">'
			                        +'<h4 class="media-heading">'+ response.items[x1].snippet.title + '</h4>'
			                    +'</div>'
			                    +'<p>'+response.items[x1].snippet.description+'</p>'
			                +'</li>').click(function() {
			                	selectItemAutoComplete();
			                });
			            }
			        }
			        $('.media').hover(function () {
			        	if (!$('.sc-ul-li-Selected')) {
			        		$(this).addClass('sc-ul-li-Selected');
			        	} else {
			        		$('.sc-ul-li-Selected').removeClass('sc-ul-li-Selected');
			        		$(this).addClass('sc-ul-li-Selected');
			        	}
			       //  	$(this).css({
			       //  		'background-color': 'Highlight',
						    // 'color': 'HighlightText',
						    // 'cursor': 'pointer'
			       //  	});
			        });
				});
					// $("#txtLinkVideo").removeClass("autocomplete-loading");
			} else { //Ocultar el div si el input tiene menos de 2 caracteres
				$( ".divResultados" ).html('');

			}
		}
		function move(parameter) {
			if ($('#search-container-ul .media').size() > 0){
				switch (parameter) {
					case 1:
						if ($('.sc-ul-li-Selected').size() == 0 || $('.sc-ul-li-Selected').is('#search-container-ul .media:last')) {
							$('.sc-ul-li-Selected').size() != 0 ? $('.sc-ul-li-Selected').removeClass('sc-ul-li-Selected') : true;
							$('#search-container-ul .media').eq(0).addClass('sc-ul-li-Selected');
							$('#search-container').scrollTop(0);
						} else {
							if ($('.sc-ul-li-Selected').size() != 0) {
								$('.sc-ul-li-Selected').removeClass('sc-ul-li-Selected').next().addClass('sc-ul-li-Selected');
								if (($('.sc-ul-li-Selected').position().top + $('.sc-ul-li-Selected').height()) > $('#search-container').height()) {
									$('#search-container').scrollTop($('#search-container').scrollTop() + (($('.sc-ul-li-Selected').position().top + $('.sc-ul-li-Selected').height()) - $('#search-container').height()));
								}
								// console.log("ScrollTop: " + ($('#search-container').scrollTop()) + " / Posicion-top - (less) .sc-ul-li-Selected-DivHeight: " + ($('.sc-ul-li-Selected').position().top + $('.sc-ul-li-Selected').height()));
							}
						}
						break;
					case -1:					
						if ($('.sc-ul-li-Selected').size() == 0 || $('.sc-ul-li-Selected').is('#search-container-ul .media:first')) {
							$('.sc-ul-li-Selected').size() != 0 ? $('.sc-ul-li-Selected').removeClass('sc-ul-li-Selected') : true;
							$('#search-container-ul .media').eq($('#search-container-ul .media').size()-1).addClass('sc-ul-li-Selected');
							$('#search-container').scrollTop($('.sc-ul-li-Selected').position().top + $('.sc-ul-li-Selected').height());
						} else {
							if ($('.sc-ul-li-Selected').size() != 0) {
								$('.sc-ul-li-Selected').removeClass('sc-ul-li-Selected').prev().addClass('sc-ul-li-Selected');
								if(($('.sc-ul-li-Selected').position().top) < ( $('#search-container').height() -  $('#search-container').height())) {
									$('#search-container').scrollTop($('.sc-ul-li-Selected').position().top + $('#search-container').scrollTop());
								}
								// console.log("ScrollTop: " + ($('#search-container').scrollTop()) + " / Posicion-top - (less) .sc-ul-li-Selected-DivHeight: " + ($('.sc-ul-li-Selected').position().top));
							}
						}
						break;
				}
			}
		}

		function clearSearch() {
			if($(".divResultados").is(":visible")) {
				$('#search-container').html('');
			}
			// $("#search-container-div").is(":visible") ? $('#search-container-div').html(''): true;
		}

		function clearSearchPanel() {
			$("#search-container-div").is(":visible") ? $('#search-container-div').html(''): true;
			$('#panelCompleteMsg').is(":visible") ? $('#panelCompleteMsg').hide(): true;
		}

		function selectItemAutoComplete() {
			if ($('.sc-ul-li-Selected').size() != 0) {
				if ($('.valDivLinkVideo').size() == 0) {
					$('#txtLinkVideo').after('<div class="valDivLinkVideo"></div>');
					$('.valDivLinkVideo').append(
						'<div class="panel panel-default">'
	  						+'<div class="panel-body">'
								+'<div class="media">'
									+'<button type="button" class="pull-right close btnRemoveItem"><i class="fa fa-trash fa-1x"></i></button>'
									+'<div class="pull-left">'
										+'<a href="#">'
											+'<img class="media-object" src="'+$('.sc-ul-li-Selected img').attr('src')+'" alt="...">'
										+'</a>'
									+'</div>'
									+'<div class="media-body">'
										+'<h4 class="media-heading">'+$('.sc-ul-li-Selected .media-heading').html()+'</h4>'
										+$('.sc-ul-li-Selected p').html()
									+'</div>'
								+'</div>'
								+'<input type="" readonly id="valtxtLinkVideo" name="valtxtLinkVideo" value=""/>'
							+'</div>'
						+'</div>'
					).hide();
				}
				$('#valtxtLinkVideo').val($('.sc-ul-li-Selected').attr('id'));
				$('#txtLinkVideo').val($('.sc-ul-li-Selected .media-heading').html()).attr('disabled',true);
				$('.valDivLinkVideo').show('fade');
				$('#valtxtLinkVideo').val() ? clearSearch() : true;
				$('.btnRemoveItem').click(function(){
					$(this).closest('.valDivLinkVideo').hide('fade',function(){
						$('#txtNombreCancion').val('').attr('disabled',false);
						$('#valtxtLinkVideo').val('');
						$(this).closest('.valDivLinkVideo').remove();
					});
				});
			}

		}
		function removeItem(){

		}
		// $.autocompletar.Select = function () {

		// 	function moveSelect(step) {
		// 		listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
		// 		movePosition(step);
		//         var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
		//         if(options.scroll) {
		//             var offset = 0;
		//             listItems.slice(0, active).each(function() {
		// 				offset += this.offsetHeight;
		// 			});
		//             if((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
		//                 list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
		//             } else if(offset < list.scrollTop()) {
		//                 list.scrollTop(offset);
		//             }
		//         }
		// 	};
		// };

		function selectItem() {
			if ($('.sc-ul-li-Selected').size() != 0) {
				if ($('.valDivLinkVideo').size() == 0) {
					$('#div-search-container').after('<div class="valDivLinkVideo"></div>');
					$('.valDivLinkVideo').append(
						'<div class="panel panel-default">'
	  						+'<div class="panel-body">'
								+'<div class="media">'
									+'<button type="button" class="pull-right close btnRemoveItem"><i class="fa fa-trash fa-1x"></i></button>'
									+'<div class="pull-left">'
										+'<a href="#">'
											+'<img class="media-object" src="'+$('.sc-ul-li-Selected img').attr('src')+'" alt="...">'
										+'</a>'
									+'</div>'
									+'<div class="media-body">'
										+'<h4 class="media-heading">'+$('.sc-ul-li-Selected .media-heading').html()+'</h4>'
										+$('.sc-ul-li-Selected p').html()
									+'</div>'
								+'</div>'
								+'<input type="hidden" readonly id="valtxtLinkVideo" name="valtxtLinkVideo" value=""/>'
							+'</div>'
						+'</div>'
					).hide();
				}
				$('#valtxtLinkVideo').val($('.sc-ul-li-Selected').attr('id'));
				// $('#txtLinkVideo').val($('.sc-ul-li-Selected .media-heading').html()).attr('disabled',true);
				$('.valDivLinkVideo').show('fade');
				$('#valtxtLinkVideo').val() ? clearSearchPanel() : true;
				$('#titlePanel').html('Video seleccionado');
				$('#txtNombreCancion, #txtNombreArtista').attr('disabled',true);
				$('#panelSearchVideo').removeClass('panel-default').addClass('panel-success');
				$('.btnRemoveItem').click(function(){
					$('#txtNombreCancion').attr('disabled',false);
					$(this).closest('.valDivLinkVideo').hide('fade',function(){
						$('#valtxtLinkVideo').val('');
						// $('#panelCompleteMsg').show('fade');
						$('#panelSearchVideo').removeClass('panel-success').addClass('panel-default');
						$('#titlePanel').html('Elige el Video');
						// verificarInput($('#txtNombreCancion'));
						verificarInput(true);
						// mostrarMensajePanel('');
						$(this).closest('.valDivLinkVideo').remove();
					});
				});
			}
		}
		function cargarMusicaYT() {
			if (verificarInput($('#txtNombreCancion'))) {
				clearSearchPanel();
				valor = $("#txtNombreCancion").val() + " " + $("#selectNombreArtista :selected").html();
				posicion = $("#txtNombreCancion").position(); // Obtener la posicion del Input en la ventana
				direccion = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewcount&type=video&videoDefinition=high&key=";
				// direccion = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=title&type=video&videoDefinition=high&key="
				// direccion = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=title&type=video&videoCategoryId=Music&videoDefinition=high&videoEmbeddable=true&key="
				
				claveDeAPI = 'AIzaSyDS4CW6iMg0U8uVQ4Iu7CtYFBQ6g9E06MM';
				if (valor.length > 2) { // Si el input tiene mas de dos caracteres ejecutar el codigo de abajo
					$("#txtNombreCancion").addClass("autocomplete-loading");
					//Peticion al servidor para obtener un JSON con el listado del autocomplete
					$.getJSON(direccion+claveDeAPI, { "q":valor }, function( response ){
						var str = JSON.stringify(response);
				        $('#div-search-container').html('<div id="search-container-div" class="media-list"></div>');
				        for (x1 in response.items) {
				            if (response.items[x1].id.kind != 'youtube#channel' && response.items[x1].id.kind != 'youtube#playlist') {
				                $('#search-container-div').append('<div class="media" id="'+response.items[x1].id.videoId+'">'
				                    +'<div class="media-left pull-left">'
				                        +'<a href="https://youtu.be/'+response.items[x1].id.videoId+'"><img style="width: 94px; height: 64px;" class="media-object" src="'+ response.items[x1].snippet.thumbnails.default.url +'" alt="..."></a>'
				                    +'</div>'
				                    +'<div class="media-body">'
				                        +'<h4 class="media-heading">'+ response.items[x1].snippet.title + " (" + response.items[x1].snippet.channelTitle +')</h4>'
				                    +'</div>'
				                    +'<p>'+response.items[x1].snippet.description+'</p>'
				                +'</div>').click(function() {
				                	selectItem();
				                });
				            }
				        }
				        $('.media').hover(function () {
				        	if (!$('.sc-ul-li-Selected')) {
				        		$(this).addClass('sc-ul-li-Selected');
				        	} else {

				        		$(this).addClass('sc-ul-li-Selected');
				        	}
				        },function () {
				        	$('.sc-ul-li-Selected').removeClass('sc-ul-li-Selected');
				        });
					});
				}
			}
		}

	});
	
// <style>

// 	
// 	#ulBuscador { margin: 0px; padding: 0px; list-style-position: outside; list-style: none; }
// 	#ulBuscador li { margin: 0px; padding: 2px 5px; cursor: pointer; display: block; font: menu; font-size: 12px; overflow: hidden; }
// 	#ulBuscador li:hover { background-color: Highlight; color: HighlightText; }
// 	.DatosEstudiante { width: 30%; text-align: center; }
// 	.autocomplete-loading { background : url('../../imagenes/item-loading.gif') right center no-repeat;}
// </style>

