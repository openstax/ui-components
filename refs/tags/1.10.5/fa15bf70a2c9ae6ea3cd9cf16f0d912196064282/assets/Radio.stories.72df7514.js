import{s as r,a as e,F as i,j as n}from"./index.f6f0c2a4.js";import{R as o}from"./Radio.e343552f.js";import"./theme.b3f8847e.js";import"./palette.15e4d008.js";import"./Tooltip.f52b789b.js";import"./OverlayArrow.module.412dec9d.js";import"./focusSafely.module.940a7efd.js";import"./context.module.53086bd7.js";import"./Info.a7a07b3c.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
