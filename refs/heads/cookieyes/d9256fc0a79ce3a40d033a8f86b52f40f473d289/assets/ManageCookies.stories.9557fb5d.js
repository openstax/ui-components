import{W as w,R as s,a as e,F as r,j as o,s as f}from"./index.88aa9f22.js";import{a as y}from"./Button.a91e1a90.js";import"./theme.9bd14cce.js";import"./palette.15e4d008.js";import"./buttons.d7f5b162.js";const h=w`
  .cky-btn-revisit { display: none; }
`,t=({children:n,className:c,wrapper:d,...k})=>{const i=typeof window=="object",[l,m]=s.useState(i&&"getCkyConsent"in window);if(s.useEffect(()=>{if(i&&!l){const u=()=>m(!0);return document.addEventListener("cookieyes_banner_load",u),()=>document.removeEventListener("cookieyes_banner_load",u)}},[i]),!i)return e(r,{children:e(h,{})});const a=e(y,{className:`cky-banner-element${c?` ${c}`:""}`,...k,children:n||"Manage Cookies"});return o(r,{children:[e(h,{}),l?typeof d=="function"?d(a):a:null]})},E=()=>o(r,{children:[e("div",{className:"cky-btn-revisit",children:"mock CookieYes cookie button"}),e(t,{}),o("ul",{children:[e("li",{children:"in a list"}),e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(t,{wrapper:n=>e("li",{children:n})})]})]}),p=f.div`
  a, button {
    color: #ccc;

    &:hover {
      color: #000;
    }
  }
`,Y=()=>(s.useEffect(()=>(window.getCkyConsent=jest.fn(),()=>{delete window.getCkyConsent}),[]),o(r,{children:[e("div",{className:"cky-btn-revisit",children:"mock CookieYes cookie button"}),e(t,{}),o(p,{children:["if there is some container like a footer or whatever that sets colors, it works",e(t,{})]}),o("ul",{children:[e("li",{children:"in a list"}),e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(t,{wrapper:n=>e("li",{children:n})})]})]}));typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Y as WithCookieYes,E as WithoutCookieYes};
