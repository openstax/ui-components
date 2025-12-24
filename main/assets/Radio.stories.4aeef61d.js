import{s as d,a as e,F as i,j as n}from"./index.bcda88da.js";import{R as o}from"./Radio.52f519da.js";import"./theme.74e519f3.js";import"./palette.15e4d008.js";import"./Tooltip.c50fb814.js";import"./Button.module.476bc5e8.js";import"./useFocusRing.module.a25ff0b2.js";import"./context.module.2144c9f3.js";import"./useButton.module.2f77204d.js";import"./OverlayArrow.module.5829fc41.js";import"./Info.8e4b7718.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
