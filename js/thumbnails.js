$(document).ready(function() {
  var template = Handlebars.compile($("#thumb-template").html());
  var data = {photoshop: [
    {ref: "images/photoshop/AlbumArt.png", alt_ref: "", title: "Album Art", des: "An alternative cover for the album, The North, by Stars."},
    {ref: "images/photoshop/MagazineCover_med.png", alt_ref: "", title: "Magazine Cover", des: "A fake magazine that covers topics that I find interesting."},
    {ref: "images/photoshop/DigitalMediaText-med.png", alt_ref: "", title: "Digital Media Text Art", des: "A word art piece focused on digital media."},
    {ref: "images/photoshop/TextArt_med.png", alt_ref: "", title: "Text Art", des: "A word art piece focused on the art of minimalism."},
    ], ps_tutorial: [
    {ref: "images/photoshop/IC1_Kevin_Clemons.png", alt_ref: "",  title: "No Kissing", des: "First photoshop tutorial."},
    {ref: "images/photoshop/IC2_Kevin_Clemons.png", alt_ref: "",  title: "Idaho", des: "Second photoshop tutorial."},
    {ref: "images/photoshop/IC3_Kevin_Clemons.png", alt_ref: "",  title: "Radio", des: "Third photoshop tutorial."},
    {ref: "images/photoshop/IC4_Kevin_Clemons.png", alt_ref: "",  title: "Stone Cold", des: "Fourth photoshop tutorial."},
    {ref: "images/photoshop/IC5_Kevin_Clemons.png", alt_ref: "",  title: "Jazz Flyer", des: "Fifth photoshop tutorial."},
    {ref: "images/photoshop/IC6_Kevin_Clemons.png", alt_ref: "",  title: "Computer Comic", des: "Sixth photoshop tutorial."},
    {ref: "images/photoshop/IC7_Kevin_Clemons.png", alt_ref: "",  title: "Butterfly", des: "Seventh photoshop tutorial."},
    {ref: "images/photoshop/IC8_Kevin_Clemons.png", alt_ref: "",  title: "Windows", des: "Eighth photoshop tutorial."},
    ], illustrator: [
    {ref: "images/illustrator/vector_portrait.png", alt_ref: "", title: "Self Portrait", des: "An image-traced vector of myself."},
    {ref: "images/illustrator/logo-02.png", alt_ref: "", title: "Personal Logo", des: "A stylized logo of my initials.  KC, in case you can't tell."},
    ], il_tutorial: [
    {ref: "images/illustrator/good_logos_2.png", alt_ref: "", title: "Logo Redesign", des: "I took the ugly Waffle House logo and tried to make something good out of it."},
    {ref: "images/illustrator/good_logos_1.png", alt_ref: "", title: "Logo Re-create", des: "Some famous logos rebuilt in Illustrator."},
    ]};

  $('#images').html(template(data));

});
