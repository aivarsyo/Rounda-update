const settings = {
  name: "rounda",
  state: {
    frontity: {
      url: "http://localhost:1212/rounda/",
      title: "Rounda",
      description: "Digital Agency",
    },
  },
  packages: [
    {
      name: "rounda",
      state: {
        theme: {
          autoPrefetch: "hover",
          menu: [
            ["Home", "/"],
            ["Test Page", "/test-page"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "http://localhost:1212/rounda/wp-json/",
          homepage: "home",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
