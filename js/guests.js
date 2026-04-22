/**
 * Данные гостей для свадебного приглашения.
 * 
 * Формат ключа: используйте латиницу, строчные буквы, дефис вместо пробелов.
 * Это значение будет в URL: yoursite.com/?guest=ключ
 * 
 * type: "relatives" — День 1 (Терраса, 19 июня)
 * type: "friends"   — День 2 (На пихте, 20 июня)
 * nameGenitive — имя в родительном падеже (для «Для Кати»)
 */
const GUESTS = {
  // === РОДСТВЕННИКИ (День 1 — Ресторан «Терраса») ===
  "ivan-petrov": {
    name: "Иван и Мария",
    nameGenitive: "Ивана и Марии",
    type: "relatives"
  },
  "elena-smirnova": {
    name: "Елена",
    nameGenitive: "Елены",
    type: "relatives"
  },

  // === ДРУЗЬЯ (День 2 — Гостевой дом «На пихте») ===
  "andrey-marina": {
    name: "Андрей и Марина",
    nameGenitive: "Андрея и Марины",
    type: "friends"
  },
  "elina-fedya": {
    name: "Федя и Элина",
    nameGenitive: "Феди и Элины",
    type: "friends"
  },
  "katya": {
    name: "Катя",
    nameGenitive: "Кати",
    type: "friends"
  },
  "nastya": {
    name: "Настя",
    nameGenitive: "Насти",
    type: "friends"
  },
  "nadya": {
    name: "Надя",
    nameGenitive: "Нади",
    type: "friends"
  },
  "veronika": {
    name: "Вероника",
    nameGenitive: "Вероники",
    type: "friends"
  },
  "irina": {
    name: "Ирина",
    nameGenitive: "Ирины",
    type: "friends"
  },
  "dennis-anya": {
    name: "Дэннис и Аня",
    nameGenitive: "Дэнниса и Ани",
    type: "friends"
  },
  "dmitry-volkov": {
    name: "Дмитрий",
    nameGenitive: "Дмитрия",
    type: "friends"
  }
};
