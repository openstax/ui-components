import{s as e,a as o,j as r}from"./index.77dc174b.js";import{T as m}from"./Tooltip.2dd6c113.js";import"./theme.efb68a94.js";import"./palette.5e342580.js";import"./Button.module.fe582f09.js";import"./useFocusRing.module.cd4dc1fd.js";import"./context.module.25fdc995.js";import"./useButton.module.be4798f5.js";import"./OverlayArrow.module.39fcfdd7.js";import"./Info.b8caa697.js";const n=e.div`
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
