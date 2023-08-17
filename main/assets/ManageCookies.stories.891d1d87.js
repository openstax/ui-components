import{W as r,a as e,j as n,F as d,R as c,s as h}from"./index.c7225a78.js";import{a as u}from"./Button.1d81d3da.js";import"./theme.0080a397.js";import"./palette.15e4d008.js";const w=r`
  .osano-cm-widget { display: none; }
`,t=o=>{const i=typeof window>"u"?void 0:window.Osano;if(i===void 0||i.cm.mode==="debug")return null;const l=e(u,{...o,onClick:a=>{var s;i.cm.showDrawer("osano-cm-dom-info-dialog-open"),(s=o.onClick)==null||s.call(o,a)},children:"Manage Cookies"});return n(d,{children:[e(w,{}),typeof o.children=="function"?o.children(l):l]})},g=()=>{const[o,i]=c.useState(!1);return c.useEffect(()=>i(!0),[]),n(d,{children:[e("div",{className:"osano-cm-widget",children:"mock osano cookie button"}),o?e(t,{}):null,n("ul",{children:[e("li",{children:"in a list"}),e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(t,{children:l=>e("li",{children:l})})]})]})},m=h.div`
  a, button {
    color: #ccc;

    &:hover {
      color: #000;
    }
  }
`,v=()=>(window.Osano={cm:{mode:"production",showDrawer:(...o)=>alert("showDrawer called "+JSON.stringify(o))}},c.useEffect(()=>()=>{delete window.Osano},[]),n(d,{children:[e("div",{className:"osano-cm-widget",children:"mock osano cookie button"}),e(t,{}),n(m,{children:["if there is some container like a footer or whatever that sets colors, it works",e(t,{})]}),n("ul",{children:[e("li",{children:"in a list"}),e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(t,{children:o=>e("li",{children:o})})]})]}));typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{v as WithOsano,g as WithoutOsano};
