import{s as n,a as e,F as d,j as o}from"./index-0999b75c.js";import{R as i}from"./Radio-7ccf8512.js";import"./Tooltip-fc635999.js";import"./Button-6b2813f6.js";import"./useFocusRing-15c1388b.js";import"./Hidden-71712740.js";import"./useFocusable-4883a8fe.js";import"./useButton-84bcc66a.js";import"./OverlayArrow-8071e519.js";import"./context-8ae95274.js";import"./useControlledState-067a2a37.js";import"./Info-b5a1e9d0.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
