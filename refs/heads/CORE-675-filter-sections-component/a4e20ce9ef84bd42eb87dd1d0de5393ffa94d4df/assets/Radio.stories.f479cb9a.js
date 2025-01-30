import{s as d,a as e,F as i,j as n}from"./index.b7b59507.js";import{R as o}from"./Radio.8289a74f.js";import"./theme.3033274c.js";import"./palette.15e4d008.js";import"./Tooltip.e6325866.js";import"./OverlayArrow.module.13bdc476.js";import"./context.module.cf3b66aa.js";import"./Hidden.module.bb5923bb.js";import"./useButton.module.03fa51ca.js";import"./Info.25f3ece1.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
