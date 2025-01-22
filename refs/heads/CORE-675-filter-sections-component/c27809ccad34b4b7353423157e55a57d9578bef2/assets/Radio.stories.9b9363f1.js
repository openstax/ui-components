import{s as d,a as e,F as i,j as n}from"./index.5e3a4e7f.js";import{R as o}from"./Radio.deac2d78.js";import"./theme.72849a34.js";import"./palette.15e4d008.js";import"./Tooltip.4953cb6a.js";import"./OverlayArrow.module.80bb2373.js";import"./context.module.f7c9ee8b.js";import"./Hidden.module.47821102.js";import"./useButton.module.26d54303.js";import"./Info.bc159bd7.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
