import{Q}from"./use-dark.2636aa63.js";import{Q as J,r as o}from"./api.eb7fd2a8.js";import{r as y,a as M,I as r,J as c,U as i,S as b,X as h,N as e,Z as x,a1 as s,W as a,P as q,L as Y,$ as D,Y as w}from"./index.daf7562c.js";import{Q as $}from"./QChip.ee4b050f.js";import{Q as B}from"./QPage.3c16bc06.js";const P={class:"absolute-full flex items-center"},C={class:"column items-start q-gutter-y-md"},E={class:"text-bold"},F={class:"row q-col-gutter-xl"},S=e("div",{class:"col-12 col-md-3"},[e("h5",null,"\u0411\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044F")],-1),L={class:"col-12 col-md-9"},V={class:"col-12 col-md-3"},z={class:"col-12 col-md-9 column q-gutter-y-lg"},I={class:"flex items-center"},A={class:"q-mr-md"},R={class:"text-h5 q-mt-sm"},U={class:"text-grey q-mb-md"},W={class:"text-bold q-mt-sm"},X=e("div",{class:"col-12 col-md-3"},[e("h5",null,"\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438")],-1),Z={class:"col-12 col-md-9"},G={class:"flex q-gutter-sm"},H=e("div",{class:"col-12 col-md-3"},[e("h5",null,"\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435")],-1),K={class:"col-12 col-md-9 column"},le={__name:"ResumePage",setup(O){const p=y(""),_=y(""),N=()=>{const l=new Date,n=new Date("05.12.2022");let t=(l.getFullYear()-n.getFullYear())*12;t-=n.getMonth(),t+=l.getMonth();const d=Math.floor(t/12),m=Math.floor((t+22)/12),f=t-d*12,v=t+22-m*12;p.value=`${d} ${u(d)} ${f} \u043C\u0435\u0441\u044F\u0446${g(f)}`,_.value=`${m} ${u(m)} ${v} \u043C\u0435\u0441\u044F\u0446${g(v)}`},k=()=>{let l=Number(new Date().getFullYear())-2e3;return`${l} ${u(l)}`},u=l=>{let n=l.toString(),t=n.substring(n.length-1);if(Number(t)===1)return"\u0433\u043E\u0434";if(Number(t)>1&&t<5)return"\u0433\u043E\u0434\u0430";if(Number(t)>4)return"\u043B\u0435\u0442"},g=l=>{if(l===1)return"";if(l>1&&l<5)return"\u0430";if(l>4)return"\u0435\u0432"};return M(()=>{N()}),(l,n)=>(r(),c(h,null,[i(J,{src:"/images/arts/image1.png",height:l.$q.screen.width>=700?"200px":"300px"},{default:b(()=>[e("div",P,[e("div",{class:x(["text-white",l.$q.screen.width>=800?"flex":"column"]),style:{width:"100%"}},[e("div",C,[e("h4",E,s(a(o).fio),1),e("h5",null,s(a(o).position),1)]),l.$q.screen.width>=800?(r(),q(Q,{key:0})):Y("",!0),e("div",{class:x(["column q-gutter-y-sm",l.$q.screen.width>=800?"items-end":""])},[e("span",null,s(a(o).city),1),e("span",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "+s(a(o).phone),1),e("span",null,"\u042D\u043C\u0430\u0439\u043B: "+s(a(o).email),1)],2)],2)])]),_:1},8,["height"]),i(B,{class:"q-pa-lg bg-dark text-white"},{default:b(()=>[e("div",F,[S,e("div",L,[e("p",null,"\u0416\u0435\u043D\u0449\u0438\u043D\u0430, "+s(k())+", \u0440\u043E\u0434\u0438\u043B\u0430\u0441\u044C "+s(a(o).birthday),1),e("p",null,s(a(o).about),1),i(D,{label:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0440\u0435\u0437\u044E\u043C\u0435 \u043D\u0430 hh.ru","no-caps":"",color:"primary",target:"_blank",href:a(o).resumeLink},null,8,["href"])]),e("div",V,[e("h5",null,"\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B - "+s(_.value),1)]),e("div",z,[(r(!0),c(h,null,w(a(o).experience,t=>(r(),c("div",{class:"column",key:t},[e("div",I,[e("span",A,s(t.period),1),i($,{"no-caps":"",unelevated:"",color:"white","text-color":"primary",class:"cursor-pointer",label:t.totalPeriod?t.totalPeriod:p.value},null,8,["label"])]),e("div",R,s(t.company.name),1),e("div",U,s(t.company.city)+", "+s(t.company.website),1),e("div",W,s(t.position),1),e("p",null,s(t.description),1)]))),128))]),X,e("div",Z,[e("div",G,[(r(!0),c(h,null,w(a(o).tags,t=>(r(),q($,{key:t,label:t,"no-caps":"",unelevated:"",color:"white","text-color":"primary",class:"cursor-pointer"},null,8,["label"]))),128))])]),H,e("div",K,[e("span",null,s(a(o).education.type),1),e("span",null,s(a(o).education.organization),1),e("span",null,s(a(o).education.qualification),1)])])]),_:1})],64))}};export{le as default};
