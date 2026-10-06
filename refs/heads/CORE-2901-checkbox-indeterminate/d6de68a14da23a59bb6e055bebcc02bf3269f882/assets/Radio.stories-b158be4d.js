import{s as n,j as e,F as d,a as o}from"./index-99492966.js";import{R as i}from"./Radio-4e4acc83.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-650ba0e7.js";import"./Button-7077bd61.js";import"./useFocusRing-b5523d99.js";import"./Hidden-cc69ff6f.js";import"./useFocusable-b90e5423.js";import"./useButton-ffda9389.js";import"./OverlayArrow-40a86248.js";import"./context-9859bd03.js";import"./Info-3a72a880.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
