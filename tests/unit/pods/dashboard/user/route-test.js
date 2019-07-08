import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dashboard/user', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dashboard/user');
    assert.ok(route);
  });
});
