import{s as i,a as o,j as e}from"./index-5e66f678.js";import{T as m}from"./Tooltip-a19164c9.js";import"./Button-52383308.js";import"./useFocusRing-43eae5fe.js";import"./Hidden-eecd9fc1.js";import"./useFocusable-58d3cebe.js";import"./useButton-97ef3e57.js";import"./OverlayArrow-db869afb.js";import"./context-60e33871.js";import"./useControlledState-23f79d4d.js";import"./Info-4831eb43.js";/* empty css              */const n=i.div`
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
