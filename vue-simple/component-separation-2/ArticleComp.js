export const ArticleComp = {
  name: 'ArticleComp',
  template: `
    <article class="articleComp">
      <h3 class="articleComp_h3">{{article.title}}</h3>
      <p class="articleComp_content" v-html="article.content"></p>
      <a class="articleComp_a" :href="article.link" target="_blank">Read...</a>
    </article>
  `,
  props: {
    article: {
      type: Object,
      default: null
    },
    css_variables: {
      type: Object,
      default: () => {
        return null;
      }
    }
  },
  mounted: function() {
    if(this.css_variables !== null){
      for(let key of Object.keys(this.css_variables)){
        this.$el.style.setProperty(`--${key}`, this.css_variables[key]);
      }
    }
  }    
};