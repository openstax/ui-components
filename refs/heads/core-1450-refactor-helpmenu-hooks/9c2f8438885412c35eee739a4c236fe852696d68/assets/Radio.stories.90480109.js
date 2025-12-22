import{s as d,a as e,F as i,j as n}from"./index.b11bfc39.js";import{R as o}from"./Radio.bb46aa40.js";import"./theme.2b93f1dd.js";import"./palette.15e4d008.js";import"./Tooltip.78f6cbfe.js";import"./Button.module.c3411fe9.js";import"./useFocusRing.module.881fbd5b.js";import"./context.module.cd75fb55.js";import"./useButton.module.61aebc55.js";import"./OverlayArrow.module.25e51d3f.js";import"./Info.67572616.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
