import Component from '@ember/component';

export default Component.extend({
		actions:{
				displayMenu(){
						console.log('hey');
				  let nav = document.getElementById('nav');
						console.log(nav);
						nav.style.display='block';
				}
		}
});
