/**
 * Created by Rick on 2021-11-12.
 */
'use strict';
import SimpleList from './SimpleList.js';

const root_component = {
  template: `
    <div>
      <button @click="change_title_color">Change Pets Title Color</button>
      <simple-list ref="shapesList" title="My Shapes" :items="my_shapes"></simple-list>
      <simple-list ref="petsList" title="My Pets" :description="my_pets_description" :items="my_pets"></simple-list>
    </div>
  `,
  data() {
    return {
      my_shapes: [
        {name: 'Square',description: '4 sides'},
        {name: 'Hexagon',description: '6 sides'},
        {name: 'Triangle',description: '3 sides'}
      ],
      my_pets: [
        {name: 'Pete',description: 'My pet dog'},
        {name: 'Sally',description: 'My pet python'},
        {name: 'Billy',description: 'My pet hamster'}
      ],
      my_pets_description: {major: 'My Lovable Pets',minor: 'They keep me happy all the time'}
    };
  },
  methods:{
    change_title_color: function(){
      // change the css variable '--title-color' of 'SimpleList.css'
      vm.$refs.petsList.setCssVariables('title-color', 'red');
    }
  },
  components: {SimpleList}
};

const app = Vue.createApp(root_component);
const vm = app.mount('#app');

// get the css variable '--title-color' of 'SimpleList.css'
const css_var_title_color = vm.$refs.petsList.getCssVariable('title-color');
console.log(`css_var_title_color: ${css_var_title_color}`);
