Handlebars.registerPartial("headersection", '<header><h1>BubbleUnder.com</h1></header>' +
'<nav><ul><li><a href="index.html">Home</a></li>' +
'<li><a href="about.html">About Us</a></li><li><a href="events.html">Club Events</a></li><li><a href="contact.html">Contact Us</a></li></ul></nav>');

var clubevents = {
  title: 'Club events/dive trips for the next six months',
  events: [
    {date: "12 July", desc: "Committee meeting, deciding on next year's trips", contact:"Bob Dobalina"},
    {date: "19 July", desc: "7-day trip to Hurghada (package deal) - limited spaces", contact:"Bob Dobalina"},
    {date: "5 August", desc: "Ocean &amp; Sports Diver Theory Course", contact:"Jeff Edgely"},
    {date: "12 August", desc: "Murder Mystery Weekend, Cotswolds (no diving!", contact:"Jill Smith"}
  ]
}

var template = $('#handlebars-demo').html();
var templateScript = Handlebars.compile(template);
var html=templateScript(clubevents);
$(document.body).append(html);