(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},13:function(e,t,a){e.exports={Button:"Button_Button__3R1xi",wrapper:"Button_wrapper__1pHwk"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},21:function(e,t,a){},22:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=(a(21),a(14)),i=a(4),s=a(5),u=a(7),h=a(6),m=a(8),d=(a(22),function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=22576222-4c579c663b204aa5d73730e1c&image_type=photo&orientation=horizontal&per_page=12\n")).then((function(e){return e.ok?e.json():Promise.reject(new Error("OOOps!"))}))}),g=a(9),p=a.n(g),b=(a(23),a(1)),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleInputChange=function(t){e.setState({value:t.currentTarget.value})},e.handleOnSubmit=function(t){t.preventDefault();var a=e.state.value;""!==a.trim()?(e.props.handleSubmit(a),e.setState({value:""}),e.clearInput(t)):m.b.error("Write correct query")},e.clearInput=function(e){e.currentTarget.input.value=""},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:p.a.Searchbar,children:Object(b.jsxs)("form",{className:p.a.SearchForm,onSubmit:this.handleOnSubmit,children:[Object(b.jsx)("button",{type:"submit",className:p.a.SearchFormButton,children:Object(b.jsx)("span",{className:p.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{id:"input",className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInputChange})]})})}}]),a}(n.Component),f=a(11),O=a.n(f),S=function(e){var t=e.tag,a=e.webformatURL,n=e.onSelect;return Object(b.jsx)("li",{onClick:n,className:O.a.ImageGalleryItem,children:Object(b.jsx)("img",{src:a,alt:t,className:O.a.ImageGalleryItemImage})})},y=a(15),v=a.n(y),I=function(e){var t=e.images,a=e.onSelect;return Object(b.jsx)("ul",{className:v.a.ImageGallery,children:t&&t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,c=e.largeImageURL;return Object(b.jsx)(S,{webformatURL:n,tag:r,onSelect:function(){return a(c)}},t)}))})},_=a(12),x=a.n(_),k=document.querySelector("#modal"),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleBackDropClick=function(t){var a=e.props.closeModal;t.currentTarget===t.target&&a()},e.handleCloseModal=function(t){var a=e.props.closeModal;"Escape"===t.code&&a()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleCloseModal)}},{key:"render",value:function(){var e=this.props.src;return Object(c.createPortal)(Object(b.jsx)("div",{className:x.a.Overlay,onClick:this.handleBackDropClick,children:Object(b.jsx)("div",{className:x.a.Modal,children:Object(b.jsx)("img",{src:e,alt:""})})}),k)}}]),a}(n.Component),C=a(16),L=a.n(C),M=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(L.a,{type:"heart",bgColor:"#8406ec",title:"heart",size:300})})},B=a(13),F=a.n(B),G=function(e){var t=e.handleClick;return Object(b.jsx)("div",{className:F.a.wrapper,children:Object(b.jsx)("button",{className:F.a.Button,type:"button",onClick:t,children:"Load more"})})},N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",selectedImage:null,images:[],page:1,isLoading:!1},e.toggleLoading=function(){e.setState((function(e){return{isLoading:!e.isLoading}}))},e.handleSubmit=function(t){e.setState({query:t,images:[],page:1})},e.handleSelectedImage=function(t){e.setState({selectedImage:t})},e.handleCloseModal=function(){e.setState({selectedImage:null})},e.handleClick=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.getImages=function(){e.toggleLoading();var t=e.state,a=t.page,n=t.query;d(n,a).then((function(t){0!==t.hits.length?e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t.hits))}})):m.b.error("Ooops, we cant't find such query! Try again.")})).then(e.handleScroll).catch((function(e){return console.log(e.message)})).finally(e.toggleLoading)},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.query,n=this.state.query,r=t.page,c=this.state.page;a===n&&r===c||this.getImages()}},{key:"render",value:function(){var e=this.state,t=e.selectedImage,a=e.images,n=e.isLoading,r=e.page,c=a.length/r===12,o=a.length>0&&c;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{handleSubmit:this.handleSubmit}),Object(b.jsx)(I,{images:a,onSelect:this.handleSelectedImage}),t&&Object(b.jsx)(w,{src:t,closeModal:this.handleCloseModal}),n&&Object(b.jsx)(M,{}),o&&Object(b.jsx)(G,{handleClick:this.handleClick}),Object(b.jsx)(m.a,{autoClose:3e3})]})}}]),a}(n.Component);o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}}},[[59,1,2]]]);
//# sourceMappingURL=main.d4959091.chunk.js.map