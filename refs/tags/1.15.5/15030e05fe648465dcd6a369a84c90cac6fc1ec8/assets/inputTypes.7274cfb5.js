import{s as n,a as e,F as m,j as o}from"./index.cf24ef3b.js";import"./Radio.f4bfe224.js";import{C as g}from"./Checkbox.42e357e8.js";const f=n.label`
  display: flex;
  flex-direction: column;
  flex: 0;
  justify-content: stretch;
`,x=n.span`
  white-space: nowrap;
  font-weight: bold;
  display: block;
`,b=n.p`
  font-style: italic;
  margin: 0;
  padding: 0;
`,w=({value:c,...r})=>c?e(b,{...r,children:c}):null,y=c=>c.show?e(m,{children:"*"}):null,u=n.input`
  flex: 1;
  justify-content: stretch;
`,v=n.div`
  flex-direction: row;
  display: flex;
`,p=({label:c,addon:r,help:a,transformValue:d,wrapperProps:s,onChangeValue:i,...t})=>o(f,{...s,children:[o(x,{children:[e(y,{show:t.required}),c,":"]}),o(v,{children:[e(u,{type:"text",...t,onChange:l=>{var h;i==null||i(d?d(l.target.value):l.target.value),(h=t.onChange)==null||h.call(t,l)}}),r]}),e(w,{value:a})]});n.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;n(x)`
  white-space: normal;
`;const j=n.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`,k=n.p`
  color: #C22032;
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
  line-height: 2.5rem;
`,q=({label:c,help:r,wrapperProps:a,error:d,onChangeValue:s,...i})=>o(f,{...a,children:[e(j,{children:e(g,{...i,onChange:t=>{var l;s==null||s(!!t.target.checked),(l=i.onChange)==null||l.call(i,t)},children:o(x,{children:[e(y,{show:i.required}),c]})})}),e(w,{value:r}),d!==void 0&&e(m,{children:d.map((t,l)=>e(k,{children:t},l))})]});export{q as C,p as T};
