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
  "viktor-elena": {
    name: "Виктор и Елена",
    nameGenitive: "Виктора и Елены",
    type: "relatives"
  },
  "petr-tatyana": {
    name: "Петр и Татьяна",
    nameGenitive: "Петра и Татьяны",
    type: "relatives"
  },
  "aleksandr-alina": {
    name: "Александр и Алина",
    nameGenitive: "Александра и Алины",
    type: "relatives"
  },
  "vladimir-iraida": {
    name: "Владимир и Ираида",
    nameGenitive: "Владимира и Ираиды",
    type: "relatives"
  },
  "anton": {
    name: "Антон",
    nameGenitive: "Антона",
    type: "relatives"
  },
  "papa-mama": {
    name: "Папа и Мама",
    nameGenitive: "папы и мамы",
    type: "relatives"
  },
  "vladislav-svetlana": {
    name: "Владислав и Светлана",
    nameGenitive: "Владислава и Светланы",
    type: "relatives"
  },
  "valery-lyubov": {
    name: "Валерий и Любовь",
    nameGenitive: "Валерия и Любови",
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
  "andrey-nadezhda": {
    name: "Андрей и Надежда",
    nameGenitive: "Андрея и Надежды",
    type: "relatives"
  },
  "anton-anastasia": {
    name: "Антон и Анастасия",
    nameGenitive: "Антона и Анастасии",
    type: "relatives"
  },
  "yaroslav-anna": {
    name: "Ярослав и Анна",
    nameGenitive: "Ярослава и Анны",
    type: "relatives"
  },

  // === ДРУЗЬЯ (День 2 — Гостевой дом «На пихте», 20 июня) ===
  "ruslan-katya": {
    name: "Руслан и Катя",
    nameGenitive: "Руслана и Кати",
    type: "friends"
  },
  "artem-zhenya": {
    name: "Артем и Женя",
    nameGenitive: "Артема и Жени",
    type: "friends"
  },
  "dennis-anya": {
    name: "Дэннис и Аня",
    nameGenitive: "Дэнниса и Ани",
    type: "friends"
  },
  "vanya-lena": {
    name: "Ваня и Лена",
    nameGenitive: "Вани и Лены",
    type: "friends"
  },
  "vanya-dasha": {
    name: "Ваня и Даша",
    nameGenitive: "Вани и Даши",
    type: "friends"
  },
  "aleksandr": {
    name: "Александр",
    nameGenitive: "Александра",
    type: "friends"
  },
  "lesha-masha": {
    name: "Леша и Маша",
    nameGenitive: "Леши и Маши",
    type: "friends"
  },
  "sasha-sonya": {
    name: "Саша и Соня",
    nameGenitive: "Саши и Сони",
    type: "friends"
  },
  "lesha-olya": {
    name: "Леша и Оля",
    nameGenitive: "Леши и Оли",
    type: "friends"
  },
  "sasha-liza": {
    name: "Саша и Лиза",
    nameGenitive: "Саши и Лизы",
    type: "friends"
  },
  "artem-anya": {
    name: "Артем и Аня",
    nameGenitive: "Артема и Ани",
    type: "friends"
  },
  "andrey-marina": {
    name: "Андрей и Марина",
    nameGenitive: "Андрея и Марины",
    type: "friends"
  },
  "fedya-elina": {
    name: "Федя и Элина",
    nameGenitive: "Феди и Элины",
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
