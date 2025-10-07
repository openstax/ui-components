import{s as d,a as e,F as i,j as n}from"./index.3e02da38.js";import{R as o}from"./Radio.02623046.js";import"./theme.92b14b32.js";import"./palette.15e4d008.js";import"./Tooltip.0759ac38.js";import"./Button.module.ab75db5d.js";import"./useFocusRing.module.0087e0fb.js";import"./context.module.0861e9bf.js";import"./useButton.module.72fe30f5.js";import"./OverlayArrow.module.2b6ff940.js";import"./Info.606d11f5.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
