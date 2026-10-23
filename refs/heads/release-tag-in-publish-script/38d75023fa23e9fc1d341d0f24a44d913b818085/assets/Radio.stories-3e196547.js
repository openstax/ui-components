import{s as n,a as e,F as d,j as o}from"./index-5dad55cf.js";import{R as i}from"./Radio-c1fe6727.js";import"./Tooltip-257683d0.js";import"./Button-c544bff8.js";import"./useFocusRing-0187669a.js";import"./Hidden-894c3afe.js";import"./useFocusable-2066db17.js";import"./useButton-8937e8e9.js";import"./OverlayArrow-eecc1dd8.js";import"./context-ddc8e597.js";import"./useControlledState-6aacb797.js";import"./Info-9d148834.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
