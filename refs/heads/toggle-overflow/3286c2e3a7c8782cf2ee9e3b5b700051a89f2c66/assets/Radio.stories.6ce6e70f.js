import{s as r,a as e,F as i,j as n}from"./index.d4bf6f6b.js";import{R as o}from"./Radio.476dbc49.js";import"./theme.52d30849.js";import"./palette.15e4d008.js";import"./Tooltip.949316e1.js";import"./OverlayArrow.module.b180a009.js";import"./context.module.8ff13914.js";import"./useButton.module.c2f72db2.js";import"./Info.93e926df.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
