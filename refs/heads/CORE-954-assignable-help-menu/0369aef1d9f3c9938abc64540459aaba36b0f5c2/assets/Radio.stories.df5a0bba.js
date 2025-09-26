import{s as d,a as e,F as i,j as n}from"./index.5be0f26b.js";import{R as o}from"./Radio.01c2023f.js";import"./theme.88e7dbb5.js";import"./palette.15e4d008.js";import"./Tooltip.f697e3c2.js";import"./Button.module.4dde147c.js";import"./useFocusRing.module.6d335bc9.js";import"./context.module.39f6032a.js";import"./useButton.module.1f070060.js";import"./OverlayArrow.module.d4850431.js";import"./Info.32e5076f.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
