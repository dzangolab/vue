import{d as m,x as d,s,a as c,o as p,g as i,A as o,e as N,u as g,D as b,w as n,f as u}from"./index-hG40rBrG.js";const f={class:"demo"},h={class:"demo-main"},_={name:"UiPage"},C=m({..._,props:{subTitle:{default:void 0,required:!1,type:String},title:{default:void 0,required:!1,type:String}},setup(t){const{t:e}=d(),r=[{name:e("ui.getStarted"),routeName:""},{name:e("ui.buttons"),children:[{name:e("ui.button.title"),routeName:"button"}]},{name:e("ui.data.title"),children:[{name:e("ui.data.title"),routeName:"data"}]},{name:e("ui.file"),children:[{name:e("ui.fileCard.title"),routeName:"fileCard"}]},{name:e("ui.menu"),children:[{name:e("ui.dropdown.title"),routeName:"dropdown"}]},{name:e("ui.messages"),children:[{name:e("ui.message.title"),routeName:"message"}]},{name:e("ui.overlay"),children:[{name:e("ui.confirmationModal.title"),routeName:"confirmationModal"},{name:e("ui.modal.title"),routeName:"modal"},{name:e("ui.popup.title"),routeName:"popup"},{name:e("ui.tooltip.title"),routeName:"tooltip"}]},{name:e("ui.panel"),children:[{name:e("ui.accordion.title"),routeName:"accordion"},{name:e("ui.card.title"),routeName:"card"},{name:e("ui.stepper.title"),routeName:"stepper"},{name:e("ui.tabbed-panel.title"),routeName:"tabbedPanel"}]},{name:e("ui.misc"),children:[{name:e("ui.badge.title"),routeName:"badge"},{name:e("ui.divider.title"),routeName:"divider"},{name:e("ui.gridContainer.title"),routeName:"gridContainer"},{name:e("ui.loading.title"),routeName:"loadingPage"},{name:e("ui.page.title"),routeName:"page"},{name:e("ui.sortableList.title"),routeName:"sortableList"},{name:e("ui.typography.title"),routeName:"typography"},{name:e("ui.youtubeFacade.title"),routeName:"youtubeFacade"}]}];return(a,y)=>{const l=s("Page");return p(),c("div",f,[i(g(b),{menu:r,class:"demo-aside","no-header":""}),o(),N("div",h,[i(l,{title:t.title,"sub-title":t.subTitle},{toolbar:n(()=>[u(a.$slots,"toolbar")]),default:n(()=>[o(),u(a.$slots,"default")]),_:3},8,["title","sub-title"])])])}}});export{C as _};
