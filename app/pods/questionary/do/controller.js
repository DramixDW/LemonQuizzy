import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
    session:     service('session'),
    currentUser: service('current-user'),
    store: service(),
    pageNum: 1,
    updateCount: function(){
        let pageCount = document.getElementById('pageCount');
        pageCount.innerHTML = `${this.pageNum}/${this.pageTot}`;
    },
    setVisibility(name,display){
        let x = document.getElementsByClassName(name);
        for (let i = 0; i < x.length; i++) {
             x[i].style.display = display;
        }
    },
      actions: {
        goLeft: function(){
            if(this.pageNum === 1) return;
            else this.pageNum--;
            this.updateCount();  
        },
        goRight: function(){
            if(this.pageNum === this.pageTot) return;
            else this.pageNum++;
            this.updateCount();
        }     
    }
    
   
});
