(function(e){function n(n){for(var a,r,i=n[0],s=n[1],u=n[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(n);while(d.length)d.shift()();return c.push.apply(c,u||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],a=!0,r=1;r<t.length;r++){var i=t[r];0!==o[i]&&(a=!1)}a&&(c.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"f7f0eb33","chunk-4975b195":"d0f6522c","chunk-0ab562fe":"d4fe85cf","chunk-29c6579a":"c5c9e035","chunk-2d20ebc8":"9db1c991","chunk-32ab5861":"18a81371","chunk-3b84babf":"c168cc65","chunk-63796625":"e7a7592f","chunk-17ca5f6c":"8e9fec31","chunk-2429764d":"1636a86d","chunk-6a847538":"e351dbae","chunk-fd9493f2":"b6acefbd","chunk-08903e16":"c3b67d8f","chunk-1c0a3b1e":"d5f59e41","chunk-008042d8":"c9892caf","chunk-34862292":"6fb29706","chunk-082754aa":"f9ddb60a","chunk-2d0c94cb":"492338ea","chunk-2dd51444":"a6287b3a","chunk-eaac11b6":"ef79f771","chunk-840ff1a0":"f4b5e4b6","chunk-065cb82e":"35b98f88","chunk-70b9d984":"86f93acf","chunk-b20f6cec":"5ad4f8f0","chunk-04fa3a87":"802d49e3"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-4975b195":1,"chunk-0ab562fe":1,"chunk-29c6579a":1,"chunk-32ab5861":1,"chunk-3b84babf":1,"chunk-63796625":1,"chunk-17ca5f6c":1,"chunk-2429764d":1,"chunk-6a847538":1,"chunk-fd9493f2":1,"chunk-08903e16":1,"chunk-1c0a3b1e":1,"chunk-008042d8":1,"chunk-34862292":1,"chunk-082754aa":1,"chunk-2dd51444":1,"chunk-eaac11b6":1,"chunk-840ff1a0":1,"chunk-04fa3a87":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"31d6cfe0","chunk-4975b195":"31b58831","chunk-0ab562fe":"3a6f24da","chunk-29c6579a":"e9a01353","chunk-2d20ebc8":"31d6cfe0","chunk-32ab5861":"c7da707a","chunk-3b84babf":"b872bac8","chunk-63796625":"8cecd084","chunk-17ca5f6c":"81e55faf","chunk-2429764d":"f40e11d4","chunk-6a847538":"0feb1c45","chunk-fd9493f2":"bda667ee","chunk-08903e16":"3f842040","chunk-1c0a3b1e":"ddd612ee","chunk-008042d8":"ed58bc7c","chunk-34862292":"087c85f7","chunk-082754aa":"3b18964a","chunk-2d0c94cb":"31d6cfe0","chunk-2dd51444":"60121d37","chunk-eaac11b6":"03c004f2","chunk-840ff1a0":"94cce400","chunk-065cb82e":"31d6cfe0","chunk-70b9d984":"31d6cfe0","chunk-b20f6cec":"31d6cfe0","chunk-04fa3a87":"d987913b"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),t(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var c=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,t[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/aeflorezm/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var f=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("8a23"),r=t.n(a);r.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-col",{attrs:{cols:e.cols}},[t("h2",{staticClass:"font-weight-bold primary--text mb-4",class:e.$vuetify.breakpoint.mdAndUp?"display-2":"display-1"},[e._t("default")],2)])},o=[],c={name:"CoreHeading",props:{cols:{type:String,default:"12"}}},i=c,s=t("2877"),u=t("6544"),l=t.n(u),d=t("62ad"),f=Object(s["a"])(i,r,o,!1,null,null,null),h=f.exports;l()(f,{VCol:d["a"]});var p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-row",e._b({staticClass:"pa-5 mx-0",staticStyle:{position:"relative"},attrs:{tag:"section"}},"v-row",e.$attrs,!1),[e._t("default")],2)},m=[],b={inheritAttrs:!1},k=b,g=t("0fd9"),v=Object(s["a"])(k,p,m,!1,null,null,null),y=v.exports;l()(v,{VRow:g["a"]});var w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h2",{staticClass:"primary--text title font-weight-light"},[e._t("default")],2)},A=[],C={},x=Object(s["a"])(C,w,A,!1,null,null,null),_=x.exports,S=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"subheading mb-5"},[e._t("default")],2)},O=[],E={},j=Object(s["a"])(E,S,O,!1,null,null,null),T=j.exports;a["a"].component("core-heading",h),a["a"].component("core-section",y),a["a"].component("core-subheading",_),a["a"].component("core-text",T);var D=t("f309"),P=t("a722");a["a"].use(D["a"],{components:{VLayout:P["a"]}});var I=new D["a"]({theme:{dark:!0,themes:{dark:{primary:"#FFAA00",accent:"#FFD277"}}}}),L=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("core-drawer"),t("v-content",{staticClass:"overflow-hidden"},[t("router-view")],1)],1)},z=[],M=(t("d3b7"),{components:{CoreDrawer:function(){return Promise.all([t.e("chunk-4975b195"),t.e("chunk-0ab562fe")]).then(t.bind(null,"41c0"))}}}),B=M,F=(t("034f"),t("7496")),$=t("a75b"),q=Object(s["a"])(B,L,z,!1,null,null,null),V=q.exports;l()(q,{VApp:F["a"],VContent:$["a"]});var N=t("8c4f");a["a"].use(N["a"]);var U=new N["a"]({mode:"history",base:"/aeflorezm/",routes:[{path:"/",name:"Home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))}}]});var W=U,H=(t("a15b"),t("d81d"),t("b0c0"),t("ac1f"),t("1276"),t("a5fe")),J={namespaced:!0,state:{schema:H,initials:H.basics.name.split(" ").map((function(e){return e.charAt(0)})).join("")}},G=t("2f62");a["a"].use(G["a"]);var R=new G["a"].Store({modules:{app:J}});a["a"].config.productionTip=!1,new a["a"]({router:W,store:R,vuetify:I,render:function(e){return e(V)}}).$mount("#app")},"8a23":function(e,n,t){},a5fe:function(e){e.exports=JSON.parse('{"basics":{"name":"Andrés Flórez","label":"Developer","picture":"","email":"andresflorez9707@gmail.com","phone":"+57 3232836464","website":"http://johnsmith.com","summary":"I am a developer engaged in all phases of the software development lifecycle which include: gathering and analyzing user/business system requirements, responding to outages and creating application system models. Participate in design meetings and consult with clients to refine, test and debug programs to meet business needs and interact and sometimes direct third party partners in the achievement of business and technology initiatives. I currently hold the position of Artificial Intelligence Analyst in Work.r, a company focused on artificial intelligence based solutions","location":{"address":"Colombia","city":"Bogotá D.C","countryCode":"CO"},"profiles":[{"network":"LinkedIn","username":"john","url":"https://www.linkedin.com/in/andres-florez-6114411a3/"},{"network":"Github","username":"aeflorezm","url":"https://github.com/aeflorezm"}]},"work":[{"company":"Universidad De Los Andes","position":"Biomedical Engineer","website":"http://company.com","startDate":"2020-01-01","summary":"Professional in biomedical engineering from Universidad De Los Andes with emphasys in development and image processing."},{"company":"Work.r","position":"Developer","website":"https://www.workr.com.co/","startDate":"2019-01-01","summary":"Full stack developer at Work.r,a Business Artificial Intelligence platform with easy-to-adopt solutions that drive revenue growth and improve customer experiences."},{"company":"Tomorrow Tech S.A.S","position":"Gerente","website":"http://company.com","startDate":"2018-01-01","summary":"CEO and co-founder of Tomorrow Tech, a company that specializes in providing solutions based on Artificial Intelligence (AI). Tomorrow\'s solutions today"}],"education":[{"institution":"Universidad De Los Andes","area":"Biomedical Engineering","studyType":"Bachelor","startDate":"2016-01-01","endDate":"2020-01-01","gpa":"3.8","courses":["Medical image processing"]}],"skills":[{"name":"Programming","level":5,"keywords":["HTML & CSS3","Javascript","Vue","React-React native","AWS","Python"]},{"name":"Graphics/Media","level":2,"keywords":["Photoshop","Illustrator","After Effects"]}],"interests":[{"name":"Web Development","keywords":["As a web developer  I have held the following responsibilities: build  websites from concept all the way to completion from the bottom up, write well designed, testable, efficient code by using best software development practices, create website layout/user interface by using standard HTML/CSS practices, integrate data from various back-end services and databases, gather and refine specifications and requirements based on technical needs and create and maintain software documentation"]},{"name":"Mobile Development","keywords":["As a mobile developer I have acquired an skillset in several areas of knowledge, besides the ones in web development. The  highlights of  this are the following:  understand users’ mobile needs (UX), perform detailed quality assurance tests and  monitor the final product in order to identify feedback for potential patches or upgrades needed"]},{"name":"Computer Vision","keywords":["As a Biomedical Engineer I have a broad experience with linear algebra math libraries such OpenCv, TensorFlow and other similar computer vision libraries. My  skills in this area are:  data base management, analytical and critical-thinking,clear reasoning, logical thinking, complex problem solving in an efficient way, hability to analyze results and making accurate conclusions of them."]},{"name":"Cloud computing","keywords":[" Experience designing work flows and processes around mixed skill sets.Industry skills and expertise in client’s businesses.Strong experience in building cloud apps  on Amazon Web Services and asynchronous tasking/queuing technologies "]}]}')}});
//# sourceMappingURL=app.80fb7a57.js.map