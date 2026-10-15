import{s as i,a as o,j as e}from"./index-55856cba.js";import{T as m}from"./Tooltip-25947c87.js";import"./Button-922caad5.js";import"./useFocusRing-0918423a.js";import"./Hidden-8b1c8423.js";import"./useFocusable-10e16b79.js";import"./useButton-3076e061.js";import"./OverlayArrow-41a45a41.js";import"./context-8af3261b.js";import"./useControlledState-4984918e.js";import"./Info-75bcfc80.js";/* empty css              */const n=i.div`
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
