(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{853:function(t,e,r){"use strict";r.r(e);var n={head:function(){return{title:"Winvestify - Profile"}},data:function(){var t=this;return{ex1:!1,dialog:!1,confirm:!1,validUser:!0,validBusiness:!0,validPass:!0,calendar:!1,profile:{password:"",rePassword:""},validation:{name:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>=2||"Name must be more than 2 characters"},function(t){return t&&t.length<=50||"Name must be less than 50 characters"}],surrnames:[function(t){return!!t||"Surrnames is required"},function(t){return t&&t.length>=2||"Surrnames must be more than 2 characters"},function(t){return t&&t.length<=50||"Surrnames must be less than 50 characters"}],address:[function(t){return!!t||"Address is required"},function(t){return t&&t.length>=2||"Address must be more than 2 characters"},function(t){return t&&t.length<=60||"Address must be less than 60 characters"}],postCode:[function(t){return!!t||"Postal Code is required"},function(t){return t&&t.length>=2||"Postal Code must be more than 2 characters"},function(t){return t&&t.length<=45||"Postal Code must be less than 45 characters"}],city:[function(t){return!!t||"City is required"},function(t){return t&&t.length>=2||"City must be more than 2 characters"},function(t){return t&&t.length<=45||"City must be less than 45 characters"}],country:[function(t){return!!t||"Country is required"},function(t){return t&&t.length>=2||"Country must be more than 2 characters"},function(t){return t&&t.length<=45||"Country must be less than 45 characters"}],company:[function(t){return!!t||"Company is required"},function(t){return t&&t.length>=2||"Company must be more than 2 characters"}],fiscalId:[function(t){return!!t||"Fiscal ID is required"},function(t){return t&&t.length>=2||"Fiscal ID must be more than 2 characters"}],id:[function(t){return!!t||"Id is required"},function(t){return t&&t.length>=3||"Id must be more than 3 characters"},function(t){return t&&t.length<=20||"Id must be less than 20 characters"}],telephone:[function(t){return!!t||"Telephone is required"},function(t){return t&&t.length>=4||"Telephone must be more than 4 characters"},function(t){return t&&t.length<=20||"Telephone must be less than 20 characters"}],password:[function(t){return!!t||"Password is required"},function(t){return/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(t)||"Your password should be at least 8 characters long and contain uppercase and lowercase characters and a number and a symbol"}],rePassword:[function(t){return!!t||"Re-password is required"},function(e){return e===t.profile.password||"Password and re-password field must be the same"}],iban:[],age:[function(t){return!!t||"Date of Birth is required"}]}}},mounted:function(){this.$store.commit("SET_BUTTON_BACK",!1)},methods:{},components:{},layout:"dashboard"},l=r(4),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"data-card",attrs:{"elevation-1":"",dark:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"card-title"},[t._v("\n\t\t\t\t\t\t\tAccount Holder\n\t\t\t\t\t\t")])]),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-form",{ref:"user",staticClass:"custom-form",model:{value:t.validUser,callback:function(e){t.validUser=e},expression:"validUser"}},[r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"name",rules:t.validation.name,label:"Name"},model:{value:t.profile.name,callback:function(e){t.$set(t.profile,"name",e)},expression:"profile.name"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md8:"",lg8:""}},[r("v-text-field",{attrs:{id:"surrname",rules:t.validation.surrnames,label:"Surname(s)"},model:{value:t.profile.surrname,callback:function(e){t.$set(t.profile,"surrname",e)},expression:"profile.surrname"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"address",rules:t.validation.address,label:"Address"},model:{value:t.profile.address,callback:function(e){t.$set(t.profile,"address",e)},expression:"profile.address"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"postalcode",rules:t.validation.postCode,label:"Post Code"},model:{value:t.profile.postCode,callback:function(e){t.$set(t.profile,"postCode",e)},expression:"profile.postCode"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"city",rules:t.validation.city,label:"City"},model:{value:t.profile.city,callback:function(e){t.$set(t.profile,"city",e)},expression:"profile.city"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"country",rules:t.validation.country,label:"Country"},model:{value:t.profile.country,callback:function(e){t.$set(t.profile,"country",e)},expression:"profile.country"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md8:"",lg8:""}},[r("v-text-field",{attrs:{id:"iban",rules:t.validation.iban,label:"IBAN"},model:{value:t.profile.iban,callback:function(e){t.$set(t.profile,"iban",e)},expression:"profile.iban"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"id",rules:t.validation.id,label:"ID"},model:{value:t.profile.id,callback:function(e){t.$set(t.profile,"id",e)},expression:"profile.id"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"phone",rules:t.validation.telephone,label:"Telephone"},model:{value:t.profile.telephone,callback:function(e){t.$set(t.profile,"telephone",e)},expression:"profile.telephone"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},model:{value:t.calendar,callback:function(e){t.calendar=e},expression:"calendar"}},[r("v-text-field",{attrs:{slot:"activator",id:"birth",label:"Date of birth","persistent-hint":"",rules:t.validation.age,readonly:""},slot:"activator",model:{value:t.profile.birth,callback:function(e){t.$set(t.profile,"birth",e)},expression:"profile.birth"}}),t._v(" "),r("v-date-picker",{attrs:{color:"green lighten-1","no-title":""},on:{input:function(e){t.calendar=!1}},model:{value:t.profile.birth,callback:function(e){t.$set(t.profile,"birth",e)},expression:"profile.birth"}})],1)],1),t._v(" "),r("v-flex",{staticClass:"btn-next-container",attrs:{xs12:""}},[r("v-btn",{staticClass:"btn-green",attrs:{disabled:!t.validUser},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("Save")])],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"data-card",attrs:{"elevation-1":"",dark:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"card-title"},[t._v("\n\t\t\t\t\t\t\tBusiness Information\n\t\t\t\t\t\t")])]),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-form",{ref:"business",staticClass:"custom-form",model:{value:t.validBusiness,callback:function(e){t.validBusiness=e},expression:"validBusiness"}},[r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"company",rules:t.validation.company,label:"Company"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"fiscalid",rules:t.validation.fiscalId,label:"Fiscal ID"}})],1),t._v(" "),r("v-flex",{staticClass:"btn-next-container",attrs:{xs12:"",md4:"",lg4:""}},[r("v-btn",{staticClass:"btn-green",attrs:{disabled:!t.validBusiness},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("Save")])],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"data-card",attrs:{"elevation-1":"",dark:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"card-title"},[t._v("\n\t\t\t\t\t\t\tChange Password\n\t\t\t\t\t\t")])]),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-form",{ref:"password",staticClass:"custom-form",model:{value:t.validPass,callback:function(e){t.validPass=e},expression:"validPass"}},[r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"password",rules:t.validation.password,label:"New Password"},model:{value:t.profile.password,callback:function(e){t.$set(t.profile,"password",e)},expression:"profile.password"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[r("v-text-field",{attrs:{id:"oldpassword",rules:t.validation.rePassword,label:"Repeat Password"},model:{value:t.profile.rePassword,callback:function(e){t.$set(t.profile,"rePassword",e)},expression:"profile.rePassword"}})],1),t._v(" "),r("v-flex",{staticClass:"btn-next-container",attrs:{xs12:"",md4:"",lg4:""}},[r("v-btn",{staticClass:"btn-green",attrs:{disabled:!t.validPass},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("Change")])],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"500px",transition:"dialog-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{staticClass:"card-modal"},[r("div",{staticClass:"title-modal text-xs-center"},[t._v("Your data has been saved succesfully!")]),t._v(" "),r("v-btn",{staticClass:"btn-green",on:{click:function(e){t.dialog=!t.dialog}}},[t._v("Accept")])],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);