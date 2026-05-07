import{s as e,a as o,j as r}from"./index.84d40ee4.js";import{T as m}from"./Tooltip.8efd0fc6.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.63c59d0a.js";import"./useFocusRing.module.4429028b.js";import"./context.module.018b8870.js";import"./useButton.module.3a92ba3d.js";import"./OverlayArrow.module.77809b70.js";import"./Info.26f4bd2a.js";const n=e.div`
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
