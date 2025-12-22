import{s as e,a as o,j as r}from"./index.b11bfc39.js";import{T as m}from"./Tooltip.78f6cbfe.js";import"./theme.2b93f1dd.js";import"./palette.15e4d008.js";import"./Button.module.c3411fe9.js";import"./useFocusRing.module.881fbd5b.js";import"./context.module.cd75fb55.js";import"./useButton.module.61aebc55.js";import"./OverlayArrow.module.25e51d3f.js";import"./Info.67572616.js";const n=e.div`
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
