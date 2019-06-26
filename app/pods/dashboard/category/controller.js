import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
    session:     service('session'),
    currentUser: service('current-user'),
    store: service(),
    init(){
        this._super(...arguments);
    },
    actions: {
        removeCategory(id) {
            this.store.findRecord("category", id).then(category =>{
                category.destroyRecord({adapterOptions :`admin/${id}`})
            });
        },
        detract(id){
            let retracted = document.getElementById(id);
            let symbol = document.getElementById(`symbol-${id}`)
            if(retracted.style.maxHeight !== '1500px'){
                symbol.innerHTML='&or;'
                retracted.style.maxHeight='1500px';
            } else{
                symbol.innerHTML='>'
                retracted.style.maxHeight='0px';
            }
        }
    }
});
