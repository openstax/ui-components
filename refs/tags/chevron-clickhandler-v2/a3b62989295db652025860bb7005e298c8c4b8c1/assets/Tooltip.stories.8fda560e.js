import{s as e,a as o,j as r}from"./index.a21a0fc5.js";import{T as m}from"./Tooltip.ffe63cde.js";import"./theme.4ed5d70c.js";import"./palette.15e4d008.js";import"./Button.module.e94f23ea.js";import"./useFocusRing.module.3646f433.js";import"./useButton.module.2c40e25f.js";import"./OverlayArrow.module.13b6d3a7.js";import"./Info.5456687d.js";const n=e.div`
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
