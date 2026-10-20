import{R as o,a as e,j as i,F as k}from"./index-fb551bb9.js";import{a as M}from"./Button-ccf1d43b.js";/* empty css              */import"./buttons-1d51466c.js";import"./palette-97ed00c9.js";const x="openstax-manage-cookies-style",E=".cky-btn-revisit-wrapper.cky-btn-revisit-wrapper, .cky-btn-revisit { display: none; }",R=()=>document.head.querySelector(`#${x}`),S=t=>{const n=Number(t.dataset.mountCount);return Number.isInteger(n)&&n>0?n:0},N=()=>{const t=R();if(t){t.dataset.mountCount=String(S(t)+1);return}const n=document.createElement("style");n.id=x,n.textContent=E,n.dataset.mountCount="1",document.head.appendChild(n)},j=()=>{const t=R();if(!t)return;const n=S(t)-1;n>0?t.dataset.mountCount=String(n):t.remove()},c=({children:t,className:n,wrapper:p,...b})=>{const r=typeof window=="object",[h,I]=o.useState(!1),w=o.useRef(null),a=o.useRef(null),l=o.useRef(null),d=o.useRef(null);(r?o.useLayoutEffect:o.useEffect)(()=>{if(r)return N(),j},[r]),o.useEffect(()=>{if(r&&!h){const u=()=>I(!0);if("getCkyConsent"in window)u();else return document.addEventListener("cookieyes_banner_load",u),()=>document.removeEventListener("cookieyes_banner_load",u)}},[h,r]);const s=o.useCallback(()=>{a.current&&(a.current.disconnect(),a.current=null),d.current!==null&&(clearTimeout(d.current),d.current=null)},[]),f=o.useCallback(()=>{l.current!==null&&(clearTimeout(l.current),l.current=null)},[]);o.useEffect(()=>()=>{f(),s()},[f,s]);const m=b.onClick,_=o.useCallback(u=>{const C=w.current;m==null||m(u),!(!C||!r)&&(f(),l.current=window.setTimeout(()=>{l.current=null;const g=document.querySelector(".cky-modal");g&&(s(),a.current=new MutationObserver(T=>{for(const y of T)if(y.type==="attributes"&&y.attributeName==="class"&&!y.target.classList.contains("cky-modal-open")){C.focus(),s();break}}),a.current.observe(g,{attributes:!0,attributeFilter:["class"]}),d.current=window.setTimeout(()=>{s()},1e4))},100))},[r,m,f,s]);if(!h)return e("style",{dangerouslySetInnerHTML:{__html:E}});const v=e(M,{ref:w,className:`cky-banner-element${n?` ${n}`:""}`,...b,onClick:_,children:t||"Manage Cookies"});return typeof p=="function"?p(v):v};const L=()=>i(k,{children:[e("style",{children:`
    .cky-btn-revisit-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      bottom: 15px;
      left: 15px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: #d4450c;
      z-index: 999999;
    }
    .cky-btn-revisit-wrapper .cky-btn-revisit {
      display: flex;
      border: none;
      background: none;
      color: #fff;
      cursor: pointer;
    }
  `}),e("div",{className:"cky-btn-revisit-wrapper",children:e("button",{className:"cky-btn-revisit","aria-label":"Cookie settings",children:"C"})})]}),W=()=>i(k,{children:[e(L,{}),e("h2",{children:"Standalone"}),e(c,{}),e("h2",{children:"Inside a styled container"}),i("div",{className:"story-cookies-container",children:["if there is some container like a footer or whatever that sets colors: ",e(c,{})]}),e("h2",{children:"As a list item"}),i("ul",{children:[e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(c,{wrapper:t=>e("li",{children:t})})]})]}),z=()=>(o.useEffect(()=>{document.dispatchEvent(new CustomEvent("cookieyes_banner_load",{}))},[]),i(k,{children:[e(L,{}),e("h2",{children:"Standalone"}),e(c,{}),e("h2",{children:"Inside a styled container"}),i("div",{className:"story-cookies-container",children:["if there is some container like a footer or whatever that sets colors: ",e(c,{})]}),e("h2",{children:"As a list item"}),i("ul",{children:[e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(c,{wrapper:t=>e("li",{children:t})})]})]}));typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{z as WithCookieYes,W as WithoutCookieYes};
