import{s as e,a as o,j as r}from"./index.32774466.js";import{T as m}from"./Tooltip.f3da68dd.js";import"./theme.c99223a2.js";import"./palette.15e4d008.js";import"./Button.module.deb7379c.js";import"./useFocusRing.module.cf862bf4.js";import"./context.module.c8cee43f.js";import"./useButton.module.ea2cf59e.js";import"./OverlayArrow.module.fb4ac2cb.js";import"./Info.c9178325.js";const n=e.div`
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
