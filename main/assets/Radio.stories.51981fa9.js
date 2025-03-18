import{s as r,a as e,F as i,j as n}from"./index.a687c703.js";import{R as o}from"./Radio.c01c8c27.js";import"./theme.3c54ad33.js";import"./palette.15e4d008.js";import"./Tooltip.1e238853.js";import"./OverlayArrow.module.d6bedcd3.js";import"./context.module.56018962.js";import"./useButton.module.4a144fbd.js";import"./Info.d75308d8.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
