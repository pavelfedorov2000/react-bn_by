import React from 'react';

function Nav() {
  return (
    <div class="form__nav">
      <button class="form__nav-btn active" type="button" data-step="contacts">Личные данные</button>
      <button class="form__nav-btn" type="button" data-step="order">Заказ</button>
      <button class="form__nav-btn" type="button" data-step="passport">Паспортные данные</button>
    </div>
  );
}

export default Nav;