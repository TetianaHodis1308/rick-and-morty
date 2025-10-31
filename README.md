# Rick and Morty Explorer
[**Демо**](https://rick-and-morty-yrgq.vercel.app/)

**Опис проєкту**  
Rick and Morty Explorer — це веб-додаток, створений з використанням Next.js 13 (App Router) та Tailwind CSS. Він підключається до офіційного [Rick and Morty API](https://rickandmortyapi.com), дозволяючи переглядати персонажів, епізоди та локації. Підтримуються фільтрація, пошук, пагінація та детальні сторінки.


# Особливості:

- Серверний рендеринг через Next.js 13 для швидкого старту
- **Персонажі** — із пагінацією, пошуком за ім’ям, фільтрами (статус, гендер)
- **Епізоди** — список епізодів + детальна сторінка з персонажами
- **Локації** — список локацій + детальна сторінка з мешканцями
- Клієнтська логіка для фільтрів і пагінації через React хуки та `useDebounce`
- Динамічні маршрути: `/characters/[id]`, `/episodes/[id]`, `/locations/[id]`


# Технології: 
- Next.js 13
- React
- Tailwind CSS
- Rick and Morty API
- Vercel


# Встановлення та запуск локально: 

- Клонуй репозиторій:
git clone https://github.com/TetianaHodis1308/rick-and-morty.git
cd rick-and-morty

- Встанови залежності:
npm install
* або
yarn install

- Запусти проєкт у режимі розробки:
npm run dev
* або
yarn dev

- Відкрий у браузері:
http://localhost:3000