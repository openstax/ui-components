import{s as e,a as o,j as r}from"./index.8f51e422.js";import{T as m}from"./Tooltip.2dab8d00.js";import"./theme.2cc37264.js";import"./palette.15e4d008.js";import"./Button.module.ebb80593.js";import"./useFocusRing.module.eb7e2819.js";import"./context.module.3e39767d.js";import"./useButton.module.29ec2b43.js";import"./OverlayArrow.module.e8b84cc0.js";import"./Info.4fcbb08a.js";const n=e.div`
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
