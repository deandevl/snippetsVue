/**
 * Created by Rick on 2021-11-12.
 */
'use strict';
import ChildWithSlots from './ChildWithSlots.js';

const root_component = {
  components: {
    ChildWithSlots
  },
  template: `
    <h2>We can use slots to populate content</h2>
      <child-with-slots>
        <template v-slot:headerSlot>
          <h2>First Child Title (slot name: headerSlot)</h2>
        </template> 
        <template v-slot:contentSlot>
          <p >This is first child content (slot name: contentSlot)</p>
        </template> 
      </child-with-slots>
      
      <child-with-slots>
        <template v-slot:headerSlot>
          <h2>Second Child (slot name: headerSlot)</h2>
        </template> 
        <template v-slot:contentSlot>
          <p >This is second child content (slot name: contentSlot)</p>
        </template> 
        <small>I can put more info in, too! in the default slot</small>
      </child-with-slots>
      
      <h2>Third child with default slot displayed</h2>
      <child-with-slots>
        <template v-slot:default>
          <p>This is the third child content (slot name: default)</p>
        </template>
      </child-with-slots>
      
      <h2>Fourth unnamed slot child goes to the default slot</h2>
      <child-with-slots>
        <p>This is the fourth child content</p>
      </child-with-slots>
      
  `
};
const app = Vue.createApp(root_component);
const vm = app.mount('#app');