!function(e){function n(n){for(var a,c,i=n[0],l=n[1],s=n[2],p=0,m=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&m.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(n);m.length;)m.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,i=1;i<t.length;i++){var l=t[i];0!==r[l]&&(a=!1)}a&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var a={},r={0:0},o=[];function c(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=a,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(t,a,function(n){return e[n]}.bind(null,a));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var u=l;o.push([72,1]),t()}({48:function(e,n,t){var a=t(15),r=t(49);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(a(r,o),r.locals?r.locals:{});e.exports=c},49:function(e,n,t){(n=t(16)(!1)).push([e.i,'.app-component {\n  background-size: cover;\n}\nbody {\n  padding: 0;\n  margin: 0;\n}\nbody {\n  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;\n  font-weight: 300;\n  color: white;\n}\na {\n  text-decoration: none;\n}\n',""]),e.exports=n},50:function(e,n,t){var a=t(15),r=t(51);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(a(r,o),r.locals?r.locals:{});e.exports=c},51:function(e,n,t){(n=t(16)(!1)).push([e.i,".active-player-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 5rem;\n}\n.active-player-container .active-player {\n  text-align: center;\n  cursor: pointer;\n  border: 0.1rem solid rgba(255, 255, 255, 0.25);\n  padding: 1rem 5rem;\n  border-radius: 1rem;\n}\n.active-player-container .active-player .active-player-name {\n  font-size: 5rem;\n}\n.active-player-container .active-player .active-player-message {\n  font-size: 2rem;\n}\n.active-player-container .active-player .active-player-info {\n  display: flex;\n  justify-content: center;\n}\n.active-player-container .active-player .active-player-info .active-player-points,\n.active-player-container .active-player .active-player-info .active-player-rank {\n  margin: 1rem;\n  padding: 0.5rem;\n}\n.last-player-container {\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  background: rgba(0, 0, 0, 0.25);\n}\n.last-player-container .last-player {\n  text-align: center;\n  cursor: pointer;\n}\n.last-player-container .last-player .last-player-name {\n  font-size: 1.5rem;\n}\n.last-player-container .last-player .last-player-message {\n  font-size: 1.5rem;\n}\n.last-player-container .last-player .last-player-info {\n  display: flex;\n  justify-content: center;\n}\n.last-player-container .last-player .last-player-info .last-player-points,\n.last-player-container .last-player .last-player-info .last-player-rank {\n  margin: 1rem;\n  padding: 0.5rem;\n}\n",""]),e.exports=n},52:function(e,n,t){var a=t(15),r=t(53);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(a(r,o),r.locals?r.locals:{});e.exports=c},53:function(e,n,t){(n=t(16)(!1)).push([e.i,".blur-component {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  filter: blur(5px);\n  background-size: cover;\n}\n",""]),e.exports=n},57:function(e,n,t){var a=t(15),r=t(58);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(a(r,o),r.locals?r.locals:{});e.exports=c},58:function(e,n,t){(n=t(16)(!1)).push([e.i,".header {\n  border-bottom: 0.01rem solid #b9b9b947;\n  font-size: 2rem;\n  padding: 0.25rem;\n  display: flex;\n  flex-flow: row nowrap;\n}\n.header .app-icon {\n  padding: 0.25rem 1rem;\n}\n.header .app-name {\n  padding: 0.25rem 0.5rem;\n}\n.header a {\n  display: flex;\n  color: white;\n}\n",""]),e.exports=n},60:function(e,n,t){var a=t(15),r=t(61);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(a(r,o),r.locals?r.locals:{});e.exports=c},61:function(e,n,t){(n=t(16)(!1)).push([e.i,".message {\n  margin: 1rem 0;\n  padding: 1rem;\n  width: 100%;\n  text-align: center;\n  font-size: 1.5rem;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.message.danger {\n  background-color: indianred;\n}\n.message.success {\n  background-color: lightgreen;\n}\n.message.animate {\n  animation-name: messageAnimation;\n  animation-duration: 5s;\n}\n@keyframes messageAnimation {\n  0% {\n    visibility: visible;\n  }\n  100% {\n    visibility: hidden;\n  }\n}\n",""]),e.exports=n},62:function(e,n,t){var a=t(15),r=t(63);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(a(r,o),r.locals?r.locals:{});e.exports=c},63:function(e,n,t){(n=t(16)(!1)).push([e.i,".dice-no-generated {\n  font-size: 10rem;\n}\n.dice-icon-wrapper {\n  font-size: 5rem;\n  display: flex;\n  justify-content: center;\n}\n.dice-icon-wrapper .dice-icon {\n  padding: 1rem;\n  width: 8rem;\n  text-align: center;\n  cursor: pointer;\n  font-size: 5rem;\n  background-color: transparent;\n  border: none;\n  color: white;\n}\n.dice-icon-wrapper .dice-icon:disabled {\n  color: rgba(16, 16, 16, 0.5);\n  cursor: default;\n}\n.dice-component {\n  margin: 4rem 0;\n}\n.rolling {\n  animation-name: diceRoll;\n  animation-duration: 2s;\n}\n@keyframes diceRoll {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  15% {\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n  30% {\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n  45% {\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n  60% {\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n  75% {\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n",""]),e.exports=n},64:function(e,n,t){var a=t(15),r=t(65);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(a(r,o),r.locals?r.locals:{});e.exports=c},65:function(e,n,t){(n=t(16)(!1)).push([e.i,".game-summary {\n  position: absolute;\n  right: 0.6rem;\n  top: 4rem;\n  height: 95%;\n  overflow: scroll;\n}\n.game-summary .player-summaries.hidden {\n  display: none;\n}\n.game-summary .player-summaries.view {\n  display: block;\n}\n.game-summary .player-summary {\n  margin-bottom: 0.2rem;\n}\n.game-summary .player-summary .player-info {\n  border: 0.1rem solid rgba(255, 255, 255, 0.2);\n  border-top: none;\n  width: 15rem;\n}\n.game-summary .player-summary .player-info .rank-and-points {\n  display: flex;\n  flex-flow: row wrap;\n  font-size: 0.8rem;\n  padding-left: 0.5rem;\n}\n.game-summary .player-summary .player-info .rank-and-points .rank,\n.game-summary .player-summary .player-info .rank-and-points .points {\n  padding: 0.5rem;\n}\n.game-summary .player-summary .player-info .player-name {\n  font-size: 1rem;\n  padding: 0.25rem 1rem;\n  background-color: rgba(255, 255, 255, 0.2);\n  border: 0.1rem solid rgba(255, 255, 255, 0.2);\n  border-left: none;\n  border-right: none;\n}\n.game-summary .player-summary.active .player-name {\n  background-color: #00968873;\n}\n.game-summary .show-ranks {\n  font-size: 1.5rem;\n  padding: 1rem;\n  text-align: right;\n}\n@media all and (max-width: 1100px) {\n  .game-summary .player-summaries {\n    display: none;\n    background-color: black;\n  }\n}\n",""]),e.exports=n},66:function(e,n,t){var a=t(15),r=t(67);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(a(r,o),r.locals?r.locals:{});e.exports=c},67:function(e,n,t){(n=t(16)(!1)).push([e.i,".stats-table {\n  border-collapse: collapse;\n  border-radius: 0.25rem;\n}\n.stats-table td,\n.stats-table th {\n  border: 0.1rem solid #ffffff69;\n  padding: 0.5rem 1rem;\n  text-align: left;\n}\n.table-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 10rem;\n}\n.play-again {\n  text-align: center;\n  margin: 4rem;\n}\n.play-again a {\n  text-decoration: none;\n  color: white;\n  font-size: 2rem;\n}\n.game-config-info {\n  background-color: rgba(0, 0, 0, 0.25);\n  padding: 0.25rem;\n  display: flex;\n  flex-flow: row wrap;\n}\n.game-config-info .info {\n  padding: 1rem;\n}\n.player-queue {\n  background-color: rgba(0, 0, 0, 0.25);\n  padding: 0.25rem;\n  display: flex;\n  flex-flow: row wrap;\n}\n.player-queue .queue-element {\n  padding: 1rem 0 1rem 1rem;\n}\n.player-queue .queue-element .next-icon {\n  padding: 1rem;\n}\n.player-queue .queue-element .next-icon.hidden {\n  display: none;\n}\n",""]),e.exports=n},68:function(e,n,t){var a=t(15),r=t(69);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(a(r,o),r.locals?r.locals:{});e.exports=c},69:function(e,n,t){(n=t(16)(!1)).push([e.i,".dice-container {\n  text-align: center;\n  font-size: 6rem;\n  margin-top: 15rem;\n  display: flex;\n  justify-content: center;\n}\n.dice-container .dice {\n  padding: 2rem;\n}\n.dice-container .dice.wobble {\n  animation-name: wobble;\n  animation-duration: 5s;\n}\n.action {\n  text-align: center;\n  font-size: 3rem;\n  padding: 4rem;\n  cursor: pointer;\n}\n.action a {\n  color: white;\n}\n.action .action-icon {\n  padding: 1rem;\n}\n@keyframes wobble {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  15% {\n    transform: translate3d(-45%, 0, 0) rotate3d(0, 0, 1, -45deg);\n  }\n  30% {\n    transform: translate3d(40%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n  45% {\n    transform: translate3d(-35%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n  60% {\n    transform: translate3d(40%, 0, 0) rotate3d(0, 0, 1, 20deg);\n  }\n  75% {\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n",""]),e.exports=n},70:function(e,n,t){var a=t(15),r=t(71);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(a(r,o),r.locals?r.locals:{});e.exports=c},71:function(e,n,t){(n=t(16)(!1)).push([e.i,".configure-component {\n  display: flex;\n  justify-content: center;\n  margin-top: 10rem;\n}\n.input-group {\n  display: flex;\n  flex-flow: row wrap;\n  padding: 1rem;\n  font-size: 2rem;\n}\n.input-group div {\n  display: flex;\n}\n.input-group .input-label {\n  padding: 1rem 2rem;\n}\n.input-group .input {\n  background-color: transparent;\n  border: none;\n  padding: 0.25rem;\n  text-align: center;\n  border-bottom: 0.1rem solid white;\n  border-radius: 0;\n  color: white;\n  margin: 1rem;\n  font-size: 2rem;\n}\n.input-group.submit {\n  padding: 3rem;\n  display: flex;\n  justify-content: center;\n}\n.input-group.submit .action-icon {\n  color: white;\n  font-size: 3rem;\n  cursor: pointer;\n}\n.input-group.submit button {\n  background-color: transparent;\n  border: none;\n}\n.input-group.submit button:disabled .action-icon {\n  color: rgba(255, 255, 255, 0.25);\n  cursor: default;\n}\n",""]),e.exports=n},72:function(e,n,t){"use strict";t.r(n);var a={};t.r(a),t.d(a,"updateGameConfigActionCreator",(function(){return D})),t.d(a,"determineAndSetPlayerOrdering",(function(){return A})),t.d(a,"toggleViewSummary",(function(){return C})),t.d(a,"handlDiceRoleAction",(function(){return S})),t.d(a,"handleDiceRole",(function(){return T}));var r=t(0),o=t.n(r),c=t(25),i=t.n(c),l=t(27),s=t(22),u=t(37),p=t(6),m=t(1),d=t(29),f=t(5),y=function e(n){var t=this;Object(f.a)(this,e),Object(p.a)(this,"clone",(function(e){return new e(t._elements)})),Object(p.a)(this,"pushBack",(function(e){return t._elements=[].concat(Object(d.a)(t._elements),[e]),t})),Object(p.a)(this,"popFront",(function(){if(t._elements.length>0){var e=t._elements[0];return t._elements=Object(d.a)(t._elements).slice(1),{poppedElement:e,queue:t}}return null})),Object(p.a)(this,"getFront",(function(){return t._elements.length>0?t._elements[0]:null})),Object(p.a)(this,"getFrontNext",(function(){return t._elements.length>1?t._elements[1]:null})),Object(p.a)(this,"getQueueElements",(function(){return t._elements})),Object(p.a)(this,"isEmpty",(function(){return null===t._elements||0===t._elements.length})),Object(p.a)(this,"getSize",(function(){return t._elements.length()})),this._elements=Object(d.a)(n)},g=function(e,n){var t=e.activePlayerId,a=e.playerQueue.popFront(),r=a.poppedElement,o=a.queue;return Object(m.a)({},v(e,n,r,o,t))},h=function(e,n){return Object(m.a)({},v(e,n,e.playerQueue.getFront(),e.playerQueue))},b=function(e,n){var t=e.activePlayerId,a=e.playerQueue.popFront(),r=a.poppedElement,o=a.queue;console.log(r,o);var c=o.pushBack(r);return Object(m.a)({},v(e,n,r,c,t))},v=function(e,n,t,a,r){return Object(m.a)(Object(m.a)({},e),{},{playerQueue:a,diceNoGenerated:n.payload.diceNoGenerated,players:Object(m.a)(Object(m.a)({},e.players),{},Object(p.a)({},t,Object(m.a)(Object(m.a)({},e.players[t]),{},{points:n.payload.points,rank:n.payload.rank,lastDiceGeneratedNo:n.payload.diceNoGenerated,penalized:n.payload.penalized}))),activePlayerId:a.getFront(),previousPlayerId:r,lastDiceGeneratedNo:n.payload.diceNoGenerated})},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;console.log("action ...",n);var t=null,a=null,r=null;switch(n.type){case"MARK_PLAYER_AS_WIN":return g(e,n);case"".concat("MARK_PLAYER_AS_WIN").concat("_AND_DEQUE_AND_PUSH_BACK_NEXT"):var o=(t=g(e,n)).playerQueue.popFront();return a=o.poppedElement,r=o.queue.pushBack(a),Object(m.a)(Object(m.a)({},t),{},{playerQueue:r});case"UPDATE_DICE_AND_PLAYER_POINTS_AND_RANK":return h(e,n);case"".concat("UPDATE_DICE_AND_PLAYER_POINTS_AND_RANK").concat("_AND_DEQUE_AND_PUSH_BACK_NEXT"):var c=(t=h(e,n)).playerQueue.popFront();return a=c.poppedElement,r=c.queue.pushBack(a),Object(m.a)(Object(m.a)({},t),{},{playerQueue:r});case"DEQUE_FRONT_AND_PUSH_BACK":return b(e,n);case"".concat("DEQUE_FRONT_AND_PUSH_BACK").concat("_AND_DEQUE_AND_PUSH_BACK_NEXT"):var i=(t=b(e,n)).playerQueue.popFront();return a=i.poppedElement,r=i.queue.pushBack(a),Object(m.a)(Object(m.a)({},t),{},{playerQueue:r});case"SET_MESSAGE":return Object(m.a)(Object(m.a)({},e),{},{message:n.payload.message});case"UPDATE_GAME_CONFIG":var l=n.payload,s=l.field,u=l.value;return Object(m.a)(Object(m.a)({},e),{},Object(p.a)({},s,u));case"SET_PLAYER_QUEUE_AND_ORDERING_AND_PLAYERS":return Object(m.a)(Object(m.a)(Object(m.a)({},e),n.payload),{},{activePlayerId:n.payload.playerOrdering[0],currentRank:0,wonPlayer:{}});case"UPDATE_RANKS":return Object(m.a)(Object(m.a)({},e),{},{ranks:n.payload.ranks});case"ADD_WON_PLAYER":var d=n.payload.playerId;console.log("state.game",e);var f=e.currentRank;return Object(m.a)(Object(m.a)({},e),{},{wonPlayer:Object(m.a)(Object(m.a)({},e.wonPlayer),{},Object(p.a)({},d,f+1)),currentRank:f+1});case"TOGGLE_VIEW_SUMMARY":var y=e.showLiveSummary;return Object(m.a)(Object(m.a)({},e),{},{showLiveSummary:!y});case"UPDATE_STATE":return Object(m.a)(Object(m.a)({},e),n.payload.updates);default:return e}},E=Object(s.c)({game:O}),j=Object(s.d)(E,{game:{playerCount:0,minPointsToWin:0,playerOrdering:[],playerQueue:new y([]),activePlayerId:null,diceNoGenerated:null,score:[],ranks:{},currentRank:0,showLiveSummary:!0,wonPlayer:{},players:{}}},Object(s.a)(u.a)),N=t(7),_=t(8),k=t(9),P=t(3),R=function(){return e=6,n=1,Math.floor(Math.random()*(e-n+1)+n);var e,n},w=function e(n){Object(f.a)(this,e),this.name="Player: ".concat(n),this.points=0,this.rank=0,this.id=n,this.lastDiceGeneratedNo=null},x=function(e,n){var t=null,a=[];for(console.log("old queue",e._elements);e.getFront()&&n[e.getFront()].penalized;)a.push(e.getFront()),n[(t=e.popFront()).poppedElement].penalized=!1,e.pushBack(t.poppedElement),console.log("new queue",e._elements);return a},D=function(e){return{type:"UPDATE_GAME_CONFIG",payload:e}},A=function(){return function(e,n){for(var t=n(),a=t.game.playerCount,r=[],o={},c=1;c<=a;c++)r.push(c),o[c]=0;!function(e){for(var n,t,a=e.length;0!==a;)t=Math.floor(Math.random()*a),n=e[a-=1],e[a]=e[t],e[t]=n}(r);for(var i=new y(r),l={},s=[],u=0;u<=parseInt(t.game.minPointsToWin)+5;u++)s[u]={};r.forEach((function(e){l[e]=new w(e),s[0][e]=e})),e({type:"SET_PLAYER_QUEUE_AND_ORDERING_AND_PLAYERS",payload:{playerQueue:i,players:l,playerOrdering:r,score:s,ranks:o,message:null,lastDiceGeneratedNo:null,previousPlayerId:null}})}},C=function(){return{type:"TOGGLE_VIEW_SUMMARY"}},S=function(e){return function(e,n){e(T(n()))}},T=function(e){var n=null,t=R();console.log("diceNoGenerated",t);var a=e.game.activePlayerId,r=e.game.players[a];console.log("state: ",e);var o=function(e,n,t,a,r){var o=e.points+n;t[e.points][e.id]&&delete t[e.points][e.id],t[o][e.id]=e.id;for(var c=0,i={},l=a+5;l>=0;l--)t[l]&&Object.keys(t[l]).length>0&&(c++,Object.keys(t[l]).forEach((function(e){r[e]||(i[e]=c)})));return{score:t,ranks:i}}(r,t,e.game.score,e.game.minPointsToWin,e.game.wonPlayer);if(e.game.score=o.score,e.game.ranks=o.ranks,function(e,n,t){return e.points+n>=t}(r,t,e.game.minPointsToWin))console.log("player has won"),n=function(e,n,t){var a=e.points+n,r=t.game.wonPlayer,o=t.game.ranks,c=t.game.score,i=t.game.currentRank+1,l=t.game.playerQueue,s=t.game.players,u={};if(a>=t.game.minPointsToWin){l.popFront(),r[e.id]=i,delete o[e.id],delete c[a][e.id],Object.keys(o).forEach((function(e){o[e]=o[e]-1}));var d="".concat(e.name," you just won"),f=x(l,s);f.length>0&&(f.forEach((function(e){d+=" ".concat(t.game.players[e].name," ")})),d+=" skipped"),u={diceNoGenerated:n,playerQueue:l,wonPlayers:r,ranks:o,score:c,activePlayerId:l.getFront(),previousPlayerId:e.id,players:Object(m.a)(Object(m.a)({},t.game.players),{},Object(p.a)({},e.id,Object(m.a)(Object(m.a)({},s[e.id]),{},{points:a,lastDiceGeneratedNo:n}))),message:d,currentRank:t.game.currentRank+1}}return u}(r,t,e);else if(function(e){return 6===e}(t))console.log("player gets an extra chance"),n=function(e,n,t){var a=e.points+n,r=e.id,o=t.game.players;return{diceNoGenerated:n,players:Object(m.a)(Object(m.a)({},t.game.players),{},Object(p.a)({},r,Object(m.a)(Object(m.a)({},o[r]),{},{points:a,lastDiceGeneratedNo:n}))),previousPlayerId:e.id,message:"".concat(e.name," you get an extra chance because you got a 6"),score:t.game.score,ranks:t.game.ranks}}(r,t,e);else{console.log("other case",r);var c=function(e,n){return console.log(e,n,1),e==n&&1==e}(t,r.lastDiceGeneratedNo);c&&console.log("you are penalized"),n=function(e,n,t,a){var r=e.points+n,o=t.game.playerQueue,c=o.popFront();o.pushBack(c.poppedElement);var i=a?"".concat(e.name," next chance last because you got 2 consecutive 1's"):"",l=x(o,t.game.players);return l.length>0&&(l.forEach((function(e){i+=" ".concat(t.game.players[e].name," ")})),i+=" skipped"),{playerQueue:o,diceNoGenerated:n,players:Object(m.a)(Object(m.a)({},t.game.players),{},Object(p.a)({},e.id,Object(m.a)(Object(m.a)({},t.game.players[e.id]),{},{points:r,lastDiceGeneratedNo:n,penalized:a}))),activePlayerId:o.getFront(),previousPlayerId:e.id,score:t.game.score,ranks:t.game.ranks,message:i}}(r,t,e,c)}return{type:"UPDATE_STATE",payload:{updates:n}}},I=(t(48),t(17)),G=t(28),Q=t(21);t(50),t(52);var z=function(e){Object(_.a)(t,e);var n=function(e){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var t,a=Object(P.a)(e);if(n()){var r=Object(P.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(k.a)(this,t)}}(t);function t(e){var a;return Object(f.a)(this,t),(a=n.call(this,e)).props=e,a}return Object(N.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"blur-component",style:this.props.backgroundUrl?{backgroundImage:"url(".concat(this.props.backgroundUrl,")")}:{}})}}]),t}(r.Component),M=t(10),F=t(11);t(57);var U=function(e){Object(_.a)(t,e);var n=function(e){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var t,a=Object(P.a)(e);if(n()){var r=Object(P.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(k.a)(this,t)}}(t);function t(e){return Object(f.a)(this,t),n.call(this,e)}return Object(N.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"header"},o.a.createElement(I.b,{to:"/"},o.a.createElement("div",{className:"app-icon"},o.a.createElement(F.a,{icon:M.d})),o.a.createElement("div",{className:"app-name"},"Roll & Play")))}}]),t}(r.Component);t(60);var L=function(e){Object(_.a)(t,e);var n=function(e){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var t,a=Object(P.a)(e);if(n()){var r=Object(P.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(k.a)(this,t)}}(t);function t(e){return Object(f.a)(this,t),n.call(this,e)}return Object(N.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"message"+(this.props.message?" animate":"")},this.props.message)}}]),t}(r.Component),q=t(19);t(62);var W=function(e){Object(_.a)(t,e);var n=function(e){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var t,a=Object(P.a)(e);if(n()){var r=Object(P.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(k.a)(this,t)}}(t);function t(e){var a;return Object(f.a)(this,t),a=n.call(this,e),Object(p.a)(Object(q.a)(a),"diceOnClickHandler",(function(){a.setState({rolling:!0}),setTimeout((function(){a.setState({rolling:!1})}),2e3),setTimeout(a.props.rollTheDice,2e3)})),a.diceNoGeneratedToDiceIcon={1:M.g,2:M.j,3:M.i,4:M.f,5:M.e,6:M.h,0:M.c},a.state={rolling:!1},a}return Object(N.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"dice-component"},o.a.createElement("div",{className:"dice-icon-wrapper"},o.a.createElement("button",{onClick:this.diceOnClickHandler,className:"dice-icon"+(this.state.rolling?" rolling":""),disabled:this.state.rolling},o.a.createElement(F.a,{icon:null==this.props.diceNoGenerated?this.diceNoGeneratedToDiceIcon[0]:this.diceNoGeneratedToDiceIcon[this.props.diceNoGenerated]}))))}}]),t}(r.Component),B=(t(64),t(39));var H=function(e){Object(_.a)(t,e);var n=function(e){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var t,a=Object(P.a)(e);if(n()){var r=Object(P.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(k.a)(this,t)}}(t);function t(e){var a;return Object(f.a)(this,t),a=n.call(this,e),Object(p.a)(Object(q.a)(a),"showRanksOnClick",(function(){a.props.toggleViewSummary()})),console.log("summary ranks",a.props.game.ranks,e),a}return Object(N.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"game-summary"},o.a.createElement("div",null,o.a.createElement("div",{className:"show-ranks",onClick:this.showRanksOnClick},o.a.createElement(F.a,{icon:B.faBars})),o.a.createElement("div",{className:"player-summaries"+(this.props.game.showLiveSummary?" view":" hidden")},Object.keys(this.props.game.players).map((function(n,t){return o.a.createElement("div",{key:n,className:"player-summary"+(""+e.props.game.activePlayerId===n?" active":"")},o.a.createElement("div",{className:"player-info"},o.a.createElement("div",{className:"player-name"},e.props.game.players[n].name),o.a.createElement("div",{className:"rank-and-points"},o.a.createElement("div",{className:"rank"},o.a.createElement("span",null,"Rank: "),o.a.createElement("span",null,e.props.game.wonPlayer[n]?e.props.game.wonPlayer[n]:e.props.game.ranks[n]+e.props.game.currentRank)),o.a.createElement("div",{className:"points"},o.a.createElement("span",null,"Points: "),o.a.createElement("span",null,e.props.game.players[n].points)))))})))))}}]),t}(r.Component);t(66);var Y=function(e){Object(_.a)(t,e);var n=function(e){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var t,a=Object(P.a)(e);if(n()){var r=Object(P.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(k.a)(this,t)}}(t);function t(e){return Object(f.a)(this,t),n.call(this,e)}return Object(N.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"stats"},o.a.createElement("div",{className:"play-again"},o.a.createElement(I.b,{to:"/"},"press here to play again to play")),o.a.createElement("div",{className:"table-container"},o.a.createElement("table",{className:"stats-table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Rank"),o.a.createElement("th",null,"Points"))),o.a.createElement("tbody",null,Object.keys(this.props.game.players).map((function(n,t){return o.a.createElement("tr",{key:n},o.a.createElement("td",null,t+1),o.a.createElement("td",null,e.props.game.players[n].name),o.a.createElement("td",null,e.props.game.wonPlayer[n]),o.a.createElement("td",null,e.props.game.players[n].points))}))))))}}]),t}(o.a.Component);var K=function(e){Object(_.a)(t,e);var n=function(e){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var t,a=Object(P.a)(e);if(n()){var r=Object(P.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(k.a)(this,t)}}(t);function t(e){var a;return Object(f.a)(this,t),a=n.call(this,e),console.log("game page props",e),a.props.game.playerQueue&&!a.props.game.playerQueue.isEmpty()||a.props.history.push("/configure"),a}return Object(N.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"game-page"},Object.keys(this.props.game.wonPlayer).length!=this.props.game.playerCount&&0!=this.props.game.playerCount&&o.a.createElement("div",null,o.a.createElement("div",{className:"game-config-info"},o.a.createElement("div",{className:"info"},this.props.game.playerCount,": Players"),o.a.createElement("div",{className:"info"},this.props.game.minPointsToWin,": Points")),o.a.createElement("div",{className:"player-queue"},this.props.game.playerQueue._elements.map((function(n,t){return o.a.createElement("div",{className:"queue-element",key:n},o.a.createElement("span",null,e.props.game.players[n].name),o.a.createElement("span",{className:"next-icon"+(t===e.props.game.playerQueue._elements.length-1?" hidden":"")},o.a.createElement(F.a,{icon:M.b})))}))),o.a.createElement("div",{className:"active-player-container"},this.props.game.activePlayerId&&o.a.createElement("div",{className:"active-player"},o.a.createElement("div",{className:"active-player-name"},this.props.game.players[this.props.game.activePlayerId].name),o.a.createElement("div",{className:"active-player-message"},"your chance to roll the dice"),o.a.createElement("div",{className:"active-player-info"},o.a.createElement("div",{className:"active-player-rank"},o.a.createElement("span",null,"Rank: "),o.a.createElement("span",null,o.a.createElement("span",null,this.props.game.wonPlayer[this.props.game.activePlayerId]?this.props.game.wonPlayer[this.props.game.activePlayerId]:this.props.game.ranks[this.props.game.activePlayerId]+this.props.game.currentRank))),o.a.createElement("div",{className:"active-player-points"},o.a.createElement("span",null,"Points: "),o.a.createElement("span",null,this.props.game.players[this.props.game.activePlayerId].points))))),o.a.createElement(W,{diceNoGenerated:this.props.game.diceNoGenerated,rollTheDice:this.props.handlDiceRoleAction}),o.a.createElement(L,{message:this.props.game.message,messageType:this.props.game.messageType}),this.props.game.previousPlayerId&&o.a.createElement("div",{className:"last-player-container"},o.a.createElement("div",{className:"last-player"},o.a.createElement("div",{className:"last-player-message"},this.props.game.players[this.props.game.previousPlayerId].name," scored ",this.props.game.diceNoGenerated))),o.a.createElement(H,this.props)),Object.keys(this.props.game.wonPlayer).length==this.props.game.playerCount&&0!=this.props.game.playerCount&&o.a.createElement(Y,this.props))}}]),t}(o.a.Component);t(68);var V=function(e){Object(_.a)(t,e);var n=function(e){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var t,a=Object(P.a)(e);if(n()){var r=Object(P.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(k.a)(this,t)}}(t);function t(e){return Object(f.a)(this,t),n.call(this,e)}return Object(N.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"dice-container"},o.a.createElement("div",{className:"dice wobble"},o.a.createElement(F.a,{icon:M.g})),o.a.createElement("div",{className:"dice wobble"},o.a.createElement(F.a,{icon:M.e}))),o.a.createElement("div",{className:"action"},o.a.createElement(I.b,{to:"/configure"},o.a.createElement("div",null,"Continue to play"),o.a.createElement("div",{className:"action-icon"},o.a.createElement(F.a,{icon:M.a})))))}}]),t}(r.Component);t(70);var X=function(e){Object(_.a)(t,e);var n=function(e){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var t,a=Object(P.a)(e);if(n()){var r=Object(P.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(k.a)(this,t)}}(t);function t(e){var a;return Object(f.a)(this,t),a=n.call(this,e),Object(p.a)(Object(q.a)(a),"onChangeHandler",(function(e){var n=e.target.name,t=e.target.value;a.props.updateGameConfigActionCreator({field:n,value:t})})),Object(p.a)(Object(q.a)(a),"onConfigure",(function(e){console.log("on configure"),a.props.determineAndSetPlayerOrdering(),a.props.history.push("/play")})),a}return Object(N.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"configure-component"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},o.a.createElement("div",{className:"input-group"},o.a.createElement("div",null,o.a.createElement("label",{className:"input-label",htmlFor:"player-count"},"No of Players")),o.a.createElement("div",null,o.a.createElement("input",{className:"input",type:"number",name:"playerCount",id:"player-count",onChange:this.onChangeHandler,value:this.props.game.playerCount}))),o.a.createElement("div",{className:"input-group"},o.a.createElement("div",null,o.a.createElement("label",{className:"input-label",htmlFor:"min-points-to-win"},"Points to Win")),o.a.createElement("div",null,o.a.createElement("input",{className:"input",type:"number",name:"minPointsToWin",id:"min-points-to-win",onChange:this.onChangeHandler,value:this.props.game.minPointsToWin}))),o.a.createElement("div",{className:"input-group submit"},o.a.createElement("button",{onClick:this.onConfigure,disabled:this.props.game.playerCount<=0||this.props.game.minPointsToWin<=0},o.a.createElement("div",{className:"action-icon"},o.a.createElement(F.a,{icon:M.a}))))))}}]),t}(r.Component);var J=function(e){Object(_.a)(t,e);var n=function(e){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var t,a=Object(P.a)(e);if(n()){var r=Object(P.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(k.a)(this,t)}}(t);function t(e){var a;return Object(f.a)(this,t),a=n.call(this,e),console.log("body props",e,a.props.game.playerQueue.getQueueElements()),a}return Object(N.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(r.Fragment,null,o.a.createElement(U,null),o.a.createElement(z,{backgroundUrl:"/img/background.jpg"}),o.a.createElement(Q.a,{path:"/play",exact:!0,render:function(n){return o.a.createElement(K,Object(G.a)({},n,e.props))}}),o.a.createElement(Q.a,{path:"/configure",exact:!0,render:function(n){return o.a.createElement(X,Object(G.a)({},n,e.props))}}),o.a.createElement(Q.a,{path:"/",exact:!0,render:function(n){return o.a.createElement(V,Object(G.a)({},n,e.props))}}))}}]),t}(r.Component);var Z=function(e){Object(_.a)(t,e);var n=function(e){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var t,a=Object(P.a)(e);if(n()){var r=Object(P.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(k.a)(this,t)}}(t);function t(e){var a;return Object(f.a)(this,t),a=n.call(this,e),console.log("props",e),a.props=e,a}return Object(N.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"app-component"},o.a.createElement(I.a,null,o.a.createElement(J,this.props))))}},{key:"componentDidMount",value:function(){}}]),t}(r.Component),$=Object(m.a)({},a),ee=Object(l.b)((function(e,n){return Object(m.a)({game:e.game},n)}),$)(Z);i.a.render(o.a.createElement(l.a,{store:j},o.a.createElement(ee,null)),document.getElementById("root"))}});