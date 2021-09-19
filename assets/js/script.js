document.getElementById('getStarted').addEventListener('click', () => {
  if(!document.querySelector('.email').value == "") {
    Swal.fire(
      'Hai!',
      'Kamu akan mendapatkan info terbaru dari website kami',
      'success'
      )
    }
  })


setInterval(() => {
  if(window.pageYOffset >= 700) {
    document.querySelector('.back-to-top').style.opacity = 1;
    document.querySelector('.back-to-top').style.transition = '0.5s';
  }else if(window.pageYOffset <= 700) {
    document.querySelector('.back-to-top').style.opacity = 0;
    document.querySelector('.back-to-top').style.transition = '0.5s';
  }
}, 500)
