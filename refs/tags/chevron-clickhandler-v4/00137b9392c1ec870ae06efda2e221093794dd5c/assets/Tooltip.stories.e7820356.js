import{s as e,a as o,j as r}from"./index.dc7cd7b1.js";import{T as m}from"./Tooltip.b2b86dcc.js";import"./theme.16560e64.js";import"./palette.15e4d008.js";import"./Button.module.113e8004.js";import"./useFocusRing.module.dabaa8d3.js";import"./useButton.module.03f4f641.js";import"./OverlayArrow.module.93d95df8.js";import"./Info.ecee0627.js";const n=e.div`
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
