import{W as s,a as e,j as n,F as c,R as a,s as w}from"./index.6ca94291.js";import{a as h}from"./Button.bd7ce5a1.js";import"./theme.dae5b85e.js";import"./palette.15e4d008.js";import"./buttons.d89aac2b.js";const u=s`
  .osano-cm-widget { display: none; }
`,t=o=>{const i=typeof window>"u"?void 0:window.Osano;if(i===void 0||i.cm.mode==="debug")return null;const l=e(h,{...o,onClick:d=>{var r;i.cm.showDrawer("osano-cm-dom-info-dialog-open"),(r=o.onClick)==null||r.call(o,d)},children:o.children||"Manage Cookies"});return n(c,{children:[e(u,{}),typeof o.wrapper=="function"?o.wrapper(l):l]})},g=()=>{const[o,i]=a.useState(!1);return a.useEffect(()=>i(!0),[]),n(c,{children:[e("div",{className:"osano-cm-widget",children:"mock osano cookie button"}),o?e(t,{}):null,n("ul",{children:[e("li",{children:"in a list"}),e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(t,{wrapper:l=>e("li",{children:l})})]})]})},m=w.div`
  a, button {
    color: #ccc;

    &:hover {
      color: #000;
    }
  }
`,v=()=>(window.Osano={cm:{mode:"production",showDrawer:(...o)=>alert("showDrawer called "+JSON.stringify(o))}},a.useEffect(()=>()=>{delete window.Osano},[]),n(c,{children:[e("div",{className:"osano-cm-widget",children:"mock osano cookie button"}),e(t,{}),n(m,{children:["if there is some container like a footer or whatever that sets colors, it works",e(t,{})]}),n("ul",{children:[e("li",{children:"in a list"}),e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(t,{wrapper:o=>e("li",{children:o})})]})]}));typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{v as WithOsano,g as WithoutOsano};
