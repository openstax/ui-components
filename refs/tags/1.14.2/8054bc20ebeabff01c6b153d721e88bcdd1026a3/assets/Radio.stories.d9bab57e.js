import{s as r,a as e,F as i,j as n}from"./index.351ad153.js";import{R as o}from"./Radio.a7393835.js";import"./theme.af08cd70.js";import"./palette.15e4d008.js";import"./Tooltip.7fb0b0df.js";import"./OverlayArrow.module.aa931928.js";import"./context.module.52ad8793.js";import"./useButton.module.ebf3f87b.js";import"./Info.6b4bad2c.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
