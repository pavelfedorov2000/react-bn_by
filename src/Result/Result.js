import React from 'react';
import Button from '../Button/Button';

function Result() {
  return (
    <div class="form-result">
      <div class="_container">
        <div class="form-result__body">
          <div class="form-result__head">
            <div class="form-result__title form-result__head-title">
              Заявка на подключение интернета «Деловой сети»
            </div>
            <div class="form-result__head-text">
              <p>Пожалуйста, проверьте правильность заполненной информации.</p>
              <p>
                Если информация верна – нажмите
                Отправить. Если вы хотите внести изменения – нажмите Вернуться к редактированию.
              </p>
            </div>
            <Button className="form-result__head-edit" type="button" text="Вернуться к редактированию" />
            <Button className="form-result__head-btn" type="submit" text="Отправить" />
          </div>
          <div class="form-result__content"></div>
          <div class="form-result__buttons">
            <Button className="form-result__submit" border type="button" text="Вернуться к редактированию" />
            <Button className="form-result__submit" type="submit" text="Отправить" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;