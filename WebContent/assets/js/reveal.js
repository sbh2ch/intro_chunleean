/* ---- animations ---- */
if (typeof sr == 'undefined') {
	window.sr = ScrollReveal({
		duration : 1500,
		delay : 400
	});
}

function triggerReveals() {
	sr.reveal('.bottomReveal', {
		origin : 'bottom'
	}).reveal('.leftReveal', {
		origin : 'left'
	}).reveal('.rightReveal', {
		origin : 'right'
	}).reveal('.topReveal', {
		origin : 'top'
	});

	sr.reveal('.rotateBottomReveal', {
		origin : 'bottom',
		rotate : {
			x : 90
		}
	}).reveal('.rotateLeftReveal', {
		origin : 'left',
		rotate : {
			x : 90
		}
	}).reveal('.rotateRightReveal', {
		origin : 'right',
		rotate : {
			x : 90
		}
	}).reveal('.rotateTopReveal', {
		origin : 'top',
		rotate : {
			x : 90
		}
	})
	sr.reveal('.scaleReveal', {
		scale : 0.6
	});
}
$(document).ready(triggerReveals());
