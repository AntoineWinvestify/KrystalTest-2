(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{179:function(t,e,o){"use strict";var r={props:{small:{type:Boolean,default:!1},table:{type:Boolean,default:!1},tableSmall:{type:Boolean,default:!1}}},l=o(4),component=Object(l.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("v-tooltip",{attrs:{"content-class":"winvestify-tooltip "+(this.small?"small":""),bottom:""}},[e("i",{staticClass:"icon-win-info",class:{"show-icon":this.table,"show-icon show-icon-small":this.tableSmall},attrs:{slot:"activator"},slot:"activator"}),this._v(" "),this._t("content")],2)},[],!1,null,null,null);e.a=component.exports},184:function(t,e,o){"use strict";var r=o(209);e.a=r.create({})},188:function(t,e,o){t.exports=o.p+"img/1c1acd5.png"},198:function(t,e,o){var content=o(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("25c613bd",content,!0,{sourceMap:!1})},232:function(t,e,o){"use strict";var r=o(179),l={props:{amount:{type:String,default:0},color:{type:String,default:"light-blue accent-3"},tooltipContent:{type:String,default:""},name:{type:String,default:""},amountIcon:{type:Boolean,default:!1},infoIcon:{type:Boolean,default:!1},showTitle:{type:Boolean,default:!0},html:{type:Boolean,default:!1}},components:{Tooltip:r.a}},n=o(4),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-flex",{staticClass:"item-indicator",attrs:{xs12:"",sm4:"",md4:"",lg4:""}},[t.html?o("div",{staticClass:"amount",domProps:{innerHTML:t._s(t.amount)}},[t.amountIcon?o("i",{staticClass:"icon-win-airplay"}):t._e()]):o("div",{staticClass:"amount"},[t.amountIcon?o("i",{staticClass:"icon-win-airplay"}):t._e(),t._v(t._s(t.amount))]),t._v(" "),o("div",{staticClass:"title-indicator"},[o("span",[t._v(t._s(t.name))]),t._v(" "),t.infoIcon?o("tooltip",{attrs:{small:""}},[o("template",{slot:"content"},[o("div",[o("p",[t._v(t._s(t.tooltipContent))])])])],2):t._e()],1),t._v(" "),o("v-progress-linear",{attrs:{color:t.color,height:"3",value:"80"}})],1)},[],!1,null,null,null);e.a=component.exports},233:function(t,e,o){"use strict";var r=o(179),l={props:{name:{type:String,default:""},iconInfo:{type:Boolean,default:!1}},components:{Tooltip:r.a}},n=o(4),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{column:"",wrap:""}},[o("v-flex",{staticClass:"section-title",attrs:{xs12:""}},[o("div",{staticClass:"title-item"},[o("v-card-text",[t._v(t._s(t.name))]),t._v(" "),t.iconInfo?o("tooltip",{attrs:{small:""}},[o("template",{slot:"content"},[o("div",[o("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel architecto saepe debitis error labore aspernatur, ex at tenetur, maiores asperiores, assumenda fugit. Fuga veritatis officia commodi ut impedit tempore in.")])])])],2):t._e()],1),t._v(" "),o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("more_vert")])],1)],1),t._v(" "),o("v-layout",{staticClass:"indicators-container",attrs:{row:"",wrap:""}},[t._t("default")],2)],1)},[],!1,null,null,null);e.a=component.exports},265:function(t,e,o){"use strict";var r=o(198);o.n(r).a},266:function(t,e,o){(t.exports=o(48)(!1)).push([t.i,".thermometer-container.vertical[data-v-22a3cd5a]{margin-top:2em;display:flex;flex-direction:column;justify-content:center;align-items:center}.thermometer-container.horizontal[data-v-22a3cd5a]{display:flex;align-items:center;justify-content:space-between}.thermometer-container .thermometer-info[data-v-22a3cd5a]{display:flex;flex-direction:column;align-items:center;margin-top:20px}.thermometer-container .thermometer-info.horizontal[data-v-22a3cd5a]{margin-top:0;text-align:center}.thermometer-container .thermometer-info span[data-v-22a3cd5a]{font-size:.8em;color:hsla(0,0%,100%,.471)}.thermometer-container .thermometer-info span[data-v-22a3cd5a]:first-child{font-size:1.2em;font-weight:700;color:#fff}.thermometer-container .thermometer.vertical[data-v-22a3cd5a]{width:25px;height:200px;margin-left:0 auto;border:1px solid #393e44;border-top-left-radius:20px;border-top-right-radius:20px;border-bottom-left-radius:20px;border-bottom-right-radius:20px;background-color:#facd19;position:relative}.thermometer-container .thermometer.vertical .value[data-v-22a3cd5a]{background-color:#81d648;border-bottom-left-radius:20px;border-bottom-right-radius:20px;height:80%;position:absolute;width:100%;bottom:0;border-top:4px solid #393e44}.thermometer-container .thermometer.vertical .value.full[data-v-22a3cd5a]{height:100%;border-top-left-radius:20px;border-top-right-radius:20px;border-color:transparent}.thermometer-container .thermometer.horizontal[data-v-22a3cd5a]{width:70%;height:25px;margin-left:10px;border:1px solid #393e44;border-top-left-radius:20px;border-top-right-radius:20px;border-bottom-left-radius:20px;border-bottom-right-radius:20px;background-color:#facd19;position:relative}.thermometer-container .thermometer.horizontal .value[data-v-22a3cd5a]{background-color:#81d648;border-bottom-left-radius:20px;border-top-left-radius:20px;height:100%;position:absolute;width:80%;bottom:0;border-right:4px solid #393e44}",""])},275:function(t,e,o){"use strict";o.d(e,"b",function(){return l}),o.d(e,"a",function(){return n});var r=o(216),l={title:{textStyle:{fontSize:30,color:"#fff"}},grid:{height:"20%"},series:[]},n=function(t){return{series:[{type:"gauge",center:["50%","60%"],splitNumber:5,min:0,max:arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,startAngle:180,endAngle:0,clockwise:!0,axisLine:{show:!0,lineStyle:{width:2,shadowBlur:0,color:[[1,"#FFFFFF70"]]}},axisTick:{show:!0,lineStyle:{color:"#FFFFFF70",width:1},length:-4,splitNumber:10},splitLine:{show:!0,length:-2,lineStyle:{color:"#FFFFFF70"}},axisLabel:{distance:-20,textStyle:{color:"#FFFFFF70",fontSize:"11",fontWeight:"bold"}},pointer:{show:0},detail:{show:!1}},{center:["50%","60%"],type:"gauge",radius:"70%",startAngle:180,endAngle:0,axisLine:{lineStyle:{shadowColor:"rgba(0, 0, 0, 1)",shadowBlur:1,color:1===(arguments.length>2&&void 0!==arguments[2]?arguments[2]:1)?c.normal:c.inverted}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},detail:{show:!1},pointer:{show:!1}},{type:"gauge",startAngle:180,endAngle:0,radius:"40%",center:["50%","60%"],splitNumber:0,min:0,max:100,axisLine:{lineStyle:{color:[[1,"#03b7c9"]],width:"1%"}},axisLabel:{show:!1},splitLine:{lineStyle:{width:0}},pointer:{color:"#03b7c9",width:"30%",length:"170%"},detail:{show:!1},data:[{name:"",value:t}]},{tooltip:{show:!1},type:"pie",radius:"38%",center:["50%","60%"],hoverAnimation:!1,itemStyle:{normal:{color:"#393E44"},emphasis:{color:"#393E44"}},labelLine:{normal:{show:!1}},animation:!1,data:[t]}]}},c={normal:[[.2,new r.a.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#e8412e"},{offset:1,color:"#eb7742"}])],[.4,new r.a.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#eb7742"},{offset:1,color:"#edb168"}])],[.6,new r.a.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#edb168"},{offset:1,color:"#d8d563"}])],[.8,new r.a.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#d8d563"},{offset:1,color:"#b2f268"}])],[1,new r.a.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#b2f268"},{offset:1,color:"#6fed5c"}])]],inverted:[[.2,new r.a.graphic.LinearGradient(0,0,1,0,[{offset:1,color:"#b2f268"},{offset:0,color:"#6fed5c"}])],[.4,new r.a.graphic.LinearGradient(0,0,1,0,[{offset:1,color:"#d8d563"},{offset:0,color:"#b2f268"}])],[.6,new r.a.graphic.LinearGradient(0,0,1,0,[{offset:1,color:"#edb168"},{offset:0,color:"#d8d563"}])],[.8,new r.a.graphic.LinearGradient(0,0,1,0,[{offset:1,color:"#eb7742"},{offset:0,color:"#edb168"}])],[1,new r.a.graphic.LinearGradient(0,0,1,0,[{offset:1,color:"#e8412e"},{offset:0,color:"#eb7742"}])]]}},276:function(t,e,o){"use strict";o.d(e,"b",function(){return r}),o.d(e,"a",function(){return l});var r={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {d}%"},legend:{orient:"horizontal",x:"center",icon:"circle",data:[]},series:[{name:"Payment Delay",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"}},labelLine:{normal:{show:!1}},data:[]}]},l=function(t){var data=t.data,e=t.display_name;return{legend:{data:n(data)},series:[{name:e,data:c(data)}]}};function n(data){return data.map(function(t){return t.range_display_name})}function c(data){return data.map(function(t){return{value:t.percent,name:t.range_display_name}})}},277:function(t){t.exports={color:["#81D648","#BD10E0","#4D5AFF","#4A90E2","#bda29a","#32ECEB","#9012FE","#2686FF","#9013FE","#749f83","#ca8622","#73DC50","#6e7074","#546570","#c4ccd3"],backgroundColor:"rgba(0,0,0,0)",textStyle:{},title:{textStyle:{color:"#666666"},subtextStyle:{color:"#999999"}},line:{areaStyle:{color:{type:"linear",x:0,y:0,colorStops:[{offset:0,color:"#637380"},{offset:1,color:"#565667"}],globalCoord:!1}},itemStyle:{normal:{borderWidth:"2"}},lineStyle:{normal:{width:"3"}},symbolSize:"5",symbol:"emptyCircle",animationEasing:"elasticOut"},radar:{itemStyle:{normal:{borderWidth:"2"}},lineStyle:{normal:{width:"3"}},symbolSize:"10",symbol:"emptyCircle",smooth:!0},bar:{itemStyle:{normal:{barBorderWidth:"0",barBorderColor:"#444444"},emphasis:{barBorderWidth:"0",barBorderColor:"#444444"}}},pie:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},scatter:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},boxplot:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},parallel:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},sankey:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},funnel:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},gauge:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"},emphasis:{borderWidth:"0",borderColor:"#444444"}}},candlestick:{itemStyle:{normal:{color:"#d0648a",color0:"#ffffff",borderColor:"#d0648a",borderColor0:"#22c3aa",borderWidth:1}}},graph:{itemStyle:{normal:{borderWidth:"0",borderColor:"#444444"}},lineStyle:{normal:{width:1,color:"#aaa"}},symbolSize:"10",symbol:"emptyCircle",smooth:!0,color:["#4ea397","#22c3aa","#7bd9a5"],label:{normal:{textStyle:{color:"#ffffff"}}}},map:{itemStyle:{normal:{areaColor:"#eeeeee",borderColor:"#999999",borderWidth:"0.5"},emphasis:{areaColor:"rgba(34,195,170,0.25)",borderColor:"#22c3aa",borderWidth:"0.5"}},label:{normal:{textStyle:{color:"#28544e"}},emphasis:{textStyle:{color:"rgb(52,158,142)"}}}},geo:{itemStyle:{normal:{areaColor:"#eeeeee",borderColor:"#999999",borderWidth:"0.5"},emphasis:{areaColor:"rgba(34,195,170,0.25)",borderColor:"#22c3aa",borderWidth:"0.5"}},label:{normal:{textStyle:{color:"#28544e"}},emphasis:{textStyle:{color:"rgb(52,158,142)"}}}},categoryAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333333"}},axisLabel:{show:!0,textStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},valueAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333333"}},axisLabel:{show:!0,textStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},logAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333333"}},axisLabel:{show:!0,textStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},timeAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333333"}},axisLabel:{show:!0,textStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},toolbox:{iconStyle:{normal:{borderColor:"#aaaaaa"},emphasis:{borderColor:"#666"}}},legend:{textStyle:{color:"#999999"}},tooltip:{axisPointer:{lineStyle:{color:"#ccc"},crossStyle:{color:"#ccc"}}},timeline:{lineStyle:{color:"#349e8e",width:1},itemStyle:{normal:{color:"#349e8e",borderWidth:"1"},emphasis:{color:"#57e8d2"}},controlStyle:{normal:{color:"#349e8e",borderColor:"#349e8e",borderWidth:"0"}},checkpointStyle:{color:"#22c3aa",borderColor:"rgba(34,195,170,0.25)"},label:{normal:{textStyle:{color:"#349e8e"}}}},visualMap:{color:["#d0648a","#22c3aa","rgba(123,217,165,0.2)"]},dataZoom:{backgroundColor:"#fff",dataBackgroundColor:"#dedede",fillerColor:"rgba(34,195,170,0.25)",handleColor:"#dddddd",handleSize:"100%",textStyle:{color:"#999"}},markPoint:{label:{normal:{textStyle:{color:"#ffffff"}},emphasis:{textStyle:{color:"#ffffff"}}}}}},296:function(t,e,o){"use strict";o(95);var r={props:{value:{type:Number,default:"0"},valueColor:{type:String,default:""},mainColor:{type:String,default:""},orientation:{type:String,default:"vertical"},title:{type:String,default:""}}},l=(o(265),o(4)),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"thermometer-container",class:{horizontal:"horizontal"===t.orientation,vertical:"vertical"===t.orientation}},[o("div",{staticClass:"thermometer",class:{horizontal:"horizontal"===t.orientation,vertical:"vertical"===t.orientation},style:{backgroundColor:t.mainColor}},["vertical"===t.orientation?o("div",{staticClass:"value",style:{height:t.value+"%",backgroundColor:t.valueColor}}):o("div",{staticClass:"value",style:{width:t.value+"%",backgroundColor:t.valueColor}})]),t._v(" "),o("div",{staticClass:"thermometer-info",class:{horizontal:"horizontal"===t.orientation,vertical:"vertical"===t.orientation}},[o("span",[t._v(t._s(t.value)+"%")]),t._v(" "),o("span",[t._v(t._s(t.title))])])])},[],!1,null,"22a3cd5a",null);e.a=component.exports},297:function(t,e,o){"use strict";var r=o(4),component=Object(r.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",md6:""}},[e("v-card",{staticClass:"data-card",attrs:{"elevation-1":""}},[this._t("left")],2)],1),this._v(" "),e("v-flex",{attrs:{xs12:"",md6:""}},[e("v-card",{staticClass:"data-card",attrs:{"elevation-1":""}},[this._t("rigth")],2)],1)],1)},[],!1,null,null,null);e.a=component.exports},848:function(t,e,o){"use strict";o.r(e);var r=o(184),l=o(297),n=o(233),c=o(232),d=o(296),m=o(179),v=o(216),h={xAxis:{},yAxis:{},series:[]},f={grid:{left:"3%",right:"4%",top:"10%",containLabel:!0,borderColor:"transparent"},dataZoom:[{type:"slider",width:"88%",left:80,start:80,end:100,lineStyle:{color:"#81D648"},dataBackground:{areaStyle:{color:"#393e44"}},backgroundColor:"#393e44",fillerColor:new v.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#353c42"},{offset:1,color:"#000b1623"}]),handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}],tooltip:{trigger:"axis",axisPointer:{type:"shadow",animation:!1,label:{backgroundColor:"#ccc",borderColor:"#aaa",borderWidth:1,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#FFFFFF"}}}},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],boundaryGap:!1,axisLine:{show:!1},splitLine:{show:!1}},yAxis:{type:"value",axisLine:{show:!1}},legend:{data:["Mintos","Global Yield"],icon:"circle",right:"5%"},series:[{data:[80,130,110,170,110,250,140],type:"line",name:"Mintos",animationEasing:"linear",areaStyle:{opacity:0}},{data:[100,160,140,200,140,280,160],type:"line",name:"Global Yield",animationEasing:"linear",areaStyle:{opacity:0}}]},x=o(275),y=o(276),_=o(277);o(278),o(341);v.a.registerTheme("ovilia-green",_);var C={head:function(){return{title:"Winvestify - Lending (Mintos)"}},data:function(){return{lending:"",option:h,optionGauge:x.b,showLegend:!1,dataGauge:x.a,small:!0,pie:y.b,current:{},exposure:{},lendings:[{name:"Mintos (kukovetz@mli-ltd.com)",value:!1,yield:"11.3%",totalVolumen:"225000",cash:"5563.42",exposure:"28.125%",current:"98.21%"},{name:"EstateGuru",value:!1,yield:"9.88%",totalVolumen:"175000",cash:"3321.38",exposure:"21.875%",current:"93.7%"},{name:"Bondora",value:!1,yield:"9.76%",totalVolumen:"130000",cash:"2314.93",exposure:"16.25%",current:"50.5%"},{name:"Twino",value:!1,yield:"8.21%",totalVolumen:"100000",cash:"978.77",exposure:"12.50%",current:"47.1%"},{name:"Finanzarel",value:!1,yield:"6.65%",totalVolumen:"60000",cash:"687.33",exposure:"7.50%",current:"39.5%"}],tabs:[{title:"Last Year",param:"year",selected:!0},{title:"All",param:"all",selected:!1}],headers:[{text:"Platform",align:"center",sortable:!1,value:"name"},{text:"Yield",align:"center",value:"yield"},{text:"Total Volumen",align:"center",value:"totalVolumen"},{text:"Cash",align:"center",value:"cash"},{text:"Exposure",align:"center",value:"exposure"},{text:"Current",align:"center",value:"current"}]}},mounted:function(){var t=this;this.$store.commit("SET_BUTTON_BACK",{link:"/".concat(this.$store.state.locale,"/dashboard")});var e=this.$refs.area,o=this.$refs.gauge,r=this.$refs.gauge2;this.$refs.pie.showLoading({text:"Loading chart information ...",textColor:"#FFFFFF",color:"#73DC50",maskColor:"#393E44"}),o.showLoading({text:"Loading chart information ...",textColor:"#FFFFFF",color:"#73DC50",maskColor:"#393E44"}),r.showLoading({text:"Loading chart information ...",textColor:"#FFFFFF",color:"#73DC50",maskColor:"#393E44"}),e.showLoading({text:"Loading chart information ...",textColor:"#FFFFFF",color:"#73DC50",maskColor:"#393E44"}),this.getDataCharts(),setTimeout(function(){e.hideLoading(),e.mergeOptions(f),t.showLegend=!t.showLegend},1500)},methods:{selectTab:function(t){this.tabs=this.tabs.map(function(e){return e.selected=!1,e.param===t.param&&(e.selected=!0),e})},goPlatforms:function(){this.$router.push({name:"dashboard-platforms"})},getDataCharts:function(){this.getCurrentChart(),this.getExposureChart(),this.getPaymentChart()},getCurrentChart:function(){var t=this,e=this.$refs.gauge;r.a.get("/api/dashboard/chart/current").then(function(o){var data=o.data,r=data.dataset_1.data[0],l=r.max_value,n=r.percent;e.hideLoading(),e.mergeOptions(Object(x.a)(n,l)),t.current={percent:"".concat(n,"%"),displayName:data.dataset_1.display_name},t.showLegend=!0})},getExposureChart:function(){var t=this,e=this.$refs.gauge2;r.a.get("/api/dashboard/chart/exposure").then(function(o){var data=o.data,r=data.dataset_1.data[0],l=r.max_value,n=r.percent;e.hideLoading(),e.mergeOptions(Object(x.a)(n,l,2)),t.exposure={percent:"".concat(n,"%"),displayName:data.dataset_1.display_name},t.showLegend=!0})},getPaymentChart:function(){var t=this.$refs.pie;r.a.get("/api/dashboard/chart/payment").then(function(e){var data=e.data;t.hideLoading(),t.mergeOptions(Object(y.a)(data.dataset1))})}},components:{chart:v.a,IndicatorLayout:l.a,IndicatorContainer:n.a,IndicatorItem:c.a,Thermometer:d.a,Tooltip:m.a},layout:"dashboard"},w=o(4),component=Object(w.a)(C,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"data-card platform-card dashboard-lending",attrs:{"elevation-1":"",dark:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm12:"",md3:"",lg3:""}},[r("v-autocomplete",{attrs:{items:t.lendings,box:"","content-class":"select-active",placeholder:"Select Account","item-text":"name","item-value":"name","hide-details":""},model:{value:t.lending,callback:function(e){t.lending=e},expression:"lending"}})],1),t._v(" "),r("v-flex",{staticClass:"section-header",attrs:{xs12:"",sm12:"",md9:"",lg9:""}},[r("div",{staticClass:"tabs"},[r("div",{staticClass:"tab"},[r("nuxt-link",{attrs:{to:"/"+t.$store.state.locale+"/dashboard/platforms"}},[t._v("My investment list")])],1)]),t._v(" "),r("div",{staticClass:"controls"},[r("span",{staticClass:"account-name"},[t._v("Account name")]),t._v(" "),r("div",{staticClass:"lending-image-container"},[r("figure",[r("img",{attrs:{src:o(188),alt:""}})]),t._v(" "),r("v-tooltip",{attrs:{"content-class":"winvestify-tooltip",bottom:""}},[r("v-icon",{attrs:{slot:"activator"},slot:"activator"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tadd_circle_outline\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("div",[r("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel architecto saepe debitis error labore aspernatur, ex at tenetur, maiores asperiores, assumenda fugit. Fuga veritatis officia commodi ut impedit tempore in.")]),t._v(" "),r("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. At, impedit? Necessitatibus illo nesciunt exercitationem velit debitis aperiam ipsa alias dolor optio, ut maxime, commodi reiciendis iusto recusandae ex vero. Debitis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe nostrum a eum quibusdam sequi dicta porro ipsam id, culpa totam dolor, alias quisquam atque incidunt possimus, sed ea numquam?")]),t._v(" "),r("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae animi atque nostrum temporibus placeat aliquid corrupti alias et aperiam repudiandae hic tempora, id culpa. Blanditiis iusto voluptatum odio numquam distinctio.")]),t._v(" "),r("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel quod aut harum sint provident vero eligendi ea enim impedit illum consequuntur totam quidem, earum cumque recusandae cum nulla alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, saepe labore ea tenetur tempore voluptatum corrupti numquam, ducimus distinctio provident nulla, sequi cum. Amet, delectus. Soluta officia non nam consequuntur!")])])],1)],1)])])],1)],1)],1)],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"data-card",attrs:{"elevation-1":"",dark:""}},[r("v-layout",{attrs:{column:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-text",[t._v("Evolution Yield")])],1),t._v(" "),r("v-flex",{staticClass:"tab-graph-container",attrs:{xs12:""}},t._l(t.tabs,function(e){return r("span",{key:e.param,class:{"tab-active":e.selected},on:{click:function(o){return t.selectTab(e)}}},[t._v(t._s(e.title))])}),0),t._v(" "),r("v-flex",{staticClass:"item-graph main",attrs:{xs12:""}},[r("chart",{ref:"area",attrs:{theme:"ovilia-green",options:t.option,"auto-resize":""}})],1)],1)],1)],1)],1),t._v(" "),r("indicator-layout",[r("template",{slot:"left"},[r("indicator-container",{attrs:{name:"Investment Indicators"}},[r("template",{slot:"default"},[r("indicator-item",{attrs:{amount:"65.325",name:"Active Investments",amountIcon:!0}}),t._v(" "),r("indicator-item",{attrs:{amount:t._f("currency")("1698430"),name:"Net Deposits",amountIcon:!0,infoIcon:!0}}),t._v(" "),r("indicator-item",{attrs:{amount:"9.85%",name:"Cash Drag",amountIcon:!0,infoIcon:!0}})],1)],2)],1),t._v(" "),r("template",{slot:"rigth"},[r("indicator-container",{attrs:{name:"Statement of Funds"}},[r("template",{slot:"default"},[r("indicator-item",{attrs:{amount:t._f("currency")("800000"),name:"Invested Assets",infoIcon:!0}}),t._v(" "),r("indicator-item",{attrs:{amount:t._f("currency")("23495"),name:"Reserved Funds",infoIcon:!0}}),t._v(" "),r("indicator-item",{attrs:{amount:t._f("currency")("13496"),name:"Cash",infoIcon:!0}})],1)],2)],1)],2),t._v(" "),r("indicator-layout",[r("template",{slot:"left"},[r("indicator-container",{attrs:{name:"Net Annual Returns",iconInfo:!0}},[r("template",{slot:"default"},[r("indicator-item",{attrs:{amount:"10.31%",name:"Last 365 days",infoIcon:!0,amountIcon:!0}}),t._v(" "),r("indicator-item",{attrs:{amount:"10.05%",name:"Last year",infoIcon:!0}}),t._v(" "),r("indicator-item",{attrs:{amount:"9.85%",name:"Total funds",infoIcon:!0}})],1)],2)],1),t._v(" "),r("template",{slot:"rigth"},[r("indicator-container",{attrs:{iconInfo:!0,name:"Net Earnings"}},[r("template",{slot:"default"},[r("indicator-item",{attrs:{color:"success",amount:t._f("currency")("12798"),name:"Last 365 days"}}),t._v(" "),r("indicator-item",{attrs:{color:"success",amount:t._f("currency")("12202"),name:"Last year"}}),t._v(" "),r("indicator-item",{attrs:{color:"success",amount:t._f("currency")("25000"),name:"Total Funds"}})],1)],2)],1)],2),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md6:"",lg6:""}},[r("v-card",{staticClass:"data-card",attrs:{"elevation-1":"",dark:""}},[r("v-layout",{attrs:{column:"",wrap:""}},[r("v-flex",{staticClass:"section-title",attrs:{xs12:""}},[r("div",{staticClass:"title-item"},[r("v-card-text",[t._v("Payment Delay")]),t._v(" "),r("tooltip",{attrs:{small:""}},[r("template",{slot:"content"},[r("div",[r("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel architecto saepe debitis error labore aspernatur, ex at tenetur, maiores asperiores, assumenda fugit. Fuga veritatis officia commodi ut impedit tempore in.")])])])],2)],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("more_vert")])],1)],1),t._v(" "),r("v-flex",{staticClass:"item-graph second pie-chart",attrs:{xs12:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md8:""}},[r("chart",{ref:"pie",attrs:{theme:"ovilia-green",options:t.pie,"auto-resize":""}})],1),t._v(" "),r("v-flex",{staticClass:"data-list-container",attrs:{xs12:"",sm4:"",md4:""}},[r("div",{staticClass:"data-list-title"},[t._v("More than 91 days")]),t._v(" "),r("div",{staticClass:"data-list"},[r("div",{staticClass:"data-list-item"},[r("span",[t._v("0.21%")]),t._v(" "),r("v-tooltip",{attrs:{"content-class":"winvestify-tooltip "+(t.small?"small":""),bottom:""}},[r("template",{slot:"activator"},[r("span",{staticClass:"tooltip"},[t._v("Delinquency Rates")])]),t._v(" "),r("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minus tempore quis nesciunt non facere illum nihil quibusdam expedita. Iure eius deserunt quam? Sint expedita labore voluptate, explicabo sapiente ea?")])],2)],1),t._v(" "),r("div",{staticClass:"data-list-item"},[r("span",[t._v(t._s(t._f("currency")("122.21")))]),t._v(" "),r("v-tooltip",{attrs:{"content-class":"winvestify-tooltip "+(t.small?"small":""),bottom:""}},[r("template",{slot:"activator"},[r("span",{staticClass:"tooltip"},[t._v("Outstanding debts")])]),t._v(" "),r("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minus tempore quis nesciunt non facere illum nihil quibusdam expedita. Iure eius deserunt quam? Sint expedita labore voluptate, explicabo sapiente ea?")])],2)],1),t._v(" "),r("div",{staticClass:"data-list-item"},[r("span",[t._v(t._s(t._f("currency")("1312.13")))]),t._v(" "),r("v-tooltip",{attrs:{"content-class":"winvestify-tooltip "+(t.small?"small":""),bottom:""}},[r("template",{slot:"activator"},[r("span",{staticClass:"tooltip"},[t._v("Written Off")])]),t._v(" "),r("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minus tempore quis nesciunt non facere illum nihil quibusdam expedita. Iure eius deserunt quam? Sint expedita labore voluptate, explicabo sapiente ea?")])],2)],1)])])],1)],1)],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md6:"",lg6:""}},[r("v-layout",{attrs:{"justify-space-around":"",row:"",wrap:"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg6:""}},[r("v-card",{staticClass:"data-card",attrs:{"elevation-1":"",dark:""}},[r("v-layout",{attrs:{column:"",wrap:""}},[r("v-flex",{staticClass:"section-title",attrs:{xs12:""}},[r("div",{staticClass:"title-item"},[r("v-card-text",[t._v("Current")]),t._v(" "),r("tooltip",{attrs:{small:""}},[r("template",{slot:"content"},[r("div",[r("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel architecto saepe debitis error labore aspernatur, ex at tenetur, maiores asperiores, assumenda fugit. Fuga veritatis officia commodi ut impedit tempore in.")])])])],2)],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("more_vert")])],1)],1),t._v(" "),r("v-flex",{staticClass:"gauge-chart",attrs:{xs12:""}},[t.showLegend?r("div",{staticClass:"chart-info"},[r("span",[t._v(t._s(t.current.percent))]),t._v(" "),r("span",[t._v(t._s(t.current.displayName))])]):t._e(),t._v(" "),r("chart",{ref:"gauge",attrs:{theme:"ovilia-green",options:t.optionGauge,"auto-resize":""}})],1)],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg6:""}},[r("v-card",{staticClass:"data-card",attrs:{"elevation-1":"",dark:""}},[r("v-layout",{attrs:{column:"",wrap:""}},[r("v-flex",{staticClass:"section-title",attrs:{xs12:""}},[r("div",{staticClass:"title-item"},[r("v-card-text",[t._v("Exposure")]),t._v(" "),r("tooltip",{attrs:{small:""}},[r("template",{slot:"content"},[r("div",[r("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel architecto saepe debitis error labore aspernatur, ex at tenetur, maiores asperiores, assumenda fugit. Fuga veritatis officia commodi ut impedit tempore in.")])])])],2)],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("more_vert")])],1)],1),t._v(" "),r("v-flex",{staticClass:"gauge-chart",attrs:{xs12:""}},[t.showLegend?r("div",{staticClass:"chart-info"},[r("span",[t._v(t._s(t.exposure.percent))]),t._v(" "),r("span",[t._v(t._s(t.exposure.displayName))])]):t._e(),t._v(" "),r("chart",{ref:"gauge2",attrs:{theme:"ovilia-green",options:t.optionGauge,"auto-resize":""}})],1)],1)],1)],1)],1)],1)],1)],1)},[],!1,null,"1d096eb0",null);e.default=component.exports}}]);