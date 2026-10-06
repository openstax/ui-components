import{s as n,j as e,F as d,a as o}from"./index-36cf09c5.js";import{R as i}from"./Radio-930ef28b.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-71f9d51a.js";import"./Button-0f87e7e0.js";import"./useFocusRing-fe0b982a.js";import"./Hidden-d77e5871.js";import"./useFocusable-c877227f.js";import"./useButton-92823e83.js";import"./OverlayArrow-c392d144.js";import"./context-0e58bf2f.js";import"./Info-fd72f4f6.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
