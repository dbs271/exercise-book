const { atom } = require("recoil");

const todoListState = atom({
  key: "todoListState",
  default: [],
});
