import{s as d,a as e,F as i,j as n}from"./index.b219e867.js";import{R as o}from"./Radio.ec44d839.js";import"./theme.cfbbe147.js";import"./palette.15e4d008.js";import"./Tooltip.39260a04.js";import"./Button.module.2f774b4e.js";import"./useFocusRing.module.15e3d93c.js";import"./context.module.2d6ae0a1.js";import"./useButton.module.251b3ad6.js";import"./OverlayArrow.module.d7d1e12e.js";import"./Info.edc24349.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
