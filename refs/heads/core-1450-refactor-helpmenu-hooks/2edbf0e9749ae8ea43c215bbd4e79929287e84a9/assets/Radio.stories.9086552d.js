import{s as d,a as e,F as i,j as n}from"./index.d72593e4.js";import{R as o}from"./Radio.c36499bf.js";import"./theme.1a6b3730.js";import"./palette.15e4d008.js";import"./Tooltip.c6b8fbc2.js";import"./Button.module.cedd04d0.js";import"./useFocusRing.module.beacb981.js";import"./context.module.725f905a.js";import"./useButton.module.6e359bc9.js";import"./OverlayArrow.module.6089414e.js";import"./Info.769c8132.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
