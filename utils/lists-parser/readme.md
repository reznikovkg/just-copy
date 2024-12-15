
# **HTML List Parser**

## **Описание**

Скрипт позволяет парсить HTML-страницы и собирать данные в виде массива объектов на основе CSS-селекторов.  
Поддерживает как получение текста из элементов, так и извлечение **атрибутов** (например, `href`, `src`) и **вложенные структуры**.


## **Инструкция по использованию**

1. Откройте любую HTML-страницу, с которой хотите работать.
2. Перейдите в консоль браузера (**F12** → **Console**) и вставьте содержимое файла `main.js`.
3. Вызовите функцию **`parseList`** с нужными аргументами.
4. Результат будет выведен в консоль (`console.log`) в виде массива объектов

---

## **Функция `parseList`**

### **Описание**

Функция принимает 3 аргумента:

```javascript
parseList(rootSelector, itemSelector, structure);
```

- **`rootSelector`** – CSS-селектор корневого элемента, содержащего весь список.
- **`itemSelector`** – CSS-селектор элемента списка (карточки).
- **`structure`** – Объект, описывающий поля, которые нужно получить из каждого элемента.

### **Особенности:**
1. Для **атрибутов** используйте синтаксис с префиксом `@`:
   - Пример: `"@.link:href"` для получения `href` у тега `<a>`.
2. Поддерживаются **вложенные объекты** в структуре.

---

## **Примеры использования**

### **Пример**

#### **HTML-код:**
```html
<div class="s-products-list">
  <div class="s-product-wrapper">
    <a class="s-product-header" href="https://example.com/product1">Товар 1</a>
    <div class="flexdiscount-product-bonus">Бонус: 10%</div>
    <div class="s-price price-wrapper">1000 руб.</div>
    <div class="s-compare-price price-wrapper">800 руб.</div>
  </div>
</div>
```

#### **Вызов функции:**
```javascript
parseList('.s-products-list', '.s-product-wrapper', {
  postTitle: ".s-product-header",
  postLink: "@.s-product-header:href",
  bonuses: ".flexdiscount-product-bonus",
  prices: {
    priceStandart: ".s-price.price-wrapper",
    priceDiscounted: ".s-compare-price.price-wrapper",
  }
});
```

#### **Результат:**
```json
[
  {
    "postTitle": "Товар 1",
    "postLink": "https://example.com/product1",
    "bonuses": "Бонус: 10%",
    "prices": {
      "priceStandart": "1000 руб.",
      "priceDiscounted": "800 руб."
    }
  }
]
```

---

### Демонстрация работы: 

[Посмотреть видео](https://disk.yandex.ru/i/Hfg4cpu_uYTOHg)
