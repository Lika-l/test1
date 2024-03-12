function ChangeLogo() {
    const logo = document.getElementById('logo');
  if (logo.src.includes('googlelogo_color_272x92dp.png')) {
        logo.src = './img/new_logo.png';
    } else {
        logo.src = './img/googlelogo_color_272x92dp.png'; 
    }

}
