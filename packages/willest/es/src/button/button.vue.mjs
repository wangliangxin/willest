import { defineComponent as e, computed as r, openBlock as u, createElementBlock as s, normalizeClass as p, unref as c, renderSlot as a } from "vue";
import "./style/index.css";
const m = e({
  name: "wl-button"
}), d = /* @__PURE__ */ e({
  ...m,
  props: {
    type: null
  },
  setup(o) {
    const t = o, n = r(() => ({ [`wl-button--${t.type}`]: t.type }));
    return (l, f) => (u(), s("button", {
      class: p(["wl-button", c(n)])
    }, [
      a(l.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
