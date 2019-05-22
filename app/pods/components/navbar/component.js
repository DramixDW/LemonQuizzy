import Component from '@ember/component';

export default Component.extend({
		actions:{
				displayMenu(){
						let nav = document.getElementById('nav');
						if(nav.style.maxHeight == '1000px')nav.style.maxHeight='0px';
						else nav.style.maxHeight='1000px';
				}
		}
});
