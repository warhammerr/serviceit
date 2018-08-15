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

});
