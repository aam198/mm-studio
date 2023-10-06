const widgetToggle = document.querySelector('.useful-links-widget-toggle')
const widgetLinks = document.querySelector('.useful-links-widget-links')

widgetToggle.addEventListener('click', function () {
  if (widgetLinks.style.display === 'none'){
    widgetLinks.style.display = 'block';
  }
  else {
    widgetLinks.style.display = 'none';
  }
})