(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{351:function(t,e,n){var content=n(451);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("4b30e3a2",content,!0,{sourceMap:!1})},352:function(t,e,n){"use strict";var r=n(313);e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var o=e["小計"];isNaN(o)||(n+=o,t.push({label:Object(r.a)(e["日付"]),transition:o,cumulative:n}))})),t}},353:function(t,e,n){var content=n(454);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("970c2a6c",content,!0,{sourceMap:!1})},354:function(t,e,n){var content=n(461);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("e3e1d1b4",content,!0,{sourceMap:!1})},355:function(t,e,n){var content=n(463);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("4dd51f53",content,!0,{sourceMap:!1})},356:function(t,e,n){var content=n(465);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("08457358",content,!0,{sourceMap:!1})},357:function(t,e,n){var content=n(500);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("435e5f58",content,!0,{sourceMap:!1})},358:function(t,e,n){var content=n(502);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("321a15d8",content,!0,{sourceMap:!1})},360:function(t,e,n){"use strict";var r=n(0).a.extend({props:{url:{type:String,default:""}}}),o=(n(464),n(8)),l=n(44),c=n.n(l),d=n(290),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"OpenDataLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._v("\n  "+this._s(this.$t("オープンデータを入手"))+"\n  "),e("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:"15","aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VIcon:d.a})},361:function(t,e,n){"use strict";var r=n(0).a.extend({props:{lText:{type:String,required:!0},sText:{type:String,required:!0},unit:{type:String,required:!0}}}),o=(n(460),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataInfo"},[n("span",{staticClass:"DataView-DataInfo-summary"},[t._v("\n    "+t._s(t.lText)+"\n    "),n("small",{staticClass:"DataView-DataInfo-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),n("br"),t._v(" "),n("small",{staticClass:"DataView-DataInfo-date"},[t._v(t._s(t.sText))])])}),[],!1,null,null,null);e.a=component.exports},367:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return d}));var r="#006400",o={strokeColor:"#FFFFFF",fillColor:"#006400"},l={strokeColor:"#FFFFFF",fillColor:"#1B75BC"},c={strokeColor:"#00441B",fillColor:"#00441B"};function d(t){switch(t){case 1:return[l];case 2:return[o,l];default:return[o,l,c]}}},372:function(t,e,n){"use strict";var r=n(307),o=n(315),l=(n(36),n(0).a.extend({props:{"検査実施人数":{type:Number,required:!0},"陽性者数":{type:Number,required:!0},"入院中":{type:Number,required:!0},"軽症中等症":{type:Number,required:!0},"重症":{type:Number,required:!0},"宿泊療養":{type:Number,required:!0},"調査中":{type:Number,required:!0},"死亡":{type:Number,required:!0},"退院":{type:Number,required:!0}}})),c=n(450),d=n(8);var h=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(" "+t._s(t.$t("陽性者数"))+" ("+t._s(t.$t("累計"))+") ")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.陽性者数))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院中")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.入院中))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",{domProps:{innerHTML:t._s(t.$t("軽症・中等症"))}}),t._v(" "),n("span",[n("strong",[t._v(t._s(t.軽症中等症))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("重症")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.重症))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("宿泊療養")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.宿泊療養))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院・療養等調整中")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.調査中))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("死亡")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.死亡))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("退院")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.退院))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null).exports,f={components:{DataView:o.a,ConfirmedCasesDetailsTable:h},data:function(){var t=function(data){return{"検査実施人数":data.value,"陽性者数":data.children[0].value,"入院中":data.children[0].children[0].value,"軽症中等症":data.children[0].children[0].children[0].value,"重症":data.children[0].children[0].children[1].value,"宿泊療養":data.children[0].children[1].value,"調査中":data.children[0].children[2].value,"死亡":data.children[0].children[3].value,"退院":data.children[0].children[4].value}}(r.main_summary),data={Data:r,confirmedCases:t};return data}},v=n(44),m=n.n(v),y=n(298),x=Object(d.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-view",{attrs:{title:this.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:this.Data.patients.date}},[e("confirmed-cases-details-table",this._b({attrs:{"aria-label":this.$t("検査陽性者の状況")}},"confirmed-cases-details-table",this.confirmedCases,!1))],1)],1)}),[],!1,null,null,null);e.a=x.exports;m()(x,{VCol:y.a})},373:function(t,e,n){"use strict";n(63),n(10),n(6);var r=n(307),o=n(352),l=n(313),c=[{text:"公表日",value:"公表日"},{text:"居住地",value:"居住地"},{text:"年代",value:"年代"},{text:"性別",value:"性別"},{text:"退院※",value:"退院",align:"center"}],d=n(18),h=n.n(d),f=n(0),v=n(315),m=n(361),y=n(360),x=f.a.extend({components:{DataView:v.a,DataViewBasicInfoPanel:m.a,OpenDataLink:y.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""},customSort:{type:Function,default:function(t,e,n){return t.sort((function(a,b){var t=0;return String(a[e[0]])<String(b[e[0]])?t=-1:String(b[e[0]])<String(a[e[0]])&&(t=1),0!==t&&(t=n[0]?-1*t:t),t})),t}}},mounted:function(){this.$refs.displayedTable.$el.querySelectorAll("table").forEach((function(table){table.setAttribute("tabindex","0")}))},methods:{translateDate:function(t){var e=h()(t);return e.isValid()?this.$d(e.toDate(),"date"):t}}}),_=(n(499),n(8)),w=n(44),k=n.n(w),D=n(513),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("span")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:t.url}})]},proxy:!0}])},[t._v(" "),n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,height:240,"fixed-header":"","mobile-breakpoint":0,"custom-sort":t.customSort,"footer-props":{"items-per-page-options":[15,30,50,100,200,300,-1],"items-per-page-text":t.$t("1ページ当たり")}},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[n("tbody",t._l(r,(function(e){return n("tr",{key:e.text},[n("th",{staticClass:"text-start"},[t._v(t._s(t.translateDate(e["公表日"])))]),t._v(" "),n("td",{staticClass:"text-start"},[t._v(t._s(e["居住地"]))]),t._v(" "),n("td",{staticClass:"text-start"},[t._v(t._s(e["年代"]))]),t._v(" "),n("td",{staticClass:"text-start"},[t._v(t._s(e["性別"]))]),t._v(" "),n("td",{staticClass:"text-center"},[t._v(t._s(e["退院"]))])])})),0)]}},{key:"footer.page-text",fn:function(e){return[t._v("\n      "+t._s(t.$t("{itemsLength} 項目中 {pageStart} - {pageStop} ",{itemsLength:e.itemsLength,pageStart:e.pageStart,pageStop:e.pageStop}))+"\n    ")]}}])}),t._v(" "),n("div",{staticClass:"note"},[n("ul",[n("li",[t._v("\n        "+t._s(t.$t("※退院には、死亡退院を含む"))+"\n      ")])])])],1)}),[],!1,null,null,null),$=component.exports;k()(component,{VDataTable:D.a});var C={components:{DataTable:$},data:function(){var t=Object(o.a)(r.patients_summary.data),e=t[t.length-1],n=this.$d(new Date(e.label),"date"),d=function(data){var t={headers:c,datasets:[]};return data.forEach((function(e){var n,r,o,c,d={"公表日":null!==(n=Object(l.b)(e["リリース日"]))&&void 0!==n?n:"不明","居住地":null!==(r=e["居住地"])&&void 0!==r?r:"不明","年代":null!==(o=e["年代"])&&void 0!==o?o:"不明","性別":null!==(c=e["性別"])&&void 0!==c?c:"不明","退院":e["退院"]};t.datasets.push(d)})),t.datasets.sort((function(a,b){return a===b?0:a<b?1:-1})),t}(r.patients.data),h={lText:t[t.length-1].cumulative.toLocaleString(),sText:this.$t("{date}の累計",{date:n}),unit:this.$t("人")},f=!0,v=!1,m=void 0;try{for(var y,x=d.headers[Symbol.iterator]();!(f=(y=x.next()).done);f=!0){var header=y.value;header.text="退院"===header.value?this.$t("退院※"):this.$t(header.value)}}catch(t){v=!0,m=t}finally{try{f||null==x.return||x.return()}finally{if(v)throw m}}var _=!0,w=!1,k=void 0;try{for(var D,$=d.datasets[Symbol.iterator]();!(_=(D=$.next()).done);_=!0){var C=D.value;if(C["居住地"]=this.$t(C["居住地"]),C["性別"]=this.$t(C["性別"]),C["退院"]=this.$t(C["退院"]),"代"===C["年代"].substr(-1,1)){var T=C["年代"].substring(0,2);C["年代"]=this.$t("{age}代",{age:T})}else C["年代"]=this.$t(C["年代"])}}catch(t){w=!0,k=t}finally{try{_||null==$.return||$.return()}finally{if(w)throw k}}var data={Data:r,patientsTable:d,sumInfoOfPatients:h};return data}},T=n(298),S=Object(_.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-table",{attrs:{title:this.$t("陽性患者の属性"),"title-id":"attributes-of-confirmed-cases","chart-data":this.patientsTable,"chart-option":{},date:this.Data.patients.date,info:this.sumInfoOfPatients,url:"https://opendata.pref.shizuoka.jp/dataset/8167.html"}})],1)}),[],!1,null,null,null);e.a=S.exports;k()(S,{VCol:T.a})},374:function(t,e,n){"use strict";var r=n(307),o=(n(33),n(2)),l=n(138),c=(n(36),n(0)),d=n(315),h=n(376),f=n(361),v=n(360),m=n(378),y=n(131),x=n(367),_={created:function(){this.canvas=!0},components:{DataView:d.a,DataSelector:h.a,DataViewBasicInfoPanel:f.a,OpenDataLink:v.a,ScrollableChart:m.a},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,default:"time-stacked-bar-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},items:{type:Array,default:function(){return[]}},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""},initialCumulative:{type:Number,default:0},url:{type:String,default:""},yAxesBgPlugin:{type:Array,default:function(){return y.b}}},data:function(){return{dataKind:"transition",displayLegends:[!0,!0],colors:Object(x.a)(2),canvas:!0}},computed:{displayInfo:function(){var t=this.labels[this.labels.length-1],e=this.$d(new Date(t),"date");return"transition"===this.dataKind?{lText:this.sum(this.pickLastNumber(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の合計",{date:e})),unit:this.unit}:{lText:(this.sum(this.cumulativeSum(this.chartData))+this.initialCumulative).toLocaleString(),sText:"".concat(this.$t("{date}までの累計（内{offset}人は2020/4/26までの累計）",{date:e,offset:this.initialCumulative.toLocaleString()})),unit:this.unit}},displayData:function(){var t=this,e=Object(x.a)(this.chartData.length);return"transition"===this.dataKind?{labels:this.labels,datasets:this.chartData.map((function(n,r){return{label:t.items[r],data:n,backgroundColor:e[r].fillColor,borderColor:e[r].strokeColor,borderWidth:{left:0,top:1,right:0,bottom:0}}}))}:{labels:this.labels,datasets:this.chartData.map((function(n,r){return{label:t.items[r],data:t.cumulative(n),backgroundColor:e[r].fillColor,borderColor:e[r].strokeColor,borderWidth:{left:0,top:1,right:0,bottom:0}}}))}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(l.a)(this.items.map((function(text,t){return{text:text,value:String(t)}}))))},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign.apply(Object,[{text:t.labels[i]}].concat(Object(l.a)(t.items.map((function(e,n){return Object(o.a)({},n,t.displayData.datasets[n].data[i])})))))}))},displayOption:function(){var t=this,e=this,n=this.unit,r=this.eachArraySum(this.chartData),data=this.chartData,o=this.chartData.map((function(e){return t.cumulative(e)})),l=this.eachArraySum(o),c={tooltips:{displayColors:!1,callbacks:{label:function(e){var c,d;return"transition"===t.dataKind?(c=r[e.index].toLocaleString(),d=data[e.datasetIndex][e.index].toLocaleString()):(c=l[e.index].toLocaleString(),d=o[e.datasetIndex][e.index].toLocaleString()),"".concat(t.dataLabels[e.datasetIndex],": ").concat(d," ").concat(n," (").concat(t.$t("合計"),": ").concat(c," ").concat(n,")")},title:function(t,data){var label=data.labels[t[0].index];return e.$d(new Date(label),"date")}}},responsive:!1,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return label.split("/")[2]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",parser:"Y/M/D",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax,maxTicksLimit:8,fontColor:"#808080"}}]}};return"true"===this.$route.query.ogp&&Object.assign(c,{animation:{duration:0}}),c},displayDataHeader:function(){var t=0,e=0;for(var i in this.displayData.datasets[0].data){var n=this.displayData.datasets[0].data[i]+this.displayData.datasets[1].data[i];n>e&&(e=n,t=Number(i))}return{labels:["2020/1/1"],datasets:[{data:[this.displayData.datasets[0].data[t]],backgroundColor:"transparent",borderWidth:0},{data:[this.displayData.datasets[1].data[t]],backgroundColor:"transparent",borderWidth:0}]}},displayOptionHeader:function(){return{responsive:!1,maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,minRotation:0,callback:function(label){return label.split("/")[2]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax,maxTicksLimit:8,fontColor:"#808080"}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t=0;for(var i in this.chartData[0])t=Math.max(t,this.chartData[0][i]+this.chartData[1][i]);return t}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()},cumulative:function(t){var e=[],n=0;return t.forEach((function(t){n+=t,e.push(n)})),e},sum:function(t){return t.reduce((function(t,e){return t+e}))},pickLastNumber:function(t){return t.map((function(t){return t[t.length-1]}))},cumulativeSum:function(t){return t.map((function(t){return t.reduce((function(t,e){return t+e}))}))},eachArraySum:function(t){for(var e=[],i=0;i<t[0].length;i++)e.push(t[0][i]+t[1][i]);return e}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},w=c.a.extend(_),k=n(501),D=n(8),$=n(44),C=n.n($),T=n(513);var component=Object(D.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("ul",{class:t.$style.GraphDesc},[n("li",[t._v("\n        "+t._s(t.$t("（注）検体を採取した日を基準とする"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("（注）同一の対象者について複数の検体を検査する場合あり（2020年11月30日までは件数、2020年12月1日以降は人数を集計）"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("（注）速報値として公開するものであり、後日確定データとして修正される場合あり"))+"\n      ")])]),t._v(" "),n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:t.url}})]},proxy:!0}])},[t._v(" "),n("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.items,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[n("button",[n("div",{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor}}),t._v(" "),n("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v(t._s(e))])])])})),0),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,"display-legends":t.displayLegends,height:240}})]},proxy:!0}])}),t._v(" "),n("v-data-table",{style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"}}),t._v(" "),n("p",{class:t.$style.DataViewDesc},[t._t("additionalNotes")],2)],1)}),[],!1,(function(t){this.$style=k.default.locals||k.default}),null,null),S=component.exports;C()(component,{VDataTable:T.a});var L={components:{TimeStackedBarChart:S},data:function(){var t=[r.inspections_summary.data["地方衛生研究所"],r.inspections_summary.data["医療機関等"]],e=[this.$t("保健所が行政検査として行った検体採取人数"),this.$t("医療機関等が行政検査として行った検体採取人数")],n=r.inspections_summary.labels,o=[this.$t("保健所"),this.$t("医療機関等")],l=r.inspections_summary.initial_cumulative.count,data={Data:r,inspectionsGraph:t,inspectionsItems:e,inspectionsLabels:n,inspectionsDataLabels:o,inspectionsInitialCumulative:l};return data}},I=n(298),z=Object(D.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-stacked-bar-chart",{attrs:{title:t.$t("検査（検体採取）実施人数"),"title-id":"number-of-tested","chart-id":"time-stacked-bar-chart-inspections","chart-data":t.inspectionsGraph,date:t.Data.inspections_summary.date,items:t.inspectionsItems,labels:t.inspectionsLabels,unit:t.$t("人"),"data-labels":t.inspectionsDataLabels,"initial-cumulative":t.inspectionsInitialCumulative,url:"https://opendata.pref.shizuoka.jp/dataset/8167.html"}})],1)}),[],!1,null,null,null);e.a=z.exports;C()(z,{VCol:I.a})},375:function(t,e,n){"use strict";var r=n(307),o=n(352),l={components:{TimeBarChart:n(377).a},data:function(){var t=Object(o.a)(r.querents.data),data={Data:r,querentsGraph:t};return data}},c=n(8),d=n(44),h=n.n(d),f=n(298),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("新型コロナ受診相談窓口相談件数"),"title-id":"number-of-reports-to-covid19-consultation-desk","chart-id":"time-bar-chart-querents","chart-data":this.querentsGraph,date:this.Data.querents.date,unit:this.$t("件.reports"),url:"https://opendata.pref.shizuoka.jp/dataset/8167.html"}})],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{VCol:f.a})},376:function(t,e,n){"use strict";var r=n(0).a.extend({name:"DataSelector",props:{value:{type:String,default:"transition"},targetId:{type:String,default:function(t){return t&&""!==t?t:null}}}}),o=(n(453),n(8)),l=n(44),c=n.n(l),d=n(363),h=n(523),f=n(459),v=n.n(f),m=n(137),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{staticClass:"DataSelector",attrs:{"aria-controls":t.targetId,value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"transition"===t.value?"true":"false",value:"transition"}},[t._v("\n    "+t._s(t.$t("日別"))+"\n  ")]),t._v(" "),n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"cumulative"===t.value?"true":"false",value:"cumulative"}},[t._v("\n    "+t._s(t.$t("累計"))+"\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VBtn:d.a,VBtnToggle:h.a}),v()(component,{Ripple:m.a})},377:function(t,e,n){"use strict";n(452);var r=n(138),o=(n(33),n(36),n(0)),l=n(315),c=n(376),d=n(361),h=n(378),f=n(360),v=n(131),m=n(367),y={created:function(){this.canvas=!0},components:{DataView:l.a,DataSelector:c.a,DataViewBasicInfoPanel:d.a,ScrollableChart:h.a,OpenDataLink:f.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartId:{type:String,default:"time-bar-chart"},chartData:{type:Array,default:function(){return[]}},date:{type:String,required:!0},unit:{type:String,default:""},url:{type:String,default:""},yAxesBgPlugin:{type:Array,default:function(){return v.b}}},data:function(){return{dataKind:"transition",canvas:!0}},computed:{displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e)},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e)},displayInfo:function(){var t=this.chartData.slice(-1)[0],e=this.$d(new Date(t.label),"date");return"transition"===this.dataKind?{lText:"".concat(t.transition.toLocaleString()),sText:"".concat(e," ").concat(this.$t("実績値"),"（").concat(this.$t("前日比"),": ").concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit}:{lText:t.cumulative.toLocaleString(),sText:"".concat(e," ").concat(this.$t("累計値"),"（").concat(this.$t("前日比"),": ").concat(this.displayCumulativeRatio," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:m.b,borderWidth:0}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:m.b,borderWidth:0}]}},displayOption:function(){var t=this,e=this.unit,n={tooltips:{displayColors:!1,callbacks:{label:function(t){return"".concat(parseInt(t.value).toLocaleString()," ").concat(e)},title:function(e,data){var label=data.labels[e[0].index];return t.$d(new Date(label),"date")}}},responsive:!1,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return String(Number(label.split("-")[2]))}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",parser:"Y/M/D",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(n,{animation:{duration:0}}),n},displayDataHeader:function(){return"transition"===this.dataKind?{labels:["2020/1/1"],datasets:[{data:[Math.max.apply(Math,Object(r.a)(this.chartData.map((function(t){return t.transition}))))],backgroundColor:"transparent",borderWidth:0}]}:{labels:["2020/1/1"],datasets:[{data:[Math.max.apply(Math,Object(r.a)(this.chartData.map((function(t){return t.cumulative}))))],backgroundColor:"transparent",borderWidth:0}]}},displayOptionHeader:function(){return{responsive:!1,maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,minRotation:0,callback:function(label){return String(Number(label.split("-")[2]))}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"YYYY-MM"}}}],yAxes:[{stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t="transition"===this.dataKind?"transition":"cumulative",e=this.chartData.map((function(e){return e[t]}));return Math.max.apply(Math,Object(r.a)(e))},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"},{text:this.title,value:"0"}]},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return{text:t.displayData.labels[i],0:t.displayData.datasets[0].data[i]}}))}},methods:{formatDayBeforeRatio:function(t){var e=t.toLocaleString();switch(Math.sign(t)){case 1:return"+".concat(e);case-1:default:return"".concat(e)}}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},x=o.a.extend(y),_=n(8),w=n(44),k=n.n(w),D=n(513),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"button",fn:function(){return[n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,height:240}})]},proxy:!0}])}),t._v(" "),n("v-data-table",{staticClass:"cardTable",style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"}})],1)}),[],!1,null,null,null);e.a=component.exports;k()(component,{VDataTable:D.a})},378:function(t,e,n){"use strict";var r={props:{displayData:{type:Object,required:!0}},data:function(){return{chartWidth:300}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer.clientWidth;this.chartWidth=this.calcChartWidth(t,this.labelCount),this.scrollRightSide()},calcChartWidth:function(t,e){var n=(t-38)/60*e+38;return Math.max(n,t)},scrollRightSide:function(){var t=this,e=this.$refs.scrollable;e&&setTimeout((function(){e.scrollLeft=t.chartWidth}))}},mounted:function(){var t,e=this;this.adjustChartWidth(),window.addEventListener("resize",(function(){clearTimeout(t),t=window.setTimeout(e.adjustChartWidth,500)}))}},o=(n(462),n(8)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[e("div",{ref:"scrollable",staticClass:"scrollable"},[e("div",{style:{width:this.chartWidth+"px"}},[this._t("chart",null,{chartWidth:this.chartWidth})],2)]),this._v(" "),this._t("sticky-chart")],2)}),[],!1,null,"49372267",null);e.a=component.exports},379:function(t,e,n){"use strict";var r=n(307),o=n(352),l={components:{TimeBarChart:n(377).a},data:function(){var t=Object(o.a)(r.patients_summary.data),data={Data:r,patientsGraph:t};return data}},c=n(8),d=n(44),h=n.n(d),f=n(298),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("陽性患者数"),"title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":this.patientsGraph,date:this.Data.patients.date,unit:this.$t("人"),url:"https://opendata.pref.shizuoka.jp/dataset/8167.html"}})],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{VCol:f.a})},450:function(t,e,n){"use strict";var r=n(351),o=n.n(r);e.default=o.a},451:function(t,e,n){(e=n(11)(!1)).push([t.i,'.container_1VuG7{width:100%;box-sizing:border-box;color:#008830;line-height:1.35;padding-left:0 !important}.container_1VuG7 *{box-sizing:border-box}.container_1VuG7 ul{padding-left:0}.group_MrdNH{flex:0 0 auto;padding-left:3px !important;border-top:3px solid #008830;border-left:3px solid #008830}.content_TJIht{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #008830}.content_TJIht>span{display:block;font-size:14px;font-size:0.875rem}.content_TJIht>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_TJIht>span:last-child{margin-left:10px;text-align:right;flex-shrink:1}.content_TJIht>span:not(:last-child){overflow-wrap:break-word}.content_TJIht strong{font-size:16px;font-size:1rem}.content_TJIht span.unit_1E2ZH{font-size:14px;font-size:0.875rem}.box_1NKW3{display:block;margin-top:3px}.box_1NKW3.parent_2wZWB{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-left:29px}.box_1NKW3.parent_2wZWB::after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #008830}.box_1NKW3.parent_2wZWB>.content_TJIht{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width: 1263px){.group_MrdNH{padding-left:.238vw !important;border-top:.238vw solid #008830;border-left:.238vw solid #008830}.content_TJIht{padding:.396vw .792vw;border:.238vw solid #008830}.content_TJIht>span{font-size:14px;font-size:0.875rem}.content_TJIht>span:first-child{margin-top:.08vw}.content_TJIht>span:last-child{margin-left:10px}.content_TJIht strong{font-size:16px;font-size:1rem}.content_TJIht span.unit_1E2ZH{font-size:14px;font-size:0.875rem}.box_1NKW3{margin-top:.238vw}.box_1NKW3.parent_2wZWB{border-top:.238vw solid #008830;border-left:.238vw solid #008830;padding-left:2.296vw}.box_1NKW3.parent_2wZWB::after{width:2.534vw;border-bottom:.238vw solid #008830}.box_1NKW3.parent_2wZWB>.content_TJIht{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width: 959px){.group_MrdNH{padding-left:.313vw !important;border-top:.313vw solid #008830;border-left:.313vw solid #008830}.content_TJIht{padding:.521vw 1.042vw;border:.313vw solid #008830}.content_TJIht>span{font-size:14px;font-size:0.875rem}.content_TJIht>span:first-child{margin-top:.105vw}.content_TJIht>span:last-child{margin-left:10px}.content_TJIht strong{font-size:16px;font-size:1rem}.content_TJIht span.unit_1E2ZH{font-size:14px;font-size:0.875rem}.box_1NKW3{margin-top:.313vw}.box_1NKW3.parent_2wZWB{border-top:.313vw solid #008830;border-left:.313vw solid #008830;padding-left:3.02vw}.box_1NKW3.parent_2wZWB::after{width:3.334vw;border-bottom:.313vw solid #008830}.box_1NKW3.parent_2wZWB>.content_TJIht{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width: 600px){.group_MrdNH{padding-left:.5vw !important;border-top:.5vw solid #008830;border-left:.5vw solid #008830}.content_TJIht{padding:.834vw 1.667vw;border:.5vw solid #008830}.content_TJIht>span{font-size:14px;font-size:0.875rem}.content_TJIht>span:first-child{margin-top:.167vw}.content_TJIht>span:last-child{margin-left:10px}.content_TJIht strong{font-size:16px;font-size:1rem}.content_TJIht span.unit_1E2ZH{font-size:14px;font-size:0.875rem}.box_1NKW3{margin-top:.5vw}.box_1NKW3.parent_2wZWB{border-top:.5vw solid #008830;border-left:.5vw solid #008830;padding-left:4.834vw}.box_1NKW3.parent_2wZWB::after{width:5.334vw;border-bottom:.5vw solid #008830}.box_1NKW3.parent_2wZWB>.content_TJIht{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),e.locals={container:"container_1VuG7",group:"group_MrdNH",content:"content_TJIht",unit:"unit_1E2ZH",box:"box_1NKW3",parent:"parent_2wZWB"},t.exports=e},453:function(t,e,n){"use strict";var r=n(353);n.n(r).a},454:function(t,e,n){(e=n(11)(!1)).push([t.i,".DataSelector{margin-top:20px;border:1px solid #d9d9d9;background-color:#fff}.DataSelector-Button{border:none !important;margin:2px;border-radius:4px !important;height:24px !important;font-size:12px !important;color:#333 !important;background-color:#fff !important}.DataSelector-Button::before{background-color:inherit}.DataSelector-Button:focus{outline:dotted #707070 1px}.DataSelector .v-btn--active{background-color:#4d4d4d !important;color:#fff !important}",""]),t.exports=e},460:function(t,e,n){"use strict";var r=n(354);n.n(r).a},461:function(t,e,n){(e=n(11)(!1)).push([t.i,"@media screen and (min-width: 1171px){.DataView-DataInfo{text-align:right;width:50%}}.DataView-DataInfo-summary{display:inline-block;font-family:Hiragino Sans,sans-serif;font-style:normal;font-size:30px;line-height:30px}.DataView-DataInfo-summary-unit{font-size:.6em}.DataView-DataInfo-date{white-space:wrap;display:inline-block;font-size:12px;line-height:12px;color:#707070}",""]),t.exports=e},462:function(t,e,n){"use strict";var r=n(355);n.n(r).a},463:function(t,e,n){(e=n(11)(!1)).push([t.i,".LegendStickyChart[data-v-49372267]{margin:16px 0;position:relative;overflow:hidden}.LegendStickyChart .scrollable[data-v-49372267]{overflow-x:scroll}.LegendStickyChart .sticky-legend[data-v-49372267]{position:absolute;top:0;pointer-events:none;width:100%}",""]),t.exports=e},464:function(t,e,n){"use strict";var r=n(356);n.n(r).a},465:function(t,e,n){(e=n(11)(!1)).push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},499:function(t,e,n){"use strict";var r=n(357);n.n(r).a},500:function(t,e,n){(e=n(11)(!1)).push([t.i,".cardTable.v-data-table th{padding:8px 10px;height:auto;border-bottom:1px solid #d9d9d9;color:#4d4d4d;font-size:12px}.cardTable.v-data-table th.text-center{text-align:center}.cardTable.v-data-table tbody tr{color:#333}.cardTable.v-data-table tbody tr th{font-weight:normal}.cardTable.v-data-table tbody tr td{padding:8px 10px;height:auto;font-size:12px}.cardTable.v-data-table tbody tr td.text-center{text-align:center}.cardTable.v-data-table tbody tr:nth-child(odd) th,.cardTable.v-data-table tbody tr:nth-child(odd) td{background:rgba(217,217,217,.3)}.cardTable.v-data-table .v-select{margin-left:10px}.cardTable.v-data-table:focus{outline:dotted #707070 1px}.cardTable .v-data-table__wrapper{box-shadow:0 -20px 12px -12px #0003 inset}.cardTable .v-data-footer{font-size:12px;font-size:0.75rem}.cardTable .v-data-footer__pagination{margin-left:0;margin-right:5px}.cardTable .v-data-footer__select .v-select__selections .v-select__selection--comma{font-size:.75rem}.note{padding:8px;font-size:12px;color:#707070}.note ul,.note ol{list-style-type:none;padding:0}.v-menu__content{width:80px}.v-menu__content .v-list-item{padding:0 8px}.v-list-item__title{font-size:1rem}",""]),t.exports=e},501:function(t,e,n){"use strict";var r=n(358),o=n.n(r);e.default=o.a},502:function(t,e,n){(e=n(11)(!1)).push([t.i,".GraphDesc_o77VL{width:100%;margin:0;margin-bottom:0 !important;padding-left:0 !important;font-size:12px;color:#707070;list-style:none}.GraphLegend_1qazu{text-align:center;list-style:none;padding:0 !important}.GraphLegend_1qazu li{display:inline-block;margin:0 3px}.GraphLegend_1qazu li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_1qazu li button{color:#707070;font-size:12px}.DataViewDesc_wvmsK{margin-top:10px;margin-bottom:0 !important;font-size:12px;line-height:15px;color:#707070}",""]),e.locals={GraphDesc:"GraphDesc_o77VL",GraphLegend:"GraphLegend_1qazu",DataViewDesc:"DataViewDesc_wvmsK"},t.exports=e}}]);