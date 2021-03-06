import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: true,
  actions: {
    delete(article) {
      if (confirm('Are you sure you want to delete this article?')) {
        this.sendAction('destroyArticle', article);
      }
    }
  }
});
