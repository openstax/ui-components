import{s as n,j as e,F as d,a as o}from"./index-8705850e.js";import{R as i}from"./Radio-1a9abec2.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-a234320c.js";import"./Button-4e03cfbb.js";import"./useFocusRing-5f0c7ce9.js";import"./Hidden-8dcbc110.js";import"./useFocusable-052501e6.js";import"./useButton-6f823dd6.js";import"./OverlayArrow-e11ba376.js";import"./context-140cfb81.js";import"./Info-50d193fa.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
