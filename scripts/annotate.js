import { annotate } from 'https://unpkg.com/rough-notation?module';

let annotation = annotate(document.querySelector('#fotografoTxt'), { type: 'underline' });
annotation.color = '#d17f21';
annotation.show();

annotation = annotate(document.querySelector('#directorTxt'), { type: 'underline' });
annotation.color = '#d17f21';
annotation.show();


const whatsapp = () =>{
    window.location.href ="https://api.whatsapp.com/send?phone=+51982940111"
  }