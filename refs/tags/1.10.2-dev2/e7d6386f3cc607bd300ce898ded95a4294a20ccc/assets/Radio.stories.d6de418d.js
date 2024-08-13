import{s as r,a as e,F as i,j as n}from"./index.3d148387.js";import{R as o}from"./Radio.25398626.js";import"./theme.d76f2835.js";import"./palette.15e4d008.js";import"./Tooltip.b154fbc3.js";import"./OverlayArrow.module.b9e8dd3a.js";import"./focusSafely.module.d31aa75a.js";import"./context.module.13958d8e.js";import"./Info.9a6a3820.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
