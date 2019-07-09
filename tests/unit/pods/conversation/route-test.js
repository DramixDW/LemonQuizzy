import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | conversation', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:conversation');
    assert.ok(route);
  });
});
