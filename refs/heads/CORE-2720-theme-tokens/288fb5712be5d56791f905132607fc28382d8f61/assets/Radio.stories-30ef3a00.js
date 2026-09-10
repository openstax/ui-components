import{s as n,j as e,F as d,a as o}from"./index-94fd6a02.js";import{R as i}from"./Radio-705ef5e8.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-65283ad1.js";import"./Button-008fb144.js";import"./useFocusRing-af55b691.js";import"./Hidden-44a7529d.js";import"./useButton-a653791c.js";import"./OverlayArrow-66787c21.js";import"./context-4e2c54df.js";import"./Info-f90779bc.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
