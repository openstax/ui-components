import{s as n,j as e,F as d,a as o}from"./index-8d70f20b.js";import{R as i}from"./Radio-9ab1faa2.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-3ede4469.js";import"./Button-4191f8e2.js";import"./useFocusRing-73571b20.js";import"./Hidden-bc5e3db7.js";import"./useFocusable-b85a5788.js";import"./useButton-8205b163.js";import"./OverlayArrow-cbd79bc4.js";import"./context-286df89d.js";import"./Info-a6d87b5d.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
