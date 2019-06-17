import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | forum/topics', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:forum/topics');
    assert.ok(route);
  });
});
