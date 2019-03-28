function loadComments() {
  (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.async=true;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=1729148677111574&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'))
}

function getScrollHeight() {
  let documentHeight = window.pageYOffset;
  if (documentHeight > contentHeight) {
    loadComments();
    window.removeEventListener("scroll", getScrollHeight);
  }
}

const maxScroll = 700;
const contentHeight = document.querySelector('.container-content').clientHeight - maxScroll;
window.addEventListener("scroll", getScrollHeight);
