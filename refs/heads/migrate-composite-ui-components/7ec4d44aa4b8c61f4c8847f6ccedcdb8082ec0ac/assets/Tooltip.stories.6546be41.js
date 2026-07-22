import{s as e,a as o,j as r}from"./index.5158ac54.js";import{T as m}from"./Tooltip.bff8f0f5.js";import"./Button.module.0f2e4529.js";import"./useFocusRing.module.f19dffd1.js";import"./Hidden.module.2467e320.js";import"./useButton.module.11402693.js";import"./OverlayArrow.module.93c244b9.js";import"./context.module.f263809a.js";import"./Info.b573dc06.js";import"./palette.5e342580.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
