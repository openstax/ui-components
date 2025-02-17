import{W as w,R as c,a as e,F as i,j as n,s as y}from"./index.2b07e954.js";import{a as p}from"./Button.856a0a2f.js";import"./theme.51edf3d2.js";import"./palette.15e4d008.js";import"./buttons.ea821c7e.js";const u=w`
  .cky-btn-revisit { display: none; }
`,o=({children:t,className:d,wrapper:l,...k})=>{const r=typeof window=="object",[a,f]=c.useState(!1);if(c.useEffect(()=>{if(r&&!a){const s=()=>f(!0);if("getCkyConsent"in window)s();else return document.addEventListener("cookieyes_banner_load",s),()=>document.removeEventListener("cookieyes_banner_load",s)}},[r]),!r)return e(i,{children:e(u,{})});const h=e(p,{className:`cky-banner-element${d?` ${d}`:""}`,...k,children:t||"Manage Cookies"});return n(i,{children:[e(u,{}),a?typeof l=="function"?l(h):h:null]})},Y=()=>n(i,{children:[e("div",{className:"cky-btn-revisit",children:"mock CookieYes cookie button"}),e("h2",{children:"Standalone"}),e(o,{}),e("h2",{children:"Inside a styled container"}),n(m,{children:["if there is some container like a footer or whatever that sets colors: ",e(o,{})]}),e("h2",{children:"As a list item"}),n("ul",{children:[e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(o,{wrapper:t=>e("li",{children:t})})]})]}),m=y.div`
  a, button {
    color: #ccc;

    &:hover {
      color: #000;
    }
  }
`,_=()=>(c.useEffect(()=>{document.dispatchEvent(new CustomEvent("cookieyes_banner_load",{}))},[]),n(i,{children:[e("div",{className:"cky-btn-revisit",children:"mock CookieYes cookie button"}),e("h2",{children:"Standalone"}),e(o,{}),e("h2",{children:"Inside a styled container"}),n(m,{children:["if there is some container like a footer or whatever that sets colors: ",e(o,{})]}),e("h2",{children:"As a list item"}),n("ul",{children:[e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(o,{wrapper:t=>e("li",{children:t})})]})]}));typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{_ as WithCookieYes,Y as WithoutCookieYes};
