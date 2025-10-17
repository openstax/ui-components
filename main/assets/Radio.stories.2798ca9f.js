import{s as d,a as e,F as i,j as n}from"./index.426d7292.js";import{R as o}from"./Radio.a6d64046.js";import"./theme.3d086095.js";import"./palette.15e4d008.js";import"./Tooltip.45d06beb.js";import"./Button.module.ab9607a1.js";import"./useFocusRing.module.52097e1d.js";import"./context.module.0b5e77e5.js";import"./useButton.module.85c724bf.js";import"./OverlayArrow.module.73b017f2.js";import"./Info.eff55281.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
