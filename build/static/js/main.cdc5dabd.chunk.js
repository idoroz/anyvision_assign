(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(73)},27:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),i=a.n(c),l=(a(27),a(3)),s=a(4),o=a(6),u=a(5),p=a(7),h=a(8),m=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("li",null,n.a.createElement(h.Col,{m:12,s:12},n.a.createElement("div",{className:"cardResult",onClick:function(){return e.props.onView(e.props)}},n.a.createElement(h.Card,{horizontal:!0,header:n.a.createElement(h.CardTitle,{image:this.props.artwork})},n.a.createElement("p",null,"Artist : ",this.props.artistName,n.a.createElement("br",null),"Track : ",this.props.trackName||this.props.album,n.a.createElement("br",null))))))}}]),t}(r.Component),d=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("ul",{className:"theShelf"},this.props.searchResults.map(function(t){return n.a.createElement(m,{key:t.previewUrl,artistName:t.artistName,trackName:t.trackName,album:t.collectionName,artwork:t.artworkUrl100,releaseDate:t.releaseDate,trackLength:t.trackTimeMillis,genre:t.primaryGenreName,previewUrl:t.previewUrl,appleMusicUrl:t.collectionViewUrl,trackPrice:t.trackPrice,albumPrice:t.collectionPrice,type:t.wrapperType,primaryGenreName:t.primaryGenreName,onView:e.props.onView})}))}}]),t}(r.Component),b=a(17),E=a.n(b),f=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.selected.releaseDate,a=this.props.selected.trackLength,r="track"===this.props.selected.type;return this.props.detailView?n.a.createElement("div",{className:"detailWrapper"},n.a.createElement(h.Col,{m:6,s:6},n.a.createElement(h.Card,{horizontal:!0},n.a.createElement("p",null,n.a.createElement("img",{src:this.props.selected.artwork,alt:"",height:"100",width:"100"}),n.a.createElement("br",null),"Artist : ",this.props.selected.artistName,n.a.createElement("br",null),"Track : ",this.props.selected.trackName||this.props.selected.album,n.a.createElement("br",null),"Album : ",this.props.selected.album,n.a.createElement("br",null),n.a.createElement("br",null),"Length: ",n.a.createElement(E.a,{format:"mm:ss"},a),n.a.createElement("br",null),"Release Date : ",n.a.createElement(E.a,{format:"D/M/YYYY"},t),n.a.createElement("br",null),"Genre: ",this.props.selected.genre||this.props.selected.primaryGenreName,n.a.createElement("br",null),n.a.createElement("br",null),"Track Price: $",r?this.props.selected.trackPrice.toFixed(2):this.props.selected.albumPrice.toFixed(2),n.a.createElement("br",null),"Album Price: $",this.props.selected.albumPrice.toFixed(2),n.a.createElement("br",null),n.a.createElement("a",{href:this.props.selected.appleMusicUrl},"View in Apple Music")," ",n.a.createElement("br",null),n.a.createElement("br",null),"m4a"===this.props.selected.previewUrl.substr(this.props.selected.previewUrl.length-3)?n.a.createElement("audio",{ref:"audio_tag",src:this.props.selected.previewUrl,controls:!0}):n.a.createElement("video",{width:"480",height:"351",controls:!0},n.a.createElement("source",{src:this.props.selected.previewUrl.slice(0,-3)+"mp4",type:"video/mp4"})),";"),n.a.createElement(h.Chip,{className:"topResult backBtn",onClick:function(){return e.props.returnToSearch(e.props.selected.artistName)}},"Back")))):this.props.detailView?void 0:null}}]),t}(r.Component),w=a(10),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).onKeyPress=function(e){"Enter"===e.key&&a.props.search(a.state.searchTerm)},a.state={searchTerm:""},a.updateInput=a.updateInput.bind(Object(w.a)(Object(w.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(w.a)(Object(w.a)(a))),a.onKeyPress=a.onKeyPress.bind(Object(w.a)(Object(w.a)(a))),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"updateInput",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"handleSubmit",value:function(){this.props.search(this.state.searchTerm)}},{key:"render",value:function(){return this.props.detailView?this.props.detailView?null:void 0:n.a.createElement("div",{className:"input-field"},n.a.createElement("input",{id:"searchbar",placeholder:"Search for Artist or Track...",onChange:this.updateInput,onKeyPress:this.onKeyPress}),n.a.createElement("input",{type:"submit",onClick:this.handleSubmit,style:{display:"none"}}))}}]),t}(r.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("li",{className:"collection-item topResult",onClick:function(){return e.props.onSearch(e.props.artistName)}},this.props.artistName,n.a.createElement("br",null))}}]),t}(r.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.topten.slice(0,10);return this.props.detailView?this.props.detailView?null:void 0:n.a.createElement("div",{className:"topTenList"},n.a.createElement("ul",{className:"collection with-header"},n.a.createElement("li",{className:"collection-header"},n.a.createElement("h4",null,"Top 10 Searches")),t.map(function(t){return n.a.createElement(v,{key:t._id,artistName:t._id,onSearch:e.props.returnToSearch})})))}}]),t}(r.Component),y=(a(71),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={results:[],searchTerm:"",selected:[],detailView:!1,dbData:[]},a.handleViewItem=function(e){var t=e;a.setState({results:[],detailView:!0,selected:t})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleSearch",value:function(e){var t=this;fetch("/search/"+e).then(function(e){return e.json()}).then(function(e){t.getDataFromDb(),t.setState({results:e,detailView:!1,selected:[]})}).catch(function(e){console.log(e)})}},{key:"getDataFromDb",value:function(){var e=this;fetch("/getData").then(function(e){return e.json()}).then(function(t){e.setState({dbData:t})}).catch(function(e){console.log(e)})}},{key:"backToSearch",value:function(e){this.handleSearch(e),this.getDataFromDb()}},{key:"componentDidMount",value:function(){this.getDataFromDb()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(h.Row,null,n.a.createElement(h.Col,{s:6},n.a.createElement(k,{search:this.handleSearch.bind(this),detailView:this.state.detailView}),n.a.createElement(d,{searchResults:this.state.results,onView:this.handleViewItem})),n.a.createElement(h.Col,{s:6},n.a.createElement(j,{topten:this.state.dbData,detailView:this.state.detailView,returnToSearch:this.backToSearch.bind(this)}))),n.a.createElement(f,{selected:this.state.selected,detailView:this.state.detailView,returnToSearch:this.backToSearch.bind(this)}))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.cdc5dabd.chunk.js.map