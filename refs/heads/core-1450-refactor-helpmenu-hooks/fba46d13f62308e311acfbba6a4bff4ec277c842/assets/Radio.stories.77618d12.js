import{s as d,a as e,F as i,j as n}from"./index.5f6ba33b.js";import{R as o}from"./Radio.01307143.js";import"./theme.f7db6ace.js";import"./palette.15e4d008.js";import"./Tooltip.99eca933.js";import"./Button.module.2de91788.js";import"./useFocusRing.module.56d9189e.js";import"./context.module.3f1410c3.js";import"./useButton.module.916752e7.js";import"./OverlayArrow.module.eb801e1c.js";import"./Info.b4011b4e.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
