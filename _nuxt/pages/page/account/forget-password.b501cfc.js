(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1048:function(t,e,r){"use strict";r.r(e);var l=r(365),o=r(364),n=r(366),c={components:{Header:l.a,Footer:o.a,Breadcrumbs:n.a},data:function(){return{title:"Forget Your Password",errors:[],email:null}},methods:{checkForm:function(t){if(this.errors=[],this.email?this.validEmail(this.email)||this.errors.push("Valid email required."):this.errors.push("Email required."),!this.errors.length)return!0;t.preventDefault()},validEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}}},m=r(36),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Breadcrumbs",{attrs:{title:"Forget Password"}}),t._v(" "),r("section",{staticClass:"pwd-page section-b-space"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 offset-lg-3"},[r("h2",[t._v(t._s(t.title))]),t._v(" "),r("form",{staticClass:"theme-form",attrs:{method:"post"},on:{submit:t.checkForm}},[t.errors.length?r("div",[r("ul",{staticClass:"validation-error mb-3"},t._l(t.errors,(function(e,l){return r("li",{key:l},[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-12"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Enter Your Email",name:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("input",{staticClass:"btn btn-solid",attrs:{type:"submit",value:"submit"}})])])])])])]),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);