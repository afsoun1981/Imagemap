$(function() {
	var img1 = $("img.img1"),
		img2 = $("img.img2");
		
		Window.image1 = $("img.img1");
        Window.image2 = $("img.img2");

	// Selector events
	$(".selImg1").click(function() { setActive(img1); });
	$(".selImg2").click(function() { setActive(img2); });

	// Click events
	$("map area").on({
		mouseenter: function(event) {
			var area = $(this);
			/*	x = event.clientX,
				y = event.clientY;
				
			function repositionTooltip (offsetx,offsety){ 
				var tooltip = document.getElementById('tooltip');
					tooltip.style.position = 'absolute';
					tooltip.style.right = offsetx +'px';
					tooltip.style.top = offsety + 'px';				
			}
						
			repositionTooltip(x,y);	*/
			
			$('#tooltip .tooltip-template').html(area.attr('template'));
			$('#tooltip').popup({
				tooltipanchor: event.relatedTarget,
	            type: 'tooltip',
			    autoopen: true
	        });
			
		},
		mouseleave: function() {
			$('#tooltip').popup('hide');
		}
	});

	// Activate image map resizing
	$('img.usemap-responsive').rwdImageMaps();

	// Default
	setActive(img1);

	function setActive(active) {
		hideAll();
		active.show();
	}

	function hideAll() {
		img1.hide();
		img2.hide();
	}
});

	
function showImage(image) {
	hideAll();
	image.show();
}

function hideAll() {
	Window.image1.hide();
	Window.image2.hide();
}
