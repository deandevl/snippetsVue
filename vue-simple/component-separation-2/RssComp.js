import {ArticleComp} from "./ArticleComp.js";

export const RssComp = {
  name: 'RssComp',
  template: `
    <div>
      <article-comp v-for="(article,index) of articles" :key="index" :article="article"></article-comp>
    </div>
  `,
  data: function() {
    return {
      articles: null,
      feed_title: null,
    };
  },
  props: {
    title: {
      type: String,
      default: null
    },
    source: {
      type: String,
      default: null
    },
    css_variables: {
      type: Object,
      default: () => {
        return null;
      }
    }
  },
  components: {
    ArticleComp
  },
  mounted(){
    if(this.source !== null){
      const parser = new RSSParser();
      const config = {mode: 'cors'};
      fetch('https://cors-anywhere.herokuapp.com/' + this.source,config).then(response => {
        if(response.ok){
          return response.text();
        }
        throw new Error(response.statusText);
      }).then(resp_str => {
        parser.parseString(resp_str, (err, feed) =>{
          this.feed_title = feed.title;
          this.articles = [];
          feed.items.forEach((entry) =>{
            this.articles.push({title: entry.title, content: entry.content, link: entry.link});
          });
        });
      }).catch(error => {
        console.log(error.message);
      });
    }
    if(this.css_variables !== null){
      for(let key of Object.keys(this.css_variables)){
        this.$el.style.setProperty(`--${key}`, this.css_variables[key]);
      }
    }
  }    
};