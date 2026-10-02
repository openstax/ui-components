import{s as n,j as e,F as d,a as o}from"./index-4653a083.js";import{R as i}from"./Radio-4da1af76.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-3cb86bfa.js";import"./Button-3318b3a1.js";import"./useFocusRing-7995adfb.js";import"./Hidden-0425e482.js";import"./useFocusable-470de539.js";import"./useButton-e82ffc7f.js";import"./OverlayArrow-b4e1f368.js";import"./context-7ce95b15.js";import"./Info-2e0eca27.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
