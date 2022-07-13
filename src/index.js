import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AsideText from './AsideText/AsideText';
import './base/_general.scss';
import Button from './Button/Button';
import Help from './Help/Help';
import Nav from './Nav/Nav';
import Step from './Step/Step';

function App() {

    const data = [
        {
            id: 0,
            required: true,
            visible: true,
            valid: false,
            step: 'contacts',
            title: 'Личные данные',
            fieldsets: [
                {
                    id: 0,
                    title: 'Ваши контакты',
                    fields: [
                        {
                            inputType: 'input',
                            label: 'Фамилия',
                            name: 'surname',
                            required: true,
                            value: '',
                            //valid: false,
                        },
                        {
                            inputType: 'input',
                            label: 'Имя',
                            name: 'name',
                            required: true,
                            value: '',
                            //valid: false,
                        },
                        {
                            inputType: 'input',
                            label: 'Отчество',
                            name: 'patronymic',
                            required: true,
                            value: '',
                            //valid: false,
                        },
                        {
                            inputType: 'input',
                            type: 'tel',
                            label: 'Номер телефона',
                            name: 'phone',
                            required: true,
                            value: '',
                            mask: '+375 (99) 999-99-99',
                            //valid: false,
                        },
                        {
                            inputType: 'input',
                            type: 'email',
                            label: 'Адрес электронной почты',
                            name: 'email',
                            required: true,
                            value: '',
                            placeholder: 'e-mail@email.com',
                            //valid: false,
                        }
                    ]
                }
            ]
        },
        {
            id: 1,
            step: 'order',
            title: 'Заказ',
            fieldsets: [
                {
                    id: 0,
                    title: 'Тарифный план',
                    fields: [
                        {
                            inputType: 'select',
                            label: 'Выберите тарифный план',
                            id: 'tariff',
                            name: 'tariff',
                            options: [
                                {
                                    title: 'Выберите тарифный план',
                                },
                                {
                                    title: 'iDOM100+Megogo',
                                    price: '25,50 руб./мес.'
                                },
                                {
                                    title: 'Мой бизнес PRO 100',
                                    price: '43 руб./мес.'
                                },
                                {
                                    title: 'Мой бизнес PRO 80',
                                    price: '25,50 руб./мес.'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 1,
                    title: 'Дополнительные услуги',
                    type: 'checks',
                    fields: [
                        {
                            inputType: 'checkbox',
                            name: 'additional_service',
                            items: [
                                {
                                    id: 1,
                                    title: 'Маршрутизатор (Роутер)',
                                    price: '0р. /Мес.',
                                    text: 'Сетевое оборудование будет подобрано под ваши потребности. Ряд моделей доступны за дополнительную плату.'
                                },
                                {
                                    id: 2,
                                    title: 'Статический IP-адрес',
                                    price: '4,20р. /Мес.',
                                    text: 'Позволяет присвоить абоненту постоянный IP-адрес. Для выхода в интернет этот адрес не используется.'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Адрес подключения',
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
                            id: 'region',
                            name: 'region',
                            options: [
                                {
                                    title: "Выберите область"
                                },
                                {
                                    title: "Область 1",
                                },
                                {
                                    title: "Область 2",
                                },
                                {
                                    title: "Область 3"
                                },
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Тип населенного пункта',
                            id: 'localityType',
                            name: 'locality_type',
                            options: [
                                {
                                    title: "Выберите тип населенного пункта"
                                },
                                {
                                    title: "Тип населенного пункта 1",
                                },
                                {
                                    title: "Тип населенного пункта 2",
                                },
                                {
                                    title: "Тип населенного пункта 3"
                                },
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Населенный пункт',
                            id: 'locality',
                            name: 'locality',
                            options: [
                                {
                                    title: "Выберите населенный пункт"
                                },
                                {
                                    title: "Населенный пункт 1",
                                },
                                {
                                    title: "Населенный пункт 2",
                                },
                                {
                                    title: "Населенный пункт 3"
                                },
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Тип улицы',
                            id: 'streetType',
                            name: 'street_type',
                            options: [
                                {
                                    title: "Выберите тип улицы"
                                },
                                {
                                    title: "Тип улицы 1",
                                },
                                {
                                    title: "Тип улицы 2",
                                },
                                {
                                    title: "Тип улицы 3"
                                },
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Улица',
                            id: 'street',
                            name: 'street',
                            options: [
                                {
                                    title: "Выберите улицу"
                                },
                                {
                                    title: "Улица 1",
                                },
                                {
                                    title: "Улица 2",
                                },
                                {
                                    title: "Улица 3"
                                },
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
                                {
                                    title: "Выберите тип помещения"
                                },
                                {
                                    title: "Тип помещения 1",
                                },
                                {
                                    title: "Тип помещения 2",
                                },
                                {
                                    title: "Тип помещения 3"
                                },
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Помещение',
                            name: 'room',
                            options: [
                                {
                                    title: "Выберите помещение"
                                },
                                {
                                    title: "Помещение 1",
                                },
                                {
                                    title: "Помещение 2",
                                },
                                {
                                    title: "Помещение 3"
                                },
                            ],
                            checkbox: "Это единое строение, помещения нет"
                        },
                        {
                            inputType: 'textarea',
                            label: 'Комментарий по адресу',
                            name: 'address_comment',
                            placeholder: 'Например: 3 этаж, справа от входа'
                        },
                    ]
                }
            ]
        },
        {
            id: 2,
            step: 'passport',
            title: 'Паспортные данные',
            fieldsets: [
                {
                    id: 0,
                    fields: [
                        {
                            inputType: 'radio',
                            label: 'Являетесь ли Вы резидентом Республики Беларусь?',
                            name: 'resident',
                            items: ['Да', 'Нет'],
                        },
                        {
                            inputType: 'select',
                            label: 'Вид документа',
                            id: 'document',
                            name: 'document',
                            options: [
                                {
                                    title: "Выберите вид документа"
                                },
                                {
                                    title: "Паспорт",
                                },
                                {
                                    title: "Удостоверение",
                                },
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Гражданство',
                            id: 'nationality',
                            name: 'nationality',
                            hidden: true,
                            options: [
                                {
                                    title: "Выберите гражданство"
                                },
                                {
                                    title: "РБ",
                                },
                                {
                                    title: "РФ",
                                },
                                {
                                    title: "Конго",
                                },
                            ]
                        },
                        {
                            inputType: 'radio',
                            label: 'Есть ли у вас временная регистрация?',
                            name: 'temporary_registration',
                            hidden: true,
                            items: ['Да', 'Нет'],
                        },
                        {
                            inputType: 'input',
                            label: 'Серия',
                            name: 'passport_series',
                        },
                        {
                            inputType: 'input',
                            label: 'Номер паспорта',
                            name: 'passport_num',
                        },
                        {
                            inputType: 'input',
                            label: 'Дата выдачи паспорта',
                            name: 'passport_from',
                            placeholder: '01.01.2001',
                        },
                        {
                            inputType: 'input',
                            label: 'Срок действия паспорта',
                            name: 'passport_to',
                            placeholder: '01.01.2001',
                        },
                        {
                            inputType: 'input',
                            label: 'Идентификационный номер',
                            name: 'identification_number',
                        },
                        {
                            inputType: 'input',
                            label: 'Кем выдан паспорт',
                            name: 'passport_issued_by',
                            placeholder: 'Октябрьским РОВД'
                        }
                    ]
                },
                {
                    id: 1,
                    title: 'Адрес регистрации',
                    toggle: true,
                    name: "registration",
                    checkbox: {
                        inputType: 'checkbox',
                        matches: true,
                        items: [
                            {
                                label: 'Совпадает с адресом подключения',
                            }
                        ]
                    },
                    fields: [
                        {
                            inputType: 'input',
                            label: 'Индекс',
                            name: 'index',
                        },
                        {
                            inputType: 'select',
                            label: 'Область',
                            id: 'region',
                            name: 'region',
                            options: [
                                {
                                    title: "Выберите область"
                                },
                                {
                                    title: "Область 1",
                                },
                                {
                                    title: "Область 2",
                                },
                                {
                                    title: "Область 3"
                                },
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Тип населенного пункта',
                            id: 'localityType',
                            name: 'locality_type',
                            options: [
                                {
                                    title: "Выберите тип населенного пункта"
                                },
                                {
                                    title: "Тип населенного пункта 1",
                                },
                                {
                                    title: "Тип населенного пункта 2",
                                },
                                {
                                    title: "Тип населенного пункта 3"
                                },
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Населенный пункт',
                            id: 'locality',
                            name: 'locality',
                            options: [
                                {
                                    title: "Выберите населенный пункт"
                                },
                                {
                                    title: "Населенный пункт 1",
                                },
                                {
                                    title: "Населенный пункт 2",
                                },
                                {
                                    title: "Населенный пункт 3"
                                },
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Тип улицы',
                            id: 'streetType',
                            name: 'street_type',
                            options: [
                                {
                                    title: "Выберите тип улицы"
                                },
                                {
                                    title: "Тип улицы 1",
                                },
                                {
                                    title: "Тип улицы 2",
                                },
                                {
                                    title: "Тип улицы 3"
                                },
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Улица',
                            id: 'street',
                            name: 'street',
                            options: [
                                {
                                    title: "Выберите улицу"
                                },
                                {
                                    title: "Улица 1",
                                },
                                {
                                    title: "Улица 2",
                                },
                                {
                                    title: "Улица 3"
                                },
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
                            id: 'roomType',
                            name: 'room_type',
                            options: [
                                {
                                    title: "Выберите тип помещения"
                                },
                                {
                                    title: "Тип помещения 1",
                                },
                                {
                                    title: "Тип помещения 2",
                                },
                                {
                                    title: "Тип помещения 3"
                                },
                            ]
                        },
                        {
                            inputType: 'select',
                            label: 'Помещение',
                            id: 'room',
                            name: 'room',
                            options: [
                                {
                                    title: "Выберите помещение"
                                },
                                {
                                    title: "Помещение 1",
                                },
                                {
                                    title: "Помещение 2",
                                },
                                {
                                    title: "Помещение 3"
                                },
                            ],
                            checkbox: "Это единое строение, помещения нет"
                        },
                        {
                            inputType: 'textarea',
                            label: 'Комментарий по адресу',
                            name: 'address_comment',
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'Ваш менеджер',
                    fields: [
                        {
                            inputType: 'select',
                            label: 'Помещение',
                            id: 'yourManager',
                            name: 'your_manager',
                            options: [
                                {
                                    title: "Выберите"
                                },
                                {
                                    title: "Да",
                                },
                                {
                                    title: "Нет",
                                },
                            ],
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Иные пожелания',
                    fields: [
                        {
                            inputType: 'textarea',
                            name: 'other_wishes',
                        }
                    ]
                },
                {
                    id: 4,
                    fields: [
                        {
                            inputType: 'checkbox',
                            name: 'agree',
                            items: [
                                {
                                    agree: false,
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ];

    const [formData, setFormData] = useState(data);
    //console.log(formData);
    const [currentStep, setCurrentStep] = useState(2);
    //console.log(currentStep);
    const [visibleStep, setVisibleStep] = useState(formData[currentStep]);
    //console.log(visibleStep);

    let step;

    const prevStep = () => {
        step = +currentStep - 1;
        setCurrentStep(step);
        const stepObj = data.find(step => step.id == step);
        setVisibleStep(stepObj);
    }

    const nextStep = () => {
        step = +currentStep + 1;
        setCurrentStep(step);
        console.log(step);
        const stepObj = data.find(step => step.id == step);
        setVisibleStep(stepObj);
        console.log(visibleStep);
    }

    return (
        <div className="wrapper">
            <main className="page">
                <form id="physical_form" action="#" className="form-page">
                    <div className="steps">
                        <div className="_container">
                            <div className="form-page__inner">
                                <div className="form-page__aside">
                                    <h1 className="form-page__title">Заявление на подключение</h1>
                                    <AsideText currentStep={currentStep} />
                                    <Help />
                                </div>
                                <div className="form-page__content">
                                    <Nav steps={formData} currentStep={currentStep} />
                                    <div className="form__body">
                                        <Step data={formData} step={visibleStep} currentStep={currentStep} />
                                    </div>
                                    <div className="form__buttons">
                                        {currentStep != 0 && <Button onClick={prevStep} className="back-btn" border type="button" text="Назад" />}
                                        <Button onClick={nextStep} className="next-btn" type="button" text="Продолжить" disabled={currentStep.valid ? true : false} />
                                    </div>
                                    <AsideText currentStep={currentStep} />
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
