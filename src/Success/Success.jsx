import React from 'react';

function Success() {
  return (
    <div class="overlay">
      <div class="success-popup">
        <img class="success-popup__icon" src="assets/images/check.svg" alt="иконка" />
        <div class="success-popup__title">Спасибо, заявка отправлена.</div>
        <div class="success-popup__text">
          С вами свяжется наш менеджер в течение первого рабочего дня с момента отправки
        </div>
        <button class="btn success-popup__btn" type="button">Хорошо</button>
      </div>
    </div>
  );
}

export default Success;