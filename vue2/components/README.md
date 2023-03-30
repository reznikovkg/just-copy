#
##Checkbox.vue

 checkbox isn't checked
 
![image](https://user-images.githubusercontent.com/46415000/225363379-0b2dbab9-fb23-453d-a8b3-8990f33b1f90.png)

checkbox is checked

![image](https://user-images.githubusercontent.com/46415000/225363439-f6464ec0-214c-47d4-a126-7c9341199534.png)

checkbox is disabled

![image](https://user-images.githubusercontent.com/46415000/228894214-5aaf40e3-68f8-424d-9385-75e2749601a2.png)


Этот компонент представляет из себя чекбокс, при нажатии на который он меняет цвет и изображение внутри.
Данный компонент содержит prop - value типа boolean, обозначающий текущее состояние чекбокса, prop типа boolean disabled, отвечающий за отключение компонента и событие "change", которое отвечает за изменение чекбокса в методе "check".
```
<template>
  <div id="app">
    <CheckBox v-model="switch1" label="checkbox"/>
    <CheckBox v-model="switch2" label="checkbox2" :disabled="true"/>
  </div>
</template>

<script>
import CheckBox from "../../../components/checkbox/Checkbox.vue";
export default {
  name: 'CustomCheckbox',
  components: {
    CheckBox
  },
  data() {
    return {
      switch1: false,
      switch2: true
    };
  }
};
</script>
  
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

switch is disabled

![image](https://user-images.githubusercontent.com/46415000/228895706-0be07482-77f5-451a-83dc-c9a7e4071cb2.png)


 Компонент представляет из себя кнопку-переключатель, при нажатии на которую изменяется её цвет и проигрывается анимация.
 Данный компонент содержит prop - value типа boolean, обозначающий текущее состояние переключателя, prop типа boolean disabled, отвечающий за отключение компонента и событие "change", которое отвечают за изменение переключателя в методе "toggle".
```
 <template>
  <div id="app">
    <SwitchButton v-model="switch1"/>
  </div>
</template>

<script>
import SwitchButton from "../../../components/switch/SwitchButton.vue";
export default {
  name: 'CustomCheckbox',
  components: {
    SwitchButton
  },
  data() {
    return {
      switch1: false,
    };
  }
};
</script>
  ```
  Импорт компонента и использование компонента производятся с помощью данных команд
```
import SwitchButton from './components/SwichButton.vue'

 <SwitchButton v-model="v-model-name"></SwitchButton>
```
