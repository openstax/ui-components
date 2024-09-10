import{s as r,a as e,F as i,j as n}from"./index.c856cedd.js";import{R as o}from"./Radio.d8748d85.js";import"./theme.84cc74f0.js";import"./palette.15e4d008.js";import"./Tooltip.cb4fcc3f.js";import"./OverlayArrow.module.157557f1.js";import"./focusSafely.module.f666e2ed.js";import"./context.module.4158097e.js";import"./Info.187e0064.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
