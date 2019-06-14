$(document).ready(function() {
	$(".article,.sliderbenefits, .sliderhistory,.sliderphilo,.slidertroupe,.sliderexams,.slidervaganova").hide();
});
//mains
$("#fabout").click(function() {
	$(".sliderabout").hide();
		$(".sliderbenefits").show();
	});
$("#babout").click(function() {
	$(".sliderabout").hide();
		$(".slidervaganova").show();
	});
$("#fbenefits").click(function() {
	$(".sliderbenefits").hide();
		$(".sliderhistory").show();
	});
$("#bbenefits").click(function() {
	$(".sliderbenefits").hide();
		$(".sliderabout").show();
	});
$("#fhistory").click(function() {
	$(".sliderhistory").hide();
		$(".sliderphilo").show();
	});
$("#bhistory").click(function() {
	$(".sliderhistory").hide();
		$(".sliderbenefits").show();
	});
$("#fphilo").click(function() {
	$(".sliderphilo").hide();
		$(".slidertroupe").show();
	});
$("#bphilo").click(function() {
	$(".sliderphilo").hide();
		$(".sliderhistory").show();
	});
$("#ftroupe").click(function() {
	$(".slidertroupe").hide();
		$(".sliderexams").show();
	});
$("#btroupe").click(function() {
	$(".slidertroupe").hide();
		$(".sliderphilo").show();
	});
$("#fexams").click(function() {
	$(".sliderexams").hide();
		$(".slidervaganova").show();
	});
$("#bexams").click(function() {
	$(".sliderexams").hide();
		$(".slidertroupe").show();
	});
$("#fvaganova").click(function() {
	$(".slidervaganova").hide();
		$(".sliderabout").show();
	});
$("#bvaganova").click(function() {
	$(".slidervaganova").hide();
		$(".sliderexams").show();
	});

$(".ctrlbackm,.ctrlforthm").click(function() {
	$( ".ctrlback" ).removeData( "click-count" );
	$( ".ctrlforth" ).removeData( "click-count" );
	});
//articles
$(".ctrlforth").click(function() {
	var $this = $(this);

	var clickCount = ($this.data("click-count") || 0) + 1;

	$this.data("click-count", clickCount);

	if (clickCount == 1) {
		
		$(".a1a").hide();
		$(".a2a").show();
	}
	if (clickCount == 2) {
		$(".a2a").hide();
		$(".a3a").show();
		$( ".ctrlback" ).removeData( "click-count" );
	}
});
$(".ctrlback").click(function() {
	var $this = $(this);

	var clickCount = ($this.data("click-count") || 0) + 1;

	$this.data("click-count", clickCount);

	if (clickCount == 1) {
		
		$(".a3a").hide();
		$(".a2a").show();
	}
	if (clickCount == 2) {
		$(".a2a").hide();
		$(".a1a").show();
		$( ".ctrlforth" ).removeData( "click-count" );
	}
});
