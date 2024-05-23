export const animationCreate = () => {
  if (typeof window!== "undefined") {
    import("wowjs").then(({ default: WOW }) => {
      new WOW({ live: false }).init();
    });
  }
};