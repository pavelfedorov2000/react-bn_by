import React from 'react';

function AsideText({ currentStep }) {

    const asideText = [
        {
            id: 0,
            items: [
                {
                    text: 'Не уверены, какой тариф лучше выбрать?',
                    bold: true,
                    question: true,
                },
                {
                    text: 'Обратитесь за консультацией в контакт-центр по телефону',
                    bold: '174',
                },
                {
                    text: 'Проверьте, входит ли ваш адрес в',
                    bold: true,
                    link: 'зону подключения',
                }
            ]
        },
        {
            id: 1,
            items: [
                {
                    text: 'В этом разделе вам нужно выбрать желаемый тариф и указать адрес подключения.',
                },
            ]
        },
        {
            id: 2,
            items: [
                {
                    text: 'Введите, пожалуйста, паспортные данные и адрес регистрации.',
                },
                {
                    text: 'Корректное и подробное заполнение поможет ускорить процесс подключения и устранить возможные ошибки.',
                },
            ]
        }
    ];

    const currentText = asideText.find(text => text.id == currentStep);
    //console.log(currentText);
    //const { text, bold, link } = currentText;

    return (
        <div className="form-page__aside-text">
            {
                currentText && currentText.items.map((item, i) => (
                    <p key={`paragraph_${i + 1}`}>{item.bold === true ? <b>{item.text} {item.link ? <a href="#">{`${item.link}`}</a> : null}</b> : item.text}{!item.question && `.`}</p>
                ))
            }
        </div>
    );
}

export default AsideText;