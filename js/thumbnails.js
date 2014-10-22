$(document).ready(function() {

	loadThumbnails();
});

function loadThumbnails() {
	var template = Handlebars.compile($("#thumb-template").html());
	var data =
	{
		photoshop: [
			{ref: "images/photoshop/AlbumArt.png", title: "Album Art", des: "An alternative cover for the album, The North, by Stars."},
			{ref: "images/photoshop/MagazineCover_med.png", title: "Magazine Cover", des: "A fake magazine that covers topics that I find interesting."},
			{ref: "images/photoshop/DigitalMediaText-med.png", title: "Digital Media Text Art", des: "A word art piece focused on digital media."},
			{ref: "images/photoshop/TextArt_med.png", title: "Text Art", des: "A word art piece focused on the art of minimalism."},
			{ref: "images/photoshop/Brochure.jpg", title: "Brochure", des: "A brochure giving information about the Digital Media school."}
		], ps_tutorial: [
			{ref: "images/photoshop/IC1_Kevin_Clemons.png", title: "No Kissing", des: "First photoshop tutorial."},
			{ref: "images/photoshop/IC2_Kevin_Clemons.png", title: "Idaho", des: "Second photoshop tutorial."},
			{ref: "images/photoshop/IC3_Kevin_Clemons.png", title: "Radio", des: "Third photoshop tutorial."},
			{ref: "images/photoshop/IC4_Kevin_Clemons.png", title: "Stone Cold", des: "Fourth photoshop tutorial."},
			{ref: "images/photoshop/IC5_Kevin_Clemons.png", title: "Jazz Flyer", des: "Fifth photoshop tutorial."},
			{ref: "images/photoshop/IC6_Kevin_Clemons.png", title: "Computer Comic", des: "Sixth photoshop tutorial."},
			{ref: "images/photoshop/IC7_Kevin_Clemons.png", title: "Butterfly", des: "Seventh photoshop tutorial."},
			{ref: "images/photoshop/IC8_Kevin_Clemons.png", title: "Windows", des: "Eighth photoshop tutorial."}
		], illustrator: [
			{ref: "images/illustrator/vector_portrait.png", title: "Self Portrait", des: "An image-traced vector of myself."},
			{ref: "images/illustrator/logo-02.png", title: "Personal Logo", des: "A stylized logo of my initials.  KC, in case you can't tell."}
		], il_tutorial: [
			{ref: "images/illustrator/good_logos_2.png", title: "Logo Redesign", des: "I took the ugly Waffle House logo and tried to make something good out of it."},
			{ref: "images/illustrator/good_logos_1.png", title: "Logo Re-create", des: "Some famous logos rebuilt in Illustrator."}
		]
	};

	$('#images').html(template(data));
}
