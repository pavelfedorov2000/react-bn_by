import React from 'react';
import ReactDOM from 'react-dom';
import AsideText from './AsideText/AsideText';
import './base/_general.scss';
import Help from './Help/Help';
import Nav from './Nav/Nav';

function App() {

  const data = [
    {
      id: 0,
      step: 'contacts',
      title: 'Личные данные',
      fieldsets: [
        {
          title: 'Ваши контакты',
          fields: [
            {
              inputType: 'input',
              label: 'Фамилия',
              name: 'surname',
              required: true,
            },
            {
              inputType: 'input',
              label: 'Имя',
              name: 'surname',
              required: true,
            },
            {
              inputType: 'input',
              label: 'Отчество',
              name: 'patronymic',
              required: true,
            },
            {
              inputType: 'input',
              type: 'tel',
              label: 'Номер телефона',
              name: 'phone',
              required: true,
            },
            {
              inputType: 'input',
              type: 'email',
              label: 'Адрес электронной почты',
              name: 'email',
              required: true,
            }
          ]
        }
      ]
    },
    {
      id: 1,
      step: 'order',
      title: 'Заказ',
      text: '',
      fieldsets: [
        {
          title: 'Тарифный план',
          fields: [
            {
              inputType: 'select',
              label: 'Выберите тарифный план',
              name: 'tariff',
              options: [
                {
                  items: {
                    name: 'Выберите тарифный план',
                  }
                },
                {
                  items: {
                    name: 'iDOM100+Megogo',
                    price: '25,50 руб./мес.'
                  }
                },
                {
                  items: {
                    name: 'Мой бизнес PRO 100',
                    price: '43 руб./мес.'
                  }
                },
                {
                  items: {
                    name: 'Мой бизнес PRO 80',
                    price: '25,50 руб./мес.'
                  }
                }
              ]
            }
          ]
        },
        {
          title: 'Дополнительные услуги',
          fields: [
            {
              inputType: 'checkbox',
              name: 'additional_service',
              title: 'Маршрутизатор (Роутер)',
              price: '0р. /Мес.',
              text: 'Сетевое оборудование будет подобрано под ваши потребности. Ряд моделей доступны за дополнительную плату.'
            },
            {
              inputType: 'checkbox',
              name: 'additional_service',
              title: 'Статический IP-адрес',
              price: '0р. /Мес.',
              text: 'Сетевое оборудование будет подобрано под ваши потребности. Ряд моделей доступны за дополнительную плату.'
            }
          ]
        }
      ]
    },
  ];

  return (
    <div className="wrapper">
      <main className="page">
        <form id="physical_form" action="#" class="form-page">
          <div class="steps">
            <div class="_container">
              <div class="form-page__inner">
                <div class="form-page__aside">
                  <h1 class="form-page__title">Заявление на подключение</h1>
                  <AsideText />
                  <Help />
                </div>
                <div class="form-page__content">
                  <Nav />
                  <div class="form__body">

                  </div>
                  <div class="form__buttons">
                    <button class="btn back-btn btn--border" type="button">Назад</button>
                    <button class="btn next-btn" type="button" disabled>Продолжить</button>
                  </div>
                  <AsideText />
                </div>
              </div>
            </div>
          </div>

        </form>
      </main>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
