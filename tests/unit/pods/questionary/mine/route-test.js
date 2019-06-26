import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | questionary/mine', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:questionary/mine');
    assert.ok(route);
  });
});
