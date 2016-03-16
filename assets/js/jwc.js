$(document).ready(function() {
  var body = $('.oak-header');
  var block = $('.jwc8-block');
  var highlight = $('.highlight');
  var logo = $('#jwc8-logo');
  var name = $('#jwc8-name');
  var intensity = 20;
  $('body').mousemove(function(event) {
    cx = Math.ceil(body.width() / 2.0);
    cy = Math.ceil(body.height() / 2.0);
    dx = event.pageX - cx;
    dy = event.pageY - cy;

    tiltx = - (dy / cy);
    tilty = (dx / cx);
    radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
    degree = (radius * intensity);
    var shadow1 = -tilty*intensity + 'px '+ tiltx*intensity + 'px 25px rgba(0,0,0,.1)';
    var shadow2 = -tilty*intensity/1+ 'px '+ tiltx*intensity/2 + 'px 25px rgba(0,0,0,.2)';
    var logoShadow1 = -tilty*intensity + 'px '+ tiltx*intensity + 'px 25px rgba(0,0,0,.0)';
    var logoShadow2 = -tilty*intensity/1 + 'px '+ tiltx*intensity/2 + 'px 25px rgba(0,0,0,.0)';
    block.css('transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
    block.css('box-shadow', shadow1 + ', ' + shadow2);
    logo.css('box-shadow', logoShadow1 + ', ' + logoShadow2);
    logo.css('transform', 'translateX(' + (tilty*intensity/1.2) + 'px) translateY(' + (-tiltx*intensity/1.2) + 'px)');
    name.css('transform', 'translateX(' + (tilty*intensity/1.1) + 'px) translateY(' + (-tiltx*intensity/1.1) + 'px)');
    //should approximate ratio of site of block
    highlight.css('background-position', -tilty*8*intensity+'px ' + tiltx*5*intensity+'px')
  });
});
