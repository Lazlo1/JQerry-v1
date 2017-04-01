var span = $('span');
span.each(function(index, element){
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	}
});

$('p').each(function(index, element){
	$(this).append('<button class="btn", data-tmp=' + index + '>click me</button>');
});

$('.btn').click(function(){
	alert($(this).attr("data-tmp"));
});