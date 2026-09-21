import{s as n,j as e,F as d,a as o}from"./index-6cd24583.js";import{R as i}from"./Radio-f13271c6.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-c2a8b686.js";import"./Button-83711127.js";import"./useFocusRing-136035f6.js";import"./Hidden-b56be6cb.js";import"./useFocusable-cb4a8080.js";import"./useButton-dc0bede6.js";import"./OverlayArrow-949d70c9.js";import"./context-32821ff3.js";import"./Info-f2db1fd4.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
