import{s as n,a as e,F as d,j as o}from"./index.335a09ea.js";import{R as i}from"./Radio.389326d5.js";import"./theme.a46833aa.js";import"./palette.5e342580.js";import"./Tooltip.b9cef438.js";import"./Button.module.726ed212.js";import"./useFocusRing.module.f42953aa.js";import"./context.module.60478231.js";import"./useButton.module.e5fdf239.js";import"./OverlayArrow.module.bdbd55e5.js";import"./Info.c45978d4.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
