import{s as e,a as o,j as r}from"./index.764eb68c.js";import{T as m}from"./Tooltip.7f5f3dc4.js";import"./theme.fb75aff6.js";import"./palette.15e4d008.js";import"./Button.module.aae84ec8.js";import"./useFocusRing.module.9a119be1.js";import"./useButton.module.9b3be454.js";import"./OverlayArrow.module.ce8eb8f3.js";import"./Info.a95edac5.js";const n=e.div`
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
