import{s as e,a as o,j as r}from"./index.82170460.js";import{T as m}from"./Tooltip.3783d9b3.js";import"./theme.fb1fd088.js";import"./palette.15e4d008.js";import"./Button.module.078e1228.js";import"./useFocusRing.module.4ab47471.js";import"./context.module.341bdf06.js";import"./useButton.module.b8fa1bea.js";import"./OverlayArrow.module.6ad572a2.js";import"./Info.5dfb5823.js";const n=e.div`
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
