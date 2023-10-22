<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <RouterLink :to="$localePath" class="home-link">
      <img class="logo" :src="$site.themeConfig.logo" :alt="$siteTitle" />
      <span
        v-if="$siteTitle"
        ref="siteName"
        class="site-name"
        :class="{ 'can-hide': $site.themeConfig.logo }"
        >{{ $siteTitle }}</span
      >
    </RouterLink>

    <NavLinks class="can-hide" />

    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px',
            }
          : {}
      "
    >
      <svg
        @click="toggleLightMode"
        class="theme-toggle icon nav-link-right"
        length="current"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 6C12.5523 6 13 5.55228 13 5V3C13 2.44771 12.5523 2 12 2C11.4477 2 11 2.44771 11 3V5C11 5.55229 11.4477 6 12 6ZM21 11H19C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11ZM5 11C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H3C2.44771 13 2 12.5523 2 12C2 11.4477 2.44771 11 3 11H5ZM6.21828 4.99995C5.81235 4.61611 5.17212 4.63402 4.78828 5.03995C4.40444 5.44588 4.42235 6.08611 4.82828 6.46995L6.26828 7.85995C6.46353 8.04848 6.72703 8.14955 6.99828 8.13995C7.27047 8.13891 7.53047 8.02696 7.71828 7.82995C8.106 7.43991 8.106 6.80999 7.71828 6.41995L6.21828 4.99995ZM17.6916 7.85877C17.5062 8.03745 17.259 8.13774 17.0016 8.13877C16.7504 8.12219 16.5147 8.01149 16.3416 7.82877C15.9538 7.43873 15.9538 6.80881 16.3416 6.41877L17.7816 4.99877C18.1729 4.68338 18.7375 4.7074 19.1006 5.0549C19.4996 5.43676 19.5134 6.06977 19.1316 6.46877L17.6916 7.85877ZM12 18C11.4477 18 11 18.4477 11 19V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V19C13 18.4477 12.5523 18 12 18ZM16.315 16.165C16.6988 15.7674 17.3324 15.7562 17.73 16.14L19.19 17.56L19.1958 17.5658C19.5847 17.9579 19.5821 18.5911 19.19 18.98C19.0005 19.1733 18.7407 19.2816 18.47 19.28C18.2125 19.279 17.9654 19.1787 17.78 19L16.34 17.58C15.9424 17.1962 15.9312 16.5626 16.315 16.165ZM6.27001 16.1413L4.83001 17.5313C4.43789 17.9203 4.43529 18.5534 4.82421 18.9455L4.83001 18.9513C5.01951 19.1447 5.27929 19.2529 5.55001 19.2513C5.79652 19.2534 6.03513 19.1644 6.22001 19.0013L7.66001 17.6113C8.05765 17.2275 8.06885 16.594 7.68501 16.1963C7.30117 15.7987 6.66766 15.7875 6.27001 16.1713V16.1413ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
          fill="currentColor"
        />
      </svg>

      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />

      <SearchBox
        @open-search-modal="$emit('open-search-modal')"

        v-else-if="
          $site.themeConfig.search !== false &&
          $page.frontmatter.search !== false
        "
        ref="modalOpener"
      />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from "@AlgoliaSearchBox";
import SearchBox from "@theme/components/SearchBox.vue";
import SidebarButton from "@theme/components/SidebarButton.vue";
import NavLinks from "@theme/components/NavLinks.vue";

export default {
  name: "Navbar",

  components: {
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox,
  },

  data() {
    return {
      linksWrapMaxWidth: null,
      isLight: false,
    };
  },

  methods: {
    toggleLightMode() {
      this.$store.commit("toggleLightMode");
      if (this.$store.state.isLight) {
        console.log("Light mode activated.");
      } else if (!this.$store.state.isLight) {
        console.log("Light mode deactivated.");
      }
    },
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    },
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, "paddingLeft")) +
      parseInt(css(this.$el, "paddingRight"));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener("resize", handleLinksWrapWidth, false);
  },
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.question
  width 20px
  height auto
  padding-right .55em
  padding-top .25em
  // margin-top 0rem !important


.icon
  height 30px
  width 24px
  padding-right 0.25em
  padding-left 0.25em
  // padding-top 4px


.theme-toggle
  color: var(--TextColor)
  background-color transparent
  display inline-block
  overflow hidden
  white-space nowrap
  cursor pointer
  padding-right .5rem
  padding-top .05rem
  height 30px !important

.github-logo
  color var(--TextColor)
  margin none
  padding-top 2.5px


.discord-logo
  color var(--TextColor)
  padding-right .425rem
  padding-top 2.5px

.navbar
  // margin-top 50px !important
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  border-bottom 1px solid var(--BorderColor)
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color: var(--TextColor)
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color: var(--BgColor2)
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top
.nav-link-right
    // padding-right 1em
    color: var(--TextColor)
    padding-bottom 0px !important

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
