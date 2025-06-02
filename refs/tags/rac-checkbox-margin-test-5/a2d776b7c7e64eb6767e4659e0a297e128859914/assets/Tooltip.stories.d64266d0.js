import{s as e,a as o,j as r}from"./index.e7ac3957.js";import{T as m}from"./Tooltip.d5028666.js";import"./theme.4149d575.js";import"./palette.15e4d008.js";import"./Button.module.9645869f.js";import"./useFocusRing.module.a08fca12.js";import"./context.module.622a8a74.js";import"./useButton.module.d84365ff.js";import"./OverlayArrow.module.20526042.js";import"./Info.242dd608.js";const n=e.div`
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
