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
        updateList(){
            let searchName = this.get('searchName');
            let searchAuthor = this.get('searchAuthor');
            let searchTeacher = document.getElementById('searchTeacher');
            let toFilter =this.get('model'); 
            let name;
            let author;
            let teacher;
            toFilter= toFilter.filter(elem =>{
                if(searchTeacher.checked){
                    if(elem.author.get('role') === "teacher") teacher=true
                    else teacher = false;
                } else{
                    teacher = true;
                }
                if(searchName != undefined){
                    name = elem.title.indexOf(searchName) !== -1
                } else{
                    name = true
                }
                if(searchAuthor != undefined){
                    author = elem.author.get('username').includes(searchAuthor)
                } else {
                    author = true
                }    
                console.log(teacher,name,author)
                return teacher && name && author
            })
            this.set('list',toFilter);
        },
        detract(){
            let retracted = document.getElementById('detracted')
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