import{s as r,a as e,F as i,j as n}from"./index.4b21b723.js";import{R as o}from"./Radio.277829e7.js";import"./theme.978df267.js";import"./palette.15e4d008.js";import"./Tooltip.7c04ceb9.js";import"./OverlayArrow.module.706f6a23.js";import"./context.module.96d77dc9.js";import"./useButton.module.69d464ce.js";import"./Info.b7a02ec0.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
