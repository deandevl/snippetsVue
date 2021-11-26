
export default {
  name: 'SimpleList',
  template: `
    <div>
      <h2 class="title">{{title}}</h2>
      <h3>{{description.major}}</h3>
      <p>{{description.minor}}</p>
      <div class="list">
        <div class="list-item" v-for="item in items">
          <div>{{item.name}}: <small>{{item.description}} </small></div>
        </div>
      </div>
    </div>
  `,
  props: {
    title: {
      type: String, //primitive type
      default: 'A Title'
    },
    description: {
      type: Object,
      default: () => {
        return{
          major: 'Default Major Description',
          minor: 'Default paragraph about this simple list'
        };
      }
    },
    items: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    setCssVariables: function(varName,value){
      this.$el.style.setProperty(`--${varName}`,value);
    },
    getCssVariable: function(varName){
      const elementStyles = getComputedStyle(document.documentElement);
      return elementStyles.getPropertyValue(`--${varName}`).trim();
    }
  }
}