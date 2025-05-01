import{s as r,a as e,F as i,j as n}from"./index.f6407646.js";import{R as o}from"./Radio.666986c7.js";import"./theme.b1569579.js";import"./palette.15e4d008.js";import"./Tooltip.325f1b2a.js";import"./OverlayArrow.module.b0c27bf1.js";import"./context.module.9b8881af.js";import"./useButton.module.40085501.js";import"./Info.fac7f145.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
