import{T as S,r as c,C as se,J as pe,j as i,G as Q,o as h,c as ce,H as g,I as A,f as a,d as e,e as l,k as O,p as u,l as k,D as G,m as me,B as fe,v as _e}from"./index-C_8758mc.js";function ge(m){return S({url:"/task/plate/list",method:"get",params:m})}function ve(m){return S({url:"/task/plate/"+m,method:"get"})}function he(m){return S({url:"/task/plate",method:"post",data:m})}function ye(m){return S({url:"/task/plate",method:"put",data:m})}function be(m){return S({url:"/task/plate/"+m,method:"delete"})}const ke={class:"app-container"},we={class:"dialog-footer"},Ve=fe({name:"Plate"}),xe=Object.assign(Ve,{setup(m){const{proxy:f}=_e(),B=c([]),y=c([]),v=c(!1),D=c(!0),P=c(!0),T=c([]),$=c([]),E=c(!0),L=c(!0),R=c(0),N=c(""),H=se({form:{},queryParams:{pageNum:1,pageSize:10,name:null,dutyuser:null},rules:{name:[{required:!0,message:"板块名不能为空",trigger:"blur"}],dutyuser:[{required:!0,message:"责任人不能为空",trigger:"blur"}]}}),{queryParams:d,form:s,rules:J}=pe(H);function b(){D.value=!0,ge(d.value).then(o=>{B.value=o.rows,R.value=o.total,D.value=!1})}function M(){v.value=!1,q()}function q(){s.value={id:null,name:null,dutyuser:null},y.value=[],f.resetForm("plateRef")}function U(){d.value.pageNum=1,b()}function W(){f.resetForm("queryRef"),U()}function X(o){T.value=o.map(t=>t.id),E.value=o.length!=1,L.value=!o.length}function Y(){q(),v.value=!0,N.value="添加任务板块"}function I(o){q();const t=o.id||T.value;ve(t).then(p=>{s.value=p.data,y.value=p.data.typeList,v.value=!0,N.value="修改任务板块"})}function Z(){f.$refs.plateRef.validate(o=>{o&&(s.value.typeList=y.value,s.value.id!=null?ye(s.value).then(t=>{f.$modal.msgSuccess("修改成功"),v.value=!1,b()}):he(s.value).then(t=>{f.$modal.msgSuccess("新增成功"),v.value=!1,b()}))})}function j(o){const t=o.id||T.value;f.$modal.confirm('是否确认删除任务板块编号为"'+t+'"的数据项？').then(function(){return be(t)}).then(()=>{b(),f.$modal.msgSuccess("删除成功")}).catch(()=>{})}function ee({row:o,rowIndex:t}){o.index=t+1}function le(){let o={};o.name="",o.douser="",y.value.push(o)}function te(){if($.value.length==0)f.$modal.msgError("请先选择要删除的任务类型数据");else{const o=y.value,t=$.value;y.value=o.filter(function(p){return t.indexOf(p.index)==-1})}}function ae(o){$.value=o.map(t=>t.index)}function ne(){f.download("task/plate/export",{...d.value},`plate_${new Date().getTime()}.xlsx`)}return b(),(o,t)=>{const p=i("el-input"),C=i("el-form-item"),r=i("el-button"),z=i("el-form"),w=i("el-col"),oe=i("right-toolbar"),F=i("el-row"),_=i("el-table-column"),K=i("el-table"),ue=i("pagination"),de=i("el-divider"),re=i("el-dialog"),V=Q("hasPermi"),ie=Q("loading");return h(),ce("div",ke,[g(e(z,{model:a(d),ref:"queryRef",inline:!0,"label-width":"68px"},{default:l(()=>[e(C,{label:"板块名",prop:"name"},{default:l(()=>[e(p,{modelValue:a(d).name,"onUpdate:modelValue":t[0]||(t[0]=n=>a(d).name=n),placeholder:"请输入板块名",clearable:"",onKeyup:O(U,["enter"])},null,8,["modelValue"])]),_:1}),e(C,{label:"责任人",prop:"dutyuser"},{default:l(()=>[e(p,{modelValue:a(d).dutyuser,"onUpdate:modelValue":t[1]||(t[1]=n=>a(d).dutyuser=n),placeholder:"请输入责任人",clearable:"",onKeyup:O(U,["enter"])},null,8,["modelValue"])]),_:1}),e(C,null,{default:l(()=>[e(r,{type:"primary",icon:"Search",onClick:U},{default:l(()=>[u("搜索")]),_:1}),e(r,{icon:"Refresh",onClick:W},{default:l(()=>[u("重置")]),_:1})]),_:1})]),_:1},8,["model"]),[[A,a(P)]]),e(F,{gutter:10,class:"mb8"},{default:l(()=>[e(w,{span:1.5},{default:l(()=>[g((h(),k(r,{type:"primary",plain:"",icon:"Plus",onClick:Y},{default:l(()=>[u("新增")]),_:1})),[[V,["task:plate:add"]]])]),_:1}),e(w,{span:1.5},{default:l(()=>[g((h(),k(r,{type:"success",plain:"",icon:"Edit",disabled:a(E),onClick:I},{default:l(()=>[u("修改")]),_:1},8,["disabled"])),[[V,["task:plate:edit"]]])]),_:1}),e(w,{span:1.5},{default:l(()=>[g((h(),k(r,{type:"danger",plain:"",icon:"Delete",disabled:a(L),onClick:j},{default:l(()=>[u("删除")]),_:1},8,["disabled"])),[[V,["task:plate:remove"]]])]),_:1}),e(w,{span:1.5},{default:l(()=>[g((h(),k(r,{type:"warning",plain:"",icon:"Download",onClick:ne},{default:l(()=>[u("导出")]),_:1})),[[V,["task:plate:export"]]])]),_:1}),e(oe,{showSearch:a(P),"onUpdate:showSearch":t[2]||(t[2]=n=>G(P)?P.value=n:null),onQueryTable:b},null,8,["showSearch"])]),_:1}),g((h(),k(K,{data:a(B),onSelectionChange:X},{default:l(()=>[e(_,{type:"selection",width:"55",align:"center"}),e(_,{label:"板块ID",align:"center",prop:"id"}),e(_,{label:"板块名",align:"center",prop:"name"}),e(_,{label:"责任人",align:"center",prop:"dutyuser"}),e(_,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:l(n=>[g((h(),k(r,{link:"",type:"primary",icon:"Edit",onClick:x=>I(n.row)},{default:l(()=>[u("修改")]),_:2},1032,["onClick"])),[[V,["task:plate:edit"]]]),g((h(),k(r,{link:"",type:"primary",icon:"Delete",onClick:x=>j(n.row)},{default:l(()=>[u("删除")]),_:2},1032,["onClick"])),[[V,["task:plate:remove"]]])]),_:1})]),_:1},8,["data"])),[[ie,a(D)]]),g(e(ue,{total:a(R),page:a(d).pageNum,"onUpdate:page":t[3]||(t[3]=n=>a(d).pageNum=n),limit:a(d).pageSize,"onUpdate:limit":t[4]||(t[4]=n=>a(d).pageSize=n),onPagination:b},null,8,["total","page","limit"]),[[A,a(R)>0]]),e(re,{title:a(N),modelValue:a(v),"onUpdate:modelValue":t[7]||(t[7]=n=>G(v)?v.value=n:null),width:"500px","append-to-body":""},{footer:l(()=>[me("div",we,[e(r,{type:"primary",onClick:Z},{default:l(()=>[u("确 定")]),_:1}),e(r,{onClick:M},{default:l(()=>[u("取 消")]),_:1})])]),default:l(()=>[e(z,{ref:"plateRef",model:a(s),rules:a(J),"label-width":"80px"},{default:l(()=>[e(C,{label:"板块名",prop:"name"},{default:l(()=>[e(p,{modelValue:a(s).name,"onUpdate:modelValue":t[5]||(t[5]=n=>a(s).name=n),placeholder:"请输入板块名"},null,8,["modelValue"])]),_:1}),e(C,{label:"责任人",prop:"dutyuser"},{default:l(()=>[e(p,{modelValue:a(s).dutyuser,"onUpdate:modelValue":t[6]||(t[6]=n=>a(s).dutyuser=n),placeholder:"请输入责任人"},null,8,["modelValue"])]),_:1}),e(de,{"content-position":"center"},{default:l(()=>[u("任务类型信息")]),_:1}),e(F,{gutter:10,class:"mb8"},{default:l(()=>[e(w,{span:1.5},{default:l(()=>[e(r,{type:"primary",icon:"Plus",onClick:le},{default:l(()=>[u("添加")]),_:1})]),_:1}),e(w,{span:1.5},{default:l(()=>[e(r,{type:"danger",icon:"Delete",onClick:te},{default:l(()=>[u("删除")]),_:1})]),_:1})]),_:1}),e(K,{data:a(y),"row-class-name":ee,onSelectionChange:ae,ref:"type"},{default:l(()=>[e(_,{type:"selection",width:"50",align:"center"}),e(_,{label:"序号",align:"center",prop:"index",width:"50"}),e(_,{label:"类型名称",prop:"name",width:"150"},{default:l(n=>[e(p,{modelValue:n.row.name,"onUpdate:modelValue":x=>n.row.name=x,placeholder:"请输入类型名称"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(_,{label:"执行人",prop:"douser",width:"150"},{default:l(n=>[e(p,{modelValue:n.row.douser,"onUpdate:modelValue":x=>n.row.douser=x,placeholder:"请输入执行人"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}});export{xe as default};
