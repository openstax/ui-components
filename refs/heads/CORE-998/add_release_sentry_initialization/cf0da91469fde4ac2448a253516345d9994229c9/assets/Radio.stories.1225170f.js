import{s as d,a as e,F as i,j as n}from"./index.adf085fa.js";import{R as o}from"./Radio.b28f828e.js";import"./theme.608fa8d7.js";import"./palette.15e4d008.js";import"./Tooltip.28255be2.js";import"./Button.module.7614afc9.js";import"./useFocusRing.module.55fcfc9f.js";import"./context.module.5e648b33.js";import"./useButton.module.e4b5f1aa.js";import"./OverlayArrow.module.b937a485.js";import"./Info.4b152671.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
