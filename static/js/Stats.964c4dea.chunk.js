webpackJsonp([0],{2107:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var i=t[r](l),s=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{priceGraph:e.markets.price}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(14),u=n(o),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),m=n(f),h=a(81),p=n(h),v=(a(42),a(13)),y=a(17),b=a(31),S=a(15),E=a(16),g=a(25),w=a(2316),k=a(2466),x=(n(k),a(39)),_=a(757),N=(n(_),a(2212)),O=(n(N),a(758)),T=a(754),j=function(e){function t(){l(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={accounts:null,transactionStats:null,blockStats:null,transactionValueStats:null,txOverviewStats:null,addressesStats:null,blockSizeStats:null,blockchainSizeStats:null,priceStats:null},e}return s(t,e),d(t,[{key:"componentDidMount",value:function(){this.loadAccounts(),this.loadStats(),this.loadTxOverviewStats()}},{key:"loadAccounts",value:function(){function e(){return t.apply(this,arguments)}var t=r(u.default.mark(function e(){var t,a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.Client.getAccounts({limit:35,sort:"-balance"});case 2:t=e.sent,a=t.accounts,this.setState({accounts:(0,g.filter)(a,function(e){return!(0,g.includes)(w.tronAddresses,e.address)}).slice(0,10).map(function(e){return{name:e.address,value:e.balance/b.ONE_TRX}})});case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadStats",value:function(){function e(){return t.apply(this,arguments)}var t=r(u.default.mark(function e(){var t,a,n,r,l,i,s;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.intl,e.next=3,y.Client.getTransferStats({groupby:"timestamp",interval:"hour"});case 3:return a=e.sent,n=a.stats,e.next=7,y.Client.getBlockStats({info:"avg-block-size"});case 7:r=e.sent,l=r.stats,i=n.total.map(function(e){return{timestamp:e.timestamp,value:e.value}}),s=n.value.map(function(e){return{timestamp:e.timestamp,value:e.value/b.ONE_TRX}}),l=l.map(function(e){return{timestamp:e.timestamp,value:e.value}}),this.setState({transactionStats:i,transactionValueStats:s,blockStats:l});case 13:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadTxOverviewStats",value:function(){function e(){return t.apply(this,arguments)}var t=r(u.default.mark(function e(){var t,a,n,r,l,i,s,c,o,d,f,m,h,v,b,S;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,a=t.getTime(),n=new Date("2017/10/10"),r=n.getTime(),l=Math.floor((a-r)/1e3/3600/24),e.next=7,p.default.get("https://min-api.cryptocompare.com/data/histoday?fsym=TRX&tsym=USD&limit="+l);case 7:return i=e.sent,s=i.data,c=s.Data,e.next=12,y.Client.getTxOverviewStats();case 12:o=e.sent,d=o.txOverviewStats,f=[],m=[],h=[],v=[];for(b in d)S=parseInt(b),0===S?(f.push(d[S]),m.push({date:d[S].date,total:d[S].newAddressSeen,increment:d[S].newAddressSeen})):(f.push({date:d[S].date,totalTransaction:d[S].totalTransaction-d[S-1].totalTransaction,avgBlockTime:d[S].avgBlockTime,avgBlockSize:d[S].avgBlockSize,totalBlockCount:d[S].totalBlockCount-d[S-1].totalBlockCount,newAddressSeen:d[S].newAddressSeen}),m.push({date:d[S].date,total:d[S].newAddressSeen+m[S-1].total,increment:d[S].newAddressSeen})),h.push({date:d[S].date,avgBlockSize:d[S].avgBlockSize}),v.push({date:d[S].date,blockchainSize:d[S].blockchainSize});this.setState({txOverviewStats:f,addressesStats:m,blockSizeStats:h,blockchainSizeStats:v,priceStats:c});case 20:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.state,t=e.txOverviewStats,a=e.addressesStats,n=(e.transactionStats,e.transactionValueStats,e.blockStats,e.accounts,e.blockSizeStats),r=e.blockchainSizeStats,l=e.priceStats,i=this.props.intl;return m.default.createElement("main",{className:"container header-overlap"},m.default.createElement("div",{className:"text-center alert alert-light alert-dismissible fade show",role:"alert"},(0,v.tu)("click_the_chart_title_to_find_more"),m.default.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},m.default.createElement("span",{"aria-hidden":"true"},"\xd7"))),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-6 mt-3 mt-md-0"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},m.default.createElement("div",{style:{height:350}},null===t?m.default.createElement(x.TronLoader,null):m.default.createElement(O.LineReactTx,{style:{height:350},data:t,intl:i}))))),m.default.createElement("div",{className:"col-md-6 mt-3 mt-md-0"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},m.default.createElement("div",{style:{height:350}},null===a?m.default.createElement(x.TronLoader,null):m.default.createElement(O.LineReactAdd,{style:{height:350},data:a,intl:i})))))),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-6 mt-3"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},m.default.createElement("div",{style:{height:350}},null===n?m.default.createElement(x.TronLoader,null):m.default.createElement(O.LineReactBlockSize,{style:{height:350},data:n,intl:i}))))),m.default.createElement("div",{className:"col-md-6 mt-3"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},m.default.createElement("div",{style:{height:350}},null===r?m.default.createElement(x.TronLoader,null):m.default.createElement(O.LineReactBlockchainSize,{style:{height:350},data:r,intl:i})))))),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-6 mt-3"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},m.default.createElement("div",{style:{height:350}},null===l?m.default.createElement(x.TronLoader,null):m.default.createElement(O.LineReactPrice,{style:{height:350},data:l,intl:i})))))))}}]),t}(m.default.Component),P={loadPriceData:T.loadPriceData};t.default=(0,S.connect)(c,P)((0,E.injectIntl)(j))},2108:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var i=t[r](l),s=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{priceGraph:e.markets.price}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(14),u=n(o),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),m=n(f),h=a(81),p=n(h),v=a(17),y=a(31),b=a(15),S=a(16),E=a(25),g=a(2316),w=a(39),k=a(757),x=n(k),_=a(2212),N=n(_),O=a(758),T=a(754),j=function(e){function t(){l(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={accounts:null,transactionStats:null,blockStats:null,transactionValueStats:null,txOverviewStats:null,addressesStats:null,blockSizeStats:null,blockchainSizeStats:null,priceStats:null},e}return s(t,e),d(t,[{key:"componentDidMount",value:function(){this.loadAccounts(),this.loadStats(),this.loadTxOverviewStats()}},{key:"loadAccounts",value:function(){function e(){return t.apply(this,arguments)}var t=r(u.default.mark(function e(){var t,a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Client.getAccounts({limit:35,sort:"-balance"});case 2:t=e.sent,a=t.accounts,this.setState({accounts:(0,E.filter)(a,function(e){return!(0,E.includes)(g.tronAddresses,e.address)}).slice(0,10).map(function(e){return{name:e.address,value:e.balance/y.ONE_TRX}})});case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadStats",value:function(){function e(){return t.apply(this,arguments)}var t=r(u.default.mark(function e(){var t,a,n,r,l,i;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Client.getTransferStats({groupby:"timestamp",interval:"hour"});case 2:return t=e.sent,a=t.stats,e.next=6,v.Client.getBlockStats({info:"avg-block-size"});case 6:n=e.sent,r=n.stats,l=a.total.map(function(e){return{timestamp:e.timestamp,value:e.value}}),i=a.value.map(function(e){return{timestamp:e.timestamp,value:e.value/y.ONE_TRX}}),r=r.map(function(e){return{timestamp:e.timestamp,value:e.value}}),this.setState({transactionStats:l,transactionValueStats:i,blockStats:r});case 12:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadTxOverviewStats",value:function(){function e(){return t.apply(this,arguments)}var t=r(u.default.mark(function e(){var t,a,n,r,l,i,s,c,o,d,f,m,h,y,b,S;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,a=t.getTime(),n=new Date("2017/10/10"),r=n.getTime(),l=Math.floor((a-r)/1e3/3600/24),e.next=7,p.default.get("https://min-api.cryptocompare.com/data/histoday?fsym=TRX&tsym=USD&limit="+l);case 7:return i=e.sent,s=i.data,c=s.Data,e.next=12,v.Client.getTxOverviewStats();case 12:o=e.sent,d=o.txOverviewStats,f=[],m=[],h=[],y=[];for(b in d)S=parseInt(b),0===S?(f.push(d[S]),m.push({date:d[S].date,total:d[S].newAddressSeen,increment:d[S].newAddressSeen})):(f.push({date:d[S].date,totalTransaction:d[S].totalTransaction-d[S-1].totalTransaction,avgBlockTime:d[S].avgBlockTime,avgBlockSize:d[S].avgBlockSize,totalBlockCount:d[S].totalBlockCount-d[S-1].totalBlockCount,newAddressSeen:d[S].newAddressSeen}),m.push({date:d[S].date,total:d[S].newAddressSeen+m[S-1].total,increment:d[S].newAddressSeen})),h.push({date:d[S].date,avgBlockSize:d[S].avgBlockSize}),y.push({date:d[S].date,blockchainSize:d[S].blockchainSize});this.setState({txOverviewStats:f,addressesStats:m,blockSizeStats:h,blockchainSizeStats:y,priceStats:c});case 20:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.props,t=e.match,a=e.intl,n=this.state,r=n.txOverviewStats,l=n.addressesStats,i=n.blockSizeStats,s=n.blockchainSizeStats,c=n.priceStats,o=n.transactionStats,u=n.transactionValueStats,d=n.blockStats,f=n.accounts;return m.default.createElement("main",{className:"container header-overlap"},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-12 mt-3"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body"},"txOverviewStats"===t.params.chartName&&m.default.createElement("div",{style:{height:500}},null===r?m.default.createElement(w.TronLoader,null):m.default.createElement(O.LineReactTx,{style:{height:500},data:r,intl:a})),"addressesStats"===t.params.chartName&&m.default.createElement("div",{style:{height:500}},null===l?m.default.createElement(w.TronLoader,null):m.default.createElement(O.LineReactAdd,{style:{height:500},data:l,intl:a})),"blockSizeStats"===t.params.chartName&&m.default.createElement("div",{style:{height:500}},null===i?m.default.createElement(w.TronLoader,null):m.default.createElement(O.LineReactBlockSize,{style:{height:500},data:i,intl:a})),"blockchainSizeStats"===t.params.chartName&&m.default.createElement("div",{style:{height:500}},null===s?m.default.createElement(w.TronLoader,null):m.default.createElement(O.LineReactBlockchainSize,{style:{height:500},data:s,intl:a})),"priceStats"===t.params.chartName&&m.default.createElement("div",{style:{height:500}},null===c?m.default.createElement(w.TronLoader,null):m.default.createElement(O.LineReactPrice,{style:{height:500},data:c,intl:a})),"accounts"===t.params.chartName&&m.default.createElement("div",{style:{height:500}},null===f?m.default.createElement(w.TronLoader,null):m.default.createElement(x.default,{style:{height:500},data:f})),"transactionValueStats"===t.params.chartName&&m.default.createElement("div",{style:{height:500}},null===u?m.default.createElement(w.TronLoader,null):m.default.createElement(N.default,{message:{id:"trx_transferred_past_hour",href:"transactionValueStats"},style:{height:500},data:u,keysData:["timestamp","value"],format:{timestamp:!0}})),"transactionStats"===t.params.chartName&&m.default.createElement("div",{style:{height:500}},null===o?m.default.createElement(w.TronLoader,null):m.default.createElement(N.default,{message:{id:"transactions_past_hour",href:"transactionStats"},style:{height:500},data:o,keysData:["timestamp","value"],format:{timestamp:!0}})),"blockStats"===t.params.chartName&&m.default.createElement("div",{style:{height:500}},null===d?m.default.createElement(w.TronLoader,null):m.default.createElement(N.default,{message:{id:"average_blocksize",href:"blockStats"},style:{height:500},data:d,keysData:["timestamp","value"],format:{timestamp:!0}})))))))}}]),t}(m.default.Component),P={loadPriceData:T.loadPriceData};t.default=(0,b.connect)(c,P)((0,S.injectIntl)(j))},2212:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.LineReact=void 0;var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),u=n(o),d=a(15),f=a(16),m=a(189),h=n(m),p=a(18),v=n(p);a(394),a(190),a(191);var y=t.LineReact=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=("_"+Math.random()).replace(".","_");return a.state={lineId:"line"+n},a}return i(t,e),c(t,[{key:"initLine",value:function(e){var t=this.props,a=t.intl,n=t.keysData,r=t.data,l=t.format,i=t.message,s=v.default.getInstanceByDom(document.getElementById(e));void 0===s&&(s=v.default.init(document.getElementById(e))),h.default.lineChart.title.text=a.formatMessage({id:i.id}),i.href&&(h.default.lineChart.title.link="#/blockchain/stats/"+i.href),h.default.lineChart.xAxis.data=[],h.default.lineChart.series[0].data=[],r&&r.length>0&&r.map(function(e){l&&l[n[0]]?l.date?h.default.lineChart.xAxis.data.push(a.formatDate(1e3*e[n[0]])):(10===(e[n[0]]+"").length&&h.default.lineChart.xAxis.data.push(a.formatTime(1e3*e[n[0]])),13===(e[n[0]]+"").length&&h.default.lineChart.xAxis.data.push(a.formatTime(e[n[0]]))):h.default.lineChart.xAxis.data.push(e[n[0]]),h.default.lineChart.series[0].data.push(e[n[1]])}),r&&0===r.length&&(h.default.lineChart.title.text="No data"),s.setOption(h.default.lineChart)}},{key:"componentDidMount",value:function(){this.initLine(this.state.lineId)}},{key:"componentDidUpdate",value:function(){this.initLine(this.state.lineId)}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("div",{id:this.state.lineId,style:this.props.style}))}}]),t}(u.default.Component),b={};t.default=(0,d.connect)(s,b,null,{pure:!1})((0,f.injectIntl)(y))},2316:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.tronAddresses=["27d3byPxZXKQWfXX7sJvemJJuv5M65F3vjS","27fXgQ46DcjEsZ444tjZPKULcxiUfDrDjqj","27SWXcHuQgFf9uv49FknBBBYBaH3DUk4JPx","27WtBq2KoSy5v8VnVZBZHHJcDuWNiSgjbE3"]},2466:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var i=t[r](l),s=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=a(14),o=n(c),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),f=n(d),m=a(17),h=a(16),p=a(66),v=a(13),y=function(e){function t(){l(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={richList:[],totals:{accounts:0,coins:0}},e}return s(t,e),u(t,[{key:"componentDidMount",value:function(){this.load()}},{key:"load",value:function(){function e(){return t.apply(this,arguments)}var t=r(o.default.mark(function e(){var t,a,n;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Client.getRichList();case 2:t=e.sent,a=t.data,n=t.total,this.setState({richList:a,totals:n});case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.state,t=e.richList,a=e.totals;return f.default.createElement("div",{className:"card"},f.default.createElement("div",{className:"card-body"},f.default.createElement("h5",{className:"card-title text-center"},(0,v.tu)("rich_list"))),f.default.createElement("table",{className:"table table-hover bg-white m-0 table-striped"},f.default.createElement("thead",{className:"thead-dark"},f.default.createElement("tr",null,f.default.createElement("th",null,(0,v.tu)("balance")),f.default.createElement("th",{className:"d-none d-lg-table-cell"},(0,v.tu)("addresses")),f.default.createElement("th",{className:"text-nowrap text-right"},"% ",(0,v.tu)("addresses")),f.default.createElement("th",{className:"text-right d-none d-md-table-cell"},(0,v.tu)("TRX")),f.default.createElement("th",{className:"text-right"},"$ ",(0,v.tu)("USD")),f.default.createElement("th",{className:"text-right  d-none d-md-table-cell"},"% ",(0,v.tu)("Coins")))),f.default.createElement("tbody",null,t.map(function(e,t){return f.default.createElement("tr",{key:t},f.default.createElement("th",null,f.default.createElement(h.FormattedNumber,{value:e.from})," - ",f.default.createElement(h.FormattedNumber,{value:e.to})),f.default.createElement("td",{className:"d-none d-lg-table-cell"},e.accounts),f.default.createElement("td",{className:"text-right text-nowrap",style:{width:100}},f.default.createElement(h.FormattedNumber,{value:e.accounts/a.accounts*100,maximumFractionDigits:2,minimumFractionDigits:2})," %"),f.default.createElement("td",{className:"text-right text-nowrap d-none d-md-table-cell"},f.default.createElement(p.TRXPrice,{amount:e.balance})),f.default.createElement("td",{className:"text-right text-nowrap"},f.default.createElement(p.TRXPrice,{amount:e.balance,currency:"USD"})),f.default.createElement("td",{className:"text-right text-nowrap d-none d-md-table-cell"},f.default.createElement(h.FormattedNumber,{value:e.balance/a.coins*100,maximumFractionDigits:4,minimumFractionDigits:4})," %"))}))))}}]),t}(d.Component);t.default=y}});
//# sourceMappingURL=Stats.964c4dea.chunk.js.map