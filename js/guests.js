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
  // === РОДСТВЕННИКИ (День 1 — Ресторан «Терраса», 19 июня) ===
  "viktor-tatyana": {
    name: "Виктор и Татьяна",
    nameGenitive: "Виктора и Татьяны",
    type: "relatives"
  },
  "petr-tatyana": {
    name: "Петр и Татьяна",
    nameGenitive: "Петра и Татьяны",
    type: "relatives"
  },
  "alina-aleksandr": {
    name: "Алина и Александр",
    nameGenitive: "Алины и Александра",
    type: "relatives"
  },
  "mama-papa": {
    name: "Мама и папа",
    nameGenitive: "мамы и папы",
    type: "relatives"
  },
  "polina": {
    name: "Полина",
    nameGenitive: "Полины",
    type: "relatives"
  },
  "babulya": {
    name: "Бабуля",
    nameGenitive: "бабули",
    type: "relatives"
  },
  "nadezhda-andrey": {
    name: "Надежда и Андрей",
    nameGenitive: "Надежды и Андрея",
    type: "relatives"
  },
  "anton-masha": {
    name: "Антон и Маша",
    nameGenitive: "Антона и Маши",
    type: "relatives"
  },
  "anya-yaroslav": {
    name: "Аня и Ярослав",
    nameGenitive: "Ани и Ярослава",
    type: "relatives"
  },

  // === ДРУЗЬЯ (День 2 — Гостевой дом «На пихте», 20 июня) ===
  "rustam-masha": {
    name: "Рустам и Маша",
    nameGenitive: "Рустама и Маши",
    type: "friends"
  },
  "artem-lena": {
    name: "Артем и Лена",
    nameGenitive: "Артема и Лены",
    type: "friends"
  },
  "dennis-anya": {
    name: "Дэннис и Аня",
    nameGenitive: "Дэнниса и Ани",
    type: "friends"
  },
  "dmitry-lena": {
    name: "Дмитрий и Лена",
    nameGenitive: "Дмитрия и Лены",
    type: "friends"
  },
  "dmitry-darya": {
    name: "Дмитрий и Дарья",
    nameGenitive: "Дмитрия и Дарьи",
    type: "friends"
  },
  "aleksandr": {
    name: "Александр",
    nameGenitive: "Александра",
    type: "friends"
  },
  "yulia-darya": {
    name: "Юля и Дарья",
    nameGenitive: "Юли и Дарьи",
    type: "friends"
  },
  "sara-sonya": {
    name: "Сара и Соня",
    nameGenitive: "Сары и Сони",
    type: "friends"
  },
  "yulia-alya": {
    name: "Юля и Аля",
    nameGenitive: "Юли и Али",
    type: "friends"
  },
  "artem-anya": {
    name: "Артем и Аня",
    nameGenitive: "Артема и Ани",
    type: "friends"
  },
  "marina-andrey": {
    name: "Марина и Андрей",
    nameGenitive: "Марины и Андрея",
    type: "friends"
  },
  "elina-fedya": {
    name: "Элина и Федя",
    nameGenitive: "Элины и Феди",
    type: "friends"
  },
  "katerina": {
    name: "Екатерина",
    nameGenitive: "Екатерины",
    type: "friends"
  },
  "anastasia": {
    name: "Анастасия",
    nameGenitive: "Анастасии",
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
  }
};
