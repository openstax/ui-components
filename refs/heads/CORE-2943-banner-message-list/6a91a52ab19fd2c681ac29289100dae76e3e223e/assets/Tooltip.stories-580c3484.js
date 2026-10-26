import{s as i,a as o,j as e}from"./index-54670b2e.js";import{T as m}from"./Tooltip-6597d400.js";import"./Button-65af75a1.js";import"./useFocusRing-01dbbdd0.js";import"./Hidden-f268abe8.js";import"./useFocusable-c1e83ff2.js";import"./useButton-fddd35d4.js";import"./OverlayArrow-1715f477.js";import"./context-cd34325f.js";import"./useControlledState-a99ac04c.js";import"./Info-ca58d2ed.js";/* empty css              */const n=i.div`
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
