import{s as d,a as e,F as i,j as n}from"./index.c24134f8.js";import{R as o}from"./Radio.22100298.js";import"./theme.b7e390e4.js";import"./palette.15e4d008.js";import"./Tooltip.20488a2f.js";import"./Button.module.0b1ffe81.js";import"./useFocusRing.module.2f28a506.js";import"./context.module.e21ee9c7.js";import"./useButton.module.5db3ce74.js";import"./OverlayArrow.module.75898e3f.js";import"./Info.ddeadf7d.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
