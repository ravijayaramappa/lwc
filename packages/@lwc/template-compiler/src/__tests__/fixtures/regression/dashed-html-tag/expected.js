import { registerTemplate } from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const { h: api_element } = $api;
  return [
    api_element(
      "section",
      {
        key: 0,
      },
      [
        api_element(
          "color-profile",
          {
            attrs: {
              local: "x",
            },
            key: 1,
          },
          []
        ),
      ]
    ),
  ];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
