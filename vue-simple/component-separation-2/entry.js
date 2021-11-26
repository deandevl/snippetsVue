import {RssComp} from './RssComp.js';

const root_component = {
  data() {
    return {
      source: 'https://www.reddit.com/.rss',
      css_variables: {}
    };
  },
  template: `
    <div class='demo_container'>     
      <rss-comp :source="source">
      </rss-comp>
    </div>
  `,
  components: {
    RssComp
  }
};
const app = Vue.createApp(root_component);
const vm = app.mount('#app');
