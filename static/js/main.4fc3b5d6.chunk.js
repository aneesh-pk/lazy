(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){"use strict";var n=a(9),A=a(28),r=a(13),o=a(7),i={query:"",mediaList:{},filteredEntries:[],hasMoreData:!0},c=Object(n.c)({media:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.a:return Object(r.a)({},e,{hasMoreData:t.payload.hasMoreData,mediaList:Object(r.a)({},e.mediaList,t.payload.mediaList)});case o.c:return Object(r.a)({},e,{query:t.payload.query});case o.b:return Object(r.a)({},e,{mediaList:Object(r.a)({},e.mediaList,t.payload.mediaList)});default:return e}}}),s=Object(n.d)(c,{},Object(n.a)(A.a));t.a=s},14:function(e,t,a){},15:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"c",function(){return c}),a.d(t,"b",function(){return s});var n=a(7),A=a(11),r=a(16),o=a.n(r),i=function(e){return function(t){console.log("fetching..."),fetch("https://diagnal-server.herokuapp.com/get-media",{method:"POST",cache:"no-cache",headers:{"content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){return g(e)}).then(function(e){return t({type:n.a,payload:e})}).catch(function(e){return null})}},c=function(e){return function(t){t({type:n.c,payload:{query:e,hasMoreData:!1}})}},s=function(){return function(e){var t=A.a.getState().media.query;if(""===t.trim())return!1;var a={title:"Romantic Comedy",query_string:t};console.log("searching..."),fetch("https://diagnal-server.herokuapp.com/search-media",{method:"POST",cache:"no-cache",headers:{"content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){return C(e)}).then(function(t){return e({type:n.b,payload:t})}).catch(function(e){return null})}},g=function(e){var t=!0,a={};return e["page-size-returned"]<e["page-size-requested"]&&(t=!1),e&&e["content-items"]&&e["content-items"].content&&e["content-items"].content.length>0&&(a=o.a.cloneDeep(A.a.getState().media.mediaList),e["content-items"].content.map(function(e){return"undefined"==typeof a[e._id]&&(a[e._id]=e),a})),{hasMoreData:t,mediaList:a}},C=function(e){var t={};return e&&e["content-items"]&&e["content-items"].content&&e["content-items"].content.length>0&&(t=o.a.cloneDeep(A.a.getState().media.mediaList),e["content-items"].content.map(function(e){return"undefined"==typeof t[e._id]&&(t[e._id]=e),t})),{hasMoreData:!1,mediaList:t}}},24:function(e,t,a){"use strict";(function(e){var n=a(1),A=a(2),r=a(4),o=a(3),i=a(5),c=a(0),s=a.n(c),g=(a(14),a(25)),C=a.n(g),u=a(26),h=a.n(u),E=a(10),d=a(15),l=function(t){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(o.a)(a).call(this,e))).state={query:"",searchActive:!1},t}return Object(i.a)(a,t),Object(A.a)(a,[{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"header row"},s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"nav-back-wrapper inline-block"},s.a.createElement("div",{className:"table-cell-entry"},s.a.createElement("img",{src:C.a,className:"back-button",alt:"back"}))),s.a.createElement("div",{className:"page-title inline-block"},s.a.createElement("div",{className:"table-cell-entry"},"Romantic Comedy"))),s.a.createElement("div",{className:"inline-block col-sm-6"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 table-cell"},s.a.createElement("div",{className:"display-input-wrapper col-sm-10 text-right"},s.a.createElement("input",{type:"text",id:"search-input",className:this.state.searchActive?"search active":"search",onChange:function(e){t.props.searchMediaLocal(e.target.value),t.setState({query:e.target.value})},value:this.props.media.query})),s.a.createElement("div",{className:"search-button-wrapper col-sm-2"},s.a.createElement("div",null,s.a.createElement("img",{src:h.a,className:"search-button active",alt:"search",onClick:function(){t.state.searchActive?t.setState({searchActive:!1,query:""}):(t.setState({searchActive:!0,query:""}),e(function(){document.getElementById("search-input").focus()}))}})))))))}}]),a}(c.Component);t.a=Object(E.b)(function(e){return{media:e.media}},{searchMediaLocal:d.c})(l)}).call(this,a(38).setImmediate)},25:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMxJREFUeNrsl9ENgzAMRGMm6AiM0JFgBCboKGaTsgFswAiwQWoQkfJRVQQhNQd3kpXf9+JEcZxjGOaUeO8fViUyfG81WT1R4UNwJL7A40j8gM9fYgd8vhIJ8CEjMnw+HSA84QlPeMJfEl5ieFveVilAjdXwd4GD8Fmk2NYXIvzagW33J9SvbIG687HAjCwQLvEys5eoHVhSIx8hJyIdskT8Elc+LUoJSlCCEpSgBCVOmIX2T38i7Z3GDkWWUOROKPJxUuQ7oY5hsPIRYABvzTavpLSmGQAAAABJRU5ErkJggg=="},26:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkRJREFUeNrsmdFxwjAMhh0m8AjZoNmg2QBGSDdgg2YT6AShE4ROEJggbBA2cOU7p8dxiSxsyyE0utPlAbD5bOmPLCcigCmlJDyygY9OSZJcxQSWOIKk8NiAv4Pn4BL5ugY7gv+AHwD0Ip7NACgHr5Sf6d/nzwKUgtcqrFVm5yeDKsA7xWN63GIKqJ2KY7tXhGKBS8ag4EENkRP4t1G+e9MisR55FQzZHlTzg2unSmJulNTkN+JTEneu5JJzm9WuavaAuuahwdoYeUDI3za0rEcLEUJoFjF2azeB8rbcu9WaIpcDTFoWtPCdoGIPCbdFrXwH509ixzTgkvhtJLBtaOlfWaqCY6QKDpsncwUbFQYob05RTrv4PNI1DMYqgTrySSLo/1iJF7WXBrsGjW13k0gzyAnsHFKNPGxsvrMr2AV7x8XqfiEfX1zBMKldR9qtteWE7rxiHXJSlsy7JbH5fVXxgCQ0d1m1RYTjwNkS6Lgam6ZV0LG2CCznooYJrGGfEwbaxOz7Efoemxj12m2HSgYQC+s8sWO+bxXkHrncEnqWKUfcF8TGZk0NFxPm1NuaICE41uLWrbZP4hj9xd7ZVAnaU+Nvwn4xeG978K/+5Rz8RnSCS4lBZWQpEB4IS++blingMkLCu5oeNyMoMhucNC3pUDeb3X3LnCAuDVvdegPYeuxQOfQHiZf2DXdR3odoaVa6RUBq872MsGjNU8AxRcQCt8AtcAvcArfA/Xs4MTejwok5GgGuEHM1BG6+UAjcH9SvAAMAy5K2QTwDnF4AAAAASUVORK5CYII="},32:function(e,t,a){e.exports=a(56)},37:function(e,t,a){},54:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAHhCAYAAAGHFTxJAAAACXBIWXMAAAsSAAALEgHS3X78AAAOXUlEQVR42u3dP0jc9x8G8Le/pERiv9RCKpIbmgwhl7sOLgcOHTRCKLRg2nBmdeggPVI6hf4Z6lJJOxWKToVIt15okg4podKg28EtdjhiQTCFnoQSqGCRtErzm5RczjP+iznj67W0nqf58Pjk8Xt6mpZMJvMomlvv/2IfcEiHdEiHdEiHdEiHdEiHdEiHdEiHdEiHPICH7OnpiYiISqXSvIecnJzcXx/u3Urz8LM6YDabbb4kh4eHn0mKEREtu/1F1GKxGAMDA7v5LntbfKXXmDukQzqkQzqkQzqkQzqkQzqkQzqkQza9wxHR2+RnnG76L7P8Txcd0AEd0AEd0AEd0AEd0AEd0AEd0AEd0AG3pKmf3LYqSZLmOWChUKh5OZvNRqlUap4Djo6O1t1WLpeb60P8+BPaKpVKDA4O7sr73dUvYBaLxZiamlo30aY4oB10QAd0QAd0QAd0QAd0QAd0QAd0QAc8YAds+ieY7Yef4Wt2++NnDP1dFiJCFKIQhYgQhShEISJEIQpRiCIQohCFiBCFKEQhIkQhClGICPHAhZjP5yOfz9fd3tfXF5VKJSqVSoyPjzfVmT2haeea5wlNSZLU/XDnelbbuJs/OnugmjgyMhJJksSlS5c0cSODg4Nr/wrJ5cuXo1gsRkdHR0RE9Pf3x9mzZ5vug2sTX8QmusQRIkIUohCFKAIhClGICFGIQhQiQhSiEIWIEIUoRCEiRCEKUYhsmaeRaKEABShABChAAQoQAQpQgAJEgAIUoAARoAAFKEAEKEABChABClCAAkSAAhSgABGgAAUoQAQoQAEKEAEKUIACFCACFKAABYgABShAASJAAQpw1/T09MQbb7wRERHpdDoqlUqMjIw01Rmb7hfv5PP5uHbtWt3tj//za9lsVgMbmZiY2Fd/hf3qpxelgYVCIS5evPjU+zXbv6bYVH+Fjx07tun7Jknir/B25HK5SKVScfPmTQGup7OzM+7fv9/wr28zfQZuur/Cg4ODMTQ0FF1dXQ0vY5pp/5ouwNV/+Hl6ejoiIorFYhSLxYiI+Oyzz2r+6zJmE1bDGxgYcB3oOhABClCAAkSAAhSgABGgAAUoQAQoQAEKUIAIUIACFCACFKAABYgABShAASJAAQpQgAhQgAIUIAIUoAAFiAAFKEABIkABClCACFCAzeNwRPSKYfv81g6et14ziM/FoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSgiHRbB9PT09ERHxxx9/xOzsrEC2qSWTyTwSQ2NdXV1x6tSpmJiYiIWFhbrXt7e3191eqVTq7jc4OBjlclmg9Xp9On6KU6dO1azek54sYC6XW/d+hUJBmJZwb5VKpUiSJCIiLly4EDMzM0JpsISuCZ+R7u7uiIhIkiRKpdLa7QppCZ8qlUrF+fPn114eHR3d0ftzfeiacMuq1WrcvHkz5ubm4ttvv93x+/vtt99qXl5cXFRAS4hrwn2kvb09Pvroo7WXh4eHN/V2ExMTcfz48Zr1W71GpJ5Pxxt48ssy7e3tNS9ns9nI5/PR1tZWc/vjBVx9cIJPx7uuWCzWvHz37t34/PPPa27L5XKu/zbx6VgJt6mtrS2uXr269vLAwIBQlJD9WkLXhHhgAkqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEkJLJpN5JAasIAoICogCggKigKCAKCAoIAoICogCggKigKCAKCAoIAoICogCggKigKCAKCAoIAoICogCggKigKCAKCAKCAqIAoICooCggCggKCAKCAqIAoICooCggCggKCAKCAqIAoICooCggCggKCAKCAqIAoICooCggCggCggKiAKCAqKAoIAoICggCggKiAKCAqKAoIAoICggCggKiAKCAqKAoIAoICggCggKiAKCAqKAoIAoICggCogCggKigKCAKCAoIAoICogCggKigKCAKCAoIC+CwyLYntbW1uju7o6IiMnJSYEo4N56+eWXG76uVCpFkiRrL2ezWYE10JLJZB6JobF8Ph9LS0tx69atute1t7fH33//HSsrK2u3jY+PRy6Xq7uvEroG3LK33347IiKOHj0aHR0dda9fWFioKV9ErFs+FHBbqtXq2v//9ddfAnENuLemp6ejUqnE8vLypt9mbGws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"},56:function(e,t,a){"use strict";a.r(t);var n=a(0),A=a.n(n),r=a(18),o=a.n(r),i=(a(37),a(1)),c=a(2),s=a(4),g=a(3),C=a(5),u=(a(14),a(24)),h=a(22),E=a.n(h),d=a(29),l=a(30),m=a.n(l),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return A.a.createElement("div",null,A.a.createElement(m.a,{loaderImage:!0,originalSrc:"https://diagnal-server.herokuapp.com/images/"+this.props.poster_image,imageProps:{src:a(54),alt:"poster",ref:"image",className:"poster-image poster"}}))}}]),t}(n.Component),Q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return A.a.createElement("div",{className:"media-entry inline-block"},A.a.createElement("div",{className:"poster-wrapper"},A.a.createElement(I,{poster_image:this.props.poster_image})),A.a.createElement("div",{className:"poster-title"},this.props.name))}}]),t}(n.Component),B=a(10),p=a(15),f=a(16),v=a.n(f),K=a(31),b=a.n(K),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(g.a)(t).call(this,e))).loadFunc=function(){var e=Object(d.a)(E.a.mark(function e(t){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n={title:"Romantic Comedy",page:t,size:20},a.props.fetchMedia(n);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={query:""},window.searchedFlag=!1,a}return Object(C.a)(t,e),Object(c.a)(t,[{key:"renderFilterdList",value:function(){var e=this,t=[],a=[],n=this.props.media.query,r=this.props.media.mediaList;return""===n.trim()?t=Object.values(r):(window.searchedFlag=!0,t=v.a.filter(r,function(e){var t=e.name.toLowerCase(),a=n.toLowerCase();return-1!==t.toLowerCase().indexOf(a)})),0===t.length&&(window.searchTimeoutID&&(clearTimeout(window.searchTimeoutID),window.searchTimeoutID=!1),this.state.query!==this.props.media.query&&(window.searchTimeoutID=setTimeout(function(){e.setState({query:e.props.media.query}),e.props.searchMedia()},500))),t.map(function(e,t){return a.push(A.a.createElement(Q,{key:t,name:e.name,poster_image:e.poster_image}))}),a}},{key:"render",value:function(){return A.a.createElement("div",{className:"media-listing"},A.a.createElement("div",{className:"list-wrapper"},A.a.createElement(b.a,{pageStart:0,loadMore:this.loadFunc,hasMore:this.props.media.hasMoreData&&0===this.props.media.query.length||this.props.media.hasMoreData&&!window.searchedFlag,loader:A.a.createElement("div",{className:"loader",key:0},"Loading ..."),threshold:600,initialLoad:!0},this.renderFilterdList())))}}]),t}(n.Component);var S=Object(B.b)(function(e){return{media:e.media}},{fetchMedia:p.a,searchMedia:p.b})(w),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return A.a.createElement("div",{className:"page-wrapper"},A.a.createElement(u.a,null),A.a.createElement(S,null))}}]),t}(n.Component),j=a(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(A.a.createElement(B.a,{store:j.a},A.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"c",function(){return A}),a.d(t,"b",function(){return r});var n="fetch_media",A="search_media_local",r="search_media"}},[[32,1,2]]]);
//# sourceMappingURL=main.4fc3b5d6.chunk.js.map