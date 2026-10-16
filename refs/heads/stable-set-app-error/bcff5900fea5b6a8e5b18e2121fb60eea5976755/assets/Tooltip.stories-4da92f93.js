import{s as i,a as o,j as e}from"./index-a36676d6.js";import{T as m}from"./Tooltip-07ace294.js";import"./Button-cb32ff15.js";import"./useFocusRing-ea71f727.js";import"./Hidden-98f7d6d3.js";import"./useFocusable-fdf2a87e.js";import"./useButton-52314a3c.js";import"./OverlayArrow-8649f437.js";import"./context-36927df7.js";import"./useControlledState-edd0cea3.js";import"./Info-a3ab1d53.js";/* empty css              */const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,a=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,y=()=>o(n,{children:["right","top","bottom"].map((t,r)=>e(a,{children:[o(m,{placement:t,ariaLabel:`More information about ${t} placement`,children:"Tooltip content goes here."}),t]},r))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
