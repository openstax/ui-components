import{s as n,j as e,F as d,a as o}from"./index-0d6cb570.js";import{R as i}from"./Radio-ad937687.js";import"./Tooltip-c10c6f01.js";import"./Button-0200e275.js";import"./useFocusRing-03ec3134.js";import"./Hidden-2b99ed3b.js";import"./useFocusable-26baf001.js";import"./useButton-488b9405.js";import"./OverlayArrow-8ee3bf89.js";import"./context-ec2a9b19.js";import"./useControlledState-dde196bb.js";import"./Info-644602f7.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
