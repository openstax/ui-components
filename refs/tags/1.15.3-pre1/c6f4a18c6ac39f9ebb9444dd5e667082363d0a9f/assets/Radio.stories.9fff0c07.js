import{s as r,a as e,F as i,j as n}from"./index.21e3657a.js";import{R as o}from"./Radio.d8e04c6d.js";import"./theme.0a759f82.js";import"./palette.15e4d008.js";import"./Tooltip.97c4a434.js";import"./OverlayArrow.module.2013dc1b.js";import"./context.module.a1df228b.js";import"./useButton.module.73fabe67.js";import"./Info.f19d6a80.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
