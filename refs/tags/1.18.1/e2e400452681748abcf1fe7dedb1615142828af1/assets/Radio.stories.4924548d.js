import{s as d,a as e,F as i,j as n}from"./index.f27f02f2.js";import{R as o}from"./Radio.fe921e3f.js";import"./theme.303d042c.js";import"./palette.15e4d008.js";import"./Tooltip.abb2010c.js";import"./Button.module.8ffa74cb.js";import"./useFocusRing.module.946c9a1a.js";import"./context.module.c986e5cb.js";import"./useButton.module.156c415a.js";import"./OverlayArrow.module.bce4c807.js";import"./Info.27218177.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
