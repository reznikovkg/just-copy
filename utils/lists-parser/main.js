/**
 * Парсит HTML-страницу и формирует массив объектов на основе селекторов и структуры.
 *
 * @param {string} rootSelector - CSS-селектор корневого элемента, содержащего список.
 * @param {string} itemSelector - CSS-селектор элемента списка.
 * @param {Object} structure - Объект с ключами и селекторами для полей результата.
 *                             Специальный синтаксис `@selector:attribute` позволяет получить атрибут элемента.
 *                             Поддерживаются вложенные структуры.
 * @returns {Array<Object>} - Массив объектов с распарсенными данными.
 */
function parseList(rootSelector, itemSelector, structure) {
 try {
   const root = document.querySelector(rootSelector);
   if (!root) {
     console.error(`Root element "${rootSelector}" не найден.`);
     return [];
   }

   const items = root.querySelectorAll(itemSelector);
   if (!items.length) {
     console.error(`Элементы по селектору "${itemSelector}" не найдены.`);
     return [];
   }

   const result = Array.from(items).map((item) => parseItem(item, structure));
   // console.log("Результат парсинга:", result);
   return result;
 } catch (error) {
   console.error("Ошибка парсинга:", error);
   return [];
 }
}

/**
* Парсит один элемент на основе переданной структуры.
*
* @param {Element} item - HTML-элемент, который нужно распарсить.
* @param {Object} structure - Структура объекта с селекторами.
* @returns {Object} - Распарсенный объект.
*/
function parseItem(item, structure) {
 const parsedItem = {};

 for (const [key, selector] of Object.entries(structure)) {
   if (typeof selector === "object") {
     // Рекурсивный парсинг для вложенных структур
     parsedItem[key] = parseItem(item, selector);
   } else {
     let attribute = null;

     // Проверка на атрибут (если селектор начинается с @)
     if (selector.startsWith("@")) {
       const [attrSelector, attr] = selector.split(":");
       attribute = attr.trim();
     }

     const fields = item.querySelectorAll(
       attribute ? selector.slice(1).split(":")[0] : selector
     );

     if (fields.length > 1) {
       parsedItem[key] = Array.from(fields).map((el) =>
         attribute ? el.getAttribute(attribute) : el.textContent.trim()
       );
     } else {
       parsedItem[key] = fields.length
         ? attribute
           ? fields[0].getAttribute(attribute)
           : fields[0].textContent.trim()
         : null;
     }
   }
 }

 return parsedItem;
};