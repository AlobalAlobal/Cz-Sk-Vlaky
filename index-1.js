var gaTrackingId = 'G-Z3Z8YDZHW0';

var counterContainer = document.querySelector('.website-counter');
var visitCount = localStorage.getItem('page_view');

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem('page_view', visitCount);
} else {
  visitCount = 1;
  localStorage.setItem('page_view', 1);
}

counterContainer.innerHTML = visitCount;

ga('create', gaTrackingId, 'auto');
ga('set', 'dimension1', visitCount);
ga('send', 'pageview');