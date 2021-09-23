function navToggle() {
  document.getElementById("dropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropdown_button')) {
    var dropdowns = document.getElementsByClassName("dropdown_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function scrollFunction() {
  var declaration = document.getElementById("sticky_nav").style;
  var content = document.getElementById("content");
  if (content.clientWidth > 733 && (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)) {
    declaration.display = "inline-block";
  } else {
    declaration.display = "none";
  }
}
window.onscroll = function() {
  scrollFunction()
};