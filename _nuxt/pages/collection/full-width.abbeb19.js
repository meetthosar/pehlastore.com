(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1014:function(t,r,e){"use strict";e.r(r);e(6),e(4),e(3),e(2),e(5);var o=e(0),c=e(54),n=e.n(c),l=e(37),d=e(365),m=e(364),v=e(366),f=e(368),h=e(369);function w(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var _={components:{Header:d.a,Footer:m.a,Breadcrumbs:v.a,quickviewModel:f.a,compareModel:h.a,"no-ssr":n.a},data:function(){return{products:[],cartval:!1,showquickviewmodel:!1,showcomparemodal:!1,quickviewproduct:{},comapreproduct:{}}},computed:C(C({},Object(l.c)({productslist:function(t){return t.products.productslist},currency:function(t){return t.products.currency}})),Object(l.b)({curr:"products/changeCurrency"})),mounted:function(){this.productsArray(),"function"==typeof this.$redrawVueMasonry&&this.$redrawVueMasonry()},methods:{getImgUrl:function(path){return e(363)("./"+path)},productsArray:function(){var t=this;this.productslist.map((function(r){"metro"===r.type&&t.products.push(r)}))},showQuickview:function(t){this.showquickviewmodel=!0,this.quickviewproduct=t},showCoampre:function(t){this.showcomparemodal=!0,this.comapreproduct=t},closeCompareModal:function(t){this.showcomparemodal=!1},addToWishlist:function(t){this.$store.dispatch("products/addToWishlist",t)},addToCart:function(t){this.$store.dispatch("cart/addToCart",t)}}},y=e(36),component=Object(y.a)(_,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("Header"),t._v(" "),e("Breadcrumbs",{attrs:{title:"collection"}}),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"section-t-space portfolio-section portfolio-padding metro-section port-col"},[e("no-ssr",[e("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"masonry-container isotopeContainer row",attrs:{"transition-duration":"3s","item-selector":".item"}},t._l(t.products,(function(r,o){return e("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:o,staticClass:"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector item"},[e("div",{staticClass:"product-box"},[e("div",{staticClass:"img-wrapper"},[e("div",{staticClass:"front"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("img",{key:o,staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(r.images[0].src),id:r.id,alt:r.title}})])],1),t._v(" "),e("div",{staticClass:"cart-info cart-wrap"},[e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-cart",modifiers:{"modal-cart":!0}}],attrs:{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart",variant:"primary"},on:{click:function(e){return t.addToCart(r)}}},[e("i",{staticClass:"ti-shopping-cart"})]),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/page/account/wishlist"}}},[e("i",{staticClass:"ti-heart",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.addToWishlist(r)}}})]),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{href:"javascript:void(0)",title:"Quick View",variant:"primary"},on:{click:function(e){return t.showQuickview(r)}}},[e("i",{staticClass:"ti-search",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-compare",modifiers:{"modal-compare":!0}}],attrs:{href:"javascript:void(0)",title:"Comapre",variant:"primary"},on:{click:function(e){return t.showCoampre(r)}}},[e("i",{staticClass:"ti-reload",attrs:{"aria-hidden":"true"}})])],1)]),t._v(" "),e("div",{staticClass:"product-detail"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("h6",[t._v(t._s(r.title))])]),t._v(" "),e("h4",[t._v(t._s(t._f("currency")(r.price*t.currency.curr,t.currency.symbol)))])],1)])])})),0)])],1)])])]),t._v(" "),e("quickviewModel",{attrs:{openModal:t.showquickviewmodel,productData:t.quickviewproduct}}),t._v(" "),e("compareModel",{attrs:{openCompare:t.showcomparemodal,productData:t.comapreproduct},on:{closeCompare:t.closeCompareModal}}),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);r.default=component.exports},368:function(t,r,e){"use strict";e(6),e(4),e(3),e(2),e(5);var o=e(0),c=e(37);function n(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}var l={props:["openModal","productData"],data:function(){return{swiperOption:{slidesPerView:1,spaceBetween:20,freeMode:!0}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({},Object(c.b)({curr:"products/changeCurrency"})),methods:{Color:function(t){for(var r=[],i=0;i<Object.keys(t).length;i++)-1===r.indexOf(t[i].color)&&r.push(t[i].color);return r},Size:function(t){for(var r=[],i=0;i<Object.keys(t).length;i++)-1===r.indexOf(t[i].size)&&r.push(t[i].size);return r},addToCart:function(t){this.$store.dispatch("cart/addToCart",t)},getImgUrl:function(path){return e(363)("./"+path)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},d=e(36),component=Object(d.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[t.openModal?e("b-modal",{attrs:{id:"modal-lg",size:"lg",centered:"",title:"Quickview","hide-footer":!0}},[e("div",{staticClass:"row quickview-modal"},[e("div",{staticClass:"col-lg-6 col-xs-12"},[e("div",{staticClass:"quick-view-img"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[e("div",{staticClass:"swiper-wrapper"},t._l(t.productData.images,(function(r,o){return e("div",{key:o,staticClass:"swiper-slide"},[e("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(r.src),id:r.image_id,alt:"imag.alt"}})])})),0)])])]),t._v(" "),e("div",{staticClass:"col-lg-6 rtl-text"},[e("div",{staticClass:"product-right"},[e("h2",[t._v(t._s(t.productData.title))]),t._v(" "),t.productData.sale?e("h3",[t._v("\n            "+t._s(t._f("currency")(t.discountedPrice(t.productData)*t.curr.curr,t.curr.symbol))+"\n      "),e("del",[t._v(t._s(t._f("currency")(t.productData.price*t.curr.curr,t.curr.symbol)))])]):e("h3",[t._v(t._s(t._f("currency")(t.productData.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),t.productData.variants[0].color?e("ul",{staticClass:"color-variant"},t._l(t.Color(t.productData.variants),(function(t,r){return e("li",{key:r},[e("a",{class:[t],style:{"background-color":t}})])})),0):t._e(),t._v(" "),t.productData.variants[0].size?e("div",{staticClass:"product-description border-product"},[e("h6",{staticClass:"product-title"},[t._v("select size")]),t._v(" "),e("div",{staticClass:"size-box"},[e("ul",t._l(t.Size(t.productData.variants),(function(r,o){return e("li",{key:o},[e("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(r))])])})),0)])]):t._e(),t._v(" "),e("div",{staticClass:"border-product"},[e("h6",{staticClass:"product-title"},[t._v("product details")]),t._v(" "),e("p",[t._v(t._s(t.productData.description.substring(0,250)+"...."))])]),t._v(" "),e("div",{staticClass:"product-buttons"},[e("a",{staticClass:"btn btn-solid",attrs:{href:"javascript:void(0)"},on:{click:function(r){return t.addToCart(t.product)}}},[t._v("add to cart")]),t._v(" "),e("nuxt-link",{staticClass:"btn btn-solid",attrs:{to:{path:"/product/sidebar/"+t.productData.id}}},[t._v("view detail")])],1)])])])]):t._e()],1)}),[],!1,null,null,null);r.a=component.exports},369:function(t,r,e){"use strict";var o={props:["openCompare","productData"],methods:{getImgUrl:function(path){return e(363)("./"+path)},closeCompare:function(t){this.$emit("closeCompare",!1)}}},c=e(36),component=Object(c.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[t.openCompare?e("b-modal",{attrs:{id:"modal-compare",size:"lg",centered:"",title:"Compare","hide-footer":!0,"hide-header":!0}},[e("div",{staticClass:"row compare-modal"},[e("div",{staticClass:"col-lg-12"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(r){return t.closeCompare(t.openCompare)}}},[e("span",[t._v("×")])]),t._v(" "),e("div",{staticClass:"media"},[e("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(t.productData.images[0].src),alt:t.productData.images[0].alt}}),t._v(" "),e("div",{staticClass:"media-body align-self-center text-center"},[e("h5",[e("i",{staticClass:"fa fa-check"}),t._v("Item\n              "),e("span",[t._v(t._s(t.productData.title))]),t._v(" "),e("span",[t._v("successfully added to your Compare list")])]),t._v(" "),e("div",{staticClass:"buttons d-flex justify-content-center"},[e("nuxt-link",{staticClass:"btn-sm btn-solid",attrs:{to:{path:"/page/compare/compare-1"}}},[t._v("View Compare list")])],1)])])])])]):t._e()],1)}),[],!1,null,null,null);r.a=component.exports}}]);