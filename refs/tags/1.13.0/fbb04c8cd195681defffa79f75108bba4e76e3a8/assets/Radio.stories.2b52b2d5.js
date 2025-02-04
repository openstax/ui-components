import{s as d,a as e,F as i,j as n}from"./index.4dc41d0a.js";import{R as o}from"./Radio.31d990e1.js";import"./theme.c9759b1d.js";import"./palette.15e4d008.js";import"./Tooltip.c75f10b0.js";import"./OverlayArrow.module.3afa6f58.js";import"./context.module.eb0c2ddb.js";import"./Hidden.module.8d8ddbd2.js";import"./useButton.module.d9881f35.js";import"./Info.b6c20695.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
