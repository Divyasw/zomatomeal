(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{34:function(e,t,a){},60:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(35),c=a.n(s),i=a(9),r=a(6),l=a(2),o=a(3),d=a(5),j=a(4),h=a(13),u=a.n(h),b=(a(60),a(0)),m=function(e){return Object(b.jsx)("div",{id:"content",children:function(e){var t=e.listData;return t?t.length>0?t.map((function(e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-5",children:Object(b.jsx)("img",{className:"Image",alt:e.restaurant_name,src:e.restaurant_thumb})}),Object(b.jsx)("div",{className:"col-md-7",children:Object(b.jsxs)("div",{className:"hotel_name",children:[Object(b.jsx)(i.b,{to:"/details/".concat(e.restaurant_id),children:e.restaurant_name}),Object(b.jsx)("div",{className:"city_name",children:e.address}),Object(b.jsx)("div",{className:"city_name rating",children:e.rating_text}),Object(b.jsxs)("div",{className:"city_name rating",children:["Rs.",e.cost]}),Object(b.jsxs)("div",{className:"labelDiv",children:[Object(b.jsx)("span",{className:"label label-primary",children:e.mealTypes[0].mealtype_name})," \xa0",Object(b.jsx)("span",{className:"label label-success",children:e.mealTypes[1].mealtype_name})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"label label-warning",children:e.cuisines[0].cuisine_name})," \xa0",Object(b.jsx)("span",{className:"label label-danger",children:e.cuisines[1].cuisine_name})]})]})})]})},e._id)})):Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"No Data For this filter"})}):Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:"/images/loaderimg.gif",alt:"loader"}),Object(b.jsx)("h3",{children:"loading...."})]})}(e)})},p=(a(34),"https://zomatoapijuly.herokuapp.com/filter"),O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).filterCuisine=function(t){var a,n=sessionStorage.getItem("mealId"),s=t.target.value;a=""==s?"".concat(p,"/").concat(n):"".concat(p,"/").concat(n,"?cuisine=").concat(s),u.a.get(a).then((function(t){e.props.restPerCusinie(t.data)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"cusineFilter",children:[Object(b.jsx)("center",{children:Object(b.jsx)("h3",{children:"Cuisine Filter"})}),Object(b.jsxs)("div",{onChange:this.filterCuisine,children:[Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"1"}),"North Indian"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"2"}),"South Indian"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"3"}),"Chinese"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"4"}),"Fast Food"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"5"}),"Street Food"]})]})]})}}]),a}(n.Component),x=O,v="https://zomatoapijuly.herokuapp.com/filter",g=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).filterCost=function(t){var a,n=sessionStorage.getItem("mealId"),s=t.target.value.split("-"),c=s[0],i=s[1];a=""==t.target.value?"".concat(v,"/").concat(n):"".concat(v,"/").concat(n,"?lcost=").concat(c,"&hcost=").concat(i),u.a.get(a).then((function(t){e.props.restPerCost(t.data)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"cusineFilter",children:[Object(b.jsx)("center",{children:Object(b.jsx)("h3",{children:"Cost Filter"})}),Object(b.jsxs)("div",{onChange:this.filterCost,children:[Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"201-300"}),"201-300"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"301-600"}),"301-600"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"601-1000"}),"601-1000"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"1001-1500"}),"1001-1500"]})]})]})}}]),a}(n.Component),f=g,N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).setDataAsPerFilter=function(e){n.setState({restaurantList:e})},n.state={restaurantList:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{id:"mainListing",children:[Object(b.jsxs)("div",{id:"filter",children:[Object(b.jsx)("center",{children:Object(b.jsx)("h2",{children:"Filter"})}),Object(b.jsx)(x,{restPerCusinie:function(t){e.setDataAsPerFilter(t)}}),Object(b.jsx)("hr",{}),Object(b.jsx)(f,{restPerCost:function(t){e.setDataAsPerFilter(t)}}),Object(b.jsx)("hr",{})]}),Object(b.jsx)(m,{listData:this.state.restaurantList})]})})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.mealId;sessionStorage.setItem("mealId",t),u.a.get("".concat("https://zomatoapijuly.herokuapp.com/restaurant?mealtype_id=").concat(t)).then((function(t){e.setState({restaurantList:t.data})}))}}]),a}(n.Component),y=(a(67),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).renderCity=function(e){if(e)return e.map((function(e){return Object(b.jsx)("option",{value:e.state_id,children:e.state},e.state_id)}))},n.renderRestaurants=function(e){if(e)return e.map((function(e){return Object(b.jsxs)("option",{value:e.restaurant_id,children:[e.restaurant_name," | ",e.address]})}))},n.handleCity=function(e){console.log(e.target.value);var t=e.target.value;fetch("".concat("https://zomatoapijuly.herokuapp.com/restaurant?stateId=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({restaurant:e})}))},n.handleRest=function(e){n.props.history.push("/details/".concat(e.target.value))},n.state={location:"",restaurant:""},n}return Object(o.a)(a,[{key:"render",value:function(){return console.log(this.state.restaurant),Object(b.jsxs)("div",{id:"search",children:[Object(b.jsx)("div",{id:"logo",children:Object(b.jsx)("span",{children:"e!"})}),Object(b.jsx)("div",{class:"bike",children:Object(b.jsx)("img",{src:"https://i.ibb.co/XZMhbXx/bike2.gif",style:{height:70,width:70}})}),Object(b.jsxs)("div",{id:"heading",children:["Find The Best Restaurants, Cafes and bars ",Object(b.jsx)("span",{id:"usercity"})]}),Object(b.jsxs)("div",{id:"dropdown",children:[Object(b.jsxs)("select",{id:"city",onChange:this.handleCity,children:[Object(b.jsx)("option",{children:"--- Select Location ---  "}),this.renderCity(this.state.location)]}),Object(b.jsxs)("select",{id:"restaurants",onChange:this.handleRest,children:[Object(b.jsx)("option",{children:"--- Select Restaurant ---  "}),this.renderRestaurants(this.state.restaurant)]})]})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://zomatoapijuly.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({location:t})}))}}]),a}(n.Component)),k=Object(r.e)(y),C=(a(68),function(e){return Object(b.jsxs)("div",{id:"quicksearch",children:[Object(b.jsx)("span",{id:"QuickHeading",children:"Quick Searches"}),Object(b.jsx)("span",{id:"QuickSubHeading",children:"Discover restaurant by type of meal"}),Object(b.jsx)("div",{id:"mainTileContainer",children:function(e){var t=e.quickData;if(t)return t.map((function(e){return Object(b.jsx)(i.b,{to:"/list/".concat(e.mealtype_id),children:Object(b.jsxs)("div",{className:"tileContainer",children:[Object(b.jsx)("div",{className:"tileComponent1",children:Object(b.jsx)("img",{src:e.meal_image,alt:"breakfast"})}),Object(b.jsxs)("div",{className:"tileComponent2",children:[Object(b.jsx)("div",{className:"componentHeading",children:e.mealtype}),Object(b.jsx)("div",{className:"componentSubHeading",children:e.content})]})]},e.mealtype_id)})}))}(e)})]})}),S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={QuickData:""},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(C,{quickData:this.state.QuickData})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://zomatoapijuly.herokuapp.com/quicksearch").then((function(e){return e.json()})).then((function(t){e.setState({QuickData:t})}))}}]),a}(n.Component),I=function(){return Object(b.jsxs)("div",{id:"main",children:[Object(b.jsx)(k,{}),Object(b.jsx)(S,{})]})},_=a(24),D=a.n(_),w=a(37),P=(a(70),a(16)),L=(a(71),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).orderId=[],e.placeOrder=function(t){e.orderId.push("".concat(t)),e.props.finalOrder(e.orderId)},e.removeOrder=function(t){e.orderId.splice(e.orderId.indexOf(t.toString()),1),e.props.finalOrder(e.orderId)},e.renderMenu=function(t){var a=t.menudata;if(a)return a.map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"col-md-7",children:[Object(b.jsx)("b",{children:t.menu_id})," \xa0",Object(b.jsx)("img",{src:t.menu_image,alt:t.menu_name,style:{height:80,width:80}}),"\xa0\xa0 ",t.menu_name," - ",t.menu_price]}),Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){e.placeOrder(t.menu_id)},children:Object(b.jsx)("span",{className:"glyphicon glyphicon-plus"})})," \xa0",Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){e.removeOrder(t.menu_id)},children:Object(b.jsx)("span",{className:"glyphicon glyphicon-minus"})})]}),Object(b.jsx)("br",{})]},t.menu_id)}))},e.renderCart=function(e){if(e)return e.map((function(e,t){return Object(b.jsxs)("b",{children:[" ",e," \xa0\xa0 "]},t)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"col-md-12 bg-success",children:[Object(b.jsx)("h1",{children:"Item Added"}),"Item Number ",this.renderCart(this.orderId)," added"]}),Object(b.jsx)("div",{className:"col-md-12 bg-info",children:this.renderMenu(this.props)})]})}}]),a}(n.Component)),T=Object(r.e)(L),F=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).addToCart=function(t){console.log("data in card",t),e.setState({userItem:t})},e.proceed=function(){sessionStorage.setItem("menu",e.state.userItem),e.props.history.push("/placeOrder/".concat(e.state.details.restaurant_name))},e.state={details:"",menuList:"",userItem:""},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state.details;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"panel panel-danger",children:[Object(b.jsx)("div",{className:"panel-heading",children:Object(b.jsx)("h3",{children:this.state.details.restaurant_name})}),Object(b.jsxs)("div",{className:"panel-body",children:[Object(b.jsx)("img",{src:t.restaurant_thumb,alt:t.restaurant_name,className:"sliderImage"}),Object(b.jsx)("button",{className:"btn btn-danger galButton",type:"button","data-toggle":"modal","data-target":"#myGal",children:"Click to See Image Gallery"}),Object(b.jsx)("hr",{}),Object(b.jsx)("h2",{children:t.restaurant_name}),Object(b.jsx)("h2",{children:t.rating_text}),Object(b.jsxs)("h2",{children:[t.average_rating," Star"]}),Object(b.jsxs)(P.d,{children:[Object(b.jsxs)(P.b,{children:[Object(b.jsx)(P.a,{children:"Details"}),Object(b.jsx)(P.a,{children:"Menu"})]}),Object(b.jsxs)(P.c,{children:[Object(b.jsx)("p",{children:t.restaurant_name}),Object(b.jsx)("p",{children:t.rating_text}),Object(b.jsx)("p",{children:t.average_rating})]}),Object(b.jsxs)(P.c,{children:[Object(b.jsx)("h2",{children:"Menu"}),Object(b.jsx)(T,{menudata:this.state.menuList,finalOrder:function(t){e.addToCart(t)}})]})]}),Object(b.jsx)("button",{className:"btn btn-success",onClick:this.proceed,children:"Proceed"})]})]})})]})}},{key:"componentDidMount",value:function(){var e=Object(w.a)(D.a.mark((function e(){var t,a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.restId,e.next=3,u.a.get("".concat("https://zomatoapijuly.herokuapp.com/details","/").concat(t));case 3:return a=e.sent,e.next=6,u.a.get("".concat("https://zomatoapijuly.herokuapp.com/menu","/").concat(t));case 6:n=e.sent,console.log(a.data),console.log(n.data),this.setState({details:a.data[0],menuList:n.data});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(n.Component),R=F,M=a(17),z=(a(72),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(M.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){console.log(n.state),fetch("https://zomatoapijuly.herokuapp.com/placeOrder",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(n.state)}).then(console.log("payment gateway"))},n.renderItems=function(e){return e?e.map((function(e){return Object(b.jsxs)("div",{className:"items",children:[Object(b.jsx)("img",{src:e.menu_image,alt:e.menu_name}),Object(b.jsx)("h3",{children:e.menu_name}),Object(b.jsxs)("h4",{children:["Rs ",e.menu_price]})]},e.menu_id)})):Object(b.jsx)("img",{src:"/images/loader.gif",alt:"loader"})},n.state={id:Math.floor(1e5*Math.random()),details:"",amount:0,hotel_name:n.props.match.params.restName,name:sessionStorage.getItem("userData")?sessionStorage.getItem("userData").split(",")[0]:"",phone:sessionStorage.getItem("userData")?sessionStorage.getItem("userData").split(",")[2]:"",email:sessionStorage.getItem("userData")?sessionStorage.getItem("userData").split(",")[1]:"",address:"",status:"Pending"},n}return Object(o.a)(a,[{key:"render",value:function(){return sessionStorage.getItem("userData")?(console.log(this.state),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"panel panel-info",children:[Object(b.jsx)("div",{className:"panel-heading",children:Object(b.jsxs)("h3",{children:["Your order from ",this.props.match.params.restName," is below:"]})}),Object(b.jsx)("div",{className:"panel-body",children:Object(b.jsxs)("form",{method:"POST",action:"http://zompay.herokuapp.com/paynow",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"EmailId"}),Object(b.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Phone"}),Object(b.jsx)("input",{className:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Address"}),Object(b.jsx)("input",{className:"form-control",name:"address",value:this.state.address,onChange:this.handleChange})]})})]}),Object(b.jsx)("input",{type:"hidden",name:"amount",value:this.state.amount}),Object(b.jsx)("input",{type:"hidden",name:"id",value:this.state.id})]}),this.renderItems(this.state.details),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("h2",{children:["Total Cost is Rs.",this.state.amount]})})}),Object(b.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,type:"submit",children:"Checkout"})]})})]})]})):Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Login first to place booking"})})}},{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("menu"),a=[];t.split(",").map((function(e){return a.push(parseInt(e)),"ok"})),fetch("https://zomatoapijuly.herokuapp.com/menuItem",{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){var a=0;t.map((function(e){return a+=parseInt(e.menu_price),"ok"})),e.setState({details:t,amount:a})}))}}]),a}(n.Component)),A=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("center",{children:Object(b.jsx)("h3",{children:"Orders"})}),Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Id"}),Object(b.jsx)("th",{children:"Rest Name"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Phone"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Address"}),Object(b.jsx)("th",{children:"Price"}),Object(b.jsx)("th",{children:"Status"}),Object(b.jsx)("th",{children:"Bank"}),Object(b.jsx)("th",{children:"Bank Status"})]})}),Object(b.jsx)("tbody",{children:function(e){var t=e.orderData;if(t)return t.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:e.hotel_name}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.phone}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.address}),Object(b.jsxs)("td",{children:["Rs.",e.amount]}),Object(b.jsx)("td",{children:e.status}),Object(b.jsx)("td",{children:e.bank}),Object(b.jsx)("td",{children:e.bank_status})]})}))}(e)})]})]})},E=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={orders:""},e}return Object(o.a)(a,[{key:"render",value:function(){return sessionStorage.getItem("userData")?Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(A,{orderData:this.state.orders})}):Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Login first to see booking"})})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.location){var t=this.props.location.search;if(t){var a={status:"Delivered",date:t.split("&")[2].split("=")[1],bank_status:t.split("&")[0].split("=")[1],bank:t.split("&")[3].split("=")[1]},n=t.split("&")[1].split("=")[1].split("_")[1];fetch("".concat("https://zomatoapijuly.herokuapp.com/updateOrder","/").concat(n),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)})}}u.a.get("".concat("https://zomatoapijuly.herokuapp.com/viewOrder","?email=").concat(sessionStorage.getItem("userData").split(",")[1])).then((function(t){e.setState({orders:t.data})}))}}]),a}(n.Component),H=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(M.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){console.log(n.state),fetch("https://developerjwt.herokuapp.com/api/auth/register",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(n.state)}).then(n.props.history.push("/login"))},n.state={name:"",phone:"",email:"",password:""},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"panel panel-info",children:[Object(b.jsx)("div",{className:"panel-heading",children:Object(b.jsx)("h3",{children:"Register"})}),Object(b.jsxs)("div",{className:"panel-body",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"EmailId"}),Object(b.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Phone"}),Object(b.jsx)("input",{className:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{className:"form-control",name:"password",value:this.state.password,onChange:this.handleChange})]})})]})}),Object(b.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"Register"}),"\xa0",Object(b.jsx)("button",{className:"btn btn-danger",onClick:this.handleSubmit,children:"Cancel"})]})]})]})}}]),a}(n.Component),J=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(M.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){console.log(n.state),fetch("https://developerjwt.herokuapp.com/api/auth/login",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(n.state)}).then((function(e){return e.json()})).then((function(e){!1===e.auth?n.setState({message:e.token}):(sessionStorage.setItem("ltk",e.token),n.props.history.push("/"))}))},n.state={email:"",password:"",message:""},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"panel panel-warning",children:[Object(b.jsx)("div",{className:"panel-heading",children:Object(b.jsx)("h3",{children:"Login"})}),Object(b.jsxs)("div",{className:"panel-body",children:[Object(b.jsx)("h2",{style:{color:"red"},children:this.state.message}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"EmailId"}),Object(b.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{className:"form-control",name:"password",value:this.state.password,onChange:this.handleChange})]})})]})}),Object(b.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"Login"})]})]})]})}}]),a}(n.Component),Q=(a(73),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleLogout=function(){e.setState({userData:""}),sessionStorage.removeItem("ltk"),sessionStorage.removeItem("userData"),e.props.history.push("/")},e.conditionalHeader=function(){if(e.state.userData.name){var t=e.state.userData,a=[t.name,t.email,t.phone,t.role];return sessionStorage.setItem("userData",a),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("button",{className:"btn btn-info",children:["Hi ",e.state.userData.name]}),"\xa0",Object(b.jsx)("button",{className:"btn btn-warning",onClick:e.handleLogout,children:"Logout"})]})}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.b,{to:"/login",className:"btn btn-success",children:Object(b.jsx)("span",{className:"glyphicon glyphicon-log-in",children:" Login"})})," \xa0",Object(b.jsx)(i.b,{to:"/register",className:"btn btn-warning",children:Object(b.jsx)("span",{className:"glyphicon glyphicon-user",children:" Register"})})]})},e.state={userData:""},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("header",{id:"header",children:[Object(b.jsxs)("div",{id:"logo_main",children:[Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("h1",{id:"headingListing",children:"E!"})}),Object(b.jsx)(i.b,{to:"/viewOrder",children:"Orders"})]}),Object(b.jsx)("div",{className:"logoRight",children:this.conditionalHeader()})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://developerjwt.herokuapp.com/api/auth/userinfo",{method:"GET",headers:{"x-access-token":sessionStorage.getItem("ltk")}}).then((function(e){return e.json()})).then((function(t){e.setState({userData:t})}))}}]),a}(n.Component)),B=Object(r.e)(Q),G=function(){return Object(b.jsxs)(i.a,{forceRefresh:!0,children:[Object(b.jsx)(B,{}),Object(b.jsx)(r.a,{exact:!0,path:"/",component:I}),Object(b.jsx)(r.a,{path:"/list/:mealId",component:N}),Object(b.jsx)(r.a,{path:"/details/:restId",component:R}),Object(b.jsx)(r.a,{path:"/placeOrder/:restName",component:z}),Object(b.jsx)(r.a,{path:"/viewOrder",component:E}),Object(b.jsx)(r.a,{path:"/register",component:H}),Object(b.jsx)(r.a,{path:"/login",component:J})]})};c.a.render(Object(b.jsx)(G,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.51cbe101.chunk.js.map