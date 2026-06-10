import{s as l,a as t,F as w,j as o,R as y}from"./index.6631f99d.js";import"./theme.469067e1.js";import"./Tooltip.7c5dd9ea.js";/* empty css              */import{C as v}from"./Checkbox.084e3d11.js";const m=l.label`
  display: flex;
  flex-direction: column;
  flex: 0;
  justify-content: stretch;
`,x=l.span`
  white-space: nowrap;
  font-weight: bold;
  display: block;
`,j=l.p`
  font-style: italic;
  margin: 0;
  padding: 0;
`,f=({value:d,...a})=>d?t(j,{...a,children:d}):null,u=d=>d.show?t(w,{children:"*"}):null,p=l.input`
  flex: 1;
  justify-content: stretch;
`,I=l.div`
  flex-direction: row;
  display: flex;
`,H=({label:d,addon:a,help:s,transformValue:r,wrapperProps:c,onChangeValue:e,...n})=>o(m,{...c,children:[o(x,{children:[t(u,{show:n.required}),d,":"]}),o(I,{children:[t(p,{type:"text",...n,onChange:i=>{var h;e==null||e(r?r(i.target.value):i.target.value),(h=n.onChange)==null||h.call(n,i)}}),a]}),t(f,{value:s})]});l.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;l(x)`
  white-space: normal;
`;const R=l.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`,F=l.p`
  color: #C22032;
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
  line-height: 2.5rem;
`,L=({label:d,help:a,wrapperProps:s,error:r,onChangeValue:c,...e})=>o(m,{...s,children:[t(R,{children:t(v,{...e,onChange:n=>{var i;c==null||c(!!n.target.checked),(i=e.onChange)==null||i.call(e,n)},children:o(x,{children:[t(u,{show:e.required}),d]})})}),t(f,{value:a}),r!==void 0&&t(w,{children:r.map((n,i)=>t(F,{children:n},i))})]}),b=l(m)`
  datalist {
    display: flex;
    justify-content: space-between;
    writing-mode:unset;
    flex-direction: row;
    padding: 0 1em;

    option {
      width: 0;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
`,N=({label:d,help:a,wrapperProps:s,onChangeValue:r,labels:c,...e})=>{const n=y.useMemo(()=>`datalist-${Math.random().toString(36).substring(2,15)}`,[]);return o(b,{...s,children:[o(x,{children:[t(u,{show:e.required}),d,":"]}),t("input",{type:"range",...e,list:c&&c.length>0?n:void 0,onChange:i=>{var g;const h=parseFloat(i.target.value);r==null||r(isNaN(h)?void 0:h),(g=e.onChange)==null||g.call(e,i)}}),c&&c.length>0&&t("datalist",{id:n,children:c.map(i=>t("option",{value:i.value,label:i.label},i.value))}),t(f,{value:a})]})};export{L as C,N as R,H as T};
