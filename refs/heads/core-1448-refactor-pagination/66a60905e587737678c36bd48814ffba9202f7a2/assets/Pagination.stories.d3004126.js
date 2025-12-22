import{r as F,s as R,a,j as f,F as x,R as b}from"./index.db6776a4.js";import{p}from"./palette.15e4d008.js";function y(e,o){return o<e?[]:Array.from({length:o-e}).map((n,t)=>t+e)}function v(e){const{currentPage:o,totalPages:n,showFromEnd:t,showFromCurrent:i}=e,r=[Math.max(1,Math.min(o-i,n+1)),Math.min(n,o+i)+1],l=[1,Math.min(r[0],t+1)],s=[Math.max(1,r[1],n-t+1),n+1];return{startRange:l,middleRange:r,endRange:s}}function S(e,o,n){const t=Math.max(0,e[1]-e[0]),i=Math.max(0,o[1]-o[0]),r=Math.max(0,n[1]-n[0]),l=e[1]===o[0]?0:1,s=o[1]===n[0]?0:1;return t+i+r+l+s}function j(e,o,n){const{startRange:t,middleRange:i,endRange:r}=e,l=S(t,i,r);if(l>=n)return e;let s=n-l;const c=Math.floor(s/2),P=i[0]-t[1],m=r[0]-i[1],u=Math.min(P,m===0?s:m<s-c?s-m+1:c);s-=u;const w=Math.min(m,s),g=[Math.max(1,i[0]-u),Math.min(o+1,i[1]+w)],E=[t[0],Math.min(g[0],t[1])],C=[Math.max(g[1],r[0]),r[1]];return{startRange:E,middleRange:g,endRange:C}}function z(e){const{totalPages:o,showFromEnd:n,showFromCurrent:t}=e,i=n*2+t*2+1+2;let r=v(e);r=j(r,o,i);const{startRange:l,middleRange:s,endRange:c}=r;return{startRange:l,middleRange:s,endRange:c,showFirstEllipsis:l[1]!==s[0],showSecondEllipsis:s[1]!==c[0]}}function $(e){const{currentPage:o,totalPages:n,showFromEnd:t,showFromCurrent:i}=e;return F.exports.useMemo(()=>z(e),[o,n,t,i])}const d=R(({page:e,current:o,href:n,onClick:t,className:i})=>{const r=o?"page":void 0;return a("a",{className:i,"aria-label":`Page ${e}`,"aria-current":r,href:n||"#",onClick:t,children:e})})`
`,k=()=>a("li",{className:"disabled",children:a("span",{children:"..."})}),M=({pageRange:e,currentPage:o,Page:n})=>a(x,{children:y(...e).map(t=>a("li",{className:o===t?"active":void 0,children:a(n,{page:t,current:o===t})},t))}),L=({currentPage:e,pageSize:o,totalItems:n})=>f("div",{className:"pagination-info",children:[(e-1)*o+1,"-",Math.min(e*o,n)," of ",n]}),h=R(e=>{const{showFromEnd:o=3,showFromCurrent:n=2,pageSize:t,totalItems:i,className:r,currentPage:l,totalPages:s,Page:c}=e;if(s===0||s===1)return null;const{startRange:P,middleRange:m,endRange:u,showFirstEllipsis:w,showSecondEllipsis:g}=$({currentPage:l,totalPages:s,showFromEnd:o,showFromCurrent:n});return f("div",{className:r,children:[a("nav",{"aria-label":"pagination links",children:f("ul",{children:[a(M,{pageRange:P,currentPage:l,Page:c}),w&&a(k,{}),a(M,{pageRange:m,currentPage:l,Page:c}),g&&a(k,{}),a(M,{pageRange:u,currentPage:l,Page:c})]})}),t&&i&&a(L,{currentPage:l,pageSize:t,totalItems:i})]})})`
  text-align: center;

  > nav > ul {
    list-style: none;
    padding: 0;
    border: thin solid ${p.neutralLight};
    border-radius: 0.5rem;
    display: inline-block;
    margin: 0 auto;

    > li {
      margin: 0;
      min-width: 4rem;
      text-align: center;
      display: inline-block;

      &:not(:last-child) {
        border-right: thin solid ${p.neutralLight};
      }

      &.active,
      &:focus-within:not(.disabled),
      &:hover:not(.disabled) {
        background-color: ${p.neutralLighter};
      }

      > ${d},span {
        padding: 1rem;
        display: block;
        text-decoration: none;
        font-size: 1.6rem;
        line-height: 1.3rem;
        margin: 0;
        color: inherit;
      }
    }
  }

  .pagination-info {
    margin-top: 0.5rem;
    font-size: 1.6rem;
  }
`,A=()=>{const[e,o]=b.useState(1);return f("div",{children:[a("h2",{children:"Default settings"}),a(h,{currentPage:e,totalPages:10,Page:({page:n,current:t})=>a(d,{page:n,current:t,onClick:()=>o(n),href:"#"})}),a("h2",{children:"Showing only one link from the end"}),a(h,{currentPage:e,totalPages:10,showFromEnd:1,Page:({page:n,current:t})=>a(d,{page:n,current:t,onClick:()=>o(n),href:"#"})}),a("h2",{children:"Showing zero links from the end"}),a(h,{currentPage:e,totalPages:10,showFromEnd:0,Page:({page:n,current:t})=>a(d,{page:n,current:t,onClick:()=>o(n),href:"#"})}),a("h2",{children:"Showing only one link from the end and current"}),a(h,{currentPage:e,totalPages:10,showFromEnd:1,showFromCurrent:1,Page:({page:n,current:t})=>a(d,{page:n,current:t,onClick:()=>o(n),href:"#"})}),a("h2",{children:"less links"}),a(h,{currentPage:e,totalPages:2,Page:({page:n,current:t})=>a(d,{page:n,current:t,onClick:()=>o(n),href:"#"})}),a("h2",{children:"more links and summary"}),a(h,{currentPage:e,totalPages:40,totalItems:395,pageSize:10,Page:({page:n,current:t})=>a(d,{page:n,current:t,onClick:()=>o(n),href:"#"})}),a("h2",{children:"zero links"}),a(h,{currentPage:e,totalPages:0,Page:({page:n,current:t})=>a(d,{page:n,current:t,onClick:()=>o(n),href:"#"})}),a("h2",{children:"one link"}),a(h,{currentPage:e,totalPages:1,Page:({page:n,current:t})=>a(d,{page:n,current:t,onClick:()=>o(n),href:"#"})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{A as Examples};
