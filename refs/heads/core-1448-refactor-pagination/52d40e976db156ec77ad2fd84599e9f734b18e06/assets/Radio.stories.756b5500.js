import{s as d,a as e,F as i,j as n}from"./index.bf911a0e.js";import{R as o}from"./Radio.26e533ad.js";import"./theme.612ebb1c.js";import"./palette.15e4d008.js";import"./Tooltip.c31366aa.js";import"./Button.module.65c1dfa7.js";import"./useFocusRing.module.67a70e0b.js";import"./context.module.430f6f83.js";import"./useButton.module.c5cb3fe6.js";import"./OverlayArrow.module.39160cf6.js";import"./Info.0e487e10.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
