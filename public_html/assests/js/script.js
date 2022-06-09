$(document).ready(function() {

	const screenWidth = window.screen.width;
	const screenWidth_2 = $(window).width();
	const block_img = $('.block-img');
	const body = $('body');
	const replace_img_1 = $('.mob-replace-1');
	const replace_img_2 = $('.mob-replace-2');
	const replace_img_3 = $('.mob-replace-3');
	const replace_img_4 = $('.mob-replace-4');
	const img_1 = $('#img-1');
	const img_2 = $('#img-2');
	const img_3 = $('#img-3');
	const img_4 = $('#img-4');

	if (screenWidth < 500)
	{
		$(block_img).css({
			height: screenWidth
		});
		$(body).css({
			width: screenWidth

		});

		$('.mamm-logo').css({
			height: screenWidth
		});

	}

});
