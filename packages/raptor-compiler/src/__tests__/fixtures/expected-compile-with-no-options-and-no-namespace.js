import { Element } from 'engine';

function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    h: api_element
  } = $api;

  return [api_element("section", {}, [])];
}

class FooBar extends Element {
  render() {
    return tmpl;
  }

}

export default FooBar;