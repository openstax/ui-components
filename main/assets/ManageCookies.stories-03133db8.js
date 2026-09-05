import{R as o,j as e,a as i,F as p,s as j}from"./index-44d0765e.js";import{a as N}from"./Button-0f48b4ad.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./buttons-b57755ab.js";const x="openstax-manage-cookies-style",E=".cky-btn-revisit-wrapper.cky-btn-revisit-wrapper, .cky-btn-revisit { display: none; }",S=()=>document.head.querySelector(`#${x}`),R=t=>{const n=Number(t.dataset.mountCount);return Number.isInteger(n)&&n>0?n:0},Y=()=>{const t=S();if(t){t.dataset.mountCount=String(R(t)+1);return}const n=document.createElement("style");n.id=x,n.textContent=E,n.dataset.mountCount="1",document.head.appendChild(n)},A=()=>{const t=S();if(!t)return;const n=R(t)-1;n>0?t.dataset.mountCount=String(n):t.remove()},c=({children:t,className:n,wrapper:b,...k})=>{const r=typeof window=="object",[h,T]=o.useState(!1),w=o.useRef(null),l=o.useRef(null),a=o.useRef(null),d=o.useRef(null);(r?o.useLayoutEffect:o.useEffect)(()=>{if(r)return Y(),A},[r]),o.useEffect(()=>{if(r&&!h){const u=()=>T(!0);if("getCkyConsent"in window)u();else return document.addEventListener("cookieyes_banner_load",u),()=>document.removeEventListener("cookieyes_banner_load",u)}},[h,r]);const s=o.useCallback(()=>{l.current&&(l.current.disconnect(),l.current=null),d.current!==null&&(clearTimeout(d.current),d.current=null)},[]),f=o.useCallback(()=>{a.current!==null&&(clearTimeout(a.current),a.current=null)},[]);o.useEffect(()=>()=>{f(),s()},[f,s]);const m=k.onClick,_=o.useCallback(u=>{const C=w.current;m==null||m(u),!(!C||!r)&&(f(),a.current=window.setTimeout(()=>{a.current=null;const g=document.querySelector(".cky-modal");g&&(s(),l.current=new MutationObserver(M=>{for(const y of M)if(y.type==="attributes"&&y.attributeName==="class"&&!y.target.classList.contains("cky-modal-open")){C.focus(),s();break}}),l.current.observe(g,{attributes:!0,attributeFilter:["class"]}),d.current=window.setTimeout(()=>{s()},1e4))},100))},[r,m,f,s]);if(!h)return e("style",{dangerouslySetInnerHTML:{__html:E}});const v=e(N,{ref:w,className:`cky-banner-element${n?` ${n}`:""}`,...k,onClick:_,children:t||"Manage Cookies"});return typeof b=="function"?b(v):v},L=()=>i(p,{children:[e("style",{children:`
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
  `}),e("div",{className:"cky-btn-revisit-wrapper",children:e("button",{className:"cky-btn-revisit","aria-label":"Cookie settings",children:"C"})})]}),H=()=>i(p,{children:[e(L,{}),e("h2",{children:"Standalone"}),e(c,{}),e("h2",{children:"Inside a styled container"}),i(I,{children:["if there is some container like a footer or whatever that sets colors: ",e(c,{})]}),e("h2",{children:"As a list item"}),i("ul",{children:[e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(c,{wrapper:t=>e("li",{children:t})})]})]}),I=j.div`
  a, button {
    color: #ccc;

    &:hover {
      color: #000;
    }
  }
`,D=()=>(o.useEffect(()=>{document.dispatchEvent(new CustomEvent("cookieyes_banner_load",{}))},[]),i(p,{children:[e(L,{}),e("h2",{children:"Standalone"}),e(c,{}),e("h2",{children:"Inside a styled container"}),i(I,{children:["if there is some container like a footer or whatever that sets colors: ",e(c,{})]}),e("h2",{children:"As a list item"}),i("ul",{children:[e("li",{children:"use a function child to provide wrappers that will only be included if the link is shown"}),e(c,{wrapper:t=>e("li",{children:t})})]})]}));typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as WithCookieYes,H as WithoutCookieYes};
