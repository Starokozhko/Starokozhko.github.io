window.addEventListener('DOMContentLoaded', function() {

  var template = document.getElementById('cartUser2').innerHTML;
    

  var data = {
    title: 'Старокожко Юрий Николаевич',
    srcPhoto: 'img/photo.png',
    titelP: 'Студент GoFrontend!',
    cause: 'Хочу учиться фронтенд, потому что:',
    causeFirst: 'Мне это нравиться',
    causeSecond: 'Я получаю от этого удовольствие',
    causeThird: 'За это еще и деньги платят',
    contact: 'Мой контактный телефон:',
    contNumb: '+38(096) 186-60-84',
    profile: 'Мой профиль вконтакте:',
    hrefLink: 'https://vk.com/id13911061',
    linkText: 'vk.com',
    textSoc: 'Мой фитбек:',
    fitBack: 'Мой фидбек',
    motivText: 'Если нужно, можно сделать все.'
  };

  document.body.innerHTML = _.template(template)(data);

});
