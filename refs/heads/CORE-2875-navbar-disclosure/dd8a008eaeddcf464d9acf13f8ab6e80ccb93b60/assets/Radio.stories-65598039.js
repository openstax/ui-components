import{s as n,a as e,F as d,j as o}from"./index-9fa372e2.js";import{R as i}from"./Radio-1cdd8003.js";import"./Tooltip-dbdc6fc8.js";import"./Button-62a86978.js";import"./useFocusRing-b04b7fd9.js";import"./Hidden-4e96534d.js";import"./useFocusable-fa2ccb33.js";import"./useButton-df90484e.js";import"./OverlayArrow-dc7a3584.js";import"./context-0c7f66df.js";import"./useControlledState-f2d774c0.js";import"./Info-57e59be7.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
