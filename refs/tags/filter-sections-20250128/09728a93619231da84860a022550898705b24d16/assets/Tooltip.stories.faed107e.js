import{s as e,a as o,j as r}from"./index.c7881c19.js";import{T as m}from"./Tooltip.aaa15ec4.js";import"./theme.4b6c3a74.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.28da0728.js";import"./context.module.efea8a6c.js";import"./Hidden.module.5f46c756.js";import"./useButton.module.565cbdc6.js";import"./Info.a443c4b4.js";const n=e.div`
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
