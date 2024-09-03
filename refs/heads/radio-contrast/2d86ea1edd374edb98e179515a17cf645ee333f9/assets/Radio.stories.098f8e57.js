import{s as r,a as e,F as i,j as n}from"./index.09151c94.js";import{R as o}from"./Radio.814d8380.js";import"./theme.971b19dd.js";import"./palette.15e4d008.js";import"./Tooltip.f3c09ad0.js";import"./OverlayArrow.module.a5c8b3d8.js";import"./focusSafely.module.a09bebde.js";import"./context.module.bbb78e88.js";import"./Info.0315a4b4.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
