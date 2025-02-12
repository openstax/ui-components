import{s as e,a as o,j as r}from"./index.c70a9853.js";import{T as m}from"./Tooltip.dcbc3e59.js";import"./theme.3411db3d.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.a50259bf.js";import"./context.module.c347cc93.js";import"./Hidden.module.dfcf3216.js";import"./useButton.module.f078f3d4.js";import"./Info.c40ffd4e.js";const n=e.div`
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
