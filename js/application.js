$(document).ready(function() {


// ADD LIST ITEM
	
   var addItem = function() {
		$("#add").on("click", function() {
			var item = $('#entry').val();
			
			if (item!="") {
				var item_listed = "<li class='active'><div class='handle'></div><div class='box'><img src='images/check.png' /></div>" + item + "<div class='delete'><img src='images/delete.png' /></div></li>"
				$("ul").prepend(item_listed);
				$('#entry').val('').focusout();
			}

			else {
				$(".list").animate({"height":"342px", "margin-top":"10px"}, "fast")
				.delay(2950).animate({"height":"390px","margin-top":"15px"});
				$(".alert").slideDown("fast").delay(3000).slideUp("fast");
			};
		}); 
   };

   addItem();


// ADD LIST ITEM WITH ENTER KEY

	$("#entry").keydown(function (e) {
		if (e.keyCode == 13) { 
			$("#add").click();
		}
	});


// MARK ITEM AS BOUGHT
	$(".erased").find(".box img").show();

	$("ul").on("click", "li .box", function() {
		if ( $(this).parent("li").hasClass("active") ) {
			$(this).find("img").show();
			$(this).parent("li").toggleClass("active erased");
		}
		else {
			$(this).find("img").hide();
			$(this).parent("li").toggleClass("erased active");
		};
	});


// DELETE AN ITEM
	$("ul").on("click", "li .delete", function() {
		$(this).parent("li").show(0).css("background","#DBDBDB").delay(120).fadeOut(120);
	});

// SORTABLE LIST
	$('.list').sortable({
	    placeholder: {
	        element: function(currentItem) {
	            return $("<li class='highlight'></li>")[0];
	        },
	        update: function(container, p) {
	            return;
	        }
	    }
	});


});



