import{s as i,a as o,j as e}from"./index-89873958.js";import{T as m}from"./Tooltip-a3443259.js";import"./Button-e15209cf.js";import"./useFocusRing-dd4f4c53.js";import"./Hidden-c2042bab.js";import"./useFocusable-cc1c2ada.js";import"./useButton-5e198b3c.js";import"./OverlayArrow-cc784869.js";import"./context-81b3b9b4.js";import"./useControlledState-0fd02b60.js";import"./Info-5702e45c.js";/* empty css              */const n=i.div`
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
