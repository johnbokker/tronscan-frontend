webpackJsonp([7],{2113:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var i=t[r](l),c=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)});e(c)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return{priceGraph:e.markets.price}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(14),s=n(u),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),m=n(f),h=a(82),p=n(h),v=(a(40),a(12)),b=a(15),y=a(30),E=a(16),g=a(17),S=a(25),w=a(2253),x=a(2472),k=(n(x),a(36)),_=a(758),N=(n(_),a(2196)),O=(n(N),a(763)),T=a(755),j=function(e){function t(){l(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={accounts:null,transactionStats:null,blockStats:null,transactionValueStats:null,txOverviewStats:null,addressesStats:null,blockSizeStats:null,blockchainSizeStats:null,priceStats:null},e}return c(t,e),d(t,[{key:"componentDidMount",value:function(){this.loadAccounts(),this.loadStats(),this.loadTxOverviewStats()}},{key:"loadAccounts",value:function(){function e(){return t.apply(this,arguments)}var t=r(s.default.mark(function e(){var t,a;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.Client.getAccounts({limit:35,sort:"-balance"});case 2:t=e.sent,a=t.accounts,this.setState({accounts:(0,S.filter)(a,function(e){return!(0,S.includes)(w.tronAddresses,e.address)}).slice(0,10).map(function(e){return{name:e.address,value:e.balance/y.ONE_TRX}})});case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadStats",value:function(){function e(){return t.apply(this,arguments)}var t=r(s.default.mark(function e(){var t,a,n,r,l,i,c;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.intl,e.next=3,b.Client.getTransferStats({groupby:"timestamp",interval:"hour"});case 3:return a=e.sent,n=a.stats,e.next=7,b.Client.getBlockStats({info:"avg-block-size"});case 7:r=e.sent,l=r.stats,i=n.total.map(function(e){return{timestamp:e.timestamp,value:e.value}}),c=n.value.map(function(e){return{timestamp:e.timestamp,value:e.value/y.ONE_TRX}}),l=l.map(function(e){return{timestamp:e.timestamp,value:e.value}}),this.setState({transactionStats:i,transactionValueStats:c,blockStats:l});case 13:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadTxOverviewStats",value:function(){function e(){return t.apply(this,arguments)}var t=r(s.default.mark(function e(){var t,a,n,r,l,i,c,o,u,d,f,m,h,v,y,E;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,a=t.getTime(),n=new Date("2017/10/10"),r=n.getTime(),l=Math.floor((a-r)/1e3/3600/24),e.next=7,p.default.get("https://min-api.cryptocompare.com/data/histoday?fsym=TRX&tsym=USD&limit="+l);case 7:return i=e.sent,c=i.data,o=c.Data,e.next=12,b.Client.getTxOverviewStats();case 12:u=e.sent,d=u.txOverviewStats,f=[],m=[],h=[],v=[];for(y in d)E=parseInt(y),0===E?(f.push(d[E]),m.push({date:d[E].date,total:d[E].newAddressSeen,increment:d[E].newAddressSeen})):(f.push({date:d[E].date,totalTransaction:d[E].totalTransaction-d[E-1].totalTransaction,avgBlockTime:d[E].avgBlockTime,avgBlockSize:d[E].avgBlockSize,totalBlockCount:d[E].totalBlockCount-d[E-1].totalBlockCount,newAddressSeen:d[E].newAddressSeen}),m.push({date:d[E].date,total:d[E].newAddressSeen+m[E-1].total,increment:d[E].newAddressSeen})),h.push({date:d[E].date,avgBlockSize:d[E].avgBlockSize}),v.push({date:d[E].date,blockchainSize:d[E].blockchainSize});this.setState({txOverviewStats:f,addressesStats:m,blockSizeStats:h,blockchainSizeStats:v,priceStats:o});case 20:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.state,t=e.txOverviewStats,a=e.addressesStats,n=(e.transactionStats,e.transactionValueStats,e.blockStats,e.accounts,e.blockSizeStats),r=e.blockchainSizeStats,l=e.priceStats,i=this.props.intl;return m.default.createElement("main",{className:"container header-overlap"},m.default.createElement("div",{className:"text-center alert alert-light alert-dismissible fade show",role:"alert"},(0,v.tu)("click_the_chart_title_to_find_more"),m.default.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},m.default.createElement("span",{"aria-hidden":"true"},"\xd7"))),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-6 mt-3 mt-md-0"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},m.default.createElement("div",{style:{height:350}},null===t?m.default.createElement(k.TronLoader,null):m.default.createElement(O.LineReactTx,{style:{height:350},data:t,intl:i}))))),m.default.createElement("div",{className:"col-md-6 mt-3 mt-md-0"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},m.default.createElement("div",{style:{height:350}},null===a?m.default.createElement(k.TronLoader,null):m.default.createElement(O.LineReactAdd,{style:{height:350},data:a,intl:i})))))),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-6 mt-3"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},m.default.createElement("div",{style:{height:350}},null===n?m.default.createElement(k.TronLoader,null):m.default.createElement(O.LineReactBlockSize,{style:{height:350},data:n,intl:i}))))),m.default.createElement("div",{className:"col-md-6 mt-3"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},m.default.createElement("div",{style:{height:350}},null===r?m.default.createElement(k.TronLoader,null):m.default.createElement(O.LineReactBlockchainSize,{style:{height:350},data:r,intl:i})))))),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-6 mt-3"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},m.default.createElement("div",{style:{height:350}},null===l?m.default.createElement(k.TronLoader,null):m.default.createElement(O.LineReactPrice,{style:{height:350},data:l,intl:i})))))))}}]),t}(m.default.Component),P={loadPriceData:T.loadPriceData};t.default=(0,E.connect)(o,P)((0,g.injectIntl)(j))},2196:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.LineReact=void 0;var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),s=n(u),d=a(16),f=a(17),m=a(190),h=n(m),p=a(19),v=n(p);a(398),a(191),a(192);var b=t.LineReact=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=("_"+Math.random()).replace(".","_");return a.state={lineId:"line"+n},a}return i(t,e),o(t,[{key:"initLine",value:function(e){var t=this.props,a=t.intl,n=t.keysData,r=t.data,l=t.format,i=t.message,c=v.default.getInstanceByDom(document.getElementById(e));void 0===c&&(c=v.default.init(document.getElementById(e))),h.default.lineChart.title.text=a.formatMessage({id:i.id}),i.href&&(h.default.lineChart.title.link="#/blockchain/stats/"+i.href),h.default.lineChart.xAxis.data=[],h.default.lineChart.series[0].data=[],r&&r.length>0&&r.map(function(e){l&&l[n[0]]?l.date?h.default.lineChart.xAxis.data.push(a.formatDate(1e3*e[n[0]])):(10===(e[n[0]]+"").length&&h.default.lineChart.xAxis.data.push(a.formatTime(1e3*e[n[0]])),13===(e[n[0]]+"").length&&h.default.lineChart.xAxis.data.push(a.formatTime(e[n[0]]))):h.default.lineChart.xAxis.data.push(e[n[0]]),h.default.lineChart.series[0].data.push(e[n[1]])}),r&&0===r.length&&(h.default.lineChart.title.text="No data"),c.setOption(h.default.lineChart)}},{key:"componentDidMount",value:function(){this.initLine(this.state.lineId)}},{key:"componentDidUpdate",value:function(){this.initLine(this.state.lineId)}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("div",{id:this.state.lineId,style:this.props.style}))}}]),t}(s.default.Component),y={};t.default=(0,d.connect)(c,y,null,{pure:!1})((0,f.injectIntl)(b))},2253:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.tronAddresses=["27d3byPxZXKQWfXX7sJvemJJuv5M65F3vjS","27fXgQ46DcjEsZ444tjZPKULcxiUfDrDjqj","27SWXcHuQgFf9uv49FknBBBYBaH3DUk4JPx","27WtBq2KoSy5v8VnVZBZHHJcDuWNiSgjbE3"]},2472:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var i=t[r](l),c=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)});e(c)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(14),u=n(o),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),f=n(d),m=a(15),h=a(17),p=a(53),v=a(12),b=function(e){function t(){l(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={richList:[],totals:{accounts:0,coins:0}},e}return c(t,e),s(t,[{key:"componentDidMount",value:function(){this.load()}},{key:"load",value:function(){function e(){return t.apply(this,arguments)}var t=r(u.default.mark(function e(){var t,a,n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Client.getRichList();case 2:t=e.sent,a=t.data,n=t.total,this.setState({richList:a,totals:n});case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.state,t=e.richList,a=e.totals;return f.default.createElement("div",{className:"card"},f.default.createElement("div",{className:"card-body"},f.default.createElement("h5",{className:"card-title text-center"},(0,v.tu)("rich_list"))),f.default.createElement("table",{className:"table table-hover bg-white m-0 table-striped"},f.default.createElement("thead",{className:"thead-dark"},f.default.createElement("tr",null,f.default.createElement("th",null,(0,v.tu)("balance")),f.default.createElement("th",{className:"d-none d-lg-table-cell"},(0,v.tu)("addresses")),f.default.createElement("th",{className:"text-nowrap text-right"},"% ",(0,v.tu)("addresses")),f.default.createElement("th",{className:"text-right d-none d-md-table-cell"},(0,v.tu)("TRX")),f.default.createElement("th",{className:"text-right"},"$ ",(0,v.tu)("USD")),f.default.createElement("th",{className:"text-right  d-none d-md-table-cell"},"% ",(0,v.tu)("Coins")))),f.default.createElement("tbody",null,t.map(function(e,t){return f.default.createElement("tr",{key:t},f.default.createElement("th",null,f.default.createElement(h.FormattedNumber,{value:e.from})," - ",f.default.createElement(h.FormattedNumber,{value:e.to})),f.default.createElement("td",{className:"d-none d-lg-table-cell"},e.accounts),f.default.createElement("td",{className:"text-right text-nowrap",style:{width:100}},f.default.createElement(h.FormattedNumber,{value:e.accounts/a.accounts*100,maximumFractionDigits:2,minimumFractionDigits:2})," %"),f.default.createElement("td",{className:"text-right text-nowrap d-none d-md-table-cell"},f.default.createElement(p.TRXPrice,{amount:e.balance})),f.default.createElement("td",{className:"text-right text-nowrap"},f.default.createElement(p.TRXPrice,{amount:e.balance,currency:"USD"})),f.default.createElement("td",{className:"text-right text-nowrap d-none d-md-table-cell"},f.default.createElement(h.FormattedNumber,{value:e.balance/a.coins*100,maximumFractionDigits:4,minimumFractionDigits:4})," %"))}))))}}]),t}(d.Component);t.default=b}});
//# sourceMappingURL=Stats.f8ece7d0.chunk.js.map