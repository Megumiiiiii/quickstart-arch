const { description } = require("../../package");
const default_sidebar_config = require("./theme/configs/default_sidebar_config");
const nav_config = require("./theme/configs/Nav_Config");


module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Quickstart Archeologist",
  base: '/',


  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'How to start your own Archeologist',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { property: "og:image", content: "/images/logo.png", }],
    ["meta", { name: "theme-color", content: "#32a852" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["link", { rel: "icon", href: "/images/sarco.png" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    searchPlaceholder: "Search",
    repo: "https://github.com/Megumiiiiii/quickstart-arch/tree/master/src",
    editLinks: true,
    docsDir: "",
    editLinkText: "Edit this page on GitHub",
    lastUpdated: true,
    initialOpenGroupIndex: 1,
    //logo path will need to be adjusted for deployment
    logo: "/images/sarco.png",
    nav: nav_config,
    sidebar: {
      "/": default_sidebar_config,
    },
  },


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom", 'vuepress-plugin-code-copy'],
};
