import{av as fe,ab as O,p as Pe,aw as qe,C as W,ax as G,ad as ae,s as H,B as J,r as A,c as b,m as Q,g as ee,h as k,T as $e,ay as Se,A as te,q as Ie,az as Te,k as ge,a2 as Ae,ak as Be,a as he,o as _e,at as oe,ap as Ve,aA as Ee,U as C,f as Ne,b as Le,_ as xe,I,J as V,K as $,L as d,W as h,w as ye,Y as De,Z as Qe,X as j,aB as Fe,aC as Me,S as Z,N as re,P as le,O as ie}from"./index.838524fe.js";import{h as ze,y as Oe,z as Ue,o as je,r as Ke,Q as Y,m as se,n as ue}from"./focusout.e2002969.js";import{u as Re,a as We}from"./use-dark.37b40c59.js";import{b as be,Q as we,a as Xe}from"./QCard.69f34520.js";import{u as Ye,Q as Ge}from"./use-meta.9524d97e.js";import{d as ce}from"./api.0f4c46d2.js";import{u as ke}from"./use-quasar.7df73ebe.js";import{Q as X}from"./QImg.9f8771c2.js";import{Q as He,a as Je}from"./QToolbar.7dbb1237.js";const ne={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ze=Object.keys(ne);ne.all=!0;function de(e){const t={};for(const a of Ze)e[a]===!0&&(t[a]=!0);return Object.keys(t).length===0?ne:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const et=["INPUT","TEXTAREA"];function ve(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&et.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function tt(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((a,i)=>{const l=parseFloat(a);l&&(t[i]=l)}),t}var nt=fe({name:"touch-swipe",beforeMount(e,{value:t,arg:a,modifiers:i}){if(i.mouse!==!0&&O.has.touch!==!0)return;const l=i.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:tt(a),direction:de(i),noop:Pe,mouseStart(o){ve(o,n)&&qe(o)&&(W(n,"temp",[[document,"mousemove","move",`notPassive${l}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(o,!0))},touchStart(o){if(ve(o,n)){const u=o.target;W(n,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),n.start(o)}},start(o,u){O.is.firefox===!0&&G(e,!0);const _=ae(o);n.event={x:_.left,y:_.top,time:Date.now(),mouse:u===!0,dir:!1}},move(o){if(n.event===void 0)return;if(n.event.dir!==!1){H(o);return}const u=Date.now()-n.event.time;if(u===0)return;const _=ae(o),s=_.left-n.event.x,c=Math.abs(s),x=_.top-n.event.y,f=Math.abs(x);if(n.event.mouse!==!0){if(c<n.sensitivity[1]&&f<n.sensitivity[1]){n.end(o);return}}else if(window.getSelection().toString()!==""){n.end(o);return}else if(c<n.sensitivity[2]&&f<n.sensitivity[2])return;const w=c/u,S=f/u;n.direction.vertical===!0&&c<f&&c<100&&S>n.sensitivity[0]&&(n.event.dir=x<0?"up":"down"),n.direction.horizontal===!0&&c>f&&f<100&&w>n.sensitivity[0]&&(n.event.dir=s<0?"left":"right"),n.direction.up===!0&&c<f&&x<0&&c<100&&S>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&c<f&&x>0&&c<100&&S>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&c>f&&s<0&&f<100&&w>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&c>f&&s>0&&f<100&&w>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(H(o),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ze(),n.styleCleanup=B=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const g=()=>{document.body.classList.remove("no-pointer-events--children")};B===!0?setTimeout(g,50):g()}),n.handler({evt:o,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:u,distance:{x:c,y:f}})):n.end(o)},end(o){n.event!==void 0&&(J(n,"temp"),O.is.firefox===!0&&G(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),o!==void 0&&n.event.dir!==!1&&H(o),n.event=void 0)}};if(e.__qtouchswipe=n,i.mouse===!0){const o=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";W(n,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}O.has.touch===!0&&W(n,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const a=e.__qtouchswipe;a!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&a.end(),a.handler=t.value),a.direction=de(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(J(t,"main"),J(t,"temp"),O.is.firefox===!0&&G(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function at(){const e=new Map;return{getCache:function(t,a){return e[t]===void 0?e[t]=a:e[t]},getCacheWithFn:function(t,a){return e[t]===void 0?e[t]=a():e[t]}}}const ot={name:{required:!0},disable:Boolean},pe={setup(e,{slots:t}){return()=>k("div",{class:"q-panel scroll",role:"tabpanel"},te(t.default))}},rt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},lt=["update:modelValue","beforeTransition","transition"];function it(){const{props:e,emit:t,proxy:a}=ee(),{getCacheWithFn:i}=at();let l,n;const o=A(null),u=A(null);function _(r){const m=e.vertical===!0?"up":"left";T((a.$q.lang.rtl===!0?-1:1)*(r.direction===m?1:-1))}const s=b(()=>[[nt,_,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),c=b(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),x=b(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),f=b(()=>`--q-transition-duration: ${e.transitionDuration}ms`),w=b(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),S=b(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),B=b(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Q(()=>e.modelValue,(r,m)=>{const q=P(r)===!0?L(r):-1;n!==!0&&D(q===-1?0:q<L(m)?-1:1),o.value!==q&&(o.value=q,t("beforeTransition",r,m),Ie(()=>{t("transition",r,m)}))});function g(){T(1)}function v(){T(-1)}function p(r){t("update:modelValue",r)}function P(r){return r!=null&&r!==""}function L(r){return l.findIndex(m=>m.props.name===r&&m.props.disable!==""&&m.props.disable!==!0)}function K(){return l.filter(r=>r.props.disable!==""&&r.props.disable!==!0)}function D(r){const m=r!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(r===-1?c.value:x.value):null;u.value!==m&&(u.value=m)}function T(r,m=o.value){let q=m+r;for(;q>-1&&q<l.length;){const N=l[q];if(N!==void 0&&N.props.disable!==""&&N.props.disable!==!0){D(r),n=!0,t("update:modelValue",N.props.name),setTimeout(()=>{n=!1});return}q+=r}e.infinite===!0&&l.length!==0&&m!==-1&&m!==l.length&&T(r,r===-1?l.length:-1)}function M(){const r=L(e.modelValue);return o.value!==r&&(o.value=r),!0}function R(){const r=P(e.modelValue)===!0&&M()&&l[o.value];return e.keepAlive===!0?[k(Te,S.value,[k(B.value===!0?i(w.value,()=>({...pe,name:w.value})):pe,{key:w.value,style:f.value},()=>r)])]:[k("div",{class:"q-panel scroll",style:f.value,key:w.value,role:"tabpanel"},[r])]}function y(){if(l.length!==0)return e.animated===!0?[k($e,{name:u.value},R)]:R()}function E(r){return l=Se(te(r.default,[])).filter(m=>m.props!==null&&m.props.slot===void 0&&P(m.props.name)===!0),l.length}function z(){return l}return Object.assign(a,{next:g,previous:v,goTo:p}),{panelIndex:o,panelDirectives:s,updatePanelsList:E,updatePanelIndex:M,getPanelContent:y,getEnabledPanels:K,getPanels:z,isValidPanelName:P,keepAliveProps:S,needsUniqueKeepAliveWrapper:B,goToPanelByOffset:T,goToPanel:p,nextPanel:g,previousPanel:v}}var st=ge({name:"QCarouselSlide",props:{...ot,imgSrc:String},setup(e,{slots:t}){const a=b(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>k("div",{class:"q-carousel__slide",style:a.value},te(t.default))}});let U=0;const ut={fullscreen:Boolean,noRouteFullscreenExit:Boolean},ct=["update:fullscreen","fullscreen"];function dt(){const e=ee(),{props:t,emit:a,proxy:i}=e;let l,n,o;const u=A(!1);Ae(e)===!0&&Q(()=>i.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&c()}),Q(()=>t.fullscreen,x=>{u.value!==x&&_()}),Q(u,x=>{a("update:fullscreen",x),a("fullscreen",x)});function _(){u.value===!0?c():s()}function s(){u.value!==!0&&(u.value=!0,o=i.$el.parentNode,o.replaceChild(n,i.$el),document.body.appendChild(i.$el),U++,U===1&&document.body.classList.add("q-body--fullscreen-mixin"),l={handler:c},oe.add(l))}function c(){u.value===!0&&(l!==void 0&&(oe.remove(l),l=void 0),o.replaceChild(i.$el,n),u.value=!1,U=Math.max(0,U-1),U===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),i.$el.scrollIntoView!==void 0&&setTimeout(()=>{i.$el.scrollIntoView()})))}return Be(()=>{n=document.createElement("span")}),he(()=>{t.fullscreen===!0&&s()}),_e(c),Object.assign(i,{toggleFullscreen:_,setFullscreen:s,exitFullscreen:c}),{inFullscreen:u,toggleFullscreen:_}}const vt=["top","right","bottom","left"],pt=["regular","flat","outline","push","unelevated"];var mt=ge({name:"QCarousel",props:{...Re,...rt,...ut,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>pt.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>vt.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...ct,...lt],setup(e,{slots:t}){const{proxy:{$q:a}}=ee(),i=We(e,a);let l=null,n;const{updatePanelsList:o,getPanelContent:u,panelDirectives:_,goToPanel:s,previousPanel:c,nextPanel:x,getEnabledPanels:f,panelIndex:w}=it(),{inFullscreen:S}=dt(),B=b(()=>S.value!==!0&&e.height!==void 0?{height:e.height}:{}),g=b(()=>e.vertical===!0?"vertical":"horizontal"),v=b(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(S.value===!0?" fullscreen":"")+(i.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${g.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${K.value}`:"")),p=b(()=>{const y=[e.prevIcon||a.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||a.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&a.lang.rtl===!0?y.reverse():y}),P=b(()=>e.navigationIcon||a.iconSet.carousel.navigationIcon),L=b(()=>e.navigationActiveIcon||P.value),K=b(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),D=b(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));Q(()=>e.modelValue,()=>{e.autoplay&&T()}),Q(()=>e.autoplay,y=>{y?T():l!==null&&(clearTimeout(l),l=null)});function T(){const y=Ee(e.autoplay)===!0?Math.abs(e.autoplay):5e3;l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,y>=0?x():c()},y)}he(()=>{e.autoplay&&T()}),_e(()=>{l!==null&&clearTimeout(l)});function M(y,E){return k("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${y} q-carousel__navigation--${K.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[k("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},f().map(E))])}function R(){const y=[];if(e.navigation===!0){const E=t["navigation-icon"]!==void 0?t["navigation-icon"]:r=>k(C,{key:"nav"+r.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${r.active===!0?"":"in"}active`,...r.btnProps,onClick:r.onClick}),z=n-1;y.push(M("buttons",(r,m)=>{const q=r.props.name,N=w.value===m;return E({index:m,maxIndex:z,name:q,active:N,btnProps:{icon:N===!0?L.value:P.value,size:"sm",...D.value},onClick:()=>{s(q)}})}))}else if(e.thumbnails===!0){const E=e.controlColor!==void 0?` text-${e.controlColor}`:"";y.push(M("thumbnails",z=>{const r=z.props;return k("img",{key:"tmb#"+r.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${r.name===e.modelValue?"":"in"}active`+E,src:r.imgSrc||r["img-src"],onClick:()=>{s(r.name)}})}))}return e.arrows===!0&&w.value>=0&&((e.infinite===!0||w.value>0)&&y.push(k("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${g.value} absolute flex flex-center`},[k(C,{icon:p.value[0],...D.value,onClick:c})])),(e.infinite===!0||w.value<n-1)&&y.push(k("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${g.value} absolute flex flex-center`},[k(C,{icon:p.value[1],...D.value,onClick:x})]))),Ne(t.control,y)}return()=>(n=o(t),k("div",{class:v.value,style:B.value},[Ve("div",{class:"q-carousel__slides-container"},u(),"sl-cont",e.swipeable,()=>_.value)].concat(R())))}});function me(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var Ce=fe({name:"close-popup",beforeMount(e,{value:t}){const a={depth:me(t),handler(i){a.depth!==0&&setTimeout(()=>{const l=Oe(e);l!==void 0&&Ue(l,i,a.depth)})},handlerKey(i){Le(i,13)===!0&&a.handler(i)}};e.__qclosepopup=a,e.addEventListener("click",a.handler),e.addEventListener("keyup",a.handlerKey)},updated(e,{value:t,oldValue:a}){t!==a&&(e.__qclosepopup.depth=me(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});function ft(e){const t=document.createElement("textarea");t.value=e,t.contentEditable="true",t.style.position="fixed";const a=()=>{};je(a),document.body.appendChild(t),t.focus(),t.select();const i=document.execCommand("copy");return t.remove(),Ke(a),i}function gt(e){return navigator.clipboard!==void 0?navigator.clipboard.writeText(e):new Promise((t,a)=>{const i=ft(e);i?t(!0):a(i)})}const F=e=>(De("data-v-5f9d5848"),e=e(),Qe(),e),ht={class:"flex items-center q-px-md q-py-sm"},_t=F(()=>h("span",null," \u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441\u0441\u044B\u043B\u043A\u043E\u0439 ",-1)),xt=F(()=>h("span",{class:"text-caption text-grey q-mt-xs"}," Telegram ",-1)),yt=F(()=>h("span",{class:"text-caption text-grey q-mt-xs"}," VK ",-1)),bt=F(()=>h("span",{class:"text-caption text-grey q-mt-xs"}," Whatsapp ",-1)),wt=F(()=>h("span",{class:"q-mb-sm"}," \u0418\u043B\u0438 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 ",-1)),kt=F(()=>h("div",{class:"q-pa-md"},null,-1)),Ct={__name:"SharePopup",props:{card:Object},setup(e){const t=e,a=ke(),i=n=>{gt(n).then(()=>{a.notify({color:"positive",message:"\u0421\u0441\u044B\u043B\u043A\u0430 \u0431\u044B\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430!"})}).catch(()=>{a.notify({color:"negative",message:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443"})})},l=n=>{let o=`https://vk.com/share.php?url=${window.location}&title=${t.card.title}&image=https://${window.location.hostname}/icons/favicon-32x32.png`,u=`https://t.me/share/url?url=${window.location}&text=${t.card.title}`,_=`https://wa.me/?text=${t.card.title} - ${window.location}`,s;n==="vk"&&(s=o),n==="telegram"&&(s=u),n==="whatsApp"&&(s=_),window.open(s,"_blank")};return(n,o)=>(I(),V(we,null,{default:$(()=>[d(be,{class:"bg-menu text-white rounded-borders"},{default:$(()=>[h("div",ht,[_t,d(Y),ye(d(C,{flat:"",dense:"",padding:"6px",icon:"eva-close",round:""},null,512),[[Ce]])]),d(He,{separator:""},{default:$(()=>[d(se,null,{default:$(()=>[d(ue,{class:"justify-between q-py-md row-direction"},{default:$(()=>[h("div",{onClick:o[0]||(o[0]=u=>l("telegram")),class:"column items-center round-shadow"},[d(X,{src:"/svg/tg.svg",width:"24px"}),xt]),h("div",{onClick:o[1]||(o[1]=u=>l("vk")),class:"column items-center round-shadow"},[d(X,{width:"24px",src:"/svg/vk.svg"}),yt]),h("div",{onClick:o[2]||(o[2]=u=>l("whatsApp")),class:"column items-center round-shadow"},[d(X,{src:"/svg/whatsapp.svg",width:"24px"}),bt])]),_:1})]),_:1}),d(se,null,{default:$(()=>[d(ue,null,{default:$(()=>[wt,d(C,{"no-caps":"",align:"left",padding:"8px 12px",color:"primary",onClick:o[3]||(o[3]=u=>i(n.$route.fullPath)),icon:"eva-copy-outline",label:n.$route.fullPath},null,8,["label"])]),_:1})]),_:1})]),_:1}),kt]),_:1})]),_:1}))}};var Pt=xe(Ct,[["__scopeId","data-v-5f9d5848"]]);const qt={class:"q-mr-md"},$t={__name:"ImagesPreviewPopup",props:{card:Object,carousel:Number},setup(e){const t=e,a=A({currentIndex:1,total:0,image:""}),i=n=>{let o;n==="prev"?o=-1:o=1,a.value.total===a.value.currentIndex&&n==="next"?a.value.currentIndex=1:a.value.currentIndex===1&&n==="prev"?a.value.currentIndex=a.value.total:a.value.currentIndex+=o,a.value.image=t.card.images[a.value.currentIndex-1]},l=()=>{a.value={currentIndex:t.carousel+1,total:t.card.images.length,image:t.card.images[t.carousel]}};return(n,o)=>(I(),V(we,{onShow:l,"transition-show":"fade","transition-hide":"fade","full-width":"","full-height":""},{default:$(()=>[d(be,{class:"fullscreen bg-black"},{default:$(()=>[d(Je,null,{default:$(()=>[h("span",qt,j(a.value.currentIndex)+"/"+j(a.value.total),1),d(C,{flat:"",dense:"",padding:"6px",onClick:o[0]||(o[0]=u=>i("prev")),icon:"eva-arrow-left-outline"}),d(C,{flat:"",dense:"",padding:"6px",onClick:o[1]||(o[1]=u=>i("next")),"icon-right":"eva-arrow-right-outline"}),d(Y),ye(d(C,{flat:"",dense:"",padding:"6px",icon:"eva-close"},null,512),[[Ce]])]),_:1}),d(X,{class:"full-width",src:a.value.image,fit:"contain"},null,8,["src"])]),_:1})]),_:1}))}};var St=xe($t,[["__scopeId","data-v-88a1ae58"]]);const It={class:"hidden"},Tt={class:"container"},At={class:"flex items-center q-my-lg no-wrap"},Bt={class:"column"},Vt={class:"text-h5"},Et={class:"q-mt-lg text-grey"},Nt={class:"q-gutter-sm flex reverse-wrap"},Lt={class:"flex q-mt-md"},Rt={__name:"DetailPage",setup(e){const t=ke(),a=Fe(),i=Me(),l=ce,n=A(0),o=A(!1),u=A(!1),_=A(1),s=A({images:[],id:0,description:"",title:""}),c=g=>{let v;return g==="prev"?v=-1:v=1,!l.find(p=>p.id===s.value.id+v)},x=g=>{let v;g==="prev"?v=-1:v=1;let p=l.find(P=>P.id===s.value.id+v);p&&i.push(`/project/${p.slug}`)},f=b(()=>(w(a.params.id),a.params.id)),w=g=>{s.value=ce.find(v=>v.slug===g)},S=g=>{_.value=g,u.value=!0},B=()=>{let g={url:window.location.href,text:s.value.description,title:s.value.title};try{t.screen.width<500?navigator.share(g):o.value=!0}catch{o.value=!0}};return Ye(()=>({title:`\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0444\u0440\u043E\u043D\u0442-\u0435\u043D\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 - \u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u041A\u0443\u0440\u043A\u0438\u043D\u0430 | ${s.value.title}`,meta:{description:{name:"description",content:s.value.description}}})),(g,v)=>(I(),V(Ge,{class:"q-pa-lg bg-dark text-white"},{default:$(()=>[d(Pt,{modelValue:o.value,"onUpdate:modelValue":v[0]||(v[0]=p=>o.value=p),card:s.value},null,8,["modelValue","card"]),d(St,{modelValue:u.value,"onUpdate:modelValue":v[1]||(v[1]=p=>u.value=p),card:s.value,carousel:_.value},null,8,["modelValue","card","carousel"]),h("span",It,j(f.value),1),h("div",Tt,[h("div",At,[h("div",Bt,[h("h5",Vt,j(s.value.title),1),s.value.linkToSite?(I(),V(C,{key:0,href:s.value.linkToSite,target:"_blank",label:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u0441\u0430\u0439\u0442","no-caps":"","no-wrap":"",color:"primary",class:"q-mt-md"},null,8,["href"])):Z("",!0),s.value.linkToGit?(I(),V(C,{key:1,href:s.value.linkToGit,target:"_blank",label:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0439","no-caps":"","no-wrap":"",color:"primary",class:"q-mt-md"},null,8,["href"])):Z("",!0),s.value.linkToFigma?(I(),V(C,{key:2,href:s.value.linkToFigma,target:"_blank",label:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 Figma","no-caps":"","no-wrap":"",color:"primary",class:"q-mt-md"},null,8,["href"])):Z("",!0)]),d(Y),d(C,{round:"",dark:"",color:"primary",dense:"",onClick:B,icon:"eva-share-outline"})]),d(mt,{swipeable:"","transition-prev":"slide-right","transition-next":"slide-left",animated:"",modelValue:n.value,"onUpdate:modelValue":v[2]||(v[2]=p=>n.value=p),thumbnails:"",infinite:""},{default:$(()=>[(I(!0),re(ie,null,le(s.value.images,(p,P)=>(I(),V(st,{key:P,name:P,"img-src":p,onClick:L=>S(P)},null,8,["name","img-src","onClick"]))),128))]),_:1},8,["modelValue"]),h("p",Et,j(s.value.description),1),h("div",Nt,[(I(!0),re(ie,null,le(s.value.badges,p=>(I(),V(Xe,{key:p,rounded:"",label:p},null,8,["label"]))),128))]),h("div",Lt,[d(C,{disable:c("prev"),color:"primary","no-caps":"",onClick:v[3]||(v[3]=p=>x("prev")),label:"\u041D\u0430\u0437\u0430\u0434",icon:"eva-arrow-left-outline"},null,8,["disable"]),d(Y),d(C,{disable:c("next"),color:"primary","no-caps":"",onClick:v[4]||(v[4]=p=>x("next")),label:"\u0414\u0430\u043B\u0435\u0435","icon-right":"eva-arrow-right-outline"},null,8,["disable"])])])]),_:1}))}};export{Rt as default};
