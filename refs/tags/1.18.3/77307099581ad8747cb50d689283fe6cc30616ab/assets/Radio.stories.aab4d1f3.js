import{s as d,a as e,F as i,j as n}from"./index.b5746b1a.js";import{R as o}from"./Radio.d5151842.js";import"./theme.91937cdd.js";import"./palette.15e4d008.js";import"./Tooltip.d180d9af.js";import"./Button.module.95aab1aa.js";import"./useFocusRing.module.a904b2f7.js";import"./context.module.808955ae.js";import"./useButton.module.b0e11eb9.js";import"./OverlayArrow.module.7326a520.js";import"./Info.54fbeea3.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
