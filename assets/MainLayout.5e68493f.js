import{Q as Ve}from"./QImg.9f8771c2.js";import{i as $e,e as N,r as k,c as g,o as Y,a as se,t as lt,w as wt,R as Tt,h as _,s as Le,b as _t,d as St,Q as ue,f as ze,g as J,j as Ct,k as Z,u as kt,l as xt,m as E,n as Ie,p as ot,q as Fe,v as Pe,x as Qe,y as pt,z as qt,A as Be,B as We,C as je,T as Lt,D as Ee,E as Pt,F as ge,G as Rt,_ as $t,H as Ne,I as X,J as Ce,K as q,L as T,M as Ke,N as oe,O as ie,P as be,S as zt,U as Ue,V as ke,W as F,X as re,Y as It,Z as Qt}from"./index.838524fe.js";import{u as Bt,r as Et,a as Mt,v as Ge,b as At,c as Ot,d as Ht,e as Xe,s as Dt,p as Ye,f as Vt,Q as Ft}from"./QMenu.820b54b3.js";import{u as me,a as Re,b as Wt,c as jt,d as Nt,e as Kt,f as Ut,g as Gt,h as Je,i as it,j as Xt,k as Yt,l as xe,Q as pe,m as qe,n as Ze}from"./focusout.e2002969.js";import{Q as Jt,a as et}from"./QToolbar.7dbb1237.js";import"./use-dark.37b40c59.js";let Zt=0;const en=["click","keydown"],tn={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Zt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function nn(e,x,i,a){const t=$e(lt,N);if(t===N)return console.error("QTab/QRouteTab component needs to be child of QTabs"),N;const{proxy:u}=J(),b=k(null),s=k(null),f=k(null),d=g(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),p=g(()=>t.currentModel.value===e.name),$=g(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(p.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(a!==void 0?a.linkClass.value:"")),z=g(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),y=g(()=>e.disable===!0||t.hasFocus.value===!0||p.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function R(c,r){if(r!==!0&&b.value!==null&&b.value.focus(),e.disable===!0){a!==void 0&&a.hasRouterLink.value===!0&&Le(c);return}if(a===void 0){t.updateModel({name:e.name}),i("click",c);return}if(a.hasRouterLink.value===!0){const l=(v={})=>{let C;const B=v.to===void 0||Ct(v.to,e.to)===!0?t.avoidRouteWatcher=Bt():null;return a.navigateToRouterLink(c,{...v,returnRouterError:!0}).catch(O=>{C=O}).then(O=>{if(B===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,C===void 0&&(O===void 0||O.message.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),v.returnRouterError===!0)return C!==void 0?Promise.reject(C):O})};i("click",c,l),c.defaultPrevented!==!0&&l();return}i("click",c)}function S(c){_t(c,[13,32])?R(c,!0):St(c)!==!0&&c.keyCode>=35&&c.keyCode<=40&&c.altKey!==!0&&c.metaKey!==!0&&t.onKbdNavigate(c.keyCode,u.$el)===!0&&Le(c),i("keydown",c)}function Q(){const c=t.tabProps.value.narrowIndicator,r=[],l=_("div",{ref:f,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&r.push(_(ue,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&r.push(_("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&r.push(e.alertIcon!==void 0?_(ue,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):_("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),c===!0&&r.push(l);const v=[_("div",{class:"q-focus-helper",tabindex:-1,ref:b}),_("div",{class:z.value},ze(x.default,r))];return c===!1&&v.push(l),v}const H={name:g(()=>e.name),rootRef:s,tabIndicatorRef:f,routeData:a};Y(()=>{t.unregisterTab(H)}),se(()=>{t.registerTab(H)});function A(c,r){const l={ref:s,class:$.value,tabindex:y.value,role:"tab","aria-selected":p.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:R,onKeydown:S,...r};return wt(_(c,l,Q()),[[Tt,d.value]])}return{renderTab:A,$tabs:t}}var an=Z({name:"QRouteTab",props:{...kt,...tn},emits:en,setup(e,{slots:x,emit:i}){const a=xt({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:u}=nn(e,x,i,{exact:g(()=>e.exact),...a});return E(()=>`${e.name} | ${e.exact} | ${(a.resolvedLink.value||{}).href}`,()=>{u.verifyRouteModel()}),()=>t(a.linkTag.value,a.linkAttrs.value)}});function ln(){const e=k(!Ie.value);return e.value===!1&&se(()=>{e.value=!0}),e}const rt=typeof ResizeObserver!="undefined",tt=rt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ye=Z({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:x}){let i=null,a,t={width:-1,height:-1};function u(f){f===!0||e.debounce===0||e.debounce==="0"?b():i===null&&(i=setTimeout(b,e.debounce))}function b(){if(i!==null&&(clearTimeout(i),i=null),a){const{offsetWidth:f,offsetHeight:d}=a;(f!==t.width||d!==t.height)&&(t={width:f,height:d},x("resize",t))}}const{proxy:s}=J();if(rt===!0){let f;const d=p=>{a=s.$el.parentNode,a?(f=new ResizeObserver(u),f.observe(a),b()):p!==!0&&Fe(()=>{d(!0)})};return se(()=>{d()}),Y(()=>{i!==null&&clearTimeout(i),f!==void 0&&(f.disconnect!==void 0?f.disconnect():a&&f.unobserve(a))}),ot}else{let p=function(){i!==null&&(clearTimeout(i),i=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",u,Pe.passive),d=void 0)},$=function(){p(),a&&a.contentDocument&&(d=a.contentDocument.defaultView,d.addEventListener("resize",u,Pe.passive),b())};const f=ln();let d;return se(()=>{Fe(()=>{a=s.$el,a&&$()})}),Y(p),s.trigger=u,()=>{if(f.value===!0)return _("object",{style:tt.style,tabindex:-1,type:"text/html",data:tt.url,"aria-hidden":"true",onLoad:$})}}}});function on(e,x,i){const a=i===!0?["left","right"]:["top","bottom"];return`absolute-${x===!0?a[0]:a[1]}${e?` text-${e}`:""}`}const rn=["left","center","right","justify"];var nt=Z({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>rn.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:x,emit:i}){const{proxy:a}=J(),{$q:t}=a,{registerTick:u}=me(),{registerTick:b}=me(),{registerTick:s}=me(),{registerTimeout:f,removeTimeout:d}=Re(),{registerTimeout:p,removeTimeout:$}=Re(),z=k(null),y=k(null),R=k(e.modelValue),S=k(!1),Q=k(!0),H=k(!1),A=k(!1),c=[],r=k(0),l=k(!1);let v=null,C=null,B;const O=g(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:on(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),ce=g(()=>{const n=r.value,o=R.value;for(let h=0;h<n;h++)if(c[h].name.value===o)return!0;return!1}),de=g(()=>`q-tabs__content--align-${S.value===!0?"left":A.value===!0?"justify":e.align}`),we=g(()=>`q-tabs row no-wrap items-center q-tabs--${S.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Te=g(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+de.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),te=g(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ee=g(()=>e.vertical!==!0&&t.lang.rtl===!0),W=g(()=>Et===!1&&ee.value===!0);E(ee,U),E(()=>e.modelValue,n=>{le({name:n,setCurrent:!0,skipEmit:!0})}),E(()=>e.outsideArrows,ne);function le({name:n,setCurrent:o,skipEmit:h}){R.value!==n&&(h!==!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",n),(o===!0||e["onUpdate:modelValue"]===void 0)&&(ve(R.value,n),R.value=n))}function ne(){u(()=>{fe({width:z.value.offsetWidth,height:z.value.offsetHeight})})}function fe(n){if(te.value===void 0||y.value===null)return;const o=n[te.value.container],h=Math.min(y.value[te.value.scroll],Array.prototype.reduce.call(y.value.children,(P,w)=>P+(w[te.value.content]||0),0)),L=o>0&&h>o;S.value=L,L===!0&&b(U),A.value=o<parseInt(e.breakpoint,10)}function ve(n,o){const h=n!=null&&n!==""?c.find(P=>P.name.value===n):null,L=o!=null&&o!==""?c.find(P=>P.name.value===o):null;if(h&&L){const P=h.tabIndicatorRef.value,w=L.tabIndicatorRef.value;v!==null&&(clearTimeout(v),v=null),P.style.transition="none",P.style.transform="none",w.style.transition="none",w.style.transform="none";const m=P.getBoundingClientRect(),M=w.getBoundingClientRect();w.style.transform=e.vertical===!0?`translate3d(0,${m.top-M.top}px,0) scale3d(1,${M.height?m.height/M.height:1},1)`:`translate3d(${m.left-M.left}px,0,0) scale3d(${M.width?m.width/M.width:1},1,1)`,s(()=>{v=setTimeout(()=>{v=null,w.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",w.style.transform="none"},70)})}L&&S.value===!0&&K(L.rootRef.value)}function K(n){const{left:o,width:h,top:L,height:P}=y.value.getBoundingClientRect(),w=n.getBoundingClientRect();let m=e.vertical===!0?w.top-L:w.left-o;if(m<0){y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(m),U();return}m+=e.vertical===!0?w.height-P:w.width-h,m>0&&(y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(m),U())}function U(){const n=y.value;if(n===null)return;const o=n.getBoundingClientRect(),h=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);ee.value===!0?(Q.value=Math.ceil(h+o.width)<n.scrollWidth-1,H.value=h>0):(Q.value=h>0,H.value=e.vertical===!0?Math.ceil(h+o.height)<n.scrollHeight:Math.ceil(h+o.width)<n.scrollWidth)}function I(n){C!==null&&clearInterval(C),C=setInterval(()=>{dt(n)===!0&&D()},5)}function ae(){I(W.value===!0?Number.MAX_SAFE_INTEGER:0)}function V(){I(W.value===!0?0:Number.MAX_SAFE_INTEGER)}function D(){C!==null&&(clearInterval(C),C=null)}function ut(n,o){const h=Array.prototype.filter.call(y.value.children,M=>M===o||M.matches&&M.matches(".q-tab.q-focusable")===!0),L=h.length;if(L===0)return;if(n===36)return K(h[0]),h[0].focus(),!0;if(n===35)return K(h[L-1]),h[L-1].focus(),!0;const P=n===(e.vertical===!0?38:37),w=n===(e.vertical===!0?40:39),m=P===!0?-1:w===!0?1:void 0;if(m!==void 0){const M=ee.value===!0?-1:1,j=h.indexOf(o)+m*M;return j>=0&&j<L&&(K(h[j]),h[j].focus({preventScroll:!0})),!0}}const ct=g(()=>W.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,o)=>{n.scrollLeft=-o}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,o)=>{n.scrollTop=o}}:{get:n=>n.scrollLeft,set:(n,o)=>{n.scrollLeft=o}});function dt(n){const o=y.value,{get:h,set:L}=ct.value;let P=!1,w=h(o);const m=n<w?-1:1;return w+=m*5,w<0?(P=!0,w=0):(m===-1&&w<=n||m===1&&w>=n)&&(P=!0,w=n),L(o,w),U(),P}function Me(n,o){for(const h in n)if(n[h]!==o[h])return!1;return!0}function ft(){let n=null,o={matchedLen:0,queryDiff:9999,hrefLen:0};const h=c.filter(m=>m.routeData!==void 0&&m.routeData.hasRouterLink.value===!0),{hash:L,query:P}=a.$route,w=Object.keys(P).length;for(const m of h){const M=m.routeData.exact.value===!0;if(m.routeData[M===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:j,query:_e,matched:mt,href:yt}=m.routeData.resolvedLink.value,Se=Object.keys(_e).length;if(M===!0){if(j!==L||Se!==w||Me(P,_e)===!1)continue;n=m.name.value;break}if(j!==""&&j!==L||Se!==0&&Me(_e,P)===!1)continue;const G={matchedLen:mt.length,queryDiff:w-Se,hrefLen:yt.length-j.length};if(G.matchedLen>o.matchedLen){n=m.name.value,o=G;continue}else if(G.matchedLen!==o.matchedLen)continue;if(G.queryDiff<o.queryDiff)n=m.name.value,o=G;else if(G.queryDiff!==o.queryDiff)continue;G.hrefLen>o.hrefLen&&(n=m.name.value,o=G)}n===null&&c.some(m=>m.routeData===void 0&&m.name.value===R.value)===!0||le({name:n,setCurrent:!0})}function vt(n){if(d(),l.value!==!0&&z.value!==null&&n.target&&typeof n.target.closest=="function"){const o=n.target.closest(".q-tab");o&&z.value.contains(o)===!0&&(l.value=!0,S.value===!0&&K(o))}}function ht(){f(()=>{l.value=!1},30)}function he(){Oe.avoidRouteWatcher===!1?p(ft):$()}function Ae(){if(B===void 0){const n=E(()=>a.$route.fullPath,he);B=()=>{n(),B=void 0}}}function gt(n){c.push(n),r.value++,ne(),n.routeData===void 0||a.$route===void 0?p(()=>{if(S.value===!0){const o=R.value,h=o!=null&&o!==""?c.find(L=>L.name.value===o):null;h&&K(h.rootRef.value)}}):(Ae(),n.routeData.hasRouterLink.value===!0&&he())}function bt(n){c.splice(c.indexOf(n),1),r.value--,ne(),B!==void 0&&n.routeData!==void 0&&(c.every(o=>o.routeData===void 0)===!0&&B(),he())}const Oe={currentModel:R,tabProps:O,hasFocus:l,hasActiveTab:ce,registerTab:gt,unregisterTab:bt,verifyRouteModel:he,updateModel:le,onKbdNavigate:ut,avoidRouteWatcher:!1};Qe(lt,Oe);function He(){v!==null&&clearTimeout(v),D(),B!==void 0&&B()}let De;return Y(He),pt(()=>{De=B!==void 0,He()}),qt(()=>{De===!0&&Ae(),ne()}),()=>_("div",{ref:z,class:we.value,role:"tablist",onFocusin:vt,onFocusout:ht},[_(ye,{onResize:fe}),_("div",{ref:y,class:Te.value,onScroll:U},Be(x.default)),_(ue,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(Q.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ae,onTouchstartPassive:ae,onMouseupPassive:D,onMouseleavePassive:D,onTouchendPassive:D}),_(ue,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(H.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:V,onTouchstartPassive:V,onMouseupPassive:D,onMouseleavePassive:D,onTouchendPassive:D})])}}),sn=Z({name:"QTooltip",inheritAttrs:!1,props:{...Mt,...Wt,...jt,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Ge},self:{type:String,default:"top middle",validator:Ge},offset:{type:Array,default:()=>[14,14],validator:At},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Nt],setup(e,{slots:x,emit:i,attrs:a}){let t,u;const b=J(),{proxy:{$q:s}}=b,f=k(null),d=k(!1),p=g(()=>Ye(e.anchor,s.lang.rtl)),$=g(()=>Ye(e.self,s.lang.rtl)),z=g(()=>e.persistent!==!0),{registerTick:y,removeTick:R}=me(),{registerTimeout:S}=Re(),{transitionProps:Q,transitionStyle:H}=Kt(e),{localScrollTarget:A,changeScrollEvent:c,unconfigureScrollTarget:r}=Ot(e,ve),{anchorEl:l,canShow:v,anchorEvents:C}=Ht({showing:d,configureAnchorEl:fe}),{show:B,hide:O}=Ut({showing:d,canShow:v,handleShow:Te,handleHide:te,hideOnRouteChange:z,processOnMount:!0});Object.assign(C,{delayShow:le,delayHide:ne});const{showPortal:ce,hidePortal:de,renderPortal:we}=Gt(b,f,U,"tooltip");if(s.platform.is.mobile===!0){const I={anchorEl:l,innerRef:f,onClickOutside(V){return O(V),V.target.classList.contains("q-dialog__backdrop")&&Le(V),!0}},ae=g(()=>e.modelValue===null&&e.persistent!==!0&&d.value===!0);E(ae,V=>{(V===!0?Vt:Xe)(I)}),Y(()=>{Xe(I)})}function Te(I){ce(),y(()=>{u=new MutationObserver(()=>W()),u.observe(f.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),W(),ve()}),t===void 0&&(t=E(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,W)),S(()=>{ce(!0),i("show",I)},e.transitionDuration)}function te(I){R(),de(),ee(),S(()=>{de(!0),i("hide",I)},e.transitionDuration)}function ee(){u!==void 0&&(u.disconnect(),u=void 0),t!==void 0&&(t(),t=void 0),r(),We(C,"tooltipTemp")}function W(){Dt({targetEl:f.value,offset:e.offset,anchorEl:l.value,anchorOrigin:p.value,selfOrigin:$.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function le(I){if(s.platform.is.mobile===!0){Je(),document.body.classList.add("non-selectable");const ae=l.value,V=["touchmove","touchcancel","touchend","click"].map(D=>[ae,D,"delayHide","passiveCapture"]);je(C,"tooltipTemp",V)}S(()=>{B(I)},e.delay)}function ne(I){s.platform.is.mobile===!0&&(We(C,"tooltipTemp"),Je(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),S(()=>{O(I)},e.hideDelay)}function fe(){if(e.noParentEvent===!0||l.value===null)return;const I=s.platform.is.mobile===!0?[[l.value,"touchstart","delayShow","passive"]]:[[l.value,"mouseenter","delayShow","passive"],[l.value,"mouseleave","delayHide","passive"]];je(C,"anchor",I)}function ve(){if(l.value!==null||e.scrollTarget!==void 0){A.value=it(l.value,e.scrollTarget);const I=e.noParentEvent===!0?W:O;c(A.value,I)}}function K(){return d.value===!0?_("div",{...a,ref:f,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",a.class],style:[a.style,H.value],role:"tooltip"},Be(x.default)):null}function U(){return _(Lt,Q.value,K)}return Y(ee),Object.assign(b.proxy,{updatePosition:W}),we}}),un=Z({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:x,emit:i}){const{proxy:{$q:a}}=J(),t=$e(Ee,N);if(t===N)return console.error("QFooter needs to be child of QLayout"),N;const u=k(parseInt(e.heightHint,10)),b=k(!0),s=k(Ie.value===!0||t.isContainer.value===!0?0:window.innerHeight),f=g(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||a.platform.is.ios&&t.isContainer.value===!0),d=g(()=>t.isContainer.value===!0?t.containerHeight.value:s.value),p=g(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return b.value===!0?u.value:0;const l=t.scroll.value.position+d.value+u.value-t.height.value;return l>0?l:0}),$=g(()=>e.modelValue!==!0||f.value===!0&&b.value!==!0),z=g(()=>e.modelValue===!0&&$.value===!0&&e.reveal===!0),y=g(()=>"q-footer q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+($.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(f.value!==!0?" hidden":""):"")),R=g(()=>{const l=t.rows.value.bottom,v={};return l[0]==="l"&&t.left.space===!0&&(v[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),l[2]==="r"&&t.right.space===!0&&(v[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),v});function S(l,v){t.update("footer",l,v)}function Q(l,v){l.value!==v&&(l.value=v)}function H({height:l}){Q(u,l),S("size",l)}function A(){if(e.reveal!==!0)return;const{direction:l,position:v,inflectionPoint:C}=t.scroll.value;Q(b,l==="up"||v-C<100||t.height.value-d.value-v-u.value<300)}function c(l){z.value===!0&&Q(b,!0),i("focusin",l)}E(()=>e.modelValue,l=>{S("space",l),Q(b,!0),t.animate()}),E(p,l=>{S("offset",l)}),E(()=>e.reveal,l=>{l===!1&&Q(b,e.modelValue)}),E(b,l=>{t.animate(),i("reveal",l)}),E([u,t.scroll,t.height],A),E(()=>a.screen.height,l=>{t.isContainer.value!==!0&&Q(s,l)});const r={};return t.instances.footer=r,e.modelValue===!0&&S("size",u.value),S("space",e.modelValue),S("offset",p.value),Y(()=>{t.instances.footer===r&&(t.instances.footer=void 0,S("size",0),S("offset",0),S("space",!1))}),()=>{const l=ze(x.default,[_(ye,{debounce:0,onResize:H})]);return e.elevated===!0&&l.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),_("footer",{class:y.value,style:R.value,onFocusin:c},l)}}}),cn=Z({name:"QPageContainer",setup(e,{slots:x}){const{proxy:{$q:i}}=J(),a=$e(Ee,N);if(a===N)return console.error("QPageContainer needs to be child of QLayout"),N;Qe(Pt,!0);const t=g(()=>{const u={};return a.header.space===!0&&(u.paddingTop=`${a.header.size}px`),a.right.space===!0&&(u[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(u.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(u[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),u});return()=>_("div",{class:"q-page-container",style:t.value},Be(x.default))}});const{passive:at}=Pe,dn=["both","horizontal","vertical"];var fn=Z({name:"QScrollObserver",props:{axis:{type:String,validator:e=>dn.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:x}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,t,u;E(()=>e.scrollTarget,()=>{f(),s()});function b(){a!==null&&a();const $=Math.max(0,Xt(t)),z=Yt(t),y={top:$-i.position.top,left:z-i.position.left};if(e.axis==="vertical"&&y.top===0||e.axis==="horizontal"&&y.left===0)return;const R=Math.abs(y.top)>=Math.abs(y.left)?y.top<0?"up":"down":y.left<0?"left":"right";i.position={top:$,left:z},i.directionChanged=i.direction!==R,i.delta=y,i.directionChanged===!0&&(i.direction=R,i.inflectionPoint=i.position),x("scroll",{...i})}function s(){t=it(u,e.scrollTarget),t.addEventListener("scroll",d,at),d(!0)}function f(){t!==void 0&&(t.removeEventListener("scroll",d,at),t=void 0)}function d($){if($===!0||e.debounce===0||e.debounce==="0")b();else if(a===null){const[z,y]=e.debounce?[setTimeout(b,e.debounce),clearTimeout]:[requestAnimationFrame(b),cancelAnimationFrame];a=()=>{y(z),a=null}}}const{proxy:p}=J();return E(()=>p.$q.lang.rtl,b),se(()=>{u=p.$el.parentNode,s()}),Y(()=>{a!==null&&a(),f()}),Object.assign(p,{trigger:d,getPosition:()=>i}),ot}}),vn=Z({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:x,emit:i}){const{proxy:{$q:a}}=J(),t=k(null),u=k(a.screen.height),b=k(e.container===!0?0:a.screen.width),s=k({position:0,direction:"down",inflectionPoint:0}),f=k(0),d=k(Ie.value===!0?0:xe()),p=g(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),$=g(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),z=g(()=>d.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),y=g(()=>d.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function R(r){if(e.container===!0||document.qScrollPrevented!==!0){const l={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};s.value=l,e.onScroll!==void 0&&i("scroll",l)}}function S(r){const{height:l,width:v}=r;let C=!1;u.value!==l&&(C=!0,u.value=l,e.onScrollHeight!==void 0&&i("scrollHeight",l),H()),b.value!==v&&(C=!0,b.value=v),C===!0&&e.onResize!==void 0&&i("resize",r)}function Q({height:r}){f.value!==r&&(f.value=r,H())}function H(){if(e.container===!0){const r=u.value>f.value?xe():0;d.value!==r&&(d.value=r)}}let A=null;const c={instances:{},view:g(()=>e.view),isContainer:g(()=>e.container),rootRef:t,height:u,containerHeight:f,scrollbarWidth:d,totalWidth:g(()=>b.value+d.value),rows:g(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:ge({size:0,offset:0,space:!1}),right:ge({size:300,offset:0,space:!1}),footer:ge({size:0,offset:0,space:!1}),left:ge({size:300,offset:0,space:!1}),scroll:s,animate(){A!==null?clearTimeout(A):document.body.classList.add("q-body--layout-animate"),A=setTimeout(()=>{A=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,l,v){c[r][l]=v}};if(Qe(Ee,c),xe()>0){let v=function(){r=null,l.classList.remove("hide-scrollbar")},C=function(){if(r===null){if(l.scrollHeight>a.screen.height)return;l.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(v,300)},B=function(O){r!==null&&O==="remove"&&(clearTimeout(r),v()),window[`${O}EventListener`]("resize",C)},r=null;const l=document.body;E(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),Rt(()=>{B("remove")})}return()=>{const r=ze(x.default,[_(fn,{onScroll:R}),_(ye,{onResize:S})]),l=_("div",{class:p.value,style:$.value,ref:e.container===!0?void 0:t,tabindex:-1},r);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:t},[_(ye,{onResize:Q}),_("div",{class:"absolute-full",style:z.value},[_("div",{class:"scroll",style:y.value},[l])])]):l}}});const st=e=>(It("data-v-f90ee4e0"),e=e(),Qt(),e),hn=st(()=>F("div",{class:"column header-heading"},[F("h5",null," \u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u041A\u0443\u0440\u043A\u0438\u043D\u0430 "),F("div",{class:"text-caption text-grey"}," \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0444\u0440\u043E\u043D\u0442-\u0435\u043D\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 ")],-1)),gn={class:"menu-btn flex no-wrap justify-between"},bn=st(()=>F("div",{class:"column footer-heading__text"},[F("h5",null," \u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u041A\u0443\u0440\u043A\u0438\u043D\u0430 "),F("div",{class:"text-caption text-grey"}," \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0444\u0440\u043E\u043D\u0442-\u0435\u043D\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 ")],-1)),mn={class:"footer-copyright"},yn={__name:"MainLayout",setup(e){const x=[{label:"\u041F\u043E\u0447\u0442\u0430",tooltip:"kaylle@yandex.ru",link:"mailto:kaylle@yandex.ru"},{label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",tooltip:"+7 (996) 590-14-45",link:"tel:79965901445"},{label:"Telegram",tooltip:"@kaylle",link:"https://t.me/kaylle"}],i=[{label:"\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",link:"/"},{label:"\u0420\u0435\u0437\u044E\u043C\u0435",link:"/resume"}];return(a,t)=>{const u=Ne("router-link"),b=Ne("router-view");return X(),Ce(vn,{view:"lHh Lpr lff"},{default:q(()=>[T(et,{class:"q-pa-md"},{default:q(()=>[T(u,{to:"/"},{default:q(()=>[T(Ke,{size:"60px",class:"q-mr-md"},{default:q(()=>[T(Ve,{src:"/svg/logo.svg",width:"30px"})]),_:1})]),_:1}),a.$q.screen.width>1024?(X(),oe(ie,{key:0},[T(nt,{"indicator-color":"transparent","active-color":"primary","no-caps":"",class:"first-tabs"},{default:q(()=>[(X(),oe(ie,null,be(i,s=>T(an,{key:s,to:s.link,label:s.label},null,8,["to","label"])),64))]),_:1}),T(pe)],64)):zt("",!0),T(u,{to:"/"},{default:q(()=>[hn]),_:1}),T(pe),a.$q.screen.width>1024?(X(),Ce(nt,{key:1,"indicator-color":"transparent","no-caps":""},{default:q(()=>[(X(),oe(ie,null,be(x,s=>T(qe,{clickable:"",key:s,target:"_blank",href:s.link},{default:q(()=>[F("span",null,re(s.label),1),T(sn,{class:"bg-primary"},{default:q(()=>[ke(re(s.tooltip),1)]),_:2},1024)]),_:2},1032,["href"])),64))]),_:1})):(X(),Ce(Ue,{key:2,round:"",color:"primary",icon:"eva-menu"},{default:q(()=>[T(Ft,{dark:""},{default:q(()=>[T(qe,null,{default:q(()=>[ke(" \u041C\u0435\u043D\u044E ")]),_:1}),T(Jt,null,{default:q(()=>[(X(),oe(ie,null,be(i,s=>T(qe,{key:s,clickable:"",to:s.link},{default:q(()=>[T(Ze,null,{default:q(()=>[ke(re(s.label),1)]),_:2},1024),T(Ze,{side:"",class:"bg-accent"},{default:q(()=>[T(ue,{name:"eva-link-2",color:"white",size:"16px"})]),_:1})]),_:2},1032,["to"])),64))]),_:1}),F("div",gn,[(X(),oe(ie,null,be(x,s=>T(Ue,{padding:"0 16px",key:s,href:s.link,flat:"","no-caps":""},{default:q(()=>[F("span",null,re(s.label),1)]),_:2},1032,["href"])),64))])]),_:1})]),_:1}))]),_:1}),T(un,null,{default:q(()=>[T(et,null,{default:q(()=>[T(u,{to:"/",class:"items-center footer-heading"},{default:q(()=>[T(Ke,{size:"60px"},{default:q(()=>[T(Ve,{src:"/svg/logo.svg",width:"30px"})]),_:1}),bn]),_:1}),T(pe),F("span",mn," \xA9 "+re(new Date().getFullYear())+" Kaylle ",1)]),_:1})]),_:1}),T(cn,null,{default:q(()=>[T(b)]),_:1})]),_:1})}}};var xn=$t(yn,[["__scopeId","data-v-f90ee4e0"]]);export{xn as default};
