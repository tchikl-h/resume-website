var language;

function getLanguage() {
  (localStorage.getItem('language') == null) ? setLanguage('en') : false;
  $.ajax({ 
    url:  '/lang/' +  localStorage.getItem('language') + '.json', 
    dataType: 'json', async: false, dataType: 'json', 
    success: function (lang) { language = lang }
  });
  $(document).ready(function(){
  $('#div1').text(language.description);
  });
  console.log(language.description);
}

function setLanguage(lang) {
  localStorage.setItem('language', lang);
}