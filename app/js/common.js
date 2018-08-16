$(function() {
	var project_current = 'projects_all';
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".project-menu a").on("click",function(e){
		id=$(this).attr('id');
		if(id===project_current){
			return false;
		}else{
			height=$('.'+id).height();
			$(".projects_container").animate({height: height+"px"});

			$("#"+project_current).removeClass("active");
			$("#"+id).addClass("active");

			$('.'+project_current).animated("slideOutRight");
			$('.'+project_current).removeClass("slideInLeft");
			$('.'+project_current).removeClass("slideOutRight");
			$('.'+id).animated("slideInLeft");
			$('.'+id).removeClass("slideOutRight");
			$('.'+id).removeClass("slideInLeft");
			project_current = id;
			return false;
		}
	});

	$(".photo-gallery-item").on("click",function (e) {
		$(".photo-gallery-caption").hide();
		$(this).children("div").show(100);
	});

	$(".photo-gallery-item").on("mouseover",function (e) {
		$(this).children("div").show(0);
	});
	$(".photo-gallery-item").on("mouseleave",function (e) {
		$(this).children("div").hide(0);
	})
	$(".top-mnu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var top =$('[name='+id.slice(1)+']').offset().top;
        $('body,html').animate({scrollTop: top}, top/3);
    });

    $('.request').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(300, 
		 	function(){ 
				$('#modal-form') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 100);
		});
	});
	$('#modal-close, #overlay,#close-button').click( function(){
		$('#modal-form')
			.animate({opacity: 0, top: '45%'}, 100,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(300);
				}
			);
	});
});
