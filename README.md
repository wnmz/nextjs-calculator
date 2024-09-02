# Тестовое задание [fullstack node.js]
Необходимо создать простой Web калькулятор (базовые операции) с поддержкой
Memory функций и просмотром истории вычислений. Состояние калькулятора
должно сохраняться в Postgres базу данных и быть привязано к аккаунту
пользователя. Открывая калькулятор из любого места и войдя под своим
аккаунтом, ты должен получить одинаковое состояние, в том числе одинаковую
историю вычислений и состояние Memory. Приложение должно работать как в
декстопном режиме так и на мобильных устройствах, имея адаптивную верстку.
Уточнения:
- Ожидается что приложение будет обернуто в docker/podman и снабжено
инструкцией или скриптом для запуска.
- В базе данных необходимо заранее завести 2 тестовых аккаунта и написать
их логин/пароль, чтобы можно было проверить работу калькулятора.
Никаких административных панелей делать не нужно.
- NodeJS + TypeScript + React, остальное по выбору. Если будет на NextJS -
отлично

# Stack:
- ORM: `Prisma`
- Back-end/Frond-end: `Next.js (app router)`
- Таблица стилей: `Tailwind CSS`
- Валидатор DTO: `class-validator`
- Авторизация: `JWT`

# Запуск
Для запуска достаточно написать: </br>
```
docker compose up --build
```
Для указания своего адреса базы данных следует поменять переменные среды в `./docker-compose.yml`</br>
Сервер запустится по адресу http://localhost:3000/

# Данные для входа
В миграциях (`./prisma/migrations`) есть миграция `20240902034521_fill_with_data`, которая заполняет базу данных и создает 2 аккаунта:
```
email:  example@email.com
pass:   12345

email:  example2@email.com
pass:   12345
```

# Демонстрация работы
![Desktop DEMO](/preview/image.png)
![Mobile DEMO](/preview/mobile_history.png)
![Mobile DEMO](/preview/mobile_memory.png)