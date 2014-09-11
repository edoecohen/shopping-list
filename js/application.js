$(document).ready(function() {

// ADD LIST ITEM

	$("#add").on("click", function() {
		var item = $('#entry').val();
		var item_listed = "<li class='active'><div class='handle'></div><div class='box'><img src='images/check.png' /></div>" + item + "<div class='delete'><img src='images/delete.png' /></div></li>"
		$("ul").prepend(item_listed);
		$('#entry').val('').focusout();
	}); 

});