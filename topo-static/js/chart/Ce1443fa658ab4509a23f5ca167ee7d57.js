!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self).C4386dd2fa5ffc=e()}(this,(function(){"use strict";var n;return n=window.Vue,void((()=>{if(!window.conch)return console.info("请先加载comp包"),!0})()||window.conch.register("Ce1443fa658ab4509a23f5ca167ee7d57",function(){function n(n,t,o="tree"){if(!n.enabled)return!1;switch(o){case"code":return function(n,e){return new Function("data",n)(e)}(n.filterCode,t);case"tree":return function(n,t){return e(n,(n=>e(n,(n=>function(n,e,t,o){let i=n[e];if(null==i)return!1;switch("eq"===t||"in"===t||"nin"===t?(i=i.toString(),o=o.toString()):(i*=1,o*=1),t){case"eq":return i===o;case"gt":return i>o;case"lt":return i<o;case"gte":return i>=o;case"lte":return i<=o;case"ne":return i!==o;case"in":return i.toString().includes(o.toString());case"nin":return!i.toString().includes(o.toString())}}(t,...n)))))}(n,t);default:return!1}}function e(n,e){return function(n){switch(n){case"OR":return Array.prototype.some;case"AND":return Array.prototype.every;default:return()=>!1}}(n.operator).call(n.expressions,e)}const t=class extends window.conch.Base{constructor(n,e){super(n,e),this.padding=[0,0,0,0],this.theme={name:"主题1",palette:["#2362E4","#2782E7","#2AA1EB","#2DC0EE","#31E0F2","#34FFF5"],seriesGradient:[{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#2362E400"},{offset:50,color:"#2362E4"},{offset:100,color:"#2362E400"}]}},{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#2782E700"},{offset:50,color:"#2782E7"},{offset:100,color:"#2782E700"}]}},{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#2AA1EB00"},{offset:50,color:"#2AA1EB"},{offset:99,color:"#2AA1EB00"}]}},{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#2DC0EE00"},{offset:50,color:"#2DC0EE"},{offset:100,color:"#2DC0EE00"}]}},{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#31E0F200"},{offset:50,color:"#31E0F2"},{offset:100,color:"#31E0F200"}]}},{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#34FFF500"},{offset:50,color:"#34FFF5"},{offset:100,color:"#34FFF500"}]}}],images:[],backgroundColor:{show:!1,type:"image",fillType:"auto",url:"/s-static/img/psa40898cc-e317-4ab7-bf3f-d7877ee9c73f.png"},color:{show:!0,value:"#FFFFFF"},minorColor:{show:!0,value:"#FFFFFF"},gridColor:{show:!0,value:"#FFFFFF"}},this.config={menu:{chart:{chartCfg:{lineStroke:{width:2,style:"solid"},smooth:!1,smoothNumber:.5,lineShadow:{color:"#0b71e600",x:0,y:0,blur:0},lineSwitch:!0,opacity:.1,symbol:!1,boundaryGap:!0},dataTips:{show:!0,font:{fontFamily:"simSun",fontWeight:400,color:"#FFFFFF",fontSize:12},site:"top"}},title:{title:{show:!1,padding:{top:0,left:0,bottom:0,right:0},text:"这是标题",font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:16},site:"left"},subTitle:{show:!1,padding:{top:0,left:0,bottom:0,right:0},text:"这是副标题",font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:12},site:"left"}},legend:{legend:{show:!1,font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:12},site:"horizontal-center-top",marker:{shape:"roundRect",size:14},markerSpace:{spacing:10}}},axis:{xaxis:{label:{show:!0,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:12,color:"#FFFFFFB3"},titleBgColor:{type:"flat",value:"#ffffff00"},padding:{paddingX:0,paddingY:0},customTickCount:{show:!1,tickCount:5}},axisLine:{show:!0,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"}},tickLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"},length:5},splitLine:{show:!1,lineStyle:{color:"#FFFFFF1A",width:1,style:"solid"}}},yaxis:{label:{show:!0,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:12,color:"#FFFFFFB3"},titleBgColor:{type:"flat",value:"#ffffff00"},padding:{paddingX:0,paddingY:0},customTickCount:{show:!1,tickCount:5}},axisLine:{show:!0,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"}},tickLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"},length:5},splitLine:{show:!0,lineStyle:{color:"#FFFFFF1A",width:1,style:"solid"}}}},tooltip:{textStyle:{fontFamily:"simSun",fontWeight:400,color:"#FFFFFFB3",fontSize:12},padding:{paddingX:10,paddingY:10},borderColor:"rgba(0, 0, 0, 0.65)",backgroundColor:"rgba(0, 0, 0, 0.65)"},expression:{list:[{color:{type:"flat",value:"#2362E4"},condition:{enabled:!1,operator:"OR",expressions:[{operator:"AND",expressions:[["colorField","eq","100"]]}]}}]},advance:{code:""}}},this.data=[{x:"1月",y:16,s:"系列二"},{x:"2月",y:33,s:"系列二"},{x:"3月",y:26,s:"系列二"},{x:"4月",y:57,s:"系列二"},{x:"5月",y:44,s:"系列二"},{x:"6月",y:50,s:"系列二"}],this.type="echarts"}processData(){const{data:n}=this,e=Array.from(new Set(n.map((n=>n.s)))),t=Array.from(new Set(n.map((n=>n.x)))),o=[];return e.forEach((e=>{let t={};const i=n.filter((n=>n.s===e)).map((n=>{const e=this.processExpression(n);return e&&(t=e),{value:n.y,rawData:n}}));o.push({name:e,data:i,lineStyle:t})})),{seriesArr:e,xData:t,yDataArr:o}}setData(n){this.data=n,this.trigger("dataChange",n),this.render()}processExpression(e){const{config:t}=this,o=t.menu&&t.menu.expression&&t.menu.expression.list;let i=null;if(o)for(let t=0;t<o.length;t++){const l=o[t];n(l.condition,e)&&(i={color:l.color.value})}return i}processSeries(n){const{config:e}=this,t=e?.menu?.chart?.chartCfg;let o={},i=t.lineStroke;const l=i.width,s=i.style;o={width:l,type:s};let a=t.smooth;a&&(a=t.smoothNumber);let r=t.lineShadow,c={};const d=r.color,f=r.blur,u=r.x,p=r.y;(9===d.length&&"00"!==d.substr(7)||d.length<=7)&&(c={shadowColor:d,shadowBlur:f,shadowOffsetX:u,shadowOffsetY:p});const h=t.lineSwitch?{areaStyle:{opacity:t.opacity}}:{},y=t.symbol?{}:{symbol:"circle",symbolSize:.01},m=function(n){let e=null;return n&&(e=function(n){let e=null;if(n.show){let t="top";n.site&&(t=n.site),e={position:t,show:!0,...n.font}}return e}(n)),e}(e?.menu?.chart?.dataTips),g=[];return n.yDataArr.forEach((n=>{const e={name:n.name,data:n.data,type:"line",smooth:a,lineStyle:{...n.lineStyle,...o,...c},itemStyle:{...n.lineStyle},...h,...y,label:m};g.push(e)})),g}transformOptions(){const{menu:n}=this.config,e=this.processData(),{xAxis:t,yAxis:o}=function(n,e){let t=null;return n&&(t=function(n,e){const t=function(n){const e=n.label,t=n.axisLine,o=n.tickLine,i=n.splitLine;let l=2;return e.customTickCount&&e.customTickCount.show&&(l=e.customTickCount.tickCount),{axisLabel:{show:e.show,...e.textarea,backgroundColor:e.titleBgColor.value,padding:[e.padding.paddingY,e.padding.paddingX]},axisLine:{show:t.show,lineStyle:{color:t.lineStyle.color,width:t.lineStyle.width,type:t.lineStyle.style}},axisTick:{show:o.show,lineStyle:{color:o.lineStyle.color,width:o.lineStyle.width,type:o.lineStyle.style},length:o.length},splitLine:{show:i.show,lineStyle:{color:i.lineStyle.color,width:i.lineStyle.width,type:i.lineStyle.style}},splitNumber:l}},o=e.xData,i=n.xaxis,l=n.yaxis;return{xAxis:{type:"category",...t(i),data:o},yAxis:{type:"value",...t(l)}}}(n,e)),t}(n?.axis,e);t.boundaryGap=n?.chart?.chartCfg?.boundaryGap;const i=function(n){let e=null;return n&&(e=function(n){if(n.show){const e=n.font,t=n.site.split("-");return{textStyle:e,orient:t[0],left:t[1],top:t[2],icon:n.marker.shape,itemHeight:n.marker.size,itemGap:n.markerSpace.spacing}}return null}(n)),e}(n?.legend?.legend),l=function(n){let e=null;return n&&(e=function(n){return{textStyle:n.textStyle,padding:[n.padding.paddingY,n.padding.paddingX],backgroundColor:n.backgroundColor,borderColor:n.borderColor}}(n)),e}(n?.tooltip);let s=10;i&&"top"===i.top&&(s=30);let a=10;i&&"bottom"===i.top&&(a=20);const r=this.processSeries(e);let c={color:this.theme.palette,grid:{containLabel:!0,left:"10",top:s,right:"10",bottom:a},tooltip:{show:!0,...l},legend:i,xAxis:t,yAxis:o,series:r};const d=_.cloneDeep(n?.advance?.code);if(d)try{d.title&&(d.title=null),c=_.merge(_.cloneDeep(c),d)}catch(n){}return c}mounted(){this.instance.on("click","series",(n=>{this.trigger("click",n?.data?.rawData)}))}};return t.prototype._registerImg=function(n){},t}(),{key:"C79730158300dc",width:400,height:250,options:'{\n  "actions": [\n    {\n      "label": "点击",\n      "identified": "click"\n    },\n    {\n      "label": "当数据发生变化时",\n      "identified": "dataChange"\n    }\n  ],\n  "fields": [\n    {\n      "name": "x",\n      "desc": "x轴(类目)数据"\n    },\n    {\n      "name": "y",\n      "desc": "y轴(数值)数据"\n    },\n    {\n      "name": "s",\n      "desc": "系列名称"\n    },\n    {\n      "name": "colorFields",\n      "desc": "颜色字段"\n    }\n  ],\n  "propertyPanel": {\n    "menu": {\n      "type": "menu",\n      "children": {\n        "chart": {\n          "name": "图表",\n          "mode": "single",\n          "children": {\n            "chartCfg": {\n              "name": "图表设置",\n              "type": "group",\n              "fold": false,\n              "children": {\n                "lineStroke": {\n                  "type": "stroke",\n                  "name": "描边",\n                  "components": [\n                    "width",\n                    "style"\n                  ],\n                  "default": {\n                    "width": 2,\n                    "style": "solid"\n                  }\n                },\n                "smooth": {\n                  "type": "switch",\n                  "name": "平滑",\n                  "default": false\n                },\n                "smoothNumber": {\n                  "type": "slider",\n                  "name": "平滑张力",\n                  "min": 0,\n                  "max": 1,\n                  "step": 0.1,\n                  "default": 0.5,\n                  "showInPanel": [\n                    [\n                      ".smooth",\n                      "$eq",\n                      true\n                    ]\n                  ]\n                },\n                "lineShadow": {\n                  "type": "shadow",\n                  "name": "阴影",\n                  "default": {\n                    "color": "#0b71e600",\n                    "x": 0,\n                    "y": 0,\n                    "blur": 0\n                  }\n                },\n                "lineSwitch": {\n                  "type": "switch",\n                  "name": "显示面积",\n                  "default": true\n                },\n                "opacity": {\n                  "type": "slider",\n                  "name": "透明",\n                  "min": 0,\n                  "max": 1,\n                  "step": 0.1,\n                  "default": 0.1,\n                  "showInPanel": [\n                    [\n                      ".lineSwitch",\n                      "$eq",\n                      true\n                    ]\n                  ]\n                },\n                "symbol": {\n                  "type": "switch",\n                  "name": "显示端点",\n                  "default": false\n                },\n                "boundaryGap": {\n                  "type": "switch",\n                  "name": "x轴留白",\n                  "default": true\n                }\n              }\n            },\n            "dataTips": {\n              "name": "显示数据",\n              "type": "group",\n              "enableHide": true,\n              "fold": false,\n              "children": {\n                "show": {\n                  "default": true\n                },\n                "font": {\n                  "name": "文本样式",\n                  "type": "font",\n                  "default": {\n                    "fontFamily": "simSun",\n                    "fontWeight": 400,\n                    "color": "#FFFFFF",\n                    "fontSize": 12\n                  }\n                },\n                "site": {\n                  "type": "select",\n                  "name": "对齐",\n                  "options": [\n                    {\n                      "label": "top",\n                      "value": "top"\n                    },\n                    {\n                      "label": "left",\n                      "value": "left"\n                    },\n                    {\n                      "label": "right",\n                      "value": "right"\n                    },\n                    {\n                      "label": "bottom",\n                      "value": "bottom"\n                    },\n                    {\n                      "label": "inside",\n                      "value": "inside"\n                    },\n                    {\n                      "label": "insideLeft",\n                      "value": "insideLeft"\n                    },\n                    {\n                      "label": "insideRight",\n                      "value": "insideRight"\n                    },\n                    {\n                      "label": "insideTop",\n                      "value": "insideTop"\n                    },\n                    {\n                      "label": "insideBottom",\n                      "value": "insideBottom"\n                    },\n                    {\n                      "label": "insideTopLeft",\n                      "value": "insideTopLeft"\n                    },\n                    {\n                      "label": "insideBottomLeft",\n                      "value": "insideBottomLeft"\n                    },\n                    {\n                      "label": "insideTopRight",\n                      "value": "insideTopRight"\n                    },\n                    {\n                      "label": "insideBottomRight",\n                      "value": "insideBottomRight"\n                    }\n                  ],\n                  "default": "top"\n                }\n              }\n            }\n          }\n        },\n        "title": {\n          "name": "标题",\n          "type": "title"\n        },\n        "legend": {\n          "name": "图例",\n          "type": "legend"\n        },\n        "axis": {\n          "name": "坐标轴",\n          "type": "axis"\n        },\n        "tooltip": {\n          "name": "提示框",\n          "type": "tooltip"\n        },\n        "expression": {\n          "name": "条件",\n          "mode": "single",\n          "children": {\n            "list": {\n              "name": "条件列表",\n              "type": "tabs",\n              "fold": false,\n              "template": {\n                "name": "条件<%= i + 1 %>",\n                "type": "object",\n                "children": {\n                  "condition": {\n                    "name": "启用",\n                    "type": "logicalTree",\n                    "default": {\n                      "enabled": true,\n                      "operator": "OR",\n                      "expressions": [\n                        {\n                          "operator": "AND",\n                          "expressions": [\n                            [\n                              "colorField",\n                              "eq",\n                              "100"\n                            ]\n                          ]\n                        }\n                      ]\n                    }\n                  },\n                  "color": {\n                    "name": "线条颜色",\n                    "type": "color",\n                    "components": [\n                      "flat",\n                      "linearGradient"\n                    ],\n                    "default": {\n                      "type": "flat",\n                      "value": "#2362E4"\n                    }\n                  }\n                }\n              },\n              "default": [\n                {\n                  "color": {\n                    "type": "flat",\n                    "value": "#2362E4"\n                  },\n                  "condition": {\n                    "enabled": false,\n                    "operator": "OR",\n                    "expressions": [\n                      {\n                        "operator": "AND",\n                        "expressions": [\n                          [\n                            "colorField",\n                            "eq",\n                            "100"\n                          ]\n                        ]\n                      }\n                    ]\n                  }\n                }\n              ]\n            }\n          }\n        },\n        "advance": {\n          "name": "自定义",\n          "mode": "single",\n          "children": {\n            "code": {\n              "name": "自定义",\n              "description": "直接写echarts option,书写规范：{\\"key\\": value}(echarts title不生效),自定义option优先级大于属性面板配置",\n              "type": "code",\n              "language": "json",\n              "default": ""\n            }\n          }\n        }\n      }\n    }\n  }\n}',script:{lodashminjs:"/lib/lodash.min.js",echarts:"/lib/echarts.js"},utils:["transfromColorOfEcharts","runExpression","getTooltipConfig","getLegendConfig","getLabelConfig","getAxisConfig"]},n))}));