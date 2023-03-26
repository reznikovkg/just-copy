const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

const db = [
  {
    id: "container",
    name: "Ёмкость",
    required: true,
    placeholder: "Выберите ёмкость",
    options: [
      {
        name: "Стакан",
        value: "cup",
      },
      {
        name: "Рожок",
        value: "horn",
      },
      {
        name: "Вафля",
        value: "waffle",
      },
      {
        name: "Ведёрко",
        value: "bucket",
      },
    ],
  },
  {
    id: "iceCream",
    name: "Мороженое",
    required: true,
    placeholder: "Выберите мороженое",
    options: [
      {
        name: "Пломбир",
        value: "plombir",
      },
      {
        name: "Шоколадное",
        value: "chocolate",
      },
      {
        name: "Крем-брюле",
        value: "creme brulee",
      },
      {
        name: "Фисташковое",
        value: "pistachio",
      },
    ],
  },
  {
    id: "syrup",
    name: "Сироп",
    required: false,
    placeholder: "Выберите сироп",
    options: [
      {
        name: "Клубничный",
        value: "strawberry",
      },
      {
        name: "Вишневый",
        value: "cherry",
      },
      {
        name: "Шоколадный",
        value: "chocolate",
      },
      {
        name: "Лимонный",
        value: "lemon",
      },
      {
        name: "Персиковый",
        value: "peach",
      },
    ],
  },
];
app.get("/", (req, res) => {
  res.send("My backend");
});
app.get("/json", (req, res) => {
  if (req.query && req.query.required !== undefined) {
    return res.json(db.filter((item) => item.required === Boolean(req.query.required)));
  }
  res.json(db);
});
app.get("/json/:id", (req, res) => {
  return res.json(db.find((item) => item.id === req.params.id));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
