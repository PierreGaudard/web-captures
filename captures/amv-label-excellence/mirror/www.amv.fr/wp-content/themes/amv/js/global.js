$(function(){
	$('.match-height').matchHeight();

	$(".tagcloud").on("click",".tag-cloud-link",function(){
		document.location.href = $(this).data('src');
		return false;
	});
});
