import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import AsideText from './AsideText/AsideText';
import './base/_general.scss';
import Button from './Button/Button';
import Help from './Help/Help';
import Nav from './Nav/Nav';
import Result from './Result/Result';
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
                            id: 0,
                            inputType: 'input',
                            label: 'Фамилия',
                            name: 'surname',
                            required: true,
                            value: '',
                            //valid: false,
                        },
                        {
                            id: 1,
                            inputType: 'input',
                            label: 'Имя',
                            name: 'name',
                            required: true,
                            value: '',
                            //valid: false,
                        },
                        {
                            id: 2,
                            inputType: 'input',
                            label: 'Отчество',
                            name: 'patronymic',
                            required: true,
                            value: '',
                            //valid: false,
                        },
                        {
                            id: 3,
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
                            id: 4,
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
                            id: 0,
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
                            ],
                            value: '',
                        }
                    ]
                },
                {
                    id: 1,
                    title: 'Дополнительные услуги',
                    type: 'checks',
                    fields: [
                        {
                            id: 0,
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
                            ],
                            value: '',
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
                            mask: '999999',
                            value: '',
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
                            ],
                            value: '',
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
                            ],
                            value: '',
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
                            ],
                            value: '',
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
                            ],
                            value: '',
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
                            value: '',
                            checkbox: "В адресе улицы отсутствует название улицы"
                        },
                        {
                            inputType: 'input',
                            size: "small",
                            label: 'Дом',
                            name: 'home',
                            value: '',
                        },
                        {
                            inputType: 'input',
                            size: "small",
                            label: 'Корпус / строение',
                            name: 'corpus',
                            value: '',
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
                            ],
                            value: '',
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
                            value: '',
                            checkbox: "Это единое строение, помещения нет"
                        },
                        {
                            inputType: 'input',
                            textfield: true,
                            label: 'Комментарий по адресу',
                            name: 'address_comment',
                            placeholder: 'Например: 3 этаж, справа от входа',
                            value: '',
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
                            id: 0,
                            inputType: 'radio',
                            label: 'Являетесь ли Вы резидентом Республики Беларусь?',
                            name: 'resident',
                            items: ['Да', 'Нет'],
                            value: '',
                        },
                        {
                            id: 1,
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
                            ],
                            value: '',
                        },
                        {
                            id: 2,
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
                            ],
                            value: '',
                        },
                        {
                            id: 3,
                            inputType: 'radio',
                            label: 'Есть ли у вас временная регистрация?',
                            name: 'temporary_registration',
                            hidden: true,
                            items: ['Да', 'Нет'],
                            value: '',
                        },
                        {
                            id: 4,
                            inputType: 'input',
                            label: 'Серия',
                            name: 'passport_series',
                            value: '',
                        },
                        {
                            id: 5,
                            inputType: 'input',
                            label: 'Номер паспорта',
                            name: 'passport_num',
                            value: '',
                        },
                        {
                            id: 6,
                            inputType: 'input',
                            label: 'Дата выдачи паспорта',
                            name: 'passport_from',
                            placeholder: '01.01.2001',
                            mask: '99.99.9999',
                            value: '',
                        },
                        {
                            id: 7,
                            inputType: 'input',
                            label: 'Срок действия паспорта',
                            name: 'passport_to',
                            placeholder: '01.01.2001',
                            mask: '99.99.9999',
                            value: '',
                        },
                        {
                            id: 8,
                            inputType: 'input',
                            label: 'Идентификационный номер',
                            name: 'identification_number',
                            value: '',
                        },
                        {
                            id: 9,
                            inputType: 'input',
                            label: 'Кем выдан паспорт',
                            name: 'passport_issued_by',
                            placeholder: 'Октябрьским РОВД',
                            value: '',
                        }
                    ]
                },
                {
                    id: 1,
                    title: 'Адрес регистрации',
                    isToggle: true,
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
                            id: 0,
                            inputType: 'input',
                            label: 'Индекс',
                            name: 'index',
                            value: '',
                        },
                        {
                            id: 1,
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
                            ],
                            value: '',
                        },
                        {
                            id: 2,
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
                            ],
                            value: '',
                        },
                        {
                            id: 3,
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
                            ],
                            value: '',
                        },
                        {
                            id: 4,
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
                            ],
                            value: '',
                        },
                        {
                            id: 5,
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
                            value: '',
                            checkbox: "В адресе улицы отсутствует название улицы"
                        },
                        {
                            id: 6,
                            inputType: 'input',
                            size: "small",
                            label: 'Дом',
                            name: 'home',
                            value: '',
                        },
                        {
                            id: 7,
                            inputType: 'input',
                            size: "small",
                            label: 'Корпус / строение',
                            name: 'corpus',
                            value: '',
                        },
                        {
                            id: 8,
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
                            ],
                            value: '',
                        },
                        {
                            id: 9,
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
                            value: '',
                            checkbox: "Это единое строение, помещения нет"
                        },
                        {
                            id: 10,
                            inputType: 'input',
                            label: 'Комментарий по адресу',
                            name: 'address_comment',
                            value: '',
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'Ваш менеджер',
                    fields: [
                        {
                            id: 0,
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
                            value: '',
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Иные пожелания',
                    fields: [
                        {
                            id: 0,
                            inputType: 'input',
                            textfield: true,
                            name: 'other_wishes',
                            value: '',
                        }
                    ]
                },
                {
                    id: 4,
                    fields: [
                        {
                            id: 0,
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

    /* let storageStep;
    useEffect(() => {
        // storing input name
        localStorage.getItem('step');
    }, [storageStep]);

    console.log(storageStep); */

    const storageData = JSON.parse(localStorage.getItem('data'));
    const [formData, setFormData] = useState(storageData || data);
    const [currentStep, setCurrentStep] = useState(localStorage.getItem('step') || 0);
    //localStorage.getItem('step') || 0
    console.log(+currentStep);
    //const [visibleStep, setVisibleStep] = useState(formData[currentStep]);
    //console.log(visibleStep);
    let visibleStep = currentStep !== 'result' ? formData.find(step => step.id == currentStep) : 'result';
    console.log(visibleStep);


    let step = currentStep !== 'result' && currentStep;
    const prevStep = () => {
        step = +step - 1;
        setCurrentStep(step);
        localStorage.setItem('step', step);
        window.scrollTo(0, 0);
    }

    const nextStep = () => {
        step = +step + 1;
        setCurrentStep(step);
        localStorage.setItem('step', step);
        window.scrollTo(0, 0);
    }

    const showStep = (index) => {
        step = index;
        setCurrentStep(step);
        localStorage.setItem('step', step);
        window.scrollTo(0, 0);
    }

    const generateResult = () => {
        step = 'result';
        setCurrentStep(step);
        localStorage.setItem('step', step);
        window.scrollTo(0, 0);
    }

    const editForm = () => {
        step = 0;
        setCurrentStep(step);
        localStorage.setItem('step', step);
        window.scrollTo(0, 0);
    }

    /* function navScroll(btn, i) {
        if (window.innerWidth < 575) {
            if (i == 0) {
                nav.scrollTo({
                    left: 0,
                    behavior: 'smooth',
                });
            }
            if (i == steps.length - 1) {
                nav.scrollTo({
                    left: navWidth - btn.offsetLeft,
                    behavior: 'smooth',
                });
            }
        }
    } */

    const preventFormSubmit = (e) => {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    }

    return (
        <div className="wrapper">
            <main className="page">
                <form onKeyDown={preventFormSubmit} id="physical_form" action="#" className="form-page">
                    {
                        visibleStep === 'result' ?
                            <Result data={formData} editForm={editForm} />
                            :
                            <div className="steps">
                                <div className="_container">
                                    <div className="form-page__inner">
                                        <div className="form-page__aside">
                                            <h1 className="form-page__title">Заявление на подключение</h1>
                                            <AsideText currentStep={currentStep} />
                                            <Help className="form-page__aside-help" />
                                        </div>
                                        <div className="form-page__content">
                                            <Nav steps={formData} currentStep={currentStep} showStep={showStep} />
                                            <AsideText currentStep={currentStep} />
                                            <div className="form__body">
                                                <Step data={formData} step={visibleStep} currentStep={currentStep} formData={formData} setFormData={setFormData} />
                                            </div>
                                            <div className="form__buttons">
                                                {currentStep != 0 && <Button onClick={prevStep} className="back-btn" border type="button" text="Назад" />}
                                                {currentStep == formData.length - 1 ?
                                                    <Button onClick={generateResult} className="next-btn" type="button" text="К результату" />
                                                    :
                                                    <Button onClick={nextStep} className="next-btn" type="button" text="Продолжить" />
                                                }
                                            </div>
                                            <Help className="form-page__bottom-help" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </form>
            </main>
        </div>
    );
}

//disabled={visibleStep.valid ? true : false}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
