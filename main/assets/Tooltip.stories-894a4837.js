import{s as i,a as o,j as e}from"./index-ac4b064a.js";import{T as m}from"./Tooltip-baa5735b.js";import"./Button-a97cc25b.js";import"./useFocusRing-88d16fde.js";import"./Hidden-6f1474db.js";import"./useFocusable-4c832661.js";import"./useButton-8e1f7d6b.js";import"./OverlayArrow-dc55500a.js";import"./context-871c5de7.js";import"./useControlledState-e33b985e.js";import"./Info-10f3066e.js";/* empty css              */const n=i.div`
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
