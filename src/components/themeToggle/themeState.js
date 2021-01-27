const { atom } = require("recoil");

const themeState = atom({
  key: "theme",
  default: "light",
  persistence_UNSTABLE: {
    type: "count",
  },
});

export { themeState };
