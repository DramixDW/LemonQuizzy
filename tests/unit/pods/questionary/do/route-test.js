import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | questionary/do', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:questionary/do');
    assert.ok(route);
  });
});
