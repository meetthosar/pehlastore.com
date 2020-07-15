import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1173589f = () => interopDefault(import('..\\pages\\blog\\blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _55d02dd2 = () => interopDefault(import('..\\pages\\blog\\blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _4799dd9d = () => interopDefault(import('..\\pages\\blog\\blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _e1303be4 = () => interopDefault(import('..\\pages\\blog\\blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _4b3afbd1 = () => interopDefault(import('..\\pages\\collection\\full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _439d468a = () => interopDefault(import('..\\pages\\collection\\list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _61b10060 = () => interopDefault(import('..\\pages\\collection\\metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _07924619 = () => interopDefault(import('..\\pages\\collection\\no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _337b6ff2 = () => interopDefault(import('..\\pages\\collection\\right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _634ae37c = () => interopDefault(import('..\\pages\\collection\\sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _ef98904c = () => interopDefault(import('..\\pages\\collection\\six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _3abd8a5e = () => interopDefault(import('..\\pages\\collection\\three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _4383ddae = () => interopDefault(import('..\\pages\\page\\404.vue' /* webpackChunkName: "pages/page/404" */))
const _76010603 = () => interopDefault(import('..\\pages\\page\\about.vue' /* webpackChunkName: "pages/page/about" */))
const _209a6e98 = () => interopDefault(import('..\\pages\\page\\collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _6786f886 = () => interopDefault(import('..\\pages\\page\\coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _2116fee8 = () => interopDefault(import('..\\pages\\page\\faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _6eb74582 = () => interopDefault(import('..\\pages\\page\\lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _63ac650c = () => interopDefault(import('..\\pages\\page\\order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _f313695c = () => interopDefault(import('..\\pages\\page\\review.vue' /* webpackChunkName: "pages/page/review" */))
const _65bbdcbc = () => interopDefault(import('..\\pages\\page\\search.vue' /* webpackChunkName: "pages/page/search" */))
const _ce88f6ae = () => interopDefault(import('..\\pages\\page\\typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _b2420b10 = () => interopDefault(import('..\\pages\\product\\bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _afe93070 = () => interopDefault(import('..\\pages\\product\\four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _d824fa14 = () => interopDefault(import('..\\pages\\shop\\bags\\index.vue' /* webpackChunkName: "pages/shop/bags/index" */))
const _77994cf6 = () => interopDefault(import('..\\pages\\shop\\beauty\\index.vue' /* webpackChunkName: "pages/shop/beauty/index" */))
const _546b4390 = () => interopDefault(import('..\\pages\\shop\\electronics-1\\index.vue' /* webpackChunkName: "pages/shop/electronics-1/index" */))
const _59b11f0a = () => interopDefault(import('..\\pages\\shop\\fashion\\index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _b5a47d14 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\index.vue' /* webpackChunkName: "pages/shop/fashion-2/index" */))
const _a6413256 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\index.vue' /* webpackChunkName: "pages/shop/fashion-3/index" */))
const _9feb4374 = () => interopDefault(import('..\\pages\\shop\\flower\\index.vue' /* webpackChunkName: "pages/shop/flower/index" */))
const _d416007e = () => interopDefault(import('..\\pages\\shop\\furniture\\index.vue' /* webpackChunkName: "pages/shop/furniture/index" */))
const _00880dd0 = () => interopDefault(import('..\\pages\\shop\\gym\\index.vue' /* webpackChunkName: "pages/shop/gym/index" */))
const _a6d51a60 = () => interopDefault(import('..\\pages\\shop\\jewellery\\index.vue' /* webpackChunkName: "pages/shop/jewellery/index" */))
const _000978b4 = () => interopDefault(import('..\\pages\\shop\\kids\\index.vue' /* webpackChunkName: "pages/shop/kids/index" */))
const _220bcd8d = () => interopDefault(import('..\\pages\\shop\\pets\\index.vue' /* webpackChunkName: "pages/shop/pets/index" */))
const _7e86eb8b = () => interopDefault(import('..\\pages\\shop\\shoes\\index.vue' /* webpackChunkName: "pages/shop/shoes/index" */))
const _5aaddeb8 = () => interopDefault(import('..\\pages\\shop\\tools\\index.vue' /* webpackChunkName: "pages/shop/tools/index" */))
const _c6109762 = () => interopDefault(import('..\\pages\\shop\\vegetables\\index.vue' /* webpackChunkName: "pages/shop/vegetables/index" */))
const _71097978 = () => interopDefault(import('..\\pages\\shop\\watch\\index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
const _12f64332 = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _d26287ba = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _3c601f83 = () => interopDefault(import('..\\pages\\page\\account\\cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _2ca0ddae = () => interopDefault(import('..\\pages\\page\\account\\checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _6a31ed0d = () => interopDefault(import('..\\pages\\page\\account\\contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _d435cf7e = () => interopDefault(import('..\\pages\\page\\account\\dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _05599630 = () => interopDefault(import('..\\pages\\page\\account\\forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _41d105d4 = () => interopDefault(import('..\\pages\\page\\account\\login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _210c910e = () => interopDefault(import('..\\pages\\page\\account\\login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _72596616 = () => interopDefault(import('..\\pages\\page\\account\\profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _2cb67c06 = () => interopDefault(import('..\\pages\\page\\account\\register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _fe3cbbb0 = () => interopDefault(import('..\\pages\\page\\account\\wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _645ceebe = () => interopDefault(import('..\\pages\\page\\compare\\compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _646b063f = () => interopDefault(import('..\\pages\\page\\compare\\compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _dd2e65c4 = () => interopDefault(import('..\\pages\\page\\element\\banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _0a8fe370 = () => interopDefault(import('..\\pages\\page\\element\\category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _37d13cb9 = () => interopDefault(import('..\\pages\\page\\element\\collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _4584e0e6 = () => interopDefault(import('..\\pages\\page\\element\\home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _0aecf17e = () => interopDefault(import('..\\pages\\page\\element\\logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _b1cd7c32 = () => interopDefault(import('..\\pages\\page\\element\\multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _376b6df1 = () => interopDefault(import('..\\pages\\page\\element\\product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _0a92f00e = () => interopDefault(import('..\\pages\\page\\element\\product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _c5ef9e9a = () => interopDefault(import('..\\pages\\page\\element\\service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _4408e272 = () => interopDefault(import('..\\pages\\page\\portfolio\\masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _32b4e5c8 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _3298b6c6 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _327c87c4 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _6cfb57d2 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _013fc6d3 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _d4f79458 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _25599f08 = () => interopDefault(import('..\\pages\\product\\sidebar\\no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _d67c86ba = () => interopDefault(import('..\\pages\\product\\sidebar\\right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _ef0883b6 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _5328c681 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _4f352392 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _cf3976e6 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _6a96a72b = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _7da73cc4 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _602bf788 = () => interopDefault(import('..\\pages\\page\\account\\auth\\auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _87ae4764 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\banner.vue' /* webpackChunkName: "pages/shop/bags/components/banner" */))
const _45fafc44 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\blog.vue' /* webpackChunkName: "pages/shop/bags/components/blog" */))
const _f4ee32c0 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\category.vue' /* webpackChunkName: "pages/shop/bags/components/category" */))
const _2bab96c2 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\category2.vue' /* webpackChunkName: "pages/shop/bags/components/category2" */))
const _2f6ce2b6 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\categorytab.vue' /* webpackChunkName: "pages/shop/bags/components/categorytab" */))
const _03d32c80 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\instagram.vue' /* webpackChunkName: "pages/shop/bags/components/instagram" */))
const _187873dc = () => interopDefault(import('..\\pages\\shop\\bags\\components\\productcategoryslider.vue' /* webpackChunkName: "pages/shop/bags/components/productcategoryslider" */))
const _2134dd44 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\productslider.vue' /* webpackChunkName: "pages/shop/bags/components/productslider" */))
const _fabaec00 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\services.vue' /* webpackChunkName: "pages/shop/bags/components/services" */))
const _3b95f383 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\slider.vue' /* webpackChunkName: "pages/shop/bags/components/slider" */))
const _b551342c = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\about.vue' /* webpackChunkName: "pages/shop/beauty/components/about" */))
const _750ec655 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\blog.vue' /* webpackChunkName: "pages/shop/beauty/components/blog" */))
const _1890050f = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\instagram.vue' /* webpackChunkName: "pages/shop/beauty/components/instagram" */))
const _7d1075f2 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/product-slider" */))
const _16410558 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\slider.vue' /* webpackChunkName: "pages/shop/beauty/components/slider" */))
const _22174bea = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\top-product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/top-product-slider" */))
const _ec22e33a = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\video-tutorial.vue' /* webpackChunkName: "pages/shop/beauty/components/video-tutorial" */))
const _d0292306 = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/electronics-1/components/collection_banner" */))
const _41e8ae56 = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/electronics-1/components/product_tab" */))
const _543a18fe = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\slider.vue' /* webpackChunkName: "pages/shop/electronics-1/components/slider" */))
const _58a22dce = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/banner" */))
const _6f2d3f40 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\collection.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection" */))
const _69c4e3ee = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection-banner" */))
const _0dc66b00 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\instagram.vue' /* webpackChunkName: "pages/shop/fashion-2/components/instagram" */))
const _51f98186 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\product.vue' /* webpackChunkName: "pages/shop/fashion-2/components/product" */))
const _4fe175fa = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion-2/components/slider" */))
const _465b0a62 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion-3/components/banner" */))
const _3e587758 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_slider" */))
const _6f6ca432 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_tab" */))
const _5c3f9204 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/slider" */))
const _6d71cee9 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _22f44cc2 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _e752b080 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _48591ff6 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _600bd608 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _345b4324 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _24c05f50 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _057941db = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _264233c4 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _205aeef4 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\blog.vue' /* webpackChunkName: "pages/shop/flower/components/blog" */))
const _34e77926 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\category_tab.vue' /* webpackChunkName: "pages/shop/flower/components/category_tab" */))
const _2660b6ea = () => interopDefault(import('..\\pages\\shop\\flower\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/flower/components/collection_banner" */))
const _24213060 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\instagram.vue' /* webpackChunkName: "pages/shop/flower/components/instagram" */))
const _77fee4fa = () => interopDefault(import('..\\pages\\shop\\flower\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/flower/components/product_slider" */))
const _7169a4b0 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\services.vue' /* webpackChunkName: "pages/shop/flower/components/services" */))
const _04780b9a = () => interopDefault(import('..\\pages\\shop\\flower\\components\\slider.vue' /* webpackChunkName: "pages/shop/flower/components/slider" */))
const _f8267f40 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\top_products.vue' /* webpackChunkName: "pages/shop/flower/components/top_products" */))
const _a0e7bace = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\blog.vue' /* webpackChunkName: "pages/shop/furniture/components/blog" */))
const _355137cb = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\category_tab.vue' /* webpackChunkName: "pages/shop/furniture/components/category_tab" */))
const _185c4506 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/collection_banner" */))
const _291da6a6 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\parallax_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/parallax_banner" */))
const _f5124ed0 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\slider.vue' /* webpackChunkName: "pages/shop/furniture/components/slider" */))
const _1582863c = () => interopDefault(import('..\\pages\\shop\\gym\\components\\blog.vue' /* webpackChunkName: "pages/shop/gym/components/blog" */))
const _3a7100aa = () => interopDefault(import('..\\pages\\shop\\gym\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/gym/components/collection-banner" */))
const _16851ea2 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\instagram.vue' /* webpackChunkName: "pages/shop/gym/components/instagram" */))
const _bf3d309a = () => interopDefault(import('..\\pages\\shop\\gym\\components\\logo-slider.vue' /* webpackChunkName: "pages/shop/gym/components/logo-slider" */))
const _b61fea08 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\product-list.vue' /* webpackChunkName: "pages/shop/gym/components/product-list" */))
const _28ec04a1 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\slider.vue' /* webpackChunkName: "pages/shop/gym/components/slider" */))
const _0e5b3954 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\top-collection.vue' /* webpackChunkName: "pages/shop/gym/components/top-collection" */))
const _6e5c0786 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\category.vue' /* webpackChunkName: "pages/shop/jewellery/components/category" */))
const _3564285a = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\instagram.vue' /* webpackChunkName: "pages/shop/jewellery/components/instagram" */))
const _53b31e6c = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\parallax-banner.vue' /* webpackChunkName: "pages/shop/jewellery/components/parallax-banner" */))
const _7e55a987 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-slider" */))
const _482df842 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\product-tab.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-tab" */))
const _6b75aae6 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\services.vue' /* webpackChunkName: "pages/shop/jewellery/components/services" */))
const _106815e9 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/slider" */))
const _b73c560e = () => interopDefault(import('..\\pages\\shop\\kids\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/kids/components/collection_banner" */))
const _23ceec2e = () => interopDefault(import('..\\pages\\shop\\kids\\components\\collection_slider.vue' /* webpackChunkName: "pages/shop/kids/components/collection_slider" */))
const _4977e63e = () => interopDefault(import('..\\pages\\shop\\kids\\components\\instagram.vue' /* webpackChunkName: "pages/shop/kids/components/instagram" */))
const _1328bbfe = () => interopDefault(import('..\\pages\\shop\\kids\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/kids/components/logo_slider" */))
const _7b701d60 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\parallax_banner.vue' /* webpackChunkName: "pages/shop/kids/components/parallax_banner" */))
const _1bcbe3d5 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/kids/components/product_slider" */))
const _77ebc285 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\slider.vue' /* webpackChunkName: "pages/shop/kids/components/slider" */))
const _3cb2fd4d = () => interopDefault(import('..\\pages\\shop\\pets\\components\\blog.vue' /* webpackChunkName: "pages/shop/pets/components/blog" */))
const _31ee8520 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/pets/components/collection-banner" */))
const _f67a2e30 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\logo-slider.vue' /* webpackChunkName: "pages/shop/pets/components/logo-slider" */))
const _659b6fc7 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\parallax-banner.vue' /* webpackChunkName: "pages/shop/pets/components/parallax-banner" */))
const _fa13522c = () => interopDefault(import('..\\pages\\shop\\pets\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/pets/components/product-slider" */))
const _6451d64c = () => interopDefault(import('..\\pages\\shop\\pets\\components\\slider.vue' /* webpackChunkName: "pages/shop/pets/components/slider" */))
const _30e54bfe = () => interopDefault(import('..\\pages\\shop\\pets\\components\\top-collection.vue' /* webpackChunkName: "pages/shop/pets/components/top-collection" */))
const _681bc220 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\about.vue' /* webpackChunkName: "pages/shop/shoes/components/about" */))
const _d15456e2 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\blog.vue' /* webpackChunkName: "pages/shop/shoes/components/blog" */))
const _26428c2c = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\brand.vue' /* webpackChunkName: "pages/shop/shoes/components/brand" */))
const _fc4ebd2a = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category.vue' /* webpackChunkName: "pages/shop/shoes/components/category" */))
const _8d599552 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category2.vue' /* webpackChunkName: "pages/shop/shoes/components/category2" */))
const _8d3d6650 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category3.vue' /* webpackChunkName: "pages/shop/shoes/components/category3" */))
const _489d78b7 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectionbanner.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionbanner" */))
const _6feae028 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectionslider.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionslider" */))
const _2fc980cc = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectiontab.vue' /* webpackChunkName: "pages/shop/shoes/components/collectiontab" */))
const _dd0a69d6 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\instagram.vue' /* webpackChunkName: "pages/shop/shoes/components/instagram" */))
const _f9d88cda = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\productSlider.vue' /* webpackChunkName: "pages/shop/shoes/components/productSlider" */))
const _25024758 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\service.vue' /* webpackChunkName: "pages/shop/shoes/components/service" */))
const _bcc835e4 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\slider.vue' /* webpackChunkName: "pages/shop/shoes/components/slider" */))
const _296692c6 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\about.vue' /* webpackChunkName: "pages/shop/tools/components/about" */))
const _31314e9e = () => interopDefault(import('..\\pages\\shop\\tools\\components\\category.vue' /* webpackChunkName: "pages/shop/tools/components/category" */))
const _eca7e1f6 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/tools/components/logo_slider" */))
const _452182c2 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-slider" */))
const _703e88d7 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\product-tab-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-tab-slider" */))
const _2693b62d = () => interopDefault(import('..\\pages\\shop\\tools\\components\\select-vehical.vue' /* webpackChunkName: "pages/shop/tools/components/select-vehical" */))
const _4fd4b076 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\service.vue' /* webpackChunkName: "pages/shop/tools/components/service" */))
const _6d944301 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\slider.vue' /* webpackChunkName: "pages/shop/tools/components/slider" */))
const _2d116395 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\banner.vue' /* webpackChunkName: "pages/shop/vegetables/components/banner" */))
const _7fcaad6a = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\blog.vue' /* webpackChunkName: "pages/shop/vegetables/components/blog" */))
const _76cef1cc = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/product_slider" */))
const _5b865b87 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\services.vue' /* webpackChunkName: "pages/shop/vegetables/components/services" */))
const _a7030a6c = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/slider" */))
const _77ec335a = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\special_products.vue' /* webpackChunkName: "pages/shop/vegetables/components/special_products" */))
const _4714c194 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _4734c092 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _17fd7810 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _6cc43c05 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _77a290ce = () => interopDefault(import('..\\pages\\shop\\watch\\components\\instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _4495e891 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _45755345 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _444e63f2 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _1df3a1f5 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _5570420c = () => interopDefault(import('..\\pages\\shop\\watch\\components\\timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _6807e2bc = () => interopDefault(import('..\\pages\\shop\\watch\\components\\top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
const _8fd65d24 = () => interopDefault(import('..\\pages\\collection\\leftsidebar\\_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _e0295b9c = () => interopDefault(import('..\\pages\\product\\sidebar\\_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _330e5bf7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog/blog-detail",
    component: _1173589f,
    name: "blog-blog-detail"
  }, {
    path: "/blog/blog-leftsidebar",
    component: _55d02dd2,
    name: "blog-blog-leftsidebar"
  }, {
    path: "/blog/blog-nosidebar",
    component: _4799dd9d,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _e1303be4,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/collection/full-width",
    component: _4b3afbd1,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _439d468a,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _61b10060,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _07924619,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _337b6ff2,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _634ae37c,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _ef98904c,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _3abd8a5e,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _4383ddae,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _76010603,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _209a6e98,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _6786f886,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _2116fee8,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _6eb74582,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _63ac650c,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _f313695c,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _65bbdcbc,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _ce88f6ae,
    name: "page-typography"
  }, {
    path: "/product/bundle-product",
    component: _b2420b10,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _afe93070,
    name: "product-four-image"
  }, {
    path: "/shop/bags",
    component: _d824fa14,
    name: "shop-bags"
  }, {
    path: "/shop/beauty",
    component: _77994cf6,
    name: "shop-beauty"
  }, {
    path: "/shop/electronics-1",
    component: _546b4390,
    name: "shop-electronics-1"
  }, {
    path: "/shop/fashion",
    component: _59b11f0a,
    name: "shop-fashion"
  }, {
    path: "/shop/fashion-2",
    component: _b5a47d14,
    name: "shop-fashion-2"
  }, {
    path: "/shop/fashion-3",
    component: _a6413256,
    name: "shop-fashion-3"
  }, {
    path: "/shop/flower",
    component: _9feb4374,
    name: "shop-flower"
  }, {
    path: "/shop/furniture",
    component: _d416007e,
    name: "shop-furniture"
  }, {
    path: "/shop/gym",
    component: _00880dd0,
    name: "shop-gym"
  }, {
    path: "/shop/jewellery",
    component: _a6d51a60,
    name: "shop-jewellery"
  }, {
    path: "/shop/kids",
    component: _000978b4,
    name: "shop-kids"
  }, {
    path: "/shop/pets",
    component: _220bcd8d,
    name: "shop-pets"
  }, {
    path: "/shop/shoes",
    component: _7e86eb8b,
    name: "shop-shoes"
  }, {
    path: "/shop/tools",
    component: _5aaddeb8,
    name: "shop-tools"
  }, {
    path: "/shop/vegetables",
    component: _c6109762,
    name: "shop-vegetables"
  }, {
    path: "/shop/watch",
    component: _71097978,
    name: "shop-watch"
  }, {
    path: "/blog/widgets/blog-list",
    component: _12f64332,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _d26287ba,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _3c601f83,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _2ca0ddae,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _6a31ed0d,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _d435cf7e,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _05599630,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _41d105d4,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _210c910e,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/profile",
    component: _72596616,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _2cb67c06,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _fe3cbbb0,
    name: "page-account-wishlist"
  }, {
    path: "/page/compare/compare-1",
    component: _645ceebe,
    name: "page-compare-compare-1"
  }, {
    path: "/page/compare/compare-2",
    component: _646b063f,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _dd2e65c4,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _0a8fe370,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _37d13cb9,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _4584e0e6,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _0aecf17e,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _b1cd7c32,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _376b6df1,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _0a92f00e,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _c5ef9e9a,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _4408e272,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _32b4e5c8,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _3298b6c6,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _327c87c4,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _6cfb57d2,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _013fc6d3,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _d4f79458,
    name: "page-portfolio-portfolio-4-col"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _25599f08,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _d67c86ba,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _ef0883b6,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _5328c681,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _4f352392,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _cf3976e6,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _6a96a72b,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _7da73cc4,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/page/account/auth/auth",
    component: _602bf788,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/bags/components/banner",
    component: _87ae4764,
    name: "shop-bags-components-banner"
  }, {
    path: "/shop/bags/components/blog",
    component: _45fafc44,
    name: "shop-bags-components-blog"
  }, {
    path: "/shop/bags/components/category",
    component: _f4ee32c0,
    name: "shop-bags-components-category"
  }, {
    path: "/shop/bags/components/category2",
    component: _2bab96c2,
    name: "shop-bags-components-category2"
  }, {
    path: "/shop/bags/components/categorytab",
    component: _2f6ce2b6,
    name: "shop-bags-components-categorytab"
  }, {
    path: "/shop/bags/components/instagram",
    component: _03d32c80,
    name: "shop-bags-components-instagram"
  }, {
    path: "/shop/bags/components/productcategoryslider",
    component: _187873dc,
    name: "shop-bags-components-productcategoryslider"
  }, {
    path: "/shop/bags/components/productslider",
    component: _2134dd44,
    name: "shop-bags-components-productslider"
  }, {
    path: "/shop/bags/components/services",
    component: _fabaec00,
    name: "shop-bags-components-services"
  }, {
    path: "/shop/bags/components/slider",
    component: _3b95f383,
    name: "shop-bags-components-slider"
  }, {
    path: "/shop/beauty/components/about",
    component: _b551342c,
    name: "shop-beauty-components-about"
  }, {
    path: "/shop/beauty/components/blog",
    component: _750ec655,
    name: "shop-beauty-components-blog"
  }, {
    path: "/shop/beauty/components/instagram",
    component: _1890050f,
    name: "shop-beauty-components-instagram"
  }, {
    path: "/shop/beauty/components/product-slider",
    component: _7d1075f2,
    name: "shop-beauty-components-product-slider"
  }, {
    path: "/shop/beauty/components/slider",
    component: _16410558,
    name: "shop-beauty-components-slider"
  }, {
    path: "/shop/beauty/components/top-product-slider",
    component: _22174bea,
    name: "shop-beauty-components-top-product-slider"
  }, {
    path: "/shop/beauty/components/video-tutorial",
    component: _ec22e33a,
    name: "shop-beauty-components-video-tutorial"
  }, {
    path: "/shop/electronics-1/components/collection_banner",
    component: _d0292306,
    name: "shop-electronics-1-components-collection_banner"
  }, {
    path: "/shop/electronics-1/components/product_tab",
    component: _41e8ae56,
    name: "shop-electronics-1-components-product_tab"
  }, {
    path: "/shop/electronics-1/components/slider",
    component: _543a18fe,
    name: "shop-electronics-1-components-slider"
  }, {
    path: "/shop/fashion-2/components/banner",
    component: _58a22dce,
    name: "shop-fashion-2-components-banner"
  }, {
    path: "/shop/fashion-2/components/collection",
    component: _6f2d3f40,
    name: "shop-fashion-2-components-collection"
  }, {
    path: "/shop/fashion-2/components/collection-banner",
    component: _69c4e3ee,
    name: "shop-fashion-2-components-collection-banner"
  }, {
    path: "/shop/fashion-2/components/instagram",
    component: _0dc66b00,
    name: "shop-fashion-2-components-instagram"
  }, {
    path: "/shop/fashion-2/components/product",
    component: _51f98186,
    name: "shop-fashion-2-components-product"
  }, {
    path: "/shop/fashion-2/components/slider",
    component: _4fe175fa,
    name: "shop-fashion-2-components-slider"
  }, {
    path: "/shop/fashion-3/components/banner",
    component: _465b0a62,
    name: "shop-fashion-3-components-banner"
  }, {
    path: "/shop/fashion-3/components/product_slider",
    component: _3e587758,
    name: "shop-fashion-3-components-product_slider"
  }, {
    path: "/shop/fashion-3/components/product_tab",
    component: _6f6ca432,
    name: "shop-fashion-3-components-product_tab"
  }, {
    path: "/shop/fashion-3/components/slider",
    component: _5c3f9204,
    name: "shop-fashion-3-components-slider"
  }, {
    path: "/shop/fashion/components/banner",
    component: _6d71cee9,
    name: "shop-fashion-components-banner"
  }, {
    path: "/shop/fashion/components/blog",
    component: _22f44cc2,
    name: "shop-fashion-components-blog"
  }, {
    path: "/shop/fashion/components/collection_banner",
    component: _e752b080,
    name: "shop-fashion-components-collection_banner"
  }, {
    path: "/shop/fashion/components/instagram",
    component: _48591ff6,
    name: "shop-fashion-components-instagram"
  }, {
    path: "/shop/fashion/components/logo_slider",
    component: _600bd608,
    name: "shop-fashion-components-logo_slider"
  }, {
    path: "/shop/fashion/components/product_slider",
    component: _345b4324,
    name: "shop-fashion-components-product_slider"
  }, {
    path: "/shop/fashion/components/product_tab",
    component: _24c05f50,
    name: "shop-fashion-components-product_tab"
  }, {
    path: "/shop/fashion/components/services",
    component: _057941db,
    name: "shop-fashion-components-services"
  }, {
    path: "/shop/fashion/components/slider",
    component: _264233c4,
    name: "shop-fashion-components-slider"
  }, {
    path: "/shop/flower/components/blog",
    component: _205aeef4,
    name: "shop-flower-components-blog"
  }, {
    path: "/shop/flower/components/category_tab",
    component: _34e77926,
    name: "shop-flower-components-category_tab"
  }, {
    path: "/shop/flower/components/collection_banner",
    component: _2660b6ea,
    name: "shop-flower-components-collection_banner"
  }, {
    path: "/shop/flower/components/instagram",
    component: _24213060,
    name: "shop-flower-components-instagram"
  }, {
    path: "/shop/flower/components/product_slider",
    component: _77fee4fa,
    name: "shop-flower-components-product_slider"
  }, {
    path: "/shop/flower/components/services",
    component: _7169a4b0,
    name: "shop-flower-components-services"
  }, {
    path: "/shop/flower/components/slider",
    component: _04780b9a,
    name: "shop-flower-components-slider"
  }, {
    path: "/shop/flower/components/top_products",
    component: _f8267f40,
    name: "shop-flower-components-top_products"
  }, {
    path: "/shop/furniture/components/blog",
    component: _a0e7bace,
    name: "shop-furniture-components-blog"
  }, {
    path: "/shop/furniture/components/category_tab",
    component: _355137cb,
    name: "shop-furniture-components-category_tab"
  }, {
    path: "/shop/furniture/components/collection_banner",
    component: _185c4506,
    name: "shop-furniture-components-collection_banner"
  }, {
    path: "/shop/furniture/components/parallax_banner",
    component: _291da6a6,
    name: "shop-furniture-components-parallax_banner"
  }, {
    path: "/shop/furniture/components/slider",
    component: _f5124ed0,
    name: "shop-furniture-components-slider"
  }, {
    path: "/shop/gym/components/blog",
    component: _1582863c,
    name: "shop-gym-components-blog"
  }, {
    path: "/shop/gym/components/collection-banner",
    component: _3a7100aa,
    name: "shop-gym-components-collection-banner"
  }, {
    path: "/shop/gym/components/instagram",
    component: _16851ea2,
    name: "shop-gym-components-instagram"
  }, {
    path: "/shop/gym/components/logo-slider",
    component: _bf3d309a,
    name: "shop-gym-components-logo-slider"
  }, {
    path: "/shop/gym/components/product-list",
    component: _b61fea08,
    name: "shop-gym-components-product-list"
  }, {
    path: "/shop/gym/components/slider",
    component: _28ec04a1,
    name: "shop-gym-components-slider"
  }, {
    path: "/shop/gym/components/top-collection",
    component: _0e5b3954,
    name: "shop-gym-components-top-collection"
  }, {
    path: "/shop/jewellery/components/category",
    component: _6e5c0786,
    name: "shop-jewellery-components-category"
  }, {
    path: "/shop/jewellery/components/instagram",
    component: _3564285a,
    name: "shop-jewellery-components-instagram"
  }, {
    path: "/shop/jewellery/components/parallax-banner",
    component: _53b31e6c,
    name: "shop-jewellery-components-parallax-banner"
  }, {
    path: "/shop/jewellery/components/product-slider",
    component: _7e55a987,
    name: "shop-jewellery-components-product-slider"
  }, {
    path: "/shop/jewellery/components/product-tab",
    component: _482df842,
    name: "shop-jewellery-components-product-tab"
  }, {
    path: "/shop/jewellery/components/services",
    component: _6b75aae6,
    name: "shop-jewellery-components-services"
  }, {
    path: "/shop/jewellery/components/slider",
    component: _106815e9,
    name: "shop-jewellery-components-slider"
  }, {
    path: "/shop/kids/components/collection_banner",
    component: _b73c560e,
    name: "shop-kids-components-collection_banner"
  }, {
    path: "/shop/kids/components/collection_slider",
    component: _23ceec2e,
    name: "shop-kids-components-collection_slider"
  }, {
    path: "/shop/kids/components/instagram",
    component: _4977e63e,
    name: "shop-kids-components-instagram"
  }, {
    path: "/shop/kids/components/logo_slider",
    component: _1328bbfe,
    name: "shop-kids-components-logo_slider"
  }, {
    path: "/shop/kids/components/parallax_banner",
    component: _7b701d60,
    name: "shop-kids-components-parallax_banner"
  }, {
    path: "/shop/kids/components/product_slider",
    component: _1bcbe3d5,
    name: "shop-kids-components-product_slider"
  }, {
    path: "/shop/kids/components/slider",
    component: _77ebc285,
    name: "shop-kids-components-slider"
  }, {
    path: "/shop/pets/components/blog",
    component: _3cb2fd4d,
    name: "shop-pets-components-blog"
  }, {
    path: "/shop/pets/components/collection-banner",
    component: _31ee8520,
    name: "shop-pets-components-collection-banner"
  }, {
    path: "/shop/pets/components/logo-slider",
    component: _f67a2e30,
    name: "shop-pets-components-logo-slider"
  }, {
    path: "/shop/pets/components/parallax-banner",
    component: _659b6fc7,
    name: "shop-pets-components-parallax-banner"
  }, {
    path: "/shop/pets/components/product-slider",
    component: _fa13522c,
    name: "shop-pets-components-product-slider"
  }, {
    path: "/shop/pets/components/slider",
    component: _6451d64c,
    name: "shop-pets-components-slider"
  }, {
    path: "/shop/pets/components/top-collection",
    component: _30e54bfe,
    name: "shop-pets-components-top-collection"
  }, {
    path: "/shop/shoes/components/about",
    component: _681bc220,
    name: "shop-shoes-components-about"
  }, {
    path: "/shop/shoes/components/blog",
    component: _d15456e2,
    name: "shop-shoes-components-blog"
  }, {
    path: "/shop/shoes/components/brand",
    component: _26428c2c,
    name: "shop-shoes-components-brand"
  }, {
    path: "/shop/shoes/components/category",
    component: _fc4ebd2a,
    name: "shop-shoes-components-category"
  }, {
    path: "/shop/shoes/components/category2",
    component: _8d599552,
    name: "shop-shoes-components-category2"
  }, {
    path: "/shop/shoes/components/category3",
    component: _8d3d6650,
    name: "shop-shoes-components-category3"
  }, {
    path: "/shop/shoes/components/collectionbanner",
    component: _489d78b7,
    name: "shop-shoes-components-collectionbanner"
  }, {
    path: "/shop/shoes/components/collectionslider",
    component: _6feae028,
    name: "shop-shoes-components-collectionslider"
  }, {
    path: "/shop/shoes/components/collectiontab",
    component: _2fc980cc,
    name: "shop-shoes-components-collectiontab"
  }, {
    path: "/shop/shoes/components/instagram",
    component: _dd0a69d6,
    name: "shop-shoes-components-instagram"
  }, {
    path: "/shop/shoes/components/productSlider",
    component: _f9d88cda,
    name: "shop-shoes-components-productSlider"
  }, {
    path: "/shop/shoes/components/service",
    component: _25024758,
    name: "shop-shoes-components-service"
  }, {
    path: "/shop/shoes/components/slider",
    component: _bcc835e4,
    name: "shop-shoes-components-slider"
  }, {
    path: "/shop/tools/components/about",
    component: _296692c6,
    name: "shop-tools-components-about"
  }, {
    path: "/shop/tools/components/category",
    component: _31314e9e,
    name: "shop-tools-components-category"
  }, {
    path: "/shop/tools/components/logo_slider",
    component: _eca7e1f6,
    name: "shop-tools-components-logo_slider"
  }, {
    path: "/shop/tools/components/product-slider",
    component: _452182c2,
    name: "shop-tools-components-product-slider"
  }, {
    path: "/shop/tools/components/product-tab-slider",
    component: _703e88d7,
    name: "shop-tools-components-product-tab-slider"
  }, {
    path: "/shop/tools/components/select-vehical",
    component: _2693b62d,
    name: "shop-tools-components-select-vehical"
  }, {
    path: "/shop/tools/components/service",
    component: _4fd4b076,
    name: "shop-tools-components-service"
  }, {
    path: "/shop/tools/components/slider",
    component: _6d944301,
    name: "shop-tools-components-slider"
  }, {
    path: "/shop/vegetables/components/banner",
    component: _2d116395,
    name: "shop-vegetables-components-banner"
  }, {
    path: "/shop/vegetables/components/blog",
    component: _7fcaad6a,
    name: "shop-vegetables-components-blog"
  }, {
    path: "/shop/vegetables/components/product_slider",
    component: _76cef1cc,
    name: "shop-vegetables-components-product_slider"
  }, {
    path: "/shop/vegetables/components/services",
    component: _5b865b87,
    name: "shop-vegetables-components-services"
  }, {
    path: "/shop/vegetables/components/slider",
    component: _a7030a6c,
    name: "shop-vegetables-components-slider"
  }, {
    path: "/shop/vegetables/components/special_products",
    component: _77ec335a,
    name: "shop-vegetables-components-special_products"
  }, {
    path: "/shop/watch/components/blog",
    component: _4714c194,
    name: "shop-watch-components-blog"
  }, {
    path: "/shop/watch/components/category",
    component: _4734c092,
    name: "shop-watch-components-category"
  }, {
    path: "/shop/watch/components/categorytabs",
    component: _17fd7810,
    name: "shop-watch-components-categorytabs"
  }, {
    path: "/shop/watch/components/collectionbanners",
    component: _6cc43c05,
    name: "shop-watch-components-collectionbanners"
  }, {
    path: "/shop/watch/components/instagram",
    component: _77a290ce,
    name: "shop-watch-components-instagram"
  }, {
    path: "/shop/watch/components/logo_slider",
    component: _4495e891,
    name: "shop-watch-components-logo_slider"
  }, {
    path: "/shop/watch/components/product_slider",
    component: _45755345,
    name: "shop-watch-components-product_slider"
  }, {
    path: "/shop/watch/components/services",
    component: _444e63f2,
    name: "shop-watch-components-services"
  }, {
    path: "/shop/watch/components/slider",
    component: _1df3a1f5,
    name: "shop-watch-components-slider"
  }, {
    path: "/shop/watch/components/timer_banner",
    component: _5570420c,
    name: "shop-watch-components-timer_banner"
  }, {
    path: "/shop/watch/components/top_products",
    component: _6807e2bc,
    name: "shop-watch-components-top_products"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _8fd65d24,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _e0295b9c,
    name: "product-sidebar-id"
  }, {
    path: "/",
    component: _330e5bf7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
