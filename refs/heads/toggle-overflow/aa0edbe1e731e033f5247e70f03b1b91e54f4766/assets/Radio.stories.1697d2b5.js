import{s as r,a as e,F as i,j as n}from"./index.99257185.js";import{R as o}from"./Radio.77c9297f.js";import"./theme.7e62e81a.js";import"./palette.15e4d008.js";import"./Tooltip.80ffa758.js";import"./OverlayArrow.module.d463c7d1.js";import"./context.module.13096a75.js";import"./useButton.module.57cc30ee.js";import"./Info.494107c6.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
