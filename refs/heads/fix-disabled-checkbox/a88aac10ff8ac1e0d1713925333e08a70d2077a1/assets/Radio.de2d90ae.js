import{s,R as h,a as i,j as c}from"./index.c221f3cc.js";import{c as o}from"./theme.9307ba9a.js";import{$ as u,a as $,C as y}from"./Tooltip.08d23daf.js";const p=s.label`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: ${e=>e.isDisabled?o.palette.pale:"inherit"};
  width: 100%;
  position: relative;
`,d=s.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${o.palette.white};
  opacity: ${e=>e.isDisabled?"0.4":"1"};
  font: inherit;
  color: ${o.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid ${o.palette.neutralThin};
  border-radius: 50%;
  transform: translateY(-0.075em);
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    opacity: 0;
    box-shadow: inset 1em 1em ${o.palette.mediumBlue};
  }

  &:checked::before {
    opacity: ${e=>e.isDisabled?0:1};
  }
`,f=s.div`
  display: inline-block;
`,w=({children:e,disabled:t,labelAs:l,...a})=>{const r=u({delay:0}),n=h.useRef(null),{triggerProps:m,tooltipProps:b}=$({delay:0},r,n);return a.tooltipText?i("div",{children:i(f,{children:c(p,{ref:n,as:l,isDisabled:t,...m,children:[i(d,{type:"radio",onFocus:()=>r.open(),isDisabled:t,disabled:t,...a}),e,r.isOpen&&i(y,{state:r,...b,placement:"right",children:a.tooltipText})]})})}):c(p,{isDisabled:t,as:l,children:[i(d,{type:"radio",isDisabled:t,disabled:t,...a}),e]})};export{w as R};
