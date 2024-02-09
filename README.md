# Запуск проекта

Чтобы запустить проект локально, выполните следующие шаги:

## Запуск сервера

1. Установите зависимости. 
   - ```bash
      cd server
      npm install
2. Создайте файл `.env` в папке `server` и добавьте туда переменные `AMOCRM_ACCESS_TOKEN` и `AMOCRM_BASE_DOMAIN`.
3. Запустите сервер с помощью команды `npm run start`.

```
# /server/.env

AMOCRM_ACCESS_TOKEN=access.token
AMOCRM_BASE_DOMAIN=base.domain
```

## Запуск клиента

1. Установите зависимости.
   - ```bash
      cd client
      npm install
2. Создайте файл `.env` в папке `client` и добавьте туда переменную `VITE_API_ENDPOINT`.
3. Запустите клиент с помощью команды `npm run dev`.

```
# /client/.env

VITE_API_ENDPOINT=http://localhost:3000
```

![image](https://github.com/iinegnalon/genesis-api-vue/assets/56963054/129b499c-8a2b-470b-bc6e-756881f91d59)
