import{s as d,j as r,F as s,a as c}from"./index.7b00a96b.js";import{C as i}from"./inputTypes.906ad4dc.js";import"./Radio.0791fbaa.js";import"./theme.284ae27b.js";import"./palette.15e4d008.js";import"./Tooltip.e0f8cd4f.js";import"./OverlayArrow.module.277aed3e.js";import"./focusSafely.module.a0243702.js";import"./context.module.31d3f641.js";import"./Info.8aa2a9c0.js";import"./Checkbox.9bff05e2.js";const h=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,e=(t,m,a,o)=>r(h,{children:[r("h2",{children:["Size ",o]}),c(i,{error:t,label:m,variant:a,size:o,defaultChecked:!0}),c(i,{error:t,label:m,variant:a,size:o,defaultChecked:!0})]}),y=()=>r(s,{children:[e([],"Checkbox Label","primary",1.4),e([],"Checkbox Label","primary",1.6),e(void 0,"Checkbox Label","primary",1.8),e(void 0,"Checkbox Label","primary",2)]}),w=()=>r(s,{children:[e(["Error message goes here"],"Checkbox Label","error",1.4),e(["Error message goes here"],"Checkbox Label","error",1.6),e(["Error message goes here"],"Checkbox Label","error",1.8),e(["Error message goes here"],"Checkbox Label","error",2)]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as defaultCheckbox,w as errorCheckbox};
