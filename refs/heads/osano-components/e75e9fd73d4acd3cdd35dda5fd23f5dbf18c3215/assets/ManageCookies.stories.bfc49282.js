import{W as c,j as t,F as r,a as n,R as a,s as l}from"./index.14bd9c25.js";import{a as w}from"./Button.c69b6b86.js";import"./palette.15e4d008.js";const m=c`
  .osano-cm-widget { display: none; }
`,s=o=>{const e=typeof window>"u"?void 0:window.Osano;return e===void 0||e.cm.mode==="debug"?null:t(r,{children:[n(m,{}),n(w,{...o,onClick:d=>{var i;e.cm.showDrawer("osano-cm-dom-info-dialog-open"),(i=o.onClick)==null||i.call(o,d)},children:"Manage Cookies"})]})},g=()=>{const[o,e]=a.useState(!1);return a.useEffect(()=>e(!0),[]),o?n(s,{}):null},u=l.div`
  a, button {
    color: #ccc;

    &:hover {
      color: #000;
    }
  }
`,y=()=>(window.Osano={cm:{mode:"production",showDrawer:(...o)=>alert("showDrawer called "+JSON.stringify(o))}},a.useEffect(()=>()=>{delete window.Osano},[]),t(r,{children:[n(s,{}),t(u,{children:["if there is some container like a footer or whatever that sets colors, it works",n(s,{})]})]}));typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as WithOsano,g as WithoutOsano};
