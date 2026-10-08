import{s as n,j as e,F as d,a as o}from"./index-79db3132.js";import{R as i}from"./Radio-c77af460.js";import"./Tooltip-9c15b929.js";import"./Button-ab50370a.js";import"./useFocusRing-3a71dbcd.js";import"./Hidden-e12ebbb3.js";import"./useFocusable-b16fea34.js";import"./useButton-5e799b05.js";import"./OverlayArrow-c18358f2.js";import"./context-19590b2d.js";import"./Info-fdd75a88.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
