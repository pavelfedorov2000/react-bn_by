import React from 'react';
import call from 'call';

function Help() {
  return (
    <div class="help @@block">
      <div class="help__title">Нужна помощь?</div>
      <a href="tel:174" class="help__call">
        <img class="help__icon" src={call} alt="иконка телефона" />
        <b>174</b>
      </a>
    </div>
  );
}

export default Help;