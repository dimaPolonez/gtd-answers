window.onload = function() {
  const questions = [
    { question: 'Что это?'},
    { question: 'С этим надо что то делать?' },
    { question: 'Это вообще тебе нужно?' },
    { question: 'Мне?'},
    { question: 'Сейчас?'},
    { question: 'Есть какая то конкретная дата?'},
    { question: 'Она одношаговая?'},
    { question: 'Можно сделать за 2 минуты?'},
  ];

  let isReturn = false

  const folders = ['Мусор', 'Заметки', 'Ожидание', 'Календарь', 'Когда-нибудь потом','Текущие задачи', 'Проект']

  let taskName = prompt('Введите название задачи:');

 if (taskName) {
    const taskElement = document.createElement('h2');
    taskElement.textContent =  `Название задачи: ${taskName}`;
    document.body.appendChild(taskElement);

    const logElement = document.createElement('div');
    logElement.style.padding = '10px';
    logElement.style.border = '1px solid #ccc';
    logElement.style.borderRadius = '5px';
    document.body.appendChild(logElement);

    logElement.innerHTML += `<p><b>Вопрос: ${questions[0].question}</b></p>`;
    logElement.innerHTML += `<p>Здесь должен быть глубокий мыслительный процесс!</p>`;

    logElement.innerHTML += `<p><b>Вопрос: ${questions[1].question}</b></p>`;

    const yesButton1 = document.createElement('button');
    yesButton1.textContent = 'Да';
    document.body.appendChild(yesButton1);

    const noButton1 = document.createElement('button');
    noButton1.textContent = 'Нет';
    document.body.appendChild(noButton1);


    noButton1.addEventListener('click', () => {
        yesButton1.remove();
        noButton1.remove();
        logElement.innerHTML += `<p>Ответ: Нет</p>`;
        logElement.innerHTML += `<p><b>Вопрос: ${questions[2].question}</b></p>`;

        const yesButton2 = document.createElement('button');
        yesButton2.textContent = 'Да';
        document.body.appendChild(yesButton2);

        const noButton2 = document.createElement('button');
        noButton2.textContent = 'Нет';
        document.body.appendChild(noButton2);

        yesButton2.addEventListener('click', () => {
            logElement.innerHTML += `<p>Ответ: Да</p>`;
            logElement.innerHTML += `<p><b>Результат: Ну тогда оставляй в папке ${folders[1]}</b></p>`;
            noButton2.remove();
            yesButton2.remove();
            isReturn = true
        });

        noButton2.addEventListener('click', () => {
            logElement.innerHTML += `<p>Ответ: Нет</p>`;
            logElement.innerHTML += `<p><b>Результат: Зачем оно тебе надо? Это же по факту ${folders[0]}</b></p>`;
            noButton2.remove();
            yesButton2.remove();
            isReturn = true
        });
      });

    if (!isReturn) {
        yesButton1.addEventListener('click', () => {
            logElement.innerHTML += `<p>Ответ: Да</p>`;
            logElement.innerHTML += `<p><b>Вопрос: ${questions[3].question}</b></p>`;
            noButton1.remove();
            yesButton1.remove();

            const yesButton2 = document.createElement('button');
            yesButton2.textContent = 'Да';
            document.body.appendChild(yesButton2);

            const noButton2 = document.createElement('button');
            noButton2.textContent = 'Нет';
            document.body.appendChild(noButton2);

            noButton2.addEventListener('click', () => {
                logElement.innerHTML += `<p>Ответ: Нет</p>`;
                logElement.innerHTML += `<p><b>Результат: Записывай в список ${folders[2]}, определи исполнителя и последнюю дату напоминания</b></p>`;
                noButton2.remove();
                yesButton2.remove();
                isReturn = true
            });

        if (!isReturn) {
            yesButton2.addEventListener('click', () => {
                logElement.innerHTML += `<p>Ответ: Да</p>`;
                logElement.innerHTML += `<p><b>Вопрос: ${questions[4].question}</b></p>`;
                noButton2.remove();
                yesButton2.remove();

                const yesButton3 = document.createElement('button');
                yesButton3.textContent = 'Да';
                document.body.appendChild(yesButton3);
    
                const noButton3 = document.createElement('button');
                noButton3.textContent = 'Нет';
                document.body.appendChild(noButton3);

                noButton3.addEventListener('click', () => {
                    logElement.innerHTML += `<p>Ответ: Нет</p>`;
                    logElement.innerHTML += `<p><b>Вопрос: ${questions[5].question}</b></p>`;
                    noButton3.remove();
                    yesButton3.remove();

                    const yesButton4 = document.createElement('button');
                    yesButton4.textContent = 'Да';
                    document.body.appendChild(yesButton4);
        
                    const noButton4 = document.createElement('button');
                    noButton4.textContent = 'Нет';
                    document.body.appendChild(noButton4);

                    yesButton4.addEventListener('click', () => {
                        logElement.innerHTML += `<p>Ответ: Да</p>`;
                        logElement.innerHTML += `<p><b>Результат: Закидывай в ${folders[3]} чтоб не потерять</b></p>`;
                        noButton4.remove();
                        yesButton4.remove();
                        isReturn = true
                    });
            
                    noButton4.addEventListener('click', () => {
                        logElement.innerHTML += `<p>Ответ: Нет</p>`;
                        logElement.innerHTML += `<p><b>Результат: Это явно список ${folders[4]}</b></p>`;
                        noButton4.remove();
                        yesButton4.remove();
                        isReturn = true
                    });
                });

                if (!isReturn) {
                yesButton3.addEventListener('click', () => {
                    logElement.innerHTML += `<p>Ответ: Да</p>`;
                    logElement.innerHTML += `<p><b>Вопрос: ${questions[6].question}</b></p>`;
                    noButton3.remove();
                    yesButton3.remove();
                    
                    const yesButton4 = document.createElement('button');
                    yesButton4.textContent = 'Да';
                    document.body.appendChild(yesButton4);
        
                    const noButton4 = document.createElement('button');
                    noButton4.textContent = 'Нет';
                    document.body.appendChild(noButton4);

                    noButton4.addEventListener('click', () => {
                        logElement.innerHTML += `<p>Ответ: Нет</p>`;
                        logElement.innerHTML += `<p><b>Результат: Это точно ${folders[6]}</b></p>`;
                        noButton4.remove();
                        yesButton4.remove();
                        isReturn = true
                    });

                    if (!isReturn) {
                        yesButton4.addEventListener('click', () => {
                            logElement.innerHTML += `<p>Ответ: Да</p>`;
                            logElement.innerHTML += `<p><b>Вопрос: ${questions[7].question}</b></p>`;
                            noButton4.remove();
                            yesButton4.remove();
                            
                            const yesButton5 = document.createElement('button');
                            yesButton5.textContent = 'Да';
                            document.body.appendChild(yesButton5);
                
                            const noButton5 = document.createElement('button');
                            noButton5.textContent = 'Нет';
                            document.body.appendChild(noButton5);
        
                            yesButton5.addEventListener('click', () => {
                                logElement.innerHTML += `<p>Ответ: Да</p>`;
                                logElement.innerHTML += `<p><b>Результат: Просто иди и делай!</b></p>`;
                                noButton5.remove();
                                yesButton5.remove();
                                isReturn = true
                            });

                            if (!isReturn) {
                                noButton5.addEventListener('click', () => {
                                    logElement.innerHTML += `<p>Ответ: Нет</p>`;
                                    logElement.innerHTML += `<p><b>Результат: Записывай в ${folders[5]}!</b></p>`;
                                    noButton5.remove();
                                    yesButton5.remove();
                                    isReturn = true
                                });
                            }
                    

                        });
                    }
            

                });
            }
            });
        }
        });
    }
 }

}

