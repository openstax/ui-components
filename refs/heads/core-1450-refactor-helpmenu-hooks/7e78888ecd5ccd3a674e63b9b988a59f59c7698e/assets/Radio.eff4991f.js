import{s,R as h,a as i,j as c}from"./index.edfd0bba.js";import{c as a}from"./theme.ee3d3dc8.js";import{$ as u,a as $,C as y}from"./Tooltip.8bee1d36.js";const d=s.label`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: ${e=>e.isDisabled?a.palette.pale:"inherit"};
  width: 100%;
  position: relative;
`,p=s.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${a.palette.white};
  opacity: ${e=>e.isDisabled?"0.4":"1"};
  font: inherit;
  color: ${a.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid ${a.palette.neutralThin};
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
    box-shadow: inset 1em 1em ${a.palette.mediumBlue};
  }

  &:checked::before {
    opacity: ${e=>e.isDisabled?0:1};
  }
`,f=s.div`
  display: inline-block;
`,w=({children:e,disabled:t,labelAs:l,...o})=>{const r=u({delay:0}),n=h.useRef(null),{triggerProps:m,tooltipProps:b}=$({delay:0},r,n);return o.tooltipText?i("div",{children:i(f,{children:c(d,{ref:n,as:l,isDisabled:t,"aria-disabled":t,...m,children:[i(p,{type:"radio",onFocus:()=>r.open(),isDisabled:t,"aria-disabled":t,...o}),e,r.isOpen&&i(y,{state:r,...b,placement:"right",children:o.tooltipText})]})})}):c(d,{isDisabled:t,as:l,"aria-disabled":t,children:[i(p,{type:"radio",isDisabled:t,"aria-disabled":t,...o}),e]})};export{w as R};
