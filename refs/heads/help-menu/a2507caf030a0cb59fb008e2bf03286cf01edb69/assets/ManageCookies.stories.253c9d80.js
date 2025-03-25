import{W as w,R as d,a as e,F as i,j as n,s as y}from"./index.6bf93fe2.js";import{a as p}from"./Button.f1338a68.js";import"./theme.b8d30864.js";import"./palette.15e4d008.js";import"./buttons.d9ff06b2.js";const u=w`
  .cky-btn-revisit { display: none; }
`,o=({children:t,className:l,wrapper:a,...k})=>{const r=typeof window=="object",[s,f]=d.useState(!1);if(d.useEffect(()=>{if(r&&!s){const c=()=>f(!0);if("getCkyConsent"in window)c();else return document.addEventListener("cookieyes_banner_load",c),()=>document.removeEventListener("cookieyes_banner_load",c)}},[s,r]),!r)return e(i,{children:e(u,{})});const h=e(p,{className:`cky-banner-element${l?` ${l}`:""}`,...k,children:t||"Manage Cookies"});return n(i,{children:[e(u,{}),s?typeof a=="function"?a(h):h:null]})},Y=()=>n(i,{children:[e("div",{className:"cky-btn-revisit",children:"mock CookieYes cookie button"}),e("h2",{children:"Standalone"}),e(o,{}),e("h2",{children:"Inside a styled container"}),n(m,{children:["if there is some container like a footer or whatever that sets colors: ",e(o,{})]}),e("h2",{children:"As a list item"}),n("ul",{children:[e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(o,{wrapper:t=>e("li",{children:t})})]})]}),m=y.div`
  a, button {
    color: #ccc;

    &:hover {
      color: #000;
    }
  }
`,_=()=>(d.useEffect(()=>{document.dispatchEvent(new CustomEvent("cookieyes_banner_load",{}))},[]),n(i,{children:[e("div",{className:"cky-btn-revisit",children:"mock CookieYes cookie button"}),e("h2",{children:"Standalone"}),e(o,{}),e("h2",{children:"Inside a styled container"}),n(m,{children:["if there is some container like a footer or whatever that sets colors: ",e(o,{})]}),e("h2",{children:"As a list item"}),n("ul",{children:[e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(o,{wrapper:t=>e("li",{children:t})})]})]}));typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{_ as WithCookieYes,Y as WithoutCookieYes};
