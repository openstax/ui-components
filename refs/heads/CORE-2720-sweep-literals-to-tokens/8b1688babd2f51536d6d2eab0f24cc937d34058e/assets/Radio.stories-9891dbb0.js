import{s as n,j as e,F as d,a as o}from"./index-fae01428.js";import{R as i}from"./Radio-79487f26.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-4dd21852.js";import"./Button-fc073e87.js";import"./useFocusRing-27719187.js";import"./Hidden-c9097199.js";import"./useFocusable-3c0bf5d0.js";import"./useButton-ee84dead.js";import"./OverlayArrow-9c1e0a59.js";import"./context-c624e693.js";import"./Info-218ff475.js";/* empty css              */const l=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(l,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),j=()=>e(d,{children:a({name:"default"})}),y=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),r=t=>o(l,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),L=()=>o(d,{children:[r({name:"disabled"}),r({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{j as Default,L as Disabled,y as WithTooltip};
