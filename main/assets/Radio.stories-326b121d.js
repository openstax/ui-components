import{s as n,a as e,F as d,j as o}from"./index-301a5f24.js";import{R as i}from"./Radio-95040445.js";import"./Tooltip-beafed2d.js";import"./Button-446f9caa.js";import"./useFocusRing-c387590d.js";import"./Hidden-593b1a97.js";import"./useFocusable-afe574ab.js";import"./useButton-b62dc471.js";import"./OverlayArrow-510089c0.js";import"./context-18128ae1.js";import"./useControlledState-33436529.js";import"./Info-b65341d2.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
