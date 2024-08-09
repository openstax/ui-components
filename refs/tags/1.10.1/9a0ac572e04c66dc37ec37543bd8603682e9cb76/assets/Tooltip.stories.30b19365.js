import{s as e,a as o,j as i}from"./index.b1ce302f.js";import{T as r}from"./Tooltip.7fb1bd2a.js";import"./theme.4be312e4.js";import"./palette.15e4d008.js";import"./Button.module.72614b73.js";import"./context.module.b283bb4b.js";import"./useFocusRing.module.91363007.js";import"./OverlayArrow.module.91ae96fe.js";import"./Info.4a4b98dc.js";const m=e.div`
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
`,g=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
