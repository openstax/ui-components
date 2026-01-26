import{s as d,a as e,F as i,j as n}from"./index.aaee157d.js";import{R as o}from"./Radio.79764603.js";import"./theme.63888eb2.js";import"./palette.5e342580.js";import"./Tooltip.e97e97fb.js";import"./Button.module.328f2f63.js";import"./useFocusRing.module.6dbbc871.js";import"./context.module.c9f8d907.js";import"./useButton.module.86742081.js";import"./OverlayArrow.module.5928fc6c.js";import"./Info.bdc3099f.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
