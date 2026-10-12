import{s as n,a as e,F as d,j as o}from"./index-2f61b72d.js";import{R as i}from"./Radio-d68a0d0f.js";import"./Tooltip-f2a1ff62.js";import"./Button-b5070a04.js";import"./useFocusRing-3388cf75.js";import"./Hidden-b18c5bfb.js";import"./useFocusable-d013bb71.js";import"./useButton-309d6ebd.js";import"./OverlayArrow-5a6a14f1.js";import"./context-272fe223.js";import"./useControlledState-a9365940.js";import"./Info-4909d6bf.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
