(this.webpackJsonpalbum_application=this.webpackJsonpalbum_application||[]).push([[0],{22:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(31),s=n.n(r),i=(n(37),n(22),n(38),n.p+"static/media/hustle.894e4336.png"),o=n(7),l=n(1),u=function(){return Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsx)("div",{className:"left-side",children:Object(l.jsx)("img",{src:i,alt:""})}),Object(l.jsxs)("div",{className:"navbar-options",children:[Object(l.jsx)(o.b,{to:"/home",children:Object(l.jsx)("button",{className:"navbar-btn",children:"Inicio"})}),Object(l.jsx)("a",{className:"navbar-btn",href:"home#about-us",children:"Acerca de nosotros"}),Object(l.jsx)(o.b,{to:"/login",children:Object(l.jsx)("button",{className:"navbar-btn",children:"Iniciar Sesi\xf3n"})})]})]})},j=(n(40),n(32)),d=n.n(j),b=[{original:"https://i0.wp.com/plus.cusica.com/wp-content/uploads/2021/05/esteman-svan.jpg?fit=1024%2C1024&ssl=1"},{original:"https://m.media-amazon.com/images/I/7158K4fHzbL._SL1200_.jpg"},{original:"https://blogmistermusic.files.wordpress.com/2020/01/rare.jpg"},{original:"https://m.media-amazon.com/images/I/81Ds-3oOFFS._SS500_.jpg"},{original:"https://www.eluniverso.com/resizer/t8ORNxpltABXt_12f7svT4y4RZk=/670x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/LYSPWWSOQRD3RIUNK5UP64SAUE.jpg"}],p=function(){return Object(l.jsx)(d.a,{items:b,autoPlay:!0,additionalClass:"carousel"})},m=(n(42),n.p+"static/media/collage.e118b2a5.png"),h=function(){return Object(l.jsxs)("div",{className:"aboutUs-container",id:"about-us",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:m,className:"aboutUs-img",alt:""})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Acerca de nosotros"}),Object(l.jsx)("p",{children:"Just Breathe es una red social donde podr\xe1s encontrar una gran variedad de albumes de diferentes artistas alrededor del mundo, independientemente del pa\xeds que procedan, ya que nosostros sabemos que el amor por la m\xfasica no tiene fronteras."})]})]})},O=(n(43),n(8)),x=n(13),f=function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("div",{className:"footer-container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"column",children:[Object(l.jsx)("h4",{children:"Informaci\xf3n"}),Object(l.jsxs)("ul",{className:"list",children:[Object(l.jsxs)("li",{children:[Object(l.jsx)(x.c,{}),"  +503 2256-9685"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)(x.b,{}),"    La Libertad, El Salvador"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)(x.a,{}),"   Blvr. Los Proceres"]})]})]}),Object(l.jsxs)("div",{className:"column",children:[Object(l.jsx)("h4",{children:"Soporte"}),Object(l.jsxs)("ul",{className:"list",children:[Object(l.jsx)("li",{children:"Ayuda"}),Object(l.jsx)("li",{children:"Condiciones"}),Object(l.jsx)("li",{children:"Privacidad"})]})]}),Object(l.jsxs)("div",{className:"column",children:[Object(l.jsx)("h4",{children:"Redes Sociales"}),Object(l.jsxs)("ul",{className:"list-social",children:[Object(l.jsxs)("li",{children:[" ",Object(l.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)(O.b,{className:"red",size:"30px"})})," "]}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)(O.c,{className:"red",size:"30px"})})})]})]})]})})})};var v=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{}),Object(l.jsx)(p,{}),Object(l.jsx)(h,{}),Object(l.jsx)(f,{})]})},g=n(3),N=n.n(g),w=n(5),k=n(6),y=(n(45),n(11)),C=n.p+"static/media/collage-login.e4d06bad.png",S=n(4),I=n(12),A=n(15),z=n.n(A),D="https://posts-pw2021.herokuapp.com/api/v1",_={};_.login=function(){var e=Object(w.a)(N.a.mark((function e(t,n){var c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(D,"/auth/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 2:if(!(c=e.sent).ok){e.next=8;break}return e.next=6,c.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_.verifyToken=function(){var e=Object(w.a)(N.a.mark((function e(t){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(D,"/auth/whoami"),{headers:{Authorization:"Bearer ".concat(t)}});case 2:if(!(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_.getAll=function(){var e=Object(w.a)(N.a.mark((function e(t){var n,c,a=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:0,c={headers:{Authorization:"Bearer ".concat(t)}},e.next=4,z.a.get("https://posts-pw2021.herokuapp.com/api/v1/post/all?limit=8&page=".concat(n),c).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_.getById=function(){var e=Object(w.a)(N.a.mark((function e(t,n){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{Authorization:"Bearer ".concat(t)}},e.next=3,z.a.get("https://posts-pw2021.herokuapp.com/api/v1/post/one/".concat(n),c).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_.addPost=function(){var e=Object(w.a)(N.a.mark((function e(t,n){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{Authorization:"Bearer ".concat(t)}},e.next=3,z.a.post("https://posts-pw2021.herokuapp.com/api/v1/post/create",n,c).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_.putChanges=function(){var e=Object(w.a)(N.a.mark((function e(t,n,c){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:"Bearer ".concat(t)}},e.next=3,z.a.put("https://posts-pw2021.herokuapp.com/api/post/update/".concat(c),n,a).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),_.delete=function(){var e=Object(w.a)(N.a.mark((function e(t,n,c){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:"Bearer ".concat(t)}},e.next=3,z.a.patch("https://posts-pw2021.herokuapp.com/api/v1/post/toggle/".concat(c),n,a).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}();var B=_,E=a.a.createContext(),P="token",q=function(e){var t=Object(c.useState)(void 0),n=Object(k.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(void 0),i=Object(k.a)(s,2),o=i[0],u=i[1],j=function(e){localStorage.setItem(P,e),r(e)};Object(c.useEffect)((function(){var e=function(){var e=Object(w.a)(N.a.mark((function e(){var t,n,c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem(P))){e.next=8;break}return e.next=4,B.verifyToken(t);case 4:n=e.sent,c=n.username,a=n.role,c&&a&&(u({username:c,role:a}),j(t));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]);var d=Object(c.useCallback)((function(e,t){var n=function(){var n=Object(w.a)(N.a.mark((function n(){var c,a,r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=!1,n.prev=1,n.next=4,B.login(e,t);case 4:a=n.sent,(r=a.token)&&(j(r),c=!0),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0),console.log("No se pudo iniciar sesi\xf3n");case 13:return n.prev=13,n.abrupt("return",c);case 16:case"end":return n.stop()}}),n,null,[[1,9,13,16]])})));return function(){return n.apply(this,arguments)}}();return n()}),[]),b=Object(c.useCallback)((function(){u(void 0),j(void 0)}),[]),p=Object(c.useCallback)((function(){u(void 0),j(void 0)}),[]),m=Object(c.useMemo)((function(){return{token:a,user:o,login:d,logout:b,cancel:p}}),[a,o,d,b,p]);return Object(l.jsx)(E.Provider,Object(I.a)({value:m},e))},L=function(){var e=a.a.useContext(E);if(!e)throw new Error("Ha ocurrido un error");return e},T=function(){var e=Object(S.g)(),t=L(),n=L(),a=n.login,r=n.token,s=Object(c.useState)(""),i=Object(k.a)(s,2),o=i[0],u=i[1],j=Object(c.useState)(""),d=Object(k.a)(j,2),b=d[0],p=d[1],m=Object(c.useState)(!1),h=Object(k.a)(m,2),O=h[0],x=h[1],f=function(e,t){t(e.target.value)},v=function(){var e=Object(w.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a(o,b);case 3:n=e.sent,x(!n),u(""),p("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){console.log(r),r&&e("/redirect")}),[r,e]);return Object(l.jsx)("section",{className:"container",children:Object(l.jsxs)("div",{className:"login-container",children:[Object(l.jsx)("div",{className:"left-side-login",children:Object(l.jsx)("img",{src:C,alt:""})}),Object(l.jsxs)("form",{onSubmit:v,children:[Object(l.jsx)("h1",{children:"Inicio de Sesi\xf3n"}),O&&!r&&Object(l.jsx)("h4",{className:"login-error",children:" Ocurri\xf3 un error"}),Object(l.jsxs)("div",{className:"user-container",children:[Object(l.jsx)("span",{className:"login",children:Object(l.jsx)(y.b,{})}),Object(l.jsx)("input",{type:"text",placeholder:"Introduzca su nombre de usuario",onChange:function(e){return f(e,u)}})]}),Object(l.jsxs)("div",{className:"password-container",children:[Object(l.jsx)("span",{className:"login",children:Object(l.jsx)(y.a,{})}),Object(l.jsx)("input",{type:"password",placeholder:"Introduzca su contrase\xf1a",onChange:function(e){return f(e,p)}})]}),Object(l.jsxs)("div",{className:"btn-container-admin",children:[Object(l.jsx)("button",{className:"login-btn",onClick:function(n){n.preventDefault(),t.cancel(),e("/home")},children:"Cancelar"}),Object(l.jsxs)("button",{className:"login-btn",children:["Iniciar Sesi\xf3n"," "]})]})]})]})})},F=n(14),R=(n(64),function(){var e=L(),t=Object(S.g)(),n=e.token,a=Object(c.useState)({title:"",description:"",image:""}),r=Object(k.a)(a,2),s=r[0],i=r[1],o=function(e){i(Object(I.a)(Object(I.a)({},s),{},Object(F.a)({},e.target.name,e.target.value)))},u=function(){var e=Object(w.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log({token:n,datos:s}),e.next=4,B.addPost(n,s);case 4:c=e.sent,console.log(c),t.target.reset();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("section",{className:"container",children:Object(l.jsx)("div",{className:"new-album-container",children:Object(l.jsxs)("form",{onSubmit:u,children:[Object(l.jsx)("h1",{children:"A\xf1adir nuevo \xe1lbum"}),Object(l.jsxs)("div",{className:"album-container",children:[Object(l.jsx)("span",{className:"image",children:Object(l.jsx)(O.a,{})}),Object(l.jsx)("input",{type:"text",placeholder:"Introduzca el nombre del \xe1lbum",name:"title",onChange:o,oninvalid:"alert('Debes de completar el formulario');",required:!0,pattern:".{8,32}",title:"Debe de contener entre 8 y 32 car\xe1cteres"})]}),Object(l.jsxs)("div",{className:"album-container",children:[Object(l.jsx)("span",{className:"image",children:Object(l.jsx)(O.d,{})}),Object(l.jsx)("input",{type:"text",placeholder:"Introduzca las canciones del album",name:"description",onChange:o,oninvalid:"alert('Debes de completar el formulario');",required:!0,pattern:".{8,}",title:"Debe de contener al menos 8 car\xe1cteres"})]}),Object(l.jsxs)("div",{className:"album-container",children:[Object(l.jsx)("span",{className:"image",children:Object(l.jsx)(O.e,{})}),Object(l.jsx)("input",{type:"url",placeholder:"Introduzca el link de la imagen de portada",name:"image",onChange:o,oninvalid:"alert('Debes de completar el formulario');",required:!0})]}),Object(l.jsxs)("div",{className:"btn-container-album",children:[Object(l.jsx)("button",{className:"add-btn",onClick:function(n){n.preventDefault(),e.cancel(),t("/admin")},type:"submit",children:"Cancelar"}),Object(l.jsx)("button",{className:"add-btn",type:"submit",children:"A\xf1adir nuevo album"})]})]})})})}),U=function(){var e=L(),t=Object(S.g)(),n=Object(S.h)().idAlbum,a=e.token,r=Object(c.useState)({title:"",description:"",image:""}),s=Object(k.a)(r,2),i=s[0],o=s[1],u=function(e){o(Object(I.a)(Object(I.a)({},i),{},Object(F.a)({},e.target.name,e.target.value)))},j=function(){var e=Object(w.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log({token:a,datos:i}),e.next=4,B.putChanges(a,i,n);case 4:c=e.sent,console.log(c),t.target.reset();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("section",{className:"container",children:Object(l.jsx)("div",{className:"new-album-container",children:Object(l.jsxs)("form",{onSubmit:j,children:[Object(l.jsx)("h1",{children:"Editar \xe1lbum"}),Object(l.jsxs)("div",{className:"album-container",children:[Object(l.jsx)("span",{className:"image",children:Object(l.jsx)(O.a,{})}),Object(l.jsx)("input",{type:"text",placeholder:"Introduzca el nombre del \xe1lbum",name:"title",onChange:u,oninvalid:"alert('Debes de completar el formulario');",required:!0,pattern:".{8,32}",title:"Debe de contener entre 8 y 32 car\xe1cteres"})]}),Object(l.jsxs)("div",{className:"album-container",children:[Object(l.jsx)("span",{className:"image",children:Object(l.jsx)(O.d,{})}),Object(l.jsx)("input",{type:"text",placeholder:"Introduzca las canciones del album",name:"description",onChange:u,oninvalid:"alert('Debes de completar el formulario');",required:!0,pattern:".{8,}",title:"Debe de contener al menos 8 car\xe1cteres"})]}),Object(l.jsxs)("div",{className:"album-container",children:[Object(l.jsx)("span",{className:"image",children:Object(l.jsx)(O.e,{})}),Object(l.jsx)("input",{type:"url",placeholder:"Introduzca el link de la imagen de portada",name:"image",onChange:u,oninvalid:"alert('Debes de completar el formulario');",required:!0})]}),Object(l.jsxs)("div",{className:"btn-container-album",children:[Object(l.jsx)("button",{className:"add-btn",onClick:function(n){n.preventDefault(),e.cancel(),t("/admin")},children:"Cancelar"}),Object(l.jsx)("button",{className:"add-btn",children:"A\xf1adir modificaci\xf3n de album"})]})]})})})},J=(n(65),n(66),n(67),n(19)),H=function(){var e=Object(c.useState)([]),t=Object(k.a)(e,2),n=t[0],a=t[1],r=L().token;Object(c.useEffect)((function(){s()}),[]);var s=function(){var e=Object(w.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getAll(r);case 2:t=e.sent,n=t.data,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"card-container",children:n.map((function(e){return Object(l.jsxs)("div",{className:"container-nodo",children:[Object(l.jsx)("div",{className:"image-album",children:Object(l.jsx)("img",{src:e.image,alt:""})}),Object(l.jsxs)("div",{className:"info-album",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:" Nombre de \xe1lbum:"}),e.title]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:" Canciones:"}),e.description]}),Object(l.jsxs)("div",{className:"btn-container",children:[Object(l.jsx)("button",{className:"btn-megusta",onClick:function(){return t=e._id,void n.filter((function(e){return e._id==t}));var t},children:Object(l.jsx)(J.a,{})}),Object(l.jsx)("button",{className:"btn-favoritos",children:Object(l.jsx)(J.b,{})})]})]})]},e._id)}))})},K=function(){return Object(l.jsxs)("div",{className:"view-container",children:[Object(l.jsx)("h1",{children:"\xc1lbumes"}),Object(l.jsx)("div",{className:"cards-container",children:Object(l.jsx)(H,{})})]})},M=function(){var e=L(),t=Object(S.g)();return Object(l.jsxs)("div",{children:[Object(l.jsxs)("nav",{className:"navbar-container-main",children:[Object(l.jsx)("div",{className:"left-side",children:Object(l.jsx)("img",{src:i,alt:""})}),Object(l.jsxs)("div",{className:"navbar-options",children:[Object(l.jsxs)("div",{className:"search-container",children:[Object(l.jsx)("button",{className:"logout",children:Object(l.jsx)(y.c,{})}),Object(l.jsx)("input",{type:"text",placeholder:"Introduzca el nombre del \xe1lbum"})]}),Object(l.jsx)("button",{className:"navbar-btn",onClick:function(n){n.preventDefault(),e.logout(),t("/login")},children:"salir de usuario"})]})]}),Object(l.jsx)(K,{})]})},W=(n(68),n(69),n(18)),Q=function(){var e=Object(c.useState)([]),t=Object(k.a)(e,2),n=t[0],a=t[1],r=L().token;Object(c.useEffect)((function(){s()}),[]);var s=function(){var e=Object(w.a)(N.a.mark((function e(t){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getAll(r);case 2:n=e.sent,c=n.data,console.log(c),a(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(w.a)(N.a.mark((function e(t){var c,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Eliminando carta"),c=n.filter((function(e){return e._id!==t})),a(c),e.next=5,B.delete(r,n,t);case 5:s=e.sent,console.log(s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"card-container",children:n.map((function(e){return Object(l.jsxs)("div",{className:"container-nodo",children:[Object(l.jsx)("img",{src:e.image,alt:""}),Object(l.jsxs)("div",{className:"info-album",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:" Titulo:"})," ",e.title]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:" Descripcion:"})," ",e.description]}),Object(l.jsxs)("div",{className:"btn-container-admin",children:[Object(l.jsxs)("button",{className:"btn-delete",onClick:function(){return i(e._id)},children:[Object(l.jsx)(y.d,{}),"Eliminar"]}),Object(l.jsx)(o.b,{to:"/edit/".concat(e._id),children:Object(l.jsxs)("button",{className:"btn-edit",children:[Object(l.jsx)(W.a,{}),"Editar"]})})]})]})]},e._id)}))})},X=(n(70),function(){var e=Object(c.useState)([]),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(k.a)(r,2),i=s[0],u=s[1],j=L().token;Object(c.useEffect)((function(){d()}),[]);var d=function(){var e=Object(w.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getAll(j);case 2:t=e.sent,n=t.data,console.log(n),a(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(w.a)(N.a.mark((function e(){var t,c,a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filter((function(e){return e.title==i})),c=t.map((function(e){return e._id})),a=c.toString(),e.next=5,B.getById(j,a);case 5:r=e.sent,console.log(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"admin-container",children:[Object(l.jsxs)("div",{className:"search-container-admin",children:[Object(l.jsx)("button",{className:"search",onClick:b,children:Object(l.jsx)(y.c,{})}),Object(l.jsx)("input",{type:"text",onChange:function(e){u(e.target.value),console.log(i)},placeholder:"Introduzca el nombre del \xe1lbum"}),Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{to:"/add",children:Object(l.jsx)("button",{className:"new-album",children:"A\xf1adir nuevo \xe1lbum"})})})]}),Object(l.jsx)("h1",{children:"\xc1lbumes"}),Object(l.jsx)("div",{className:"cards-container",children:Object(l.jsx)(Q,{})})]})}),Y=function(){var e=L(),t=Object(S.g)();return Object(l.jsxs)("div",{children:[Object(l.jsxs)("nav",{className:"navbar-container-admin",children:[Object(l.jsx)("div",{className:"left-side",children:Object(l.jsx)("img",{src:i,alt:""})}),Object(l.jsx)("div",{className:"navbar-options",children:Object(l.jsx)("button",{className:"navbar-btn",onClick:function(n){n.preventDefault(),e.logout(),t("/login")},children:"salir de administrador"})})]}),Object(l.jsx)(X,{})]})},Z=function(e){var t=e.role,n=e.children,c=L(),a=c.token,r=c.user;return a?r&&r.role===t?n:Object(l.jsx)(S.a,{replace:!0,to:"/404"}):Object(l.jsx)(S.a,{replace:!0,to:"/login"})},G={admin:"/admin",user:"/user"},V=function(){var e,t=L().user;return t?Object(l.jsx)(S.a,{replace:!0,to:null!==(e=G[t.role])&&void 0!==e?e:"/"}):Object(l.jsx)("p",{children:"No se puede redireccionar"})};var $=function(){return Object(l.jsx)(o.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(S.d,{children:[Object(l.jsx)(S.b,{path:"/",exact:!0,element:Object(l.jsx)(v,{})}),Object(l.jsx)(S.b,{path:"/home",element:Object(l.jsx)(v,{})}),Object(l.jsx)(S.b,{path:"/login",element:Object(l.jsx)(T,{})}),Object(l.jsx)(S.b,{path:"/redirect",element:Object(l.jsx)(V,{})}),Object(l.jsx)(S.b,{path:"/user",element:Object(l.jsx)(Z,{role:"user",children:Object(l.jsx)(M,{})})}),Object(l.jsx)(S.b,{path:"/admin",element:Object(l.jsx)(Z,{role:"admin",children:Object(l.jsx)(Y,{})})}),Object(l.jsx)(S.b,{path:"/add",element:Object(l.jsx)(R,{})}),Object(l.jsx)(S.b,{path:"/edit/:idAlbum",element:Object(l.jsx)(U,{})}),Object(l.jsx)(S.b,{path:"/*",element:Object(l.jsx)("h2",{children:"No se ha encontrado el recurso, error 404"})})]})})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(q,{children:Object(l.jsx)($,{})})}),document.getElementById("root")),ee()}},[[71,1,2]]]);
//# sourceMappingURL=main.3d1d1a24.chunk.js.map