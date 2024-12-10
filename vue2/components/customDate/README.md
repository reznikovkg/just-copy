## CustomDate

Класс для перевода дат.

Использование:

```js
let date1 = CustomDate.decodeDate("YYYY-MM-DD", "2020-12-10");
console.log(date1); // Будет 10 декабря 2020 года

let date2 = CustomDate.decodeDate("DD MM test YYYY", "08 09 test 2019");
console.log(date2); // Будет 8 сентября 2019 года


let date11 = CustomDate.encodeDate("YYYY MM DD test", date1);
console.log(date11); // Будет 2020 12 10 test
let date22 = CustomDate.encodeDate("DD, MM, YYYY", date2);
console.log(date22); // Будет 08, 09, 2019
```