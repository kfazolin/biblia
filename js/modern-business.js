// Activates the Carousel
$('.carousel').carousel({
  interval: 5000
})

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
  selector: "a[data-toggle=tooltip]"
});
/*
$('[data-toggle="popover"]').click(function(){
	$("#"+this.id).popover({'content': this.id});
});
*/
$('[data-toggle="popover"]').popover({'placement': 'top'});
 
$('[data-toggle="popover"]').on('show.bs.popover', function () {
  
  var popover = $("#"+this.id).data('bs.popover');
   
  jQuery.ajax({
    url: "bible/"+this.id+".html",
	dataType: 'html',
	error: function (data) {
	alert(data)
	},
    success: function(data) {
	  popover.options.content = data;
    },
    async:false
  });

   
  // $("#"+this.id).popover({'content': this.id});
});

// footer
$( "#footer" ).load( "include/footer.html");

// menu
$( "#menu" ).load( "include/menu.html");

