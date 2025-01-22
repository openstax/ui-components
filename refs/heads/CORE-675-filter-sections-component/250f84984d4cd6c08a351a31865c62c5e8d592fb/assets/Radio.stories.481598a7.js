import{s as d,a as e,F as i,j as n}from"./index.2bb00806.js";import{R as o}from"./Radio.9c3dcf93.js";import"./theme.c213f6fd.js";import"./palette.15e4d008.js";import"./Tooltip.693247be.js";import"./OverlayArrow.module.316baabc.js";import"./context.module.ededdc29.js";import"./Hidden.module.ec00dca6.js";import"./useButton.module.dbd6cbdd.js";import"./Info.709a9d10.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
