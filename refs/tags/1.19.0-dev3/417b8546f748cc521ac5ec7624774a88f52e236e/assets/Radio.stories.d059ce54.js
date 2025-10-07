import{s as d,a as e,F as i,j as n}from"./index.d9ca2166.js";import{R as o}from"./Radio.a7d9674b.js";import"./theme.3edf69de.js";import"./palette.15e4d008.js";import"./Tooltip.82625b8e.js";import"./Button.module.5b17e375.js";import"./useFocusRing.module.f46e2d00.js";import"./context.module.9c666556.js";import"./useButton.module.3a89c2ab.js";import"./OverlayArrow.module.f66310ff.js";import"./Info.c29e1675.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
