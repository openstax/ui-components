import{s as i,j as o,a as r}from"./index-8705850e.js";import{T as m}from"./Tooltip-a234320c.js";import"./Button-4e03cfbb.js";import"./useFocusRing-5f0c7ce9.js";import"./Hidden-8dcbc110.js";import"./useFocusable-052501e6.js";import"./useButton-6f823dd6.js";import"./OverlayArrow-e11ba376.js";import"./context-140cfb81.js";import"./Info-50d193fa.js";import"./palette-12edeb86.js";const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,p=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,y=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
