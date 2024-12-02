import{s as r,a as e,F as i,j as n}from"./index.9b4d0b0c.js";import{R as o}from"./Radio.35384702.js";import"./theme.4c0edb2c.js";import"./palette.15e4d008.js";import"./Tooltip.37e8df02.js";import"./OverlayArrow.module.6b37123e.js";import"./focusSafely.module.f27b7bd6.js";import"./context.module.dcbfd98d.js";import"./Info.e1655112.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
