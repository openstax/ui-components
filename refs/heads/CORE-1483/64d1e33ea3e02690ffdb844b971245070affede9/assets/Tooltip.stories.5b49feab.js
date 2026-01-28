import{s as e,a as o,j as r}from"./index.4c08c77b.js";import{T as m}from"./Tooltip.614645d8.js";import"./theme.6c1366c4.js";import"./palette.5e342580.js";import"./Button.module.6afd7f3d.js";import"./useFocusRing.module.643381dc.js";import"./context.module.237291cc.js";import"./useButton.module.156ae38e.js";import"./OverlayArrow.module.8dc10fcc.js";import"./Info.947261f3.js";const n=e.div`
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
