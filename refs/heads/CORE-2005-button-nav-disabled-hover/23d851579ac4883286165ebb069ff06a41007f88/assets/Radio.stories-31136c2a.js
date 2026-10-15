import{s as n,a as e,F as d,j as o}from"./index-8b1be831.js";import{R as i}from"./Radio-661a43d1.js";import"./Tooltip-e233057f.js";import"./Button-7523d634.js";import"./useFocusRing-3fbcc172.js";import"./Hidden-0b8ad65b.js";import"./useFocusable-b7cd9fec.js";import"./useButton-9efb52be.js";import"./OverlayArrow-f117415e.js";import"./context-8bbb4d0d.js";import"./useControlledState-f38e15a3.js";import"./Info-fca8bb3e.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
