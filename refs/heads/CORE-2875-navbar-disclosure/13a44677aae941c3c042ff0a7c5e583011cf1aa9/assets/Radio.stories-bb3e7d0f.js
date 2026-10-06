import{s as n,j as e,F as d,a as o}from"./index-5a01020d.js";import{R as i}from"./Radio-f81196d5.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-378d2df8.js";import"./Button-ca93341a.js";import"./useFocusRing-491fec9b.js";import"./Hidden-8420d453.js";import"./useFocusable-bdbce92b.js";import"./useButton-0ccf2193.js";import"./OverlayArrow-63df6f6e.js";import"./context-8fa83c5a.js";import"./useControlledState-90b361a9.js";import"./Info-a4b5af19.js";const l=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(l,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),j=()=>e(d,{children:a({name:"default"})}),y=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),r=t=>o(l,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),L=()=>o(d,{children:[r({name:"disabled"}),r({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{j as Default,L as Disabled,y as WithTooltip};
