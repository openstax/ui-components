import{s as e,a as o,j as r}from"./index.5be0f26b.js";import{T as m}from"./Tooltip.f697e3c2.js";import"./theme.88e7dbb5.js";import"./palette.15e4d008.js";import"./Button.module.4dde147c.js";import"./useFocusRing.module.6d335bc9.js";import"./context.module.39f6032a.js";import"./useButton.module.1f070060.js";import"./OverlayArrow.module.d4850431.js";import"./Info.32e5076f.js";const n=e.div`
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
