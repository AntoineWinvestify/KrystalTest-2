(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{188:function(t,e,n){t.exports=n.p+"img/1c1acd5.png"},253:function(t,e,n){t.exports=n.p+"img/d0840e5.png"},254:function(t,e,n){t.exports=n.p+"img/a023af7.png"},255:function(t,e,n){t.exports=n.p+"img/7e4081e.png"},256:function(t,e,n){t.exports=n.p+"img/4d4419c.png"},257:function(t,e,n){t.exports=n.p+"img/2bbecce.png"},258:function(t,e,n){t.exports=n.p+"img/16ca374.png"},259:function(t,e,n){t.exports=n.p+"img/e4f0f0a.png"},260:function(t,e,n){t.exports=n.p+"img/e326837.png"},261:function(t,e,n){t.exports=n.p+"img/3053d2d.png"},262:function(t,e,n){t.exports=n.p+"img/e53a8c3.png"},263:function(t,e,n){t.exports=n.p+"img/c67e360.png"},513:function(t,e,n){"use strict";n.r(e);var l={head:function(){return{title:"Winvestify - Home"}},data:function(){var t=this;return{value:"",ex1:!1,step:1,validStep1:!1,validStep2:!1,validStep3:!1,user:{},terms:!1,dialogRegister:!1,menu:!1,valid:!1,mobile:!1,drawer:!1,items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}],validation:{passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=5||"Password must be more than 5 characters"}],rePassRules:[function(t){return!!t||"Re-password is required"},function(e){return e===t.user.password||"Password and re-password field must be the same"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],mobileRules:[function(t){return!!t||"Mobile phone is required"},function(t){return t&&t.length>=5||"Mobile phone must be more than 5 characters"}],termsRules:[function(t){return!!t||"You must accept our terms of service and the privacy policy"}],codeRules:[function(t){return!!t||"Confirmation Code is required"},function(t){return t&&t.length>=5||"Confirmation Code must be more than 5 characters"}],nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=5||"Name must be more than 5 characters"}],surnamesRules:[function(t){return!!t||"Surname(s) is required"},function(t){return t&&t.length>=5||"Surname(s) must be more than 5 characters"}],investorRules:[function(t){return!!t||"You must accept our terms of service and the privacy policy"}]}}},methods:{showModalRegister:function(){this.clear(),this.dialogRegister=!0},clear:function(){this.$refs.formStep1.reset(),this.$refs.formStep2.reset(),this.$refs.formStep3.reset(),this.step=1},onResize:function(){var t=window.innerWidth;this.mobile=!1,t<=960&&(this.mobile=!0)}},layout:"landing"},r=n(4),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}]},[l("article",{staticClass:"landing landing-step-1"},[l("v-container",[l("header",[t.mobile?l("v-icon",{on:{click:function(e){t.drawer=!0}}},[t._v("menu")]):l("nav",[l("ul",[l("li",[t._v("Home")]),t._v(" "),l("li",[t._v("Solutions")]),t._v(" "),l("li",[t._v("Platforms")]),t._v(" "),l("li",[t._v("About Us")]),t._v(" "),l("li",[t._v("Contact us")])])]),t._v(" "),l("div",{staticClass:"actions"},[l("v-menu",{attrs:{left:"","offset-y":"","close-on-content-click":!1},on:{click:function(e){t.menu=!t.menu}},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[l("v-btn",{attrs:{slot:"activator",color:"white",flat:""},slot:"activator"},[t._v("Log In")]),t._v(" "),l("v-form",{ref:"login",staticClass:"login-form custom-form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[l("v-text-field",{attrs:{rules:t.validation.usernameRules,name:"username",label:"Username"}}),t._v(" "),l("v-text-field",{attrs:{rules:t.validation.passwordRules,name:"password",label:"Password",type:"password"}}),t._v(" "),l("div",{staticClass:"login-button"},[l("v-btn",{attrs:{disabled:!t.valid,color:"white",nuxt:"",to:"/"+t.$store.state.locale+"/dashboard"}},[t._v("Log in")])],1)],1)],1),t._v(" "),l("v-btn",{staticClass:"register-button",on:{click:t.showModalRegister}},[t._v("Register")])],1)],1),t._v(" "),t.mobile?l("v-navigation-drawer",{staticClass:"mobile-menu",attrs:{width:"200",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[l("figure",[l("img",{attrs:{src:n(69),alt:""}})]),t._v(" "),l("nav",[l("ul",[l("li",[t._v("Home")]),t._v(" "),l("li",[t._v("Solutions")]),t._v(" "),l("li",[t._v("Platforms")]),t._v(" "),l("li",[t._v("About Us")]),t._v(" "),l("li",[t._v("Contact us")])])])]):t._e(),t._v(" "),l("section",{staticClass:"landing-step-1-container"},[l("v-layout",{attrs:{column:"",wrap:""}},[l("v-flex",{staticClass:"first-line",attrs:{xs12:""}},[t._v("\n\t\t\t\t\t\tIntelligent Solution for Peer to Peer Lending Investors\n\t\t\t\t\t")]),t._v(" "),l("v-flex",{staticClass:"second-line",attrs:{xs12:""}},[t._v("\n\t\t\t\t\t\tMonitor  all your online lending platforms accounts in one place.\n\t\t\t\t\t")]),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-btn",{staticClass:"button-open-account"},[t._v("Open Account")])],1)],1)],1),t._v(" "),l("section",[l("v-layout",{attrs:{column:"",wrap:""}},[l("v-flex",{staticClass:"platforms-list",attrs:{xs12:""}},[l("div",{staticClass:"platforms-list-content"},[l("figure",[l("img",{attrs:{src:n(253),alt:""}})]),t._v(" "),l("figure",[l("img",{attrs:{src:n(254),alt:""}})]),t._v(" "),l("figure",[l("img",{attrs:{src:n(188),alt:""}})]),t._v(" "),l("figure",[l("img",{attrs:{src:n(255),alt:""}})]),t._v(" "),l("figure",[l("img",{attrs:{src:n(256),alt:""}})])])]),t._v(" "),l("v-flex",{staticClass:"third-line",attrs:{xs12:""}},[t._v("\n\t\t\t\t\t\tConnect to the most influential P2P Lending Platforms in Europe\n\t\t\t\t\t")])],1)],1)],1)],1),t._v(" "),l("article",{staticClass:"landing landing-step-2"},[l("v-container",{attrs:{"grid-list-xs":""}},[l("div",{staticClass:"logo-container"},[l("figure",[l("img",{attrs:{src:n(69),alt:""}})])]),t._v(" "),l("div",{staticClass:"first-line"},[t._v("\n\t\t\t\tWe empower our investors with software and data analytics solutions that provide data-driven insights regarding their P2P loans.\n\t\t\t")]),t._v(" "),l("v-layout",{attrs:{row:"",wrap:""}},[l("v-flex",{attrs:{xs12:""}},[l("v-layout",{attrs:{row:"",wrap:""}},[l("v-flex",{attrs:{xs12:"",sm5:"",md4:"",lg3:""}},[l("div",{staticClass:"info-item"},[l("figure",[l("img",{attrs:{src:n(257),alt:""}})]),t._v(" "),l("span",{staticClass:"info-item-title"},[t._v("Data Aggregate")]),t._v(" "),l("p",[t._v("Standardize and reconcile all your financial information in one place")])])]),t._v(" "),l("v-flex",{attrs:{xs12:"",sm6:"",md5:"",lg4:""}},[l("div",{staticClass:"info-item"},[l("figure",[l("img",{attrs:{src:n(258),alt:""}})]),t._v(" "),l("span",{staticClass:"info-item-title"},[t._v("Simply Management")]),t._v(" "),l("p",[t._v("Connect their data to our dashboard for monitoring your accounts and measure your  investments performance")])])])],1)],1),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-layout",{attrs:{row:"",wrap:""}},[l("v-flex",{attrs:{xs12:"",sm5:"",md4:"",lg3:""}},[l("div",{staticClass:"info-item"},[l("figure",[l("img",{attrs:{src:n(259),alt:""}})]),t._v(" "),l("span",{staticClass:"info-item-title"},[t._v("Market Analysis")]),t._v(" "),l("p",[t._v("Access high-quality data, to help you benchmark performance and evaluate your lending platforms ")])])]),t._v(" "),l("v-flex",{attrs:{xs12:"",sm6:"",md5:"",lg4:""}},[l("div",{staticClass:"info-item"},[l("figure",[l("img",{attrs:{src:n(260),alt:""}})]),t._v(" "),l("span",{staticClass:"info-item-title"},[t._v("Portfolio Composition")]),t._v(" "),l("p",[t._v("Quickly analyze composition and performance across any level of your portfolio to identify opportunities and better evaluate your risk.")])])])],1)],1)],1)],1)],1),t._v(" "),l("v-parallax",{attrs:{src:"/jassim-vailoces-371831-unsplash.jpg"}},[l("article",{staticClass:"landing-step-3"},[l("v-layout",{staticClass:"landing landing-step-3-container",attrs:{column:"",wrap:""}},[l("v-flex",{staticClass:"first-line",attrs:{xs12:""}},[t._v("\n\t\t\t\t\t\tSafely Navigate  the complexities of the Online Lending Market\n\t\t\t\t\t")]),t._v(" "),l("v-flex",{staticClass:"second-line",attrs:{xs12:""}},[l("p",[t._v("Winvestify is at the forefront of this opportunity with analytics solutions and expert services that help our investors navigate the complexities of the Online Lending market to maximize the value of their assets and portfolios.")]),t._v(" "),l("p",[t._v("We are touching every stage of the lifecycle of P2P loans which gives us a significant advantage and access to robust market data.")]),t._v(" "),l("p",[t._v("At Winvestify we are providing transparency and insight into every aspect of the Online Lending Market")])]),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-btn",{staticClass:"button-open-account"},[t._v("Open Account")])],1)],1)],1)]),t._v(" "),l("article",{staticClass:"landing landing-step-4"},[l("v-layout",{attrs:{row:"",wrap:""}},[l("v-flex",{staticClass:"landing-step-4-title",attrs:{xs12:""}},[t._v("\n\t\t\t\tAll Your Investment Data Standardized\n\t\t\t")]),t._v(" "),l("v-flex",{staticClass:"info-item-list",attrs:{xs12:""}},[l("v-layout",{attrs:{row:"",wrap:""}},[l("v-flex",{staticClass:"item-info",attrs:{xs12:"",sm4:"",md3:"","offset-md1":"",lg2:"","offset-lg2":""}},[l("figure",[l("img",{attrs:{src:n(261),alt:""}})]),t._v(" "),l("span",{staticClass:"item-info-title"},[t._v("Portfolio Data")]),t._v(" "),l("p",[t._v("Winvestify has direct, automated feeds from all major European online lenders, allowing us to display, in real-time, your loan portfolio.")])]),t._v(" "),l("v-flex",{staticClass:"item-info",attrs:{xs12:"",sm4:"",md4:"",lg2:"","offset-lg1":""}},[l("figure",[l("img",{attrs:{src:n(262),alt:""}})]),t._v(" "),l("span",{staticClass:"item-info-title"},[t._v("Normalization")]),t._v(" "),l("p",[t._v("Winvestify has established universal data formats across all credit verticals, allowing consistent views of loans purchased across all major lending platforms.")])]),t._v(" "),l("v-flex",{staticClass:"item-info",attrs:{xs12:"",sm4:"",md3:"",lg2:"","offset-lg1":""}},[l("figure",[l("img",{attrs:{src:n(263),alt:""}})]),t._v(" "),l("span",{staticClass:"item-info-title"},[t._v("Transformation")]),t._v(" "),l("p",[t._v("We run platform-specific data cleaning rules to ensure that our clients always access the highest quality data possible.")])])],1)],1)],1)],1),t._v(" "),l("footer",[l("v-container",[l("v-layout",{attrs:{row:"",wrap:""}},[l("v-flex",{attrs:{xs12:"",sm2:"","offset-sm1":"",md2:"","offset-md1":"",lg2:"","offset-lg1":""}},[l("ul",[l("li",[t._v("Index")]),t._v(" "),l("li",[t._v("About us")]),t._v(" "),l("li",[t._v("Investors")]),t._v(" "),l("li",[t._v("Platforms")]),t._v(" "),l("li",[t._v("Team")])])]),t._v(" "),l("v-flex",{attrs:{xs12:"",sm2:"",md2:"",lg2:""}},[l("ul",[l("li",[t._v("Recent Posts")]),t._v(" "),l("li",[t._v("About Crowdlending")]),t._v(" "),l("li",[t._v("Risk P2P Lending ")]),t._v(" "),l("li",[t._v("Winvestify Tools")]),t._v(" "),l("li",[t._v("Top Lending Platforms")])])]),t._v(" "),l("v-flex",{attrs:{xs12:"",sm2:"",md2:"",lg2:""}},[l("ul",[l("li",[t._v("RRSS")]),t._v(" "),l("li",[t._v("LinkedIn")]),t._v(" "),l("li",[t._v("Twitter")]),t._v(" "),l("li",[t._v("Facebook")]),t._v(" "),l("li",[t._v("YouTube")])])]),t._v(" "),l("v-flex",{attrs:{xs12:"",sm2:"",md2:"",lg2:""}},[l("ul",{staticClass:"opacity-list"},[l("li",[t._v("SUPPORT")]),t._v(" "),l("li",[t._v("Terms & Conditions")]),t._v(" "),l("li",[t._v("Privacy policy")]),t._v(" "),l("li",[t._v("Contact Us")]),t._v(" "),l("li",[t._v("FAQ")])])]),t._v(" "),l("v-flex",{attrs:{xs12:"",sm3:"",md3:"",lg2:""}},[l("div",{staticClass:"footer-message"},[l("figure",[l("img",{attrs:{src:n(69),alt:""}})]),t._v(" "),l("p",[t._v("Winvestify is a technology solution that help our clients navigate the complexities of the Online Lending Market")])])])],1)],1)],1),t._v(" "),l("v-dialog",{attrs:{overlay:!1,"max-width":"600px",transition:"dialog-transition"},model:{value:t.dialogRegister,callback:function(e){t.dialogRegister=e},expression:"dialogRegister"}},[l("div",{staticClass:"form-register-content"},[l("figure",[l("img",{attrs:{src:n(69),alt:""}})]),t._v(" "),l("v-form",{directives:[{name:"show",rawName:"v-show",value:1===t.step,expression:"step === 1"}],ref:"formStep1",model:{value:t.validStep1,callback:function(e){t.validStep1=e},expression:"validStep1"}},[l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{rules:t.validation.emailRules,label:"Email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{type:"password",rules:t.validation.passwordRules,label:"Password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{type:"password",rules:t.validation.rePassRules,label:"Repeat Password"},model:{value:t.user.rePassword,callback:function(e){t.$set(t.user,"rePassword",e)},expression:"user.rePassword"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{rules:t.validation.mobileRules,"persistent-hint":"",label:"Mobile phone",hint:"For security reasons it is mandatory to include your mobile phone number so we can send you an account activation code"},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}})],1),t._v(" "),l("v-flex",{staticClass:"custom-checks register",attrs:{xs12:""}},[l("v-checkbox",{attrs:{label:"Business Loans",color:"light-green accent-3",value:"",rules:t.validation.termsRules,"hide-details":""},model:{value:t.terms,callback:function(e){t.terms=e},expression:"terms"}},[l("template",{slot:"label"},[t._v("\n\t\t\t\t\t\t\tI accept the "),l("a",{attrs:{href:"#"}},[t._v("terms of service")]),t._v(" and the "),l("a",{attrs:{href:"#"}},[t._v("privacy policy")])])],2),t._v(" "),l("v-flex",{attrs:{xs12:"","text-xs-right":""}},[l("v-btn",{staticClass:"next-button",attrs:{disabled:!t.validStep1},on:{click:function(e){t.step=2}}},[t._v("Next")])],1)],1)],1),t._v(" "),l("v-form",{directives:[{name:"show",rawName:"v-show",value:2===t.step,expression:"step === 2"}],ref:"formStep2",staticClass:"step-2",model:{value:t.validStep2,callback:function(e){t.validStep2=e},expression:"validStep2"}},[l("v-flex",{staticClass:"message",attrs:{xs12:""}},[l("p",[t._v("Dear Investor,")]),t._v(" "),l("p",[t._v("A confirmation code has been sent to "+t._s(t.user.phone))])]),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{rules:t.validation.codeRules,label:"Confirmation Code"},model:{value:t.user.code,callback:function(e){t.$set(t.user,"code",e)},expression:"user.code"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:"","mt-5":""}},[t._v("\n\t\t\t\t\tYou did not receive a code?\n\t\t\t\t")]),t._v(" "),l("v-flex",{staticClass:"buttons",attrs:{xs12:""}},[l("v-btn",{staticClass:"new-code",attrs:{color:"blue-grey darken-1"}},[t._v("Request new code")]),t._v(" "),l("v-btn",{staticClass:"next-button",attrs:{disabled:!t.validStep2},on:{click:function(e){t.step=3}}},[t._v("Next")])],1)],1),t._v(" "),l("v-form",{directives:[{name:"show",rawName:"v-show",value:3===t.step,expression:"step === 3"}],ref:"formStep3",staticClass:"step-3",model:{value:t.validStep3,callback:function(e){t.validStep3=e},expression:"validStep3"}},[l("v-flex",{staticClass:"message",attrs:{"text-xs-center":"",xs12:""}},[l("p",[t._v("Your Account Has Been Successfully Created")]),t._v(" "),l("p",[t._v("For security reasons it is mandatory to include your name and surnames for the correct identification of your account")])]),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{rules:t.validation.nameRules,label:"Name"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{rules:t.validation.surnamesRules,label:"Surnames(s)"},model:{value:t.user.surnames,callback:function(e){t.$set(t.user,"surnames",e)},expression:"user.surnames"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:"","mt-5":""}},[t._v("\n\t\t\t\t\tAre you an accredited investor?\n\t\t\t\t")]),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-layout",{attrs:{row:"",wrap:""}},[l("v-flex",{staticClass:"custom-checks main",attrs:{xs12:""}},[l("v-checkbox",{attrs:{label:"Yes",color:"light-green accent-3",value:"yes",rules:t.validation.investorRules,"hide-details":""},model:{value:t.ex1,callback:function(e){t.ex1=e},expression:"ex1"}}),t._v(" "),l("v-checkbox",{attrs:{label:"No",color:"light-green accent-3",value:"no",rules:t.validation.investorRules,"hide-details":""},model:{value:t.ex1,callback:function(e){t.ex1=e},expression:"ex1"}})],1)],1)],1),t._v(" "),l("v-flex",{attrs:{"text-xs-right":"",xs12:""}},[l("v-btn",{staticClass:"next-button",attrs:{disabled:!t.validStep3},on:{click:function(e){t.dialogRegister=!t.dialogRegister,t.clear}}},[t._v("Start")])],1)],1)],1)])],1)},[],!1,null,null,null);e.default=component.exports}}]);