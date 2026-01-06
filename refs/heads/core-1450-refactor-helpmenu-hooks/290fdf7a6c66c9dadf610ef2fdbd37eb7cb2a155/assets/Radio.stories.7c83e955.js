import{s as d,a as e,F as i,j as n}from"./index.9f98f890.js";import{R as o}from"./Radio.179cfd5d.js";import"./theme.94c332cc.js";import"./palette.15e4d008.js";import"./Tooltip.961256e4.js";import"./Button.module.33575a69.js";import"./useFocusRing.module.d2849c4d.js";import"./context.module.a4391884.js";import"./useButton.module.ffefb0a4.js";import"./OverlayArrow.module.0b63e44b.js";import"./Info.a75896c8.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
