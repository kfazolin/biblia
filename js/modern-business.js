// Activates the Carousel
$('.carousel').carousel({
  interval: 5000
})

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
  selector: "a[data-toggle=tooltip]"
});

$('[data-toggle="popover"]').popover({'placement': 'top'});
 
$('[data-toggle="popover"]').on('show.bs.popover', function () {
  
  var popover = $("#"+this.id).data('bs.popover');
   
   
  id = this.id.split("__");
  jQuery.ajax({
    url: "bible/"+id[0] +".html",
	dataType: 'html',
	error: function (data) {
	alert(data)
	},
    success: function(data) {
	  popover.options.content = data;
    },
    async:false
  });
});

$('[data-bible]').ready(function()
{
	for(i =0; i < $('[data-bible]').length; i++)
	{
		var file = $('[data-bible]')[i].attributes[0].value;
		SetText(file, $('[data-bible]')[i]);
	}
	// alert('');
});

function SetText(fileName, component)
{
	jQuery.ajax({
    url: "bible/"+fileName+".html",
	dataType: 'html',
	error: function (data) {
	alert(data)
	},
    success: function(data) {
	  component.textContent = data;
    }
  });
  
}


// footer
$( "#footer" ).load( "include/footer.html");

// menu
$( "#menu" ).load( "include/menu.html");

