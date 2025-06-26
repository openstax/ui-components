import{s as d,a as e,F as i,j as n}from"./index.98fd84f0.js";import{R as o}from"./Radio.8d7d9767.js";import"./theme.e882f7e9.js";import"./palette.15e4d008.js";import"./Tooltip.0731bfd7.js";import"./Button.module.bb2cb322.js";import"./useFocusRing.module.8717aa62.js";import"./context.module.d45076f2.js";import"./useButton.module.25ba33c2.js";import"./OverlayArrow.module.59544863.js";import"./Info.63d6ea1e.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
