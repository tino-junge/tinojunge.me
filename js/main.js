$(document).ready(function() {
  generateEmailLink();
});

function generateEmailLink() {
  // Email obfuscator script 2.1 by Tim Williams, University of Arizona
  // Random encryption key feature by Andrew Moulden, Site Engineering Ltd
  // This code is freeware provided these four comment lines remain intact
  // A wizard to generate this code is at http://www.jottings.com/obfuscator/
  coded = "Aaud.hou50@WAoK0uA.eRa.K0";
  key = "hZMO2d4wU9kN5qiEfu6bLyAXQeplTcKCPs7VJjIaDSoG8FHvrg0RY1nmB3Wtzx";
  shift=coded.length;
  link="";
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i);
      link += (ltr);
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
    }
  }
  $('#contact-mail').html("<a href='mailto:"+link+"' class='icon fa-envelope'></a>");
  $('#side-nav-mail').html("<a href='mailto:"+link+"' class='icon fa-envelope'></a>");
}