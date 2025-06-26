import{s as d,a as e,F as i,j as n}from"./index.c92cacfb.js";import{R as o}from"./Radio.af26c696.js";import"./theme.f459f3be.js";import"./palette.15e4d008.js";import"./Tooltip.990cd13a.js";import"./Button.module.7c522c32.js";import"./useFocusRing.module.f7f4ef25.js";import"./context.module.81838618.js";import"./useButton.module.ef5aeffa.js";import"./OverlayArrow.module.573d4a7c.js";import"./Info.da7f0e7c.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
