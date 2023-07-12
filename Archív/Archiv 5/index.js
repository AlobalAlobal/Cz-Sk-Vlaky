// Replace 'UA-XXXXXXXXX-X' with your actual Google Analytics Tracking ID
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

// Send the count to Google Analytics
ga('create', gaTrackingId, 'auto');
ga('set', 'dimension1', visitCount); // Set a custom dimension for the count
ga('send', 'pageview');

