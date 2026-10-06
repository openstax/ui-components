import{s as n,a as e,F as d,j as o}from"./index-4d6c4f8c.js";import{R as i}from"./Radio-cdf98650.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-55d59612.js";import"./Button-ca1f2bd9.js";import"./useFocusRing-a7cd3a27.js";import"./Hidden-43175525.js";import"./useFocusable-269aa80a.js";import"./useButton-4d486feb.js";import"./OverlayArrow-81b742d8.js";import"./context-eb5769ec.js";import"./Info-86e7d52a.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
