import{s as r,a as e,F as i,j as n}from"./index.138f16c0.js";import{R as o}from"./Radio.211deba3.js";import"./theme.9c043cb5.js";import"./palette.15e4d008.js";import"./Tooltip.6ba2d0e1.js";import"./OverlayArrow.module.8069ace3.js";import"./context.module.936e6ffd.js";import"./useButton.module.a12bdf73.js";import"./Info.19cd329c.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
