# Свадебное приглашение — Александр & Ирина

## Описание
Персональное свадебное приглашение на двухдневное событие (19–20 июня 2026, Чебоксары).
Сайт показывает разную информацию в зависимости от типа гостя (родственники или друзья).

**Живой сайт:** https://p1ayman.github.io/marry-me  
**GitHub:** https://github.com/p1ayman/marry-me  
*(Netlify удалён — используем только GitHub Pages, бесплатно и без лимитов)*

---

## 📋 Структура проекта

```
marry me/
├── index.html                        # Основной файл приглашения (для друзей)
├── invitation-print-babula.html      # Приглашение для печати (Дорогая бабуля!)
├── invitation-print-parents.html     # Приглашение для печати (Дорогие Мама и Папа!)
├── invitation-print.html             # Общее приглашение для печати
├── css/
│   └── style.css                     # Стили (Cormorant Garamond + Marck Script шрифты)
├── js/
│   ├── guests.js                     # Список гостей и их типы
│   └── app.js                        # Логика приложения
├── img/
│   ├── hero-bg.jpg                   # Акварельный фон героя — СЖАТЫЙ (223 КБ, использовать этот!)
│   ├── hero-bg.png                   # Оригинал (671 КБ, не использовать)
│   ├── IMG_3090.jpg                  # Карта для друзей — СЖАТАЯ (275 КБ, использовать этот!)
│   ├── IMG_3090.png                  # Оригинал (5.7 МБ, не использовать)
│   ├── для гостей.jpg                # Карта для родственников — СЖАТАЯ (187 КБ, использовать этот!)
│   └── для гостей.jpeg               # Оригинал (635 КБ, не использовать)
└── CLAUDE.md                         # Этот файл
```

---

## 🖨️ Печатные приглашения (PDF)

Три варианта для распечатки и отправки по почте:

| Файл | Приветствие | Использование |
|------|-------------|----------------|
| `invitation-print-babula.html` | Дорагая бабуля! | Отправить бабуле |
| `invitation-print-parents.html` | Дорогие Мама и Папа! | Отправить родителям |
| `invitation-print.html` | Дорогие гости! | Общий шаблон для других |

**Как использовать:**
1. Откройте файл в браузере (`python3 -m http.server 8000`)
2. Нажмите **Cmd+P** (Mac) или **Ctrl+P** (Windows)
3. Выберите **"Сохранить как PDF"**
4. Формат уже оптимизирован под **A4**

---

## 🎯 Как это работает

### URL структура
```
https://p1ayman.github.io/marry-me/?guest=KEY
```

Где `KEY` — ключ из `guests.js`:
- **Родственники (день 1, 19 июня, ресторан «Терраса», 16:00):** `viktor-elena`, `petr-tatyana`, `aleksandr-alina`, и т.д.
- **Друзья (день 2, 20 июня, гостевой дом «На пихте», 16:00):** `ruslan-katya`, `artem-zhenya`, `dennis-anya`, и т.д.

### Что меняется в зависимости от типа:
- **Дата и место** — в hero, details, countdown
- **Текст приглашения** — разные посылы для друзей vs родственников
- **Карта** — разные изображения для каждой площадки

---

## 👥 Текущий список гостей

### Родственники (тип: `relatives`, 19 июня)
| Ключ | Имя | Ссылка |
|------|-----|--------|
| `viktor-elena` | Виктор и Елена | https://p1ayman.github.io/marry-me/?guest=viktor-elena |
| `petr-tatyana` | Петр и Татьяна | https://p1ayman.github.io/marry-me/?guest=petr-tatyana |
| `aleksandr-alina` | Александр и Алина | https://p1ayman.github.io/marry-me/?guest=aleksandr-alina |
| `vladimir-iraida` | Владимир и Ираида | https://p1ayman.github.io/marry-me/?guest=vladimir-iraida |
| `anton` | Антон | https://p1ayman.github.io/marry-me/?guest=anton |
| `papa-mama` | Папа и Мама | https://p1ayman.github.io/marry-me/?guest=papa-mama |
| `vladislav-svetlana` | Владислав и Светлана | https://p1ayman.github.io/marry-me/?guest=vladislav-svetlana |
| `valery-lyubov` | Валерий и Любовь | https://p1ayman.github.io/marry-me/?guest=valery-lyubov |
| `polina` | Полина | https://p1ayman.github.io/marry-me/?guest=polina |
| `babulya` | Бабуля | https://p1ayman.github.io/marry-me/?guest=babulya |
| `andrey-nadezhda` | Андрей и Надежда | https://p1ayman.github.io/marry-me/?guest=andrey-nadezhda |
| `anton-anastasia` | Антон и Анастасия | https://p1ayman.github.io/marry-me/?guest=anton-anastasia |
| `yaroslav-anna` | Ярослав и Анна | https://p1ayman.github.io/marry-me/?guest=yaroslav-anna |

