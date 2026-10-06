import{s as n,j as e,F as d,a as o}from"./index-69fd5b71.js";import{R as i}from"./Radio-41ef279a.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-1f6219d9.js";import"./Button-fb520109.js";import"./useFocusRing-cd15878b.js";import"./Hidden-23441427.js";import"./useFocusable-8f9f8147.js";import"./useButton-4d79e005.js";import"./OverlayArrow-74b47b93.js";import"./context-edde9ee0.js";import"./useControlledState-f03982eb.js";import"./Info-22632fcb.js";const l=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(l,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),j=()=>e(d,{children:a({name:"default"})}),y=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),r=t=>o(l,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),L=()=>o(d,{children:[r({name:"disabled"}),r({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{j as Default,L as Disabled,y as WithTooltip};
