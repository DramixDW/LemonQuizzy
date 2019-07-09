import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.query('message', {
      include: 'receiver,sender,receiver.avatar,sender.avatar',
      reload : false,
      backgroundReload: false
    }).then(pool =>{
      return pool;
    })
  },
  deactivate(){
    //this.render();
  }
});
