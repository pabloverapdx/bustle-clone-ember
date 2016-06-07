import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  actions: {
    destroyArticleFromIndex(article) {
      article.destroyRecord();
      this.transitionTo('index');
    }
  }
});
