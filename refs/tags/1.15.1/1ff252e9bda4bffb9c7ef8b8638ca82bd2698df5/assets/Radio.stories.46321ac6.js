import{s as r,a as e,F as i,j as n}from"./index.c4ccf2f7.js";import{R as o}from"./Radio.b2d873ee.js";import"./theme.702baa9f.js";import"./palette.15e4d008.js";import"./Tooltip.fd8f8d15.js";import"./OverlayArrow.module.631996cd.js";import"./context.module.8c7ca040.js";import"./useButton.module.4efb775d.js";import"./Info.7997ca52.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
