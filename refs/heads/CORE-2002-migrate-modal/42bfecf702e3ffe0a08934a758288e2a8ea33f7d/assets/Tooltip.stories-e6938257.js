import{s as e,j as o,a as r}from"./index-ae123110.js";import{T as m}from"./Tooltip-52139119.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Button-c42b5d57.js";import"./useFocusRing-a45bc7ce.js";import"./context-a4655308.js";import"./useButton-7a0acea8.js";import"./OverlayArrow-da3207a3.js";import"./Info-d087f34f.js";const n=e.div`
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
