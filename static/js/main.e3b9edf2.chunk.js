(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{275:function(e,t,a){e.exports=a(534)},280:function(e,t,a){},533:function(e,t,a){},534:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(7),i=a.n(o),c=(a(280),a(537)),s=a(92),l=a(248),d=a(13),u=a.n(d),m="https://www.mocky.io/v2/5cd04a20320000442200fc10",p={isFetching:!1,isFetchingError:!1,allData:[],data:[],error:null,startDate:u()(),endDate:u()()};function h(e,t){switch(t.type){case f:return Object(s.a)({},e,{isFetching:!0,isFetchingError:!1});case E:return Object(s.a)({},e,{isFetching:!1,isFetchingError:!1,data:t.payload,allData:t.payload});case v:return Object(s.a)({},e,{isFetching:!1,isFetchingError:!0});case y:return console.log(e,t.payload),Object(s.a)({},e,{startDate:t.payload.startDate,endDate:t.payload.endDate,data:g(e.allData,t.payload.startDate,t.payload.endDate)});default:return e}}function g(e,t,a){console.log(e,t,a);var n=[];return e.filter(function(e){u()(e.timestamp).isBetween(u()(t),u()(a))&&(console.log("inside IF"),n.push(e)),console.log(n)}),n}var f="GET_DATA_REQUEST",E="GET_DATA_SUCCESS",v="GET_DATA_FAILURE",y="SET_TIME_RANGE",D=a(536).a.RangePicker;function w(e){var t=e.onChange;return r.a.createElement("div",null,r.a.createElement(D,{onChange:t,disabledDate:function(e){return e&&e>u()().endOf("day")}}))}var b=a(249),k=a(75),F=a(43);function T(e){var t=e.data,a=e.dataKey,n=e.value,o=e.emptyText,i=(e.width,e.height,Object(b.a)(e,["data","dataKey","value","emptyText","width","height"]));return t.length?r.a.createElement(F.e,{width:"100%",aspect:5/3},r.a.createElement(F.d,Object.assign({data:t,margin:{top:5,right:30,left:20,bottom:5}},i),r.a.createElement(F.a,{strokeDasharray:"3 3"}),r.a.createElement(F.g,{dataKey:a}),r.a.createElement(F.h,null),r.a.createElement(F.f,null),r.a.createElement(F.b,null),r.a.createElement(F.c,{type:"monotone",dataKey:n,stroke:"#8884d8",activeDot:{r:8}}))):r.a.createElement(k.a,{description:o||"No data"})}var O=a(535);function j(e){var t=e.data,a=[{title:"Date",dataIndex:"timestamp",key:"timestamp",sorter:function(e,t){return u()(e.timestamp).diff(u()(t.timestamp))}},{title:"Game",dataIndex:"game",key:"game",sorter:function(e,t){return e.game-t.game}},{title:"Revenue",dataIndex:"revenue",key:"revenue",sorter:function(e,t){return e.revenue-t.revenue}},{title:"Impressions",dataIndex:"impressions",key:"impressions",sorter:function(e,t){return e.impressions-t.impressions}},{title:"eCPM",dataIndex:"",key:"",render:function(e,t,a){return t.revenue/t.impressions*1e3},sorter:function(e,t){return e.revenue/e.impressions*1e3-t.revenue/t.impressions*1e3}}];return r.a.createElement("div",null,r.a.createElement(O.a,{rowKey:"uid",dataSource:t,columns:a,onChange:function(){},pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","10"]}}))}a(532),a(533);var x=function(){var e=function(){var e=Object(n.useReducer)(h,p),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){r({type:f}),fetch(m).then(function(e){return e.json()}).then(function(e){console.log(e),r({type:E,payload:e})}).catch(function(e){console.log(e),r({type:v,payload:e})})},[]),{state:a,dispatch:r}}(),t=e.state,a=e.dispatch,o=t.isFetching,i=(t.isFetchingError,t.data),s=t.startDate,d=t.endDate;return o?r.a.createElement(c.a,{loading:!0}):r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"header-text"},"Dashboard"),r.a.createElement("div",{className:"datepicker-container"},r.a.createElement(w,{startDate:s,endDate:d,onChange:function(e){console.log(e),a({type:y,payload:{startDate:e[0],endDate:e[1]}})}})),r.a.createElement("div",{className:"chart-container"},r.a.createElement(T,{data:i&&i.map(function(e){return{name:e.timestamp,eCPM:e.revenue/e.impressions*1e3}}),dataKey:"name",value:"eCPM",emptyText:"No relevent data found for this date range"})),r.a.createElement("div",{className:"table-container"},r.a.createElement(j,{data:i})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[275,1,2]]]);
//# sourceMappingURL=main.e3b9edf2.chunk.js.map