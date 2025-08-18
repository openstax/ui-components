import{s as d,a as e,F as i,j as n}from"./index.ce0241c7.js";import{R as o}from"./Radio.0101b0a1.js";import"./theme.d797b6bd.js";import"./palette.15e4d008.js";import"./Tooltip.c857f948.js";import"./Button.module.c59fa80d.js";import"./useFocusRing.module.1ae2676e.js";import"./context.module.bc4f193c.js";import"./useButton.module.bac1c261.js";import"./OverlayArrow.module.b9376811.js";import"./Info.9afe181b.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