### Друзья (тип: `friends`, 20 июня)
| Ключ | Имя | Ссылка |
|------|-----|--------|
| `ruslan-katya` | Руслан и Катя | https://p1ayman.github.io/marry-me/?guest=ruslan-katya |
| `artem-zhenya` | Артем и Женя | https://p1ayman.github.io/marry-me/?guest=artem-zhenya |
| `dennis-anya` | Дэннис и Аня | https://p1ayman.github.io/marry-me/?guest=dennis-anya |
| `vanya-lena` | Ваня и Лена | https://p1ayman.github.io/marry-me/?guest=vanya-lena |
| `vanya-dasha` | Ваня и Даша | https://p1ayman.github.io/marry-me/?guest=vanya-dasha |
| `aleksandr` | Александр | https://p1ayman.github.io/marry-me/?guest=aleksandr |
| `lesha-masha` | Леша и Маша | https://p1ayman.github.io/marry-me/?guest=lesha-masha |
| `sasha-sonya` | Саша и Соня | https://p1ayman.github.io/marry-me/?guest=sasha-sonya |
| `lesha-olya` | Леша и Оля | https://p1ayman.github.io/marry-me/?guest=lesha-olya |
| `sasha-liza` | Саша и Лиза | https://p1ayman.github.io/marry-me/?guest=sasha-liza |
| `artem-anya` | Артем и Аня | https://p1ayman.github.io/marry-me/?guest=artem-anya |
| `andrey-marina` | Андрей и Марина | https://p1ayman.github.io/marry-me/?guest=andrey-marina |
| `fedya-elina` | Федя и Элина | https://p1ayman.github.io/marry-me/?guest=fedya-elina |
| `katerina` | Екатерина | https://p1ayman.github.io/marry-me/?guest=katerina |
| `anastasia` | Анастасия | https://p1ayman.github.io/marry-me/?guest=anastasia |
| `nadya` | Надя | https://p1ayman.github.io/marry-me/?guest=nadya |
| `veronika` | Вероника | https://p1ayman.github.io/marry-me/?guest=veronika |
| `irina` | Ирина | https://p1ayman.github.io/marry-me/?guest=irina |

### Добавить нового гостя

Отредактируй `js/guests.js`:

```javascript
const GUESTS = {
  "name-key": {
    name: "Имя Гостя",
    nameGenitive: "Имени Гостя",  // родительный падеж
    type: "friends"               // или "relatives"
  },
};
```

**Правила для ключей:** только латиница, дефисы, строчные буквы.

---

## 🗓 Детали мероприятий

### День 1 — Родственники
- **Место:** Ресторан «Терраса», г. Чебоксары, ул. А.В. Асламаса, 2Б
- **Дата:** 19 июня 2026
- **Время:** 16:00

### День 2 — Друзья
- **Место:** Гостевой дом «На пихте», д. Пихтулино, Садовая ул., 131
- **Дата:** 20 июня 2026
- **Время:** 16:00

Всё это хранится в `js/app.js`, объект `VENUES`.

---

## 🗺 Управление картами

```javascript
// js/app.js — функция initMap()
const mapImages = {
  friends: 'img/IMG_3090.jpg',       // День 2 — СЖАТЫЙ файл
  relatives: 'img/для гостей.jpg'    // День 1 — СЖАТЫЙ файл
};
```

---

## 🚀 Развертывание (Deployment)

### Рабочий процесс (важно!)
- Я (AI) правлю файлы локально.
- **Пользователь сам** решает, когда загружать изменения на сайт.
- В панели Git (VS Code): написать сообщение → **Фиксация** → **Синхронизация**.
- GitHub Pages автоматически обновит сайт после синхронизации (обычно за 1-2 минуты).

### Локально (разработка)
```bash
cd "/Users/p1ayman/Antigravity/marry me"
python3 -m http.server 8000
# Открыть http://localhost:8000/?guest=rustam-masha
```

---

## 📱 Мобильная оптимизация

Сайт оптимизирован для мобильных телефонов:

| Эффект | Desktop | Mobile |
|--------|---------|--------|
| `backdrop-filter: blur()` | ✅ Включён | ❌ Отключён (тормозит Safari) |
| Параллакс (scroll) | ✅ Включён | ❌ Отключён (тормозит scroll) |
| Частицы | 40 штук | 15 штук |
| Тени на частицах | Двойные | Одинарные |

---

## 🎨 Дизайн & Эффекты

### Шрифты
- **Основной:** Cormorant Garamond (элегантный serif)
- **Скрипт:** Marck Script (рукописный)

### Цветовая палитра
- **Фон:** Теплый бежевый (`#faf8f5`)
- **Текст:** Темный коричневый (`#3a322a`)
- **Акцент:** Золотой (`#b8956a`)

### Визуальные эффекты
1. **Плавающие частицы** — золотые искры, плывут вверх
2. **Shimmer на имена** — золотой блик скользит по тексту
3. **Scroll reveal** — элементы появляются при скроллинге
4. **Hover эффекты** — карточки поднимаются и светятся

---

## 🔧 Версионирование кэша

При изменении CSS/JS обновляй версию в `index.html`:

```html
<link rel="stylesheet" href="css/style.css?v=12">
<script src="js/app.js?v=12"></script>
```

---

## 🐛 Возможные проблемы

| Проблема | Решение |
|----------|---------|
| CSS не обновился | Обнови версию в index.html (`?v=X`) |
| Сайт не обновился | Проверь, что нажал «Синхронизацию» в Git |
| Карта не загружается | Проверь путь в `app.js`, используй `.jpg` версии |
| Неправильное время в отсчёте | Проверь часовой пояс в VENUES (UTC+3) |
