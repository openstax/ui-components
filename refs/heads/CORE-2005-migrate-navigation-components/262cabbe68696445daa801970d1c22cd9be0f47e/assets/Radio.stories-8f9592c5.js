import{s as n,j as e,F as d,a as o}from"./index-9a095811.js";import{R as i}from"./Radio-5aac86b9.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-5cffce94.js";import"./Button-6a470fb8.js";import"./useFocusRing-494ec84e.js";import"./Hidden-7e906c98.js";import"./useButton-19451389.js";import"./OverlayArrow-e051cb54.js";import"./context-dada6add.js";import"./Info-a69ac5e9.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
