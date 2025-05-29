import{s as e,a as o,j as r}from"./index.f7b2f93a.js";import{T as m}from"./Tooltip.fc876aa2.js";import"./theme.bf2601d7.js";import"./palette.15e4d008.js";import"./Button.module.e2f71407.js";import"./useFocusRing.module.f85b1a5e.js";import"./useButton.module.cd86af0d.js";import"./OverlayArrow.module.6e30c7bb.js";import"./Info.3e8a7649.js";const n=e.div`
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
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
