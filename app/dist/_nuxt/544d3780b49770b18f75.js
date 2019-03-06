(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{179:function(t,e,r){"use strict";var n={props:{small:{type:Boolean,default:!1},table:{type:Boolean,default:!1},tableSmall:{type:Boolean,default:!1}}},l=r(4),component=Object(l.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("v-tooltip",{attrs:{"content-class":"winvestify-tooltip "+(this.small?"small":""),bottom:""}},[e("i",{staticClass:"icon-win-info",class:{"show-icon":this.table,"show-icon show-icon-small":this.tableSmall},attrs:{slot:"activator"},slot:"activator"}),this._v(" "),this._t("content")],2)},[],!1,null,null,null);e.a=component.exports},852:function(t,e,r){"use strict";r.r(e);var n={head:function(){return{title:"Winvestify - Profile"}},data:function(){var t=this;return{ex1:!1,dialog:!1,confirm:!1,calendar:!1,valid:!0,profile:{telephone:"1121212"},headers:[{text:"Document",align:"center",sortable:!1,icon:"icon-win-pocket"},{text:"Status",align:"center",sortable:!1,icon:"icon-win-user-check"},{text:"Action",align:"center",sortable:!1,icon:"icon-win-settings"},{text:"Verified",align:"center",sortable:!1,icon:"icon-win-cpu"}],data:[{title:"ID Card Front",status:1,verified:!0},{title:"ID Card Back",status:1,verified:!0},{title:"Bank N° ID",status:0,verified:!1}],validation:{name:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be more than 2 characters"}],surrnames:[function(t){return!!t||"Surrnames is required"},function(t){return t&&t.length>=2||"Surrnames must be more than 2 characters"}],address:[function(t){return!!t||"Address is required"},function(t){return t&&t.length>=2||"Address must be more than 2 characters"}],postCode:[function(t){return!!t||"Postal Code is required"},function(t){return t&&t.length>=2||"Postal Code must be more than 2 characters"}],city:[function(t){return!!t||"City is required"},function(t){return t&&t.length>=2||"City must be more than 2 characters"}],country:[function(t){return!!t||"Country is required"},function(t){return t&&t.length>=2||"Country must be more than 2 characters"}],company:[function(t){return!!t||"Company is required"},function(t){return t&&t.length>=2||"Company must be more than 2 characters"}],fiscalId:[function(t){return!!t||"Fiscal ID is required"},function(t){return t&&t.length>=2||"Fiscal ID must be more than 2 characters"}],id:[function(t){return!!t||"Id is required"},function(t){return t&&t.length>=3||"Id must be more than 3 characters"}],telephone:[function(t){return!!t||"Telephone is required"},function(t){return t&&t.length>=4||"Telephone must be more than 4 characters"}],password:[function(t){return!!t||"Password is required"},function(t){return/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(t)||"Your password should be at least 8 characters long and contain uppercase and lowercase characters and a number and a symbol"}],rePassword:[function(t){return!!t||"Re-password is required"},function(e){return e===t.profile.password||"Password and re-password field must be the same"}],iban:[],age:[function(t){return!!t||"Date of Birth is required"}]}}},mounted:function(){this.confirm=!0,this.$store.commit("SET_BUTTON_BACK",{link:"/".concat(this.$store.state.locale,"/lending-registration")})},methods:{upload:function(t){0===t.status&&(this.dialog=!0,this.data=this.data.map(function(e){return e.title===t.title&&(e.status=1,e.verified=!0),e}))}},components:{Tooltip:r(179).a},layout:"dashboard"},l=r(4),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"data-card",attrs:{"elevation-1":"",dark:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"card-title"},[t._v("\n\t\t\t\t\t\t\tAccount Holder\n\t\t\t\t\t\t")])]),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-form",{ref:"lending",staticClass:"custom-form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"name",rules:t.validation.name,label:"Name"},model:{value:t.profile.name,callback:function(e){t.$set(t.profile,"name",e)},expression:"profile.name"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md8:"",lg8:""}},[r("v-text-field",{attrs:{id:"surrname",rules:t.validation.surrnames,label:"Surname(s)"},model:{value:t.profile.surrname,callback:function(e){t.$set(t.profile,"surrname",e)},expression:"profile.surrname"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"address",rules:t.validation.address,label:"Address"},model:{value:t.profile.address,callback:function(e){t.$set(t.profile,"address",e)},expression:"profile.address"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"postalcode",rules:t.validation.postCode,label:"Postal Code"},model:{value:t.profile.postCode,callback:function(e){t.$set(t.profile,"postCode",e)},expression:"profile.postCode"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"city",rules:t.validation.city,label:"City"},model:{value:t.profile.city,callback:function(e){t.$set(t.profile,"city",e)},expression:"profile.city"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"country",rules:t.validation.country,label:"Country"},model:{value:t.profile.country,callback:function(e){t.$set(t.profile,"country",e)},expression:"profile.country"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md8:"",lg8:""}},[r("v-text-field",{attrs:{id:"iban",rules:t.validation.iban,label:"IBAN"},model:{value:t.profile.iban,callback:function(e){t.$set(t.profile,"iban",e)},expression:"profile.iban"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"id",rules:t.validation.id,label:"ID"},model:{value:t.profile.id,callback:function(e){t.$set(t.profile,"id",e)},expression:"profile.id"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"phone",disabled:"",rules:t.validation.telephone,label:"Telephone"},model:{value:t.profile.telephone,callback:function(e){t.$set(t.profile,"telephone",e)},expression:"profile.telephone"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},model:{value:t.calendar,callback:function(e){t.calendar=e},expression:"calendar"}},[r("v-text-field",{attrs:{slot:"activator",id:"birth",label:"Date of birth","persistent-hint":"",rules:t.validation.age,readonly:""},slot:"activator",model:{value:t.profile.birth,callback:function(e){t.$set(t.profile,"birth",e)},expression:"profile.birth"}}),t._v(" "),r("v-date-picker",{attrs:{color:"green lighten-1","no-title":""},on:{input:function(e){t.calendar=!1}},model:{value:t.profile.birth,callback:function(e){t.$set(t.profile,"birth",e)},expression:"profile.birth"}})],1)],1),t._v(" "),r("v-flex",{staticClass:"custom-checks",attrs:{xs12:""}},[r("v-checkbox",{attrs:{label:"I use my company as an investment vehicle",color:"light-blue darken-3",value:"","hide-details":""},model:{value:t.ex1,callback:function(e){t.ex1=e},expression:"ex1"}})],1),t._v(" "),t.ex1?[r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{attrs:{id:"company",rules:t.validation.company,label:"Company"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{attrs:{id:"fiscalid",rules:t.validation.fiscalId,label:"Fiscal ID"}})],1)]:t._e()],2)],1)],1)],1)],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"data-card",attrs:{"elevation-1":"",dark:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"card-title"},[t._v("\n\t\t\t\t\t\t\tUpload Documents\n\t\t\t\t\t\t")])]),t._v(" "),r("v-flex",{staticClass:"table-actions-info",attrs:{xs12:""}},[r("v-data-table",{attrs:{headers:t.headers,items:t.data,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){return[r("div",{staticClass:"header-cell"},[r("i",{staticClass:"icon-table",class:e.header.icon}),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.header.text)+"\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t")])]}},{key:"items",fn:function(e){return[r("td",{staticClass:"text-xs-left"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.item.title)+"\n\t\t\t\t\t\t\t\t\t"),r("tooltip",{attrs:{tableSmall:"",small:""}},[r("template",{slot:"content"},[r("div",[r("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel architecto saepe debitis error labore aspernatur, ex at tenetur, maiores asperiores, assumenda fugit. Fuga veritatis officia commodi ut impedit tempore in.")])])])],2)],1),t._v(" "),r("td",{staticClass:"text-xs-left"},[r("v-btn",{class:{uploaded:1===e.item.status},on:{click:function(r){return t.upload(e.item)}}},[t._v(t._s(1===e.item.status?"Uploaded":"Upload"))])],1),t._v(" "),r("td",{staticClass:"text-xs-left"},[1===e.item.status?r("div",{staticClass:"td-actions"},[r("i",{staticClass:"icon-win-trash"}),t._v(" Delete\n\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),r("td",{staticClass:"text-xs-left"},[r("div",{staticClass:"td-actions",class:{ready:e.item.verified,pending:!e.item.verified}},[r("v-icon",{staticClass:"point"},[t._v("fiber_manual_record")]),t._v(t._s(e.item.verified?"Correct":"Pending")+"\n\t\t\t\t\t\t\t\t\t")],1)])]}}])})],1),t._v(" "),r("v-flex",{staticClass:"btn-next-container",attrs:{xs12:""}},[r("v-btn",[t._v("Cancel")]),t._v(" "),r("v-btn",{staticClass:"btn-green",attrs:{disabled:!t.valid}},[t._v("Send")])],1)],1)],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"500px",transition:"dialog-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{staticClass:"card-modal"},[r("div",{staticClass:"title-modal"},[t._v("Your request has been processed succesfully!")]),t._v(" "),r("p",[t._v("We will proceed to send your information to the platforms requested to start the registration process. \n\t\t\t\tOnce verified and accepted you will be notified")]),t._v(" "),r("v-btn",{staticClass:"btn-green",on:{click:function(e){t.dialog=!t.dialog}}},[t._v("Finish")])],1)],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"500px",persistent:"",transition:"dialog-transition"},model:{value:t.confirm,callback:function(e){t.confirm=e},expression:"confirm"}},[r("v-card",{staticClass:"card-modal"},[r("div",{staticClass:"title-modal-confirm"},[t._v("Before further...")]),t._v(" "),r("p",[t._v("The data completed in this form along with the documents uploaded by you will be sent to the selected platform (s).")]),t._v(" "),r("p",[t._v("Before finalizing this process,")]),t._v(" "),r("p",[r("b",[t._v("Do you authorize Winvestify to send all the necessary data to complete your correct registration process?")])]),t._v(" "),r("div",{staticClass:"buttons"},[r("v-btn",{attrs:{nuxt:"",to:"/"+t.$store.state.locale+"/lending-registration"}},[t._v("Cancel")]),t._v(" "),r("v-btn",{staticClass:"btn-green",on:{click:function(e){t.confirm=!t.confirm}}},[t._v("Confirm")])],1)])],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);