import{W as u,R as s,a as e,j as n,F as c,s as m}from"./index.503928fd.js";import{a as f}from"./Button.b01529b8.js";import"./theme.a5e5ed0a.js";import"./palette.15e4d008.js";const k=u`
  .osano-cm-widget { display: none; }
`,i=o=>{const t=typeof window>"u"?void 0:window.Osano,a=t===void 0||t.cm.mode==="debug",[w,l]=s.useState(!a&&o.ssr!==!0);if(s.useEffect(()=>{l(!a)},[l]),!w)return null;const r=e(f,{...o,onClick:h=>{var d;t.cm.showDrawer("osano-cm-dom-info-dialog-open"),(d=o.onClick)==null||d.call(o,h)},children:o.children||"Manage Cookies"});return n(c,{children:[e(k,{}),typeof o.wrapper=="function"?o.wrapper(r):r]})},S=()=>{const[o,t]=s.useState(!1);return s.useEffect(()=>t(!0),[]),n(c,{children:[e("div",{className:"osano-cm-widget",children:"mock osano cookie button"}),o?e(i,{}):null,n("ul",{children:[e("li",{children:"in a list"}),e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(i,{wrapper:a=>e("li",{children:a})})]})]})},b=m.div`
  a, button {
    color: #ccc;

    &:hover {
      color: #000;
    }
  }
`,O=()=>(window.Osano={cm:{mode:"production",showDrawer:(...o)=>alert("showDrawer called "+JSON.stringify(o))}},s.useEffect(()=>()=>{delete window.Osano},[]),n(c,{children:[e("div",{className:"osano-cm-widget",children:"mock osano cookie button"}),e(i,{}),n(b,{children:["if there is some container like a footer or whatever that sets colors, it works",e(i,{})]}),n("ul",{children:[e("li",{children:"in a list"}),e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(i,{wrapper:o=>e("li",{children:o})})]})]}));typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{O as WithOsano,S as WithoutOsano};
