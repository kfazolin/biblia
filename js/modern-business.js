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

// answer
$( ".answer" ).load( "include/answer.html");

// appeal
$( ".appeal" ).load( "include/appeal.html");

// biblical
$( ".biblical" ).load( "include/biblical.html");

// flag
$( ".flag" ).load( "include/flag.html");

// footer
$( "#footer" ).load( "include/footer.html");

// menu
$( "#menu" ).load( "include/menu.html");

// n_01
$( ".n_01" ).load( "include/n_01.html");

// n_02
$( ".n_02" ).load( "include/n_02.html");

// n_03
$( ".n_03" ).load( "include/n_03.html");

// n_04
$( ".n_04" ).load( "include/n_04.html");

// n_05
$( ".n_05" ).load( "include/n_05.html");

// n_06
$( ".n_06" ).load( "include/n_06.html");

// n_07
$( ".n_07" ).load( "include/n_07.html");

// n_08
$( ".n_08" ).load( "include/n_08.html");

// n_09
$( ".n_09" ).load( "include/n_09.html");

// n_10
$( ".n_10" ).load( "include/n_10.html");

// n_11
$( ".n_11" ).load( "include/n_11.html");

// n_12
$( ".n_12" ).load( "include/n_12.html");

// n_13
$( ".n_13" ).load( "include/n_13.html");

// n_14
$( ".n_14" ).load( "include/n_14.html");

// n_15
$( ".n_15" ).load( "include/n_15.html");

// n_16
$( ".n_16" ).load( "include/n_16.html");

// n_17
$( ".n_17" ).load( "include/n_17.html");

// n_18
$( ".n_18" ).load( "include/n_18.html");

// n_19
$( ".n_19" ).load( "include/n_19.html");

// n_20
$( ".n_20" ).load( "include/n_20.html");

// n_21
$( ".n_21" ).load( "include/n_21.html");

// n_22
$( ".n_22" ).load( "include/n_22.html");

// n_23
$( ".n_23" ).load( "include/n_23.html");

// n_24
$( ".n_24" ).load( "include/n_24.html");

// note
$( ".note" ).load( "include/note.html");

// page
$( ".page" ).load( "include/page.html");

// study
$( ".study" ).load( "include/study.html");

// study_1
$( ".study_1" ).load( "include/study_1.html");

// study_2
$( ".study_2" ).load( "include/study_2.html");

// study_3
$( ".study_3" ).load( "include/study_3.html");

// study_4
$( ".study_4" ).load( "include/study_4.html");

// study_5
$( ".study_5" ).load( "include/study_5.html");

// study_6
$( ".study_6" ).load( "include/study_6.html");

// study_7
$( ".study_7" ).load( "include/study_7.html");

// study_8
$( ".study_8" ).load( "include/study_8.html");

// study_9
$( ".study_9" ).load( "include/study_9.html");

// study_10
$( ".study_10" ).load( "include/study_10.html");

// study_11
$( ".study_11" ).load( "include/study_11.html");

// study_12
$( ".study_12" ).load( "include/study_12.html");

// study_13
$( ".study_13" ).load( "include/study_13.html");

// study_14
$( ".study_14" ).load( "include/study_14.html");

// study_15
$( ".study_15" ).load( "include/study_15.html");

// study_16
$( ".study_16" ).load( "include/study_16.html");

// study_17
$( ".study_17" ).load( "include/study_17.html");

// study_18
$( ".study_18" ).load( "include/study_18.html");

// study_19
$( ".study_19" ).load( "include/study_19.html");

// study_20
$( ".study_20" ).load( "include/study_20.html");

// study_21
$( ".study_21" ).load( "include/study_21.html");

// study_22
$( ".study_22" ).load( "include/study_22.html");

// study_23
$( ".study_23" ).load( "include/study_23.html");

// study_24
$( ".study_24" ).load( "include/study_24.html");

// speaks
$( ".speaks" ).load( "include/speaks.html");

// version
$( ".version" ).load( "include/version.html");


// books

// 1corinthians
$( ".1corinthians" ).load( "book/1corinthians.html");

// 1corinthians
$( ".1corinthians" ).load( "book/1corinthians.html");

// 1chronicles
$( ".1chronicles" ).load( "book/1chronicles.html");

// 1john
$( ".1john" ).load( "book/1john.html");

// 1kings
$( ".1kings" ).load( "book/1kings.html");

// 1peter
$( ".1peter" ).load( "book/1peter.html");

// 1samuel
$( ".1samuel" ).load( "book/1samuel.html");

// 1timothy
$( ".1timothy" ).load( "book/1timothy.html");

// 1thessalonians
$( ".1thessalonians" ).load( "book/1thessalonians.html");

// 2corinthians
$( ".2corinthians" ).load( "book/2corinthians.html");

// 2kings
$( ".2kings" ).load( "book/2kings.html");

// 2peter
$( ".2peter" ).load( "book/2peter.html");

// 2samuel
$( ".2samuel" ).load( "book/2samuel.html");

// 2timothy
$( ".2timothy" ).load( "book/2timothy.html");

// 2thessalonians
$( ".2thessalonians" ).load( "book/2thessalonians.html");

// 3john
$( ".3john" ).load( "book/3john.html");

// acts
$( ".acts" ).load( "book/acts.html");

// amos
$( ".amos" ).load( "book/amos.html");

// colossians
$( ".colossians" ).load( "book/colossians.html");

// daniel
$( ".daniel" ).load( "book/daniel.html");

// deuteronomy
$( ".deuteronomy" ).load( "book/deuteronomy.html");

// ecclesiastes
$( ".ecclesiastes" ).load( "book/ecclesiastes.html");

// ephesians
$( ".ephesians" ).load( "book/ephesians.html");

// exodus
$( ".exodus" ).load( "book/exodus.html");

// ezekiel
$( ".ezekiel" ).load( "book/ezekiel.html");

// galatians
$( ".galatians" ).load( "book/galatians.html");

// genesis
$( ".genesis" ).load( "book/genesis.html");

// hebrews
$( ".hebrews" ).load( "book/hebrews.html");

// isaiah
$( ".isaiah" ).load( "book/isaiah.html");

// james
$( ".james" ).load( "book/james.html");

// jeremiah
$( ".jeremiah" ).load( "book/jeremiah.html");

// job
$( ".job" ).load( "book/job.html");

// joel
$( ".joel" ).load( "book/joel.html");

// john
$( ".john" ).load( "book/john.html");

// leviticus
$( ".leviticus" ).load( "book/leviticus.html");

// luke
$( ".luke" ).load( "book/luke.html");

// malachi
$( ".malachi" ).load( "book/malachi.html");

// mark
$( ".mark" ).load( "book/mark.html");

// matthew
$( ".matthew" ).load( "book/matthew.html");

// numbers
$( ".numbers" ).load( "book/numbers.html");

// philippians
$( ".philippians" ).load( "book/philippians.html");

// proverbs
$( ".proverbs" ).load( "book/proverbs.html");

// psalms
$( ".psalms" ).load( "book/psalms.html");

// revelation
$( ".revelation" ).load( "book/revelation.html");

// romans
$( ".romans" ).load( "book/romans.html");

// titus
$( ".titus" ).load( "book/titus.html");

// zechariah
$( ".zechariah" ).load( "book/zechariah.html");
