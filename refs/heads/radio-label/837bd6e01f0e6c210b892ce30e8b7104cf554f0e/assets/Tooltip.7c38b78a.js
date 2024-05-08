import{a as e,s as d,j as i}from"./index.08426613.js";import{c as o}from"./theme.a8483983.js";import{c as s,d as m,e as g,f as n,g as h,h as p}from"./module.e0675674.js";const f=r=>e("svg",{width:"12",height:"13",viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:e("path",{d:"M6 0.180664C2.68652 0.180664 0 2.86816 0 6.18066C0 9.49511 2.68652 12.1807 6 12.1807C9.31348 12.1807 12 9.49511 12 6.18066C12 2.86816 9.31348 0.180664 6 0.180664ZM6 2.84195C6.56119 2.84195 7.01613 3.29689 7.01613 3.85808C7.01613 4.41928 6.56119 4.87421 6 4.87421C5.43881 4.87421 4.98387 4.41928 4.98387 3.85808C4.98387 3.29689 5.43881 2.84195 6 2.84195ZM7.35484 8.98712C7.35484 9.14745 7.22485 9.27744 7.06452 9.27744H4.93548C4.77515 9.27744 4.64516 9.14745 4.64516 8.98712V8.40647C4.64516 8.24614 4.77515 8.11615 4.93548 8.11615H5.22581V6.56776H4.93548C4.77515 6.56776 4.64516 6.43777 4.64516 6.27744V5.69679C4.64516 5.53646 4.77515 5.40647 4.93548 5.40647H6.48387C6.6442 5.40647 6.77419 5.53646 6.77419 5.69679V8.11615H7.06452C7.22485 8.11615 7.35484 8.24614 7.35484 8.40647V8.98712Z",fill:"#959595"})}),l=`
  box-shadow: 0 0.8rem 2rem rgba(0 0 0 / 0.1);
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  background: ${o.palette.white};
  color: ${o.palette.neutralThin};
  outline: none;
  padding: 1rem;
  /* fixes FF gap */
  transform: translate3d(0, 0, 0);
  position: absolute;
  min-width: 24rem;
  z-index: 1000;

  &[data-placement=top] {
    margin-bottom: 0.8rem;
    --origin: translateY(0.4rem);
  }

  &[data-placement=bottom] {
    margin-top: 0.8rem;
    top: 50%;
    --origin: translateY(-0.4rem);
    & .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement=right] {
    left: 100%;
    margin-left: 0.8rem;
    --origin: translateX(-0.4rem);
    & .react-aria-OverlayArrow {
      top: 50%;
      svg {
        transform: rotate(90deg);
      }
    }
  }

  &[data-placement=left] {
    margin-right: 0.8rem;
    --origin: translateX(0.4rem);
    & .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }

  & .react-aria-OverlayArrow svg {
    display: block;
    fill: ${o.palette.white};
  }
`,$=d(s)`${l}`,b=d.div`
  ${l}  
`,w=d(m)`
  border: none;
  padding: 0;
  margin-left: 0.4rem;
  display: flex;
  background-color: inherit;
`,u=({children:r,placement:t,icon:a,...c})=>i(g,{delay:0,children:[e(w,{children:a?e("img",{src:a,"aria-hidden":!0,alt:""}):e(f,{"aria-hidden":!0})}),i($,{...c,placement:t,children:[e(n,{children:e("svg",{width:8,height:8,viewBox:"0 0 8 8",children:e("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})}),r]})]}),y=({state:r,...t})=>{const{tooltipProps:a}=h(t,r);return i(b,{"data-placement":t.placement,...p(t,a),children:[t.children,e(n,{...t,children:e("svg",{width:8,height:8,viewBox:"0 0 8 8",children:e("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})})]})};export{y as C,u as T};
