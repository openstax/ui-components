import{s as e,a as o,j as i}from"./index.31876e64.js";import{T as r}from"./Tooltip.b2237fdb.js";import"./theme.b7c248ed.js";import"./palette.15e4d008.js";import"./Button.module.d9035edb.js";import"./context.module.c5893268.js";import"./focusSafely.module.e2616d0c.js";import"./useFocusRing.module.df443ce5.js";import"./OverlayArrow.module.3bb35114.js";import"./Info.c10f12dc.js";const m=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,n=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,h=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
