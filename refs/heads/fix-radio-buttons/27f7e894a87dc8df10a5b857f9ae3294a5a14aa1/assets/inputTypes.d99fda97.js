import{s as l,a as t,F as w,j as s,R as y}from"./index.3d4d9294.js";import"./Radio.e7ebe3d4.js";import{C as v}from"./Checkbox.24d9050c.js";const m=l.label`
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
`,f=({value:d,...a})=>d?t(j,{...a,children:d}):null,u=d=>d.show?t(w,{children:"*"}):null,I=l.input`
  flex: 1;
  justify-content: stretch;
`,R=l.div`
  flex-direction: row;
  display: flex;
`,E=({label:d,addon:a,help:o,transformValue:r,wrapperProps:c,onChangeValue:e,...n})=>s(m,{...c,children:[s(x,{children:[t(u,{show:n.required}),d,":"]}),s(R,{children:[t(I,{type:"text",...n,onChange:i=>{var h;e==null||e(r?r(i.target.value):i.target.value),(h=n.onChange)==null||h.call(n,i)}}),a]}),t(f,{value:o})]});l.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;l(x)`
  white-space: normal;
`;const b=l.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`,k=l.p`
  color: #C22032;
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
  line-height: 2.5rem;
`,M=({label:d,help:a,wrapperProps:o,error:r,onChangeValue:c,...e})=>s(m,{...o,children:[t(b,{children:t(v,{...e,onChange:n=>{var i;c==null||c(!!n.target.checked),(i=e.onChange)==null||i.call(e,n)},children:s(x,{children:[t(u,{show:e.required}),d]})})}),t(f,{value:a}),r!==void 0&&t(w,{children:r.map((n,i)=>t(k,{children:n},i))})]}),F=l(m)`
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
`,H=({label:d,help:a,wrapperProps:o,onChangeValue:r,labels:c,...e})=>{const n=y.useMemo(()=>`datalist-${Math.random().toString(36).substring(2,15)}`,[]);return s(F,{...o,children:[s(x,{children:[t(u,{show:e.required}),d,":"]}),t("input",{type:"range",...e,list:c&&c.length>0?n:void 0,onChange:i=>{var g;const h=Number(i.target.value);r==null||r(h),(g=e.onChange)==null||g.call(e,i)}}),c&&c.length>0&&t("datalist",{id:n,children:c.map(i=>t("option",{value:i.value,label:i.label},i.value))}),t(f,{value:a})]})};export{M as C,H as R,E as T};
