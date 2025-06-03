import{s as e,a as o,j as r}from"./index.e92077b1.js";import{T as m}from"./Tooltip.475352b8.js";import"./theme.e8d94f64.js";import"./palette.15e4d008.js";import"./Button.module.3474e1d5.js";import"./useFocusRing.module.49385ee1.js";import"./useButton.module.ad3d5e36.js";import"./OverlayArrow.module.2fb7ae21.js";import"./Info.0eb66876.js";const n=e.div`
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
