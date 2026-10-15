import{s as i,a as o,j as e}from"./index-8b1be831.js";import{T as m}from"./Tooltip-e233057f.js";import"./Button-7523d634.js";import"./useFocusRing-3fbcc172.js";import"./Hidden-0b8ad65b.js";import"./useFocusable-b7cd9fec.js";import"./useButton-9efb52be.js";import"./OverlayArrow-f117415e.js";import"./context-8bbb4d0d.js";import"./useControlledState-f38e15a3.js";import"./Info-fca8bb3e.js";/* empty css              */const n=i.div`
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
