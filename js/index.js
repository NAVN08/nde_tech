/*slider*/
jQuery("#owl-example1").owlCarousel({
autoplay: true,
 nav:false,
loop: true,dots: true,
margin: 0,
responsiveClass: true, 
animateOut: 'fadeOut',
autoplayTimeout: 7000, 
navText : ["<i class='icofont-thin-left'></i>","<i class='icofont-thin-right'></i>"],
smartSpeed: 800,
responsive: {
0: {
items: 1
},
600: {
items: 1
},
1024: {
items: 1
},
1366: {
items: 1
}
}
});

/*slider*/
jQuery("#home-products").owlCarousel({
autoplay: true,
nav:true,center: true,
loop: true,dots: false,
margin: 30,
responsiveClass: true, 
animateOut: 'fadeOut',
autoplayTimeout: 7000, 
navText : ["<span><i class='icofont-long-arrow-left'></i><i class='pi'>Prev</i></span>"," <span> <i class='pi'>Next</i> <i class='icofont-long-arrow-right'></i></span>"],
smartSpeed: 800,
responsive: {
0: {
items: 1
},
600: {
items: 1
},
1024: {
items: 3
},
1366: {
items: 3
}
}
});

jQuery("#related-products").owlCarousel({
autoplay: true,
nav:true,center: true,
loop: true,dots: false,
margin:15,
responsiveClass: true, 
animateOut: 'fadeOut',
autoplayTimeout: 7000, 
navText : ["<span><i class='icofont-thin-left'></i></span>"," <span> <i class='icofont-thin-right'></i></span>"],
smartSpeed: 800,
responsive: {
0: {
items: 1
},
600: {
items: 1
},
1024: {
items: 3
},
1366: {
items: 3
}
}
});

jQuery("#features").owlCarousel({
autoplay: true,
nav:false,center: true,
loop: true,dots: false,
margin:15,
responsiveClass: true, 
animateOut: 'fadeOut',
autoplayTimeout: 7000, 
navText : ["<span><i class='icofont-thin-left'></i></span>"," <span> <i class='icofont-thin-right'></i></span>"],
smartSpeed: 800,
responsive: {
0: {
items: 1
},
600: {
items: 1
},
1024: {
items: 3
},
1366: {
items: 3
}
}
});

jQuery("#home-products-new").owlCarousel({
autoplay: true,
nav:true,center: true,
loop: true,dots: false,
margin: 30,
responsiveClass: true, 
animateOut: 'fadeOut',
autoplayTimeout: 7000, 
navText : ["<span><i class='icofont-thin-left'></i></span>"," <span> <i class='icofont-thin-right'></i></span>"],
smartSpeed: 1000,
responsive: {
0: {
items: 1
},
600: {
items: 1
},
1024: {
items: 3
},
1366: {
items: 3
}
}
});

/*side nav*/
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});

function ProductPaginationOption(value){
	var existVal = $("#paginationSelect").val();
	var currVal = parseInt(existVal) + parseInt(value);
	ProductPagination(currVal);
}

function ProductPagination(value){
	$("#paginationSelect").val(value);
	$("#paginationForm").submit();
}