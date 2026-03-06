const MyApp = window.MyApp || {};
MyApp.Utils = (() => {
  return {
    validate: (data) => data.name !== ""
  };
})();