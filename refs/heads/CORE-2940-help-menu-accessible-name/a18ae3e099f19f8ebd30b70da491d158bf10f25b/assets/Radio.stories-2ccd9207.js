import{s as n,j as e,F as d,a as o}from"./index-2e65f05b.js";import{R as i}from"./Radio-0c593090.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-41dcce81.js";import"./Button-7fb25889.js";import"./useFocusRing-3abf6e42.js";import"./Hidden-bdbc1592.js";import"./useFocusable-1417ef2d.js";import"./useButton-2464df1a.js";import"./OverlayArrow-187d9106.js";import"./context-6333154e.js";import"./Info-c93bc253.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
