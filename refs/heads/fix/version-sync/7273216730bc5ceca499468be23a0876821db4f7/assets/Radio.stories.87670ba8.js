import{s as r,a as e,F as i,j as n}from"./index.387e538a.js";import{R as o}from"./Radio.9945f943.js";import"./theme.ff878c73.js";import"./palette.15e4d008.js";import"./Tooltip.06934f18.js";import"./OverlayArrow.module.f3d1bb0e.js";import"./context.module.f875315d.js";import"./useButton.module.43466108.js";import"./Info.65bc2862.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
