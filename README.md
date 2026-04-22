<div align="center">

# 🔐 Secret — MongoDB User Management System

[![MongoDB](https://img.shields.io/badge/MongoDB-8.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Mongoose](https://img.shields.io/badge/Mongoose-8.0-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)](package.json)

**Профессиональная система управления пользователями на базе MongoDB**  
Полный CRUD, хеширование паролей, валидация данных и пагинация — всё готово к работе.

</div>

---

## 📋 Оглавление

- [📋 О проекте](#-о-проекте)
- [✨ Возможности](#-возможности)
- [🚀 Быстрый старт](#-быстрый-старт)
- [📦 Установка](#-установка)
- [⚙️ Конфигурация](#️-конфигурация)
- [📚 Структура проекта](#-структура-проекта)
- [💻 Использование](#-использование)
- [🔐 Безопасность](#-безопасность)
- [📖 API документация](#-api-документация)
- [🛠️ Технологии](#️-технологии)
- [📝 Примеры](#-примеры)
- [🤝 Вклад в проект](#-вклад-в-проект)
- [📄 Лицензия](#-лицензия)

---

## 📋 О проекте

**Secret** — это готовый модуль базы данных пользователей на основе **MongoDB** и **Mongoose ODM**, разработанный для хранения и управления персональными данными в Node.js приложениях.

Проект предоставляет полностью настроенный слой работы с базой данных: от подключения до сервисных функций CRUD. Достаточно подключить модуль к своему приложению и сразу начать работу с пользователями.

### Основные компоненты

| Компонент | Файл | Описание |
|-----------|------|----------|
| 🔌 Подключение | `database/config/db.js` | Конфигурация и управление соединением с MongoDB |
| 📄 Модель | `database/models/user.model.js` | Mongoose-схема с валидацией и хешированием паролей |
| ⚙️ Сервис | `database/services/user.service.js` | Функции CRUD для работы с пользователями |
| 🚀 Точка входа | `index.js` | Пример запуска и использования модуля |

---

## ✨ Возможности

- ✅ **Полная CRUD функциональность** — создание, чтение, обновление, удаление пользователей
- ✅ **MongoDB + Mongoose ODM** — строгая схема данных и удобный API
- ✅ **Валидация данных** — встроенная проверка полей (email, телефон, username)
- ✅ **Хеширование паролей** — автоматический bcrypt с солью 12 раундов
- ✅ **Индексы** — оптимизированные запросы по email, username, роли
- ✅ **Timestamps** — автоматические поля `createdAt` и `updatedAt`
- ✅ **Пагинация** — встроенная поддержка страниц и лимитов
- ✅ **Поиск** — нечувствительный к регистру поиск по имени, email, username
- ✅ **Виртуальные поля** — `fullName` и `age` вычисляются автоматически
- ✅ **Роли пользователей** — `user`, `moderator`, `admin`
- ✅ **Персональные данные** — имя, фамилия, отчество, дата рождения, телефон, адрес
- ✅ **Отслеживание входа** — поле `lastLogin` обновляется при каждой авторизации

---

## 🚀 Быстрый старт

```bash
# 1. Клонировать репозиторий
git clone https://github.com/Pichenka222/secret.git
cd secret

# 2. Установить зависимости
npm install

# 3. Создать файл конфигурации
cp .env.example .env

# 4. Запустить пример
npm start
```

---

## 📦 Установка

### Требования

Перед установкой убедитесь, что у вас установлены:

| Инструмент | Минимальная версия | Ссылка |
|------------|--------------------|--------|
| Node.js | 18.0.0 | [nodejs.org](https://nodejs.org/) |
| MongoDB | 6.0 | [mongodb.com](https://www.mongodb.com/try/download/community) |
| npm | 8.0.0 | Входит в Node.js |

### Шаг 1. Клонирование репозитория

```bash
git clone https://github.com/Pichenka222/secret.git
cd secret
```

### Шаг 2. Установка зависимостей

```bash
npm install
```

### Шаг 3. Настройка окружения

```bash
cp .env.example .env
```

Откройте файл `.env` и заполните необходимые значения (см. раздел [Конфигурация](#️-конфигурация)).

### Шаг 4. Запуск

```bash
# Обычный запуск
npm start

# Режим разработки (с автоперезагрузкой)
npm run dev
```

---

## ⚙️ Конфигурация

Все настройки хранятся в файле `.env`. Пример конфигурации находится в `.env.example`.

| Переменная | Описание | Пример значения | Обязательно |
|------------|----------|-----------------|-------------|
| `MONGODB_URI` | URI для подключения к MongoDB | `mongodb://localhost:27017/secret_db` | ✅ |
| `MONGODB_DB_NAME` | Название базы данных | `secret_db` | ✅ |
| `PORT` | Порт приложения | `3000` | ❌ |
| `JWT_SECRET` | Секретный ключ для JWT токенов | `super_secret_key_32_chars_long!!` | ✅ |

### Примеры значений `.env`

```env
# Локальная MongoDB
MONGODB_URI=mongodb://localhost:27017/secret_db
MONGODB_DB_NAME=secret_db

# MongoDB Atlas (облако)
MONGODB_URI=mongodb+srv://user:password@cluster0.example.mongodb.net/secret_db

PORT=3000
JWT_SECRET=replace_this_with_a_long_random_string_at_least_32_characters
```

> ⚠️ **Важно**: Никогда не коммитьте файл `.env` в репозиторий. Он уже добавлен в `.gitignore`.

> 💡 **Рекомендация**: Для генерации надёжного `JWT_SECRET` используйте команду:  
> `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

---

## 📚 Структура проекта

```
secret/
├── database/                    # Модуль базы данных
│   ├── config/
│   │   └── db.js                # Подключение к MongoDB
│   ├── models/
│   │   └── user.model.js        # Mongoose-схема пользователя
│   ├── services/
│   │   └── user.service.js      # CRUD-сервис пользователей
│   └── README.md                # Документация модуля
├── .env.example                 # Шаблон переменных окружения
├── .gitignore                   # Игнорируемые файлы
├── package.json                 # Метаданные и зависимости
├── index.js                     # Точка входа / пример использования
└── README.md                    # Этот файл
```

### Поля модели пользователя

| Поле | Тип | Обязательное | Описание |
|------|-----|:---:|----------|
| `username` | String | ✅ | Уникальный логин (3–50 символов, a-zA-Z0-9_) |
| `email` | String | ✅ | Уникальный email адрес |
| `password` | String | ✅ | Хешированный пароль (не возвращается в запросах) |
| `firstName` | String | ❌ | Имя |
| `lastName` | String | ❌ | Фамилия |
| `middleName` | String | ❌ | Отчество |
| `dateOfBirth` | Date | ❌ | Дата рождения |
| `phone` | String | ❌ | Номер телефона |
| `address` | Object | ❌ | Адрес (страна, город, улица, дом, квартира) |
| `avatar` | String | ❌ | URL аватара |
| `role` | String | ❌ | Роль: `user` / `moderator` / `admin` |
| `isActive` | Boolean | ❌ | Активен ли аккаунт (по умолчанию `true`) |
| `isEmailVerified` | Boolean | ❌ | Подтверждён ли email (по умолчанию `false`) |
| `lastLogin` | Date | ❌ | Время последнего входа |
| `createdAt` | Date | — | Автоматически (timestamp) |
| `updatedAt` | Date | — | Автоматически (timestamp) |

---

## 💻 Использование

### Подключение к базе данных

```javascript
const { connectDB } = require('./database/config/db');

await connectDB();
```

### Создание пользователя

```javascript
const { createUser } = require('./database/services/user.service');

const user = await createUser({
  username: 'ivan_petrov',
  email: 'ivan@example.com',
  password: 'SecurePass123!',
  firstName: 'Иван',
  lastName: 'Петров',
  phone: '+7-999-123-45-67',
  address: {
    country: 'Россия',
    city: 'Москва',
    street: 'Арбат',
    building: '10',
  },
});
```

### Получение пользователя

```javascript
const { getUserById, getUserByEmail } = require('./database/services/user.service');

// По ID
const user = await getUserById('64a1b2c3d4e5f6789abcdef0');

// По email
const user = await getUserByEmail('ivan@example.com');
```

### Обновление данных

```javascript
const { updateUser } = require('./database/services/user.service');

const updated = await updateUser('64a1b2c3d4e5f6789abcdef0', {
  firstName: 'Иван',
  phone: '+7-999-000-00-00',
});
```

### Удаление пользователя

```javascript
const { deleteUser } = require('./database/services/user.service');

await deleteUser('64a1b2c3d4e5f6789abcdef0');
```

### Поиск пользователей

```javascript
const { searchUsers } = require('./database/services/user.service');

const results = await searchUsers('Иван', 10);
```

---

## 🔐 Безопасность

### Хеширование паролей

Пароли автоматически хешируются с помощью **bcryptjs** с `saltRounds = 12` перед сохранением в базу. Поле `password` скрыто по умолчанию (`select: false`) и не возвращается при обычных запросах.

```javascript
// Проверка пароля при входе
const user = await User.findOne({ email }).select('+password');
const isMatch = await user.comparePassword(candidatePassword);
```

### JWT токены

```javascript
const jwt = require('jsonwebtoken');

// Генерация токена
const token = jwt.sign(
  { userId: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);

// Верификация токена
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

### Рекомендации

> 🛡️ **Best practices по безопасности:**
>
> - Всегда используйте `HTTPS` в продакшне
> - Храните `JWT_SECRET` длиной не менее 32 символов
> - Включайте ротацию токенов (refresh tokens)
> - Не логируйте персональные данные пользователей
> - Используйте роли для разграничения доступа (`role: 'admin'`)
> - Регулярно обновляйте зависимости: `npm audit`

---

## 📖 API документация

### `createUser(userData)`

Создаёт нового пользователя в базе данных.

**Параметры:**

| Параметр | Тип | Обязательный | Описание |
|----------|-----|:---:|----------|
| `userData` | `Object` | ✅ | Данные нового пользователя |
| `userData.username` | `string` | ✅ | Уникальный логин |
| `userData.email` | `string` | ✅ | Email адрес |
| `userData.password` | `string` | ✅ | Пароль (мин. 8 символов) |
| `userData.firstName` | `string` | ❌ | Имя |
| `userData.lastName` | `string` | ❌ | Фамилия |
| ... | ... | ... | ... |

**Возвращает:** `Promise<Object>` — созданный документ пользователя

```javascript
const user = await createUser({ username: 'alice', email: 'alice@mail.com', password: 'Pass1234!' });
// => { _id: '...', username: 'alice', email: 'alice@mail.com', role: 'user', ... }
```

---

### `getUserById(userId)`

Находит пользователя по его MongoDB ObjectId.

**Параметры:**

| Параметр | Тип | Описание |
|----------|-----|----------|
| `userId` | `string` | MongoDB ObjectId пользователя |

**Возвращает:** `Promise<Object|null>` — документ пользователя или `null`

```javascript
const user = await getUserById('64a1b2c3d4e5f6789abcdef0');
```

---

### `getUserByEmail(email)`

Находит пользователя по email адресу (без учёта регистра).

**Параметры:**

| Параметр | Тип | Описание |
|----------|-----|----------|
| `email` | `string` | Email адрес пользователя |

**Возвращает:** `Promise<Object|null>`

```javascript
const user = await getUserByEmail('alice@mail.com');
```

---

### `getUserByUsername(username)`

Находит пользователя по имени пользователя.

**Параметры:**

| Параметр | Тип | Описание |
|----------|-----|----------|
| `username` | `string` | Логин пользователя |

**Возвращает:** `Promise<Object|null>`

```javascript
const user = await getUserByUsername('alice');
```

---

### `updateUser(userId, updateData)`

Обновляет данные пользователя.

**Параметры:**

| Параметр | Тип | Описание |
|----------|-----|----------|
| `userId` | `string` | MongoDB ObjectId пользователя |
| `updateData` | `Object` | Поля для обновления |

**Возвращает:** `Promise<Object|null>` — обновлённый документ или `null`

```javascript
const updated = await updateUser('64a1b2c3d4e5f6789abcdef0', { firstName: 'Bob' });
```

---

### `deleteUser(userId)`

Удаляет пользователя из базы данных.

**Параметры:**

| Параметр | Тип | Описание |
|----------|-----|----------|
| `userId` | `string` | MongoDB ObjectId пользователя |

**Возвращает:** `Promise<Object|null>` — удалённый документ или `null`

```javascript
await deleteUser('64a1b2c3d4e5f6789abcdef0');
```

---

### `getAllUsers(page, limit, filter)`

Возвращает постраничный список пользователей.

**Параметры:**

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|:---:|----------|
| `page` | `number` | `1` | Номер страницы |
| `limit` | `number` | `10` | Пользователей на страницу |
| `filter` | `Object` | `{}` | Дополнительный фильтр MongoDB |

**Возвращает:** `Promise<Object>` — объект с массивом `users` и метаданными `pagination`

```javascript
const result = await getAllUsers(1, 10, { role: 'admin' });
// => {
//   users: [...],
//   pagination: { total: 42, page: 1, limit: 10, totalPages: 5, hasNextPage: true, hasPrevPage: false }
// }
```

---

### `searchUsers(query, limit)`

Поиск пользователей по имени, username или email (без учёта регистра).

**Параметры:**

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|:---:|----------|
| `query` | `string` | — | Строка поиска |
| `limit` | `number` | `10` | Максимум результатов |

**Возвращает:** `Promise<Object[]>` — массив найденных пользователей

```javascript
const users = await searchUsers('Иван');
```

---

### `updateLastLogin(userId)`

Обновляет метку времени последнего входа пользователя.

**Параметры:**

| Параметр | Тип | Описание |
|----------|-----|----------|
| `userId` | `string` | MongoDB ObjectId пользователя |

**Возвращает:** `Promise<Object|null>`

```javascript
await updateLastLogin(user._id);
```

---

## 🛠️ Технологии

| Технология | Версия | Описание |
|------------|--------|----------|
| [Node.js](https://nodejs.org/) | 18+ | JavaScript runtime |
| [MongoDB](https://www.mongodb.com/) | 6.0+ | NoSQL база данных |
| [Mongoose](https://mongoosejs.com/) | 8.0 | ODM для MongoDB |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | 2.4 | Хеширование паролей |
| [dotenv](https://github.com/motdotla/dotenv) | 16.3 | Управление переменными окружения |

---

## 📝 Примеры

### Полный пример создания и работы с пользователем

```javascript
const { connectDB } = require('./database/config/db');
const {
  createUser,
  getUserByEmail,
  updateUser,
  deleteUser,
} = require('./database/services/user.service');

async function main() {
  await connectDB();

  // Создание пользователя
  const user = await createUser({
    username: 'maria_ivanova',
    email: 'maria@example.com',
    password: 'MySecret#99',
    firstName: 'Мария',
    lastName: 'Иванова',
    middleName: 'Сергеевна',
    dateOfBirth: new Date('1995-07-15'),
    phone: '+7-495-123-45-67',
    address: {
      country: 'Россия',
      city: 'Санкт-Петербург',
      street: 'Невский проспект',
      building: '28',
      apartment: '5',
      postalCode: '191024',
    },
  });

  console.log('Создан пользователь:', user.username);
  console.log('Полное имя:', user.fullName);   // виртуальное поле
  console.log('Возраст:', user.age);            // виртуальное поле

  // Поиск по email
  const found = await getUserByEmail('maria@example.com');

  // Обновление
  const updated = await updateUser(found._id, {
    isEmailVerified: true,
    role: 'moderator',
  });
  console.log('Роль обновлена:', updated.role);

  // Удаление
  await deleteUser(found._id);
  console.log('Пользователь удалён');
}

main();
```

### Пример валидации и обработки ошибок

```javascript
const { createUser } = require('./database/services/user.service');

async function safeCrateUser(data) {
  try {
    const user = await createUser(data);
    return { success: true, user };
  } catch (error) {
    // Дублирование ключа (email или username уже занят)
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return { success: false, error: `${field} уже занят` };
    }
    // Ошибка валидации Mongoose
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return { success: false, error: messages.join(', ') };
    }
    throw error;
  }
}
```

### Пример пагинации

```javascript
const { getAllUsers } = require('./database/services/user.service');

async function listAllUsers() {
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const { users, pagination } = await getAllUsers(page, 10);
    console.log(`Страница ${page}/${pagination.totalPages}:`);
    users.forEach((u) => console.log(` - ${u.username} (${u.email})`));
    hasMore = pagination.hasNextPage;
    page++;
  }
}
```

---

## 🤝 Вклад в проект

Мы рады любым улучшениям! Чтобы внести свой вклад:

1. **Fork** репозитория
2. Создайте ветку для вашей фичи:
   ```bash
   git checkout -b feature/my-new-feature
   ```
3. Внесите изменения и закоммитьте:
   ```bash
   git commit -m "feat: add my new feature"
   ```
4. Запушьте ветку:
   ```bash
   git push origin feature/my-new-feature
   ```
5. Откройте **Pull Request**

### Code Style

- Используйте `camelCase` для переменных и функций
- Пишите JSDoc-комментарии для публичных функций
- Следуйте структуре проекта (config / models / services)
- Тестируйте изменения перед отправкой PR

> 💬 Нашли баг или есть идея? Откройте [Issue](https://github.com/Pichenka222/secret/issues)

---

## 📄 Лицензия

Этот проект распространяется под лицензией **MIT**.  
Подробнее см. в файле [LICENSE](LICENSE).

---

<div align="center">

Сделано с ❤️ | [MongoDB Docs](https://www.mongodb.com/docs/) · [Mongoose Docs](https://mongoosejs.com/docs/)

</div>
