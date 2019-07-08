import Route from '@ember/routing/route';

export default Route.extend({
    setupController(controller){
        controller.set('options',{
            dropdown: true,
            timeFormat: 'HH:mm',
            interval: 15,
            maxHour: 3
        })
    }
});
