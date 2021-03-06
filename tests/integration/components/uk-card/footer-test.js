import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | uk card/footer", function(hooks) {
  setupRenderingTest(hooks);

  test("renders", async function(assert) {
    await render(hbs`{{#uk-card/footer}}Content{{/uk-card/footer}}`);

    assert.dom(".uk-card-footer").exists();
  });
});
