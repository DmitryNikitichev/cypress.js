describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Посетить сайт 
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки .Забыли пароль.
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');  // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
     })
     it('Востановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Посетить сайт 
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки .Забыли пароль.
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#forgotEmailButton').click(); // Нажал забыли пароль
        cy.get('#mailForgot').type('nickitichev91@gmail.com'); // Ввели email для восстановления пароля
        cy.get('#restoreEmailButton').click(); // Нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
    })
     it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Посетить сайт 
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки .Забыли пароль.
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio');  // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
    })
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Посетить сайт 
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки .Забыли пароль.
        cy.get('#mail').type('german@dolniko.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1');  // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
    })
    it('Проверка что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Посетить сайт 
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки .Забыли пароль.
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1');  // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
    })
    it('Проверка на приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio/'); // Посетить сайт 
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки .Забыли пароль.
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1');  // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
    })
    })
