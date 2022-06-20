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
                            price: '4,20р. /Мес.',
                            text: 'Позволяет присвоить абоненту постоянный IP-адрес. Для выхода в интернет этот адрес не используется.'
                        }
                    ]
                },
                {
                    title: 'Дополнительные услуги',
                    toggle: true,
                    name: "connection",
                    fields: [
                        {
                            inputType: 'input',
                            label: 'Индекс',
                            name: 'index',
                        },
                        {
                            inputType: 'select',
                            label: 'Область',
                            name: 'region',
                            options: [
                                "Выберите область",
                                "Область 1",
                                "Область 2",
                                "Область 3"
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Тип населенного пункта',
                            name: 'locality_type',
                            options: [
                                "Выберите тип населенного пункта",
                                "Тип населенного пункта 1",
                                "Тип населенного пункта 2",
                                "Тип населенного пункта 3"
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Населенный пункт',
                            name: 'locality',
                            options: [
                                "Выберите населенный пункт",
                                "Населенный пункт 1",
                                "Населенный пункт 2",
                                "Населенный пункт 3"
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Тип улицы',
                            name: 'street_type',
                            options: [
                                "Выберите тип улицы",
                                "Тип улицы 1",
                                "Тип улицы 2",
                                "Тип улицы 3"
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Улица',
                            name: 'street',
                            options: [
                                "Выберите улицу",
                                "Улица 1",
                                "Улица 2",
                                "Улица 3"
                            ],
                            checkbox: "В адресе улицы отсутствует название улицы"
                        },
                        {
                            inputType: 'input',
                            size: "small",
                            label: 'Дом',
                            name: 'home',
                        },
                        {
                            inputType: 'input',
                            size: "small",
                            label: 'Корпус / строение',
                            name: 'corpus',
                        },
                        {
                            inputType: 'select',
                            label: 'Тип помещения',
                            name: 'room_type',
                            options: [
                                "Выберите улицу",
                                "Тип помещения 1",
                                "Тип помещения 2",
                                "Тип помещения 3"
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Помещение',
                            name: 'room',
                            options: [
                                "Выберите улицу",
                                "Помещение 1",
                                "Помещение 2",
                                "Помещение 3"
                            ],
                            checkbox: "Это единое строение, помещения нет"
                        },
                        {
                            inputType: 'textarea',
                            label: 'Комментарий по адресу',
                            name: 'address_comment',
                        },
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
