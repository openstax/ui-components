import{s as d,a as e,F as i,j as n}from"./index.81d014d3.js";import{R as o}from"./Radio.026c1d7f.js";import"./theme.58ffc3b2.js";import"./palette.15e4d008.js";import"./Tooltip.06f0ccd4.js";import"./Button.module.c2fdf0a4.js";import"./context.module.7e12a5da.js";import"./focusSafely.module.e3f23ed5.js";import"./useFocusRing.module.4b46cd86.js";import"./OverlayArrow.module.c54fee80.js";import"./Info.c30ef4e4.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
