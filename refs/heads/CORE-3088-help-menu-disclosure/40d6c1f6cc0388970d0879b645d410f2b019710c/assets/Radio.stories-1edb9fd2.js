import{s as n,a as e,F as d,j as o}from"./index-d5d89686.js";import{R as i}from"./Radio-11f50ee7.js";import"./Tooltip-e01adc61.js";import"./Button-eb386eda.js";import"./useFocusRing-25739368.js";import"./Hidden-841df4e2.js";import"./useFocusable-d39a8ea9.js";import"./useButton-a122ae0d.js";import"./OverlayArrow-b1478eb9.js";import"./context-b984cc94.js";import"./useControlledState-2c5777a4.js";import"./Info-7947407d.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
