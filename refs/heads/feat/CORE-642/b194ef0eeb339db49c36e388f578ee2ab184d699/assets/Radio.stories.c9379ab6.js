import{s as r,a as e,F as i,j as n}from"./index.d131bfb1.js";import{R as o}from"./Radio.aa919007.js";import"./theme.7879de4e.js";import"./palette.15e4d008.js";import"./Tooltip.eaea2707.js";import"./OverlayArrow.module.546326da.js";import"./context.module.c6a5520e.js";import"./useButton.module.8863c5c2.js";import"./Info.2b1a7d09.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
