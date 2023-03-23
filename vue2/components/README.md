#
##Checkbox.vue
 checkbox isn't checked
![image](https://user-images.githubusercontent.com/46415000/225363379-0b2dbab9-fb23-453d-a8b3-8990f33b1f90.png)
checkbox is checked
![image](https://user-images.githubusercontent.com/46415000/225363439-f6464ec0-214c-47d4-a126-7c9341199534.png)

Этот компонент представляет из себя чекбокс, при нажатии на который он меняет цвет и изображение внутри.
Данный компонент содержит prop - value типа boolean, обозначающий текущее состояние чекбокса и событие "change", которое отвечают за изменение чекбокса в методе "check".
```
 model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: Boolean
  },
  methods: {
    check: function () {
      this.$emit("change", !this.value);
    }
  }
```
Импорт компонента и использование компонента производятся с помощью данных команд
```
import CheckBox from './components/Checkbox.vue'

 <CheckBox v-model="v-model-name"></CheckBox>
```
##SwitchButton.vue
switch isn't checked
![image](https://user-images.githubusercontent.com/46415000/227205062-65c05507-5d3a-4b8b-a471-c809b6a000c5.png)
switch is checked
![image](https://user-images.githubusercontent.com/46415000/227205372-167e884e-748d-4836-b904-914ee38d1d92.png)
 Компонент представляет из себя кнопку-переключатель, при нажатии на которую изменяется её цвет и проигрывается анимация.
 Данный компонент содержит prop - value типа boolean, обозначающий текущее состояние переключателя и событие "change", которое отвечают за изменение переключателя в методе "toggle".
```
 model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: Boolean
  },
  methods: {
    toggle: function () {
      this.$emit("change", !this.value);
    }
  }
  ```
  Импорт компонента и использование компонента производятся с помощью данных команд
```
import SwitchButton from './components/SwichButton.vue'

 <SwitchButton v-model="v-model-name"></SwitchButton>
```
