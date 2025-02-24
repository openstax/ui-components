import{s as r,a as e,F as i,j as n}from"./index.8fe62a17.js";import{R as o}from"./Radio.292915dd.js";import"./theme.c464173e.js";import"./palette.15e4d008.js";import"./Tooltip.1be0cce9.js";import"./OverlayArrow.module.304043fd.js";import"./context.module.8d34bf6b.js";import"./useButton.module.e6e6272d.js";import"./Info.2e2d7559.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
