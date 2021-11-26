/**
 * Created by Rick on 2021-11-11.
 */
// component in separate file
import SingleComment from './SingleComment.js';

const root_component = {
  data(){
    return {
      newComment: '',
      comments: [
        'Looks great Rick',
        'Do you want to go fishing?',
        'Where do you live now?'
      ]
    };
  },
  methods: {
    addComment: function(){
      this.comments.push(this.newComment);
      this.newComment = '';
    }
  },
  components: { // reference 'SingleComment' from the import
    'single-comment': SingleComment
  }
};
const app = Vue.createApp(root_component);
const vm = app.mount('#app');