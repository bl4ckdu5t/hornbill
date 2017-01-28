// http://dustindiaz.com/smallest-domready-ever
function ready(cb){
  /in/.test(document.readyState) ? setTimeout(ready.bind(null, cb), 9) : cb();
}

ready(function(){
  const inputBtns = document.querySelectorAll('[type=radio]')
  Array.prototype.forEach.call(inputBtns, (el) => {
    el.addEventListener('change', (e) => {
      const bankView = document.querySelector('.pay__form__content--bank');
      const cardView = document.querySelector('.pay__form__content--card');
      if(bankView.style.height == '0px'){
        bankView.style.visibility = 'visible';
        bankView.style.height = 'auto';
        cardView.style.height = 0;
        cardView.style.visibility = 'hidden';
      }else{
        bankView.style.visibility = 'hidden';
        bankView.style.height = 0;
        cardView.style.height = 'auto';
        cardView.style.visibility = 'visible';
      }
    });
  });
  const payBtn = document.getElementById('payBtn');
  payBtn.addEventListener('click', (e) => {
    console.log(e.target);
    var paymentForm = document.querySelector('.paybox__form');
    var paymentSwitch = document.querySelector('.paybox__switch');
    var paymentChecked = document.querySelector('.paybox__check');
    paymentForm.style.display = 'none';
    paymentSwitch.style.display = 'none';
    paymentChecked.style.display = 'block';
  });
});
