(this.webpackJsonpportydisplay=this.webpackJsonpportydisplay||[]).push([[0],{74:function(e,a,t){e.exports=t(94)},79:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(8),r=t.n(i),o=(t(79),t(60)),s=function(e){var a,t=e.name,n=e.label,i=e.img,r=e.initScroll;return i.trim().length>0&&(a=l.a.createElement("img",{className:"portfolioUserImage",src:i,alt:"Broken URL"})),l.a.createElement("div",{className:"portfolioPage1"},l.a.createElement("div",{className:"portfolioPage1Details"},a,l.a.createElement("div",{className:"portfolioUserDetails"},l.a.createElement("span",{className:"portfolioUserName"},t)," ",l.a.createElement("span",{className:"portfolioUserLabel"},"| ",n),l.a.createElement("div",{className:"miniLine"}))),l.a.createElement("div",{className:"portfolioPage1SocialHolder"},l.a.createElement("div",{className:"portfolioBtn",onClick:r,onKeyPress:r,role:"button",tabIndex:0},"Learn More")))},c=function(e){var a=e.summary.summary;return l.a.createElement("div",{className:"portfolioPage aboutPage"},l.a.createElement("div",{className:"portfolioPageSplit leftAbout"},"About me"),l.a.createElement("div",{className:"portfolioPageSplit rightAbout"},l.a.createElement("div",{className:"portfolioUserSummary"},l.a.createElement("div",{className:"miniLine"}),a,l.a.createElement("div",{className:"miniLine"}))))},m=function(e){var a=e.institution,t=e.degree,n=e.area,i=e.children,r=e.grade,o=e.startDate,s=e.endDate;return l.a.createElement("div",{className:"portfolioFlat"},l.a.createElement("div",{className:"portfolioCardTitle"},l.a.createElement("span",{className:"portfolioCardTitleMain"},a," |")," ",l.a.createElement("span",{className:"portfolioCardTitleSub"},t),l.a.createElement("div",{className:"portfolioFlatSubTitle"},n)),l.a.createElement("div",{className:"portfolioFlatContent"},l.a.createElement("div",{className:"portfolioFlatContentSummary"},i),l.a.createElement("div",{className:"portfolioFlatSubTitle"},"Grade Pt: ",r)),l.a.createElement("div",{className:"portfolioCardDateContainer"},o," - ",s))},d=function(e){var a=e.education;return l.a.createElement("div",{className:"portfolioPage portfolioEducationPage"},l.a.createElement("div",{className:"portfolioPageTitle"},"Education"),l.a.createElement("div",{className:"miniLine"}),l.a.createElement("div",{className:"portfolioFlatContainer"},a.map((function(e){return l.a.createElement(m,{institution:e.institution,degree:e.qualification,area:e.area,grade:e.gpa,startDate:e.startdate,endDate:e.enddate},e.details)}))))},p=t(95),u=function(e){var a,t=e.company,n=e.position,i=e.children,r=e.website,o=e.startDate,s=e.endDate;return r.trim().length>0&&(a=l.a.createElement("div",{className:"portfolioCardWebsite"},l.a.createElement("span",null,"Website |")," ",l.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"Link to page"))),l.a.createElement(p.a,{className:"portfolioCard portfolioWorkCard"},l.a.createElement("div",{className:"portfolioCardTitle"},l.a.createElement("span",{className:"portfolioCardTitleMain"},t)," ",l.a.createElement("span",{className:"portfolioCardTitleSub"},"| ",n)),l.a.createElement("div",{className:"miniLine miniCardLine"}),l.a.createElement("div",{className:"portfolioCardContent"},i),l.a.createElement("div",{className:"miniLine miniCardLine"}),a,l.a.createElement("div",{className:"portfolioCardDateContainer"},o," - ",s))},E=function(e){var a=e.work;return l.a.createElement("div",{className:"portfolioPage workPage"},l.a.createElement("div",{className:"portfolioPageTitle"},"Work"),l.a.createElement("div",{className:"portfolioCardContainer portfolioWorkCardContainer"},a.map((function(e){return l.a.createElement(u,{company:e.company,position:e.position,website:e.website,startDate:e.startdate,endDate:e.enddate},e.summary)}))))},f=t(35),g=t(36),v=t(19),h=t(40),b=t(39),N=t(130),C=t(121),D=t(132),w=t(62),y=t.n(w),P=t(64),x=function(e){var a,t=e.organisation,n=e.position,i=e.children,r=e.website,o=e.startDate,s=e.endDate,c=e.handlePanelChange,m=e.expanded,d=e.id;return r.trim().length>0&&(a=l.a.createElement("div",{className:"portfolioExpansionPanelWebsite"},l.a.createElement("span",null,"Website |")," ",l.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"Link to page"))),l.a.createElement(N.a,{expanded:m==="panel".concat(d),onChange:function(){return c("panel".concat(d))},className:"portfolioVolunteerExpansionPanel"},l.a.createElement(D.a,{expandIcon:l.a.createElement(y.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.a.createElement("div",{className:"portfolioExpansionPanelTitle"},t),l.a.createElement(P.a,{className:"portfolioExpansionPanelSubTitle"},n)),l.a.createElement(C.a,null,l.a.createElement("div",{className:"portfolioExpansionPanelDetails"},l.a.createElement(P.a,null,i),l.a.createElement("div",{className:"miniLine miniCardLine"}),a,l.a.createElement("div",{className:"portfolioCardDateContainer"},o," | ",s))))},k=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(f.a)(this,t),(n=a.call(this,e)).state={expanded:!1},n.handlePanelChange=n.handlePanelChange.bind(Object(v.a)(n)),n}return Object(g.a)(t,[{key:"handlePanelChange",value:function(e){this.state.expanded===e?this.setState({expanded:!1}):this.setState({expanded:e})}},{key:"render",value:function(){var e=this,a=this.state.expanded,t=this.props.volunteer;return l.a.createElement("div",{className:"portfolioPage volunteerPage"},l.a.createElement("div",{className:"portfolioPageSplit leftVolunteer"},t.map((function(t,n){return l.a.createElement(x,{organisation:t.organisation,position:t.position,website:t.website,startDate:t.startdate,endDate:t.enddate,handlePanelChange:e.handlePanelChange,expanded:a,id:n},t.summary)}))),l.a.createElement("div",{className:"portfolioPageSplit rightVolunteer"},"Volunteering | POR"))}}]),t}(l.a.Component),O=t(122),S=t(123),L=t(131),T=function(e){var a=e.title,t=e.items,n=e.handleDialogOpen;return l.a.createElement(O.a,{className:"portfolioExtraCard"},l.a.createElement("div",{className:"portfolioExtraDetails"},l.a.createElement(S.a,{className:"portfolioExtraContent"},l.a.createElement(P.a,{component:"h5",variant:"h5",style:{textTransform:"capitalize"}},a),t.map((function(e){return l.a.createElement(L.a,{className:"chip",variant:"outlined",label:e.title,onClick:function(){return n(a,e)}})})))),l.a.createElement("div",{className:"portfolioExtraImage miniAwardImage"}))},I=function(e){var a=e.title,t=e.items;return l.a.createElement(O.a,{className:"portfolioExtraCard"},l.a.createElement("div",{className:"portfolioExtraDetails"},l.a.createElement(S.a,{className:"portfolioExtraContent"},l.a.createElement(P.a,{component:"h5",variant:"h5",style:{textTransform:"capitalize"}},a),t.map((function(e){return l.a.createElement(L.a,{className:"chip",variant:"outlined",label:e.language})})))),l.a.createElement("div",{className:"portfolioExtraImage miniLanguageImage"}))},A=function(e){var a=e.title,t=e.items,n=e.handleDialogOpen;return l.a.createElement(O.a,{className:"portfolioExtraCard"},l.a.createElement("div",{className:"portfolioExtraDetails"},l.a.createElement(S.a,{className:"portfolioExtraContent"},l.a.createElement(P.a,{component:"h5",variant:"h5",style:{textTransform:"capitalize"}},a),t.map((function(e){return l.a.createElement(L.a,{className:"chip",variant:"outlined",label:e.name,onClick:function(){return n(a,e)}})})))),l.a.createElement("div",{className:"portfolioExtraImage miniPublicationImage"}))},W=function(e){var a=e.title,t=e.items;return l.a.createElement(O.a,{className:"portfolioExtraCard"},l.a.createElement("div",{className:"portfolioExtraDetails"},l.a.createElement(S.a,{className:"portfolioExtraContent"},l.a.createElement(P.a,{component:"h5",variant:"h5",style:{textTransform:"capitalize"}},a),t.map((function(e){return l.a.createElement(L.a,{className:"chip",variant:"outlined",label:e.name})})))),l.a.createElement("div",{className:"portfolioExtraImage miniSkillImage"}))},j=t(128),F=t(129),B=t(127),U=t(125),M=t(126),R=t(124),z=t(133),H=l.a.forwardRef((function(e,a){return l.a.createElement(z.a,Object.assign({direction:"up",ref:a},e))}));function V(e){var a,t=e.open,n=e.handleDialogClose,i=e.title,r=e.children,o=e.date,s=e.publisher,c=e.website;return c.trim().length>0&&(a=l.a.createElement("div",{className:"portfolioPublishWebsite"},l.a.createElement("span",null,"Website -")," ",l.a.createElement("a",{href:c},"Link to page"))),l.a.createElement("div",null,l.a.createElement(F.a,{open:t,TransitionComponent:H,fullWidth:!0,maxWidth:"sm",keepMounted:!0,onClose:function(){return n({title:i})},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",style:{padding:"50px"}},l.a.createElement(R.a,{id:"alert-dialog-slide-title"},i),l.a.createElement(U.a,null,l.a.createElement(M.a,{id:"alert-dialog-slide-description"},l.a.createElement("div",{className:"portfolioPublishCompany"},l.a.createElement("span",null,l.a.createElement("b",null,"Published By -"))," ",s),l.a.createElement("div",{className:"portfolioPublishDate"},l.a.createElement("span",null,l.a.createElement("b",null,"Released On -"))," ",o),l.a.createElement("br",null),l.a.createElement("div",{className:"portfolioPublishSummary"},r),l.a.createElement("br",null),a)),l.a.createElement(B.a,null,l.a.createElement(j.a,{onClick:function(){return n({title:i})}},"Close"))))}var J=l.a.forwardRef((function(e,a){return l.a.createElement(z.a,Object.assign({direction:"up",ref:a},e))}));function _(e){var a=e.open,t=e.handleDialogClose,n=e.title,i=e.children,r=e.date,o=e.awarder;return l.a.createElement("div",null,l.a.createElement(F.a,{open:a,TransitionComponent:J,fullWidth:!0,maxWidth:"sm",keepMounted:!0,onClose:function(){return t({title:n})},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",style:{padding:"50px"}},l.a.createElement(R.a,{id:"alert-dialog-slide-title"},n),l.a.createElement(U.a,null,l.a.createElement(M.a,{id:"alert-dialog-slide-description",style:{overflowWrap:"normal"}},l.a.createElement("div",{className:"portfolioAwardCompany"},l.a.createElement("span",null,l.a.createElement("b",null,"Awarded By -"))," ",o),l.a.createElement("div",{className:"portfolioAwardDate"},l.a.createElement("span",null,l.a.createElement("b",null,"Awarded On -"))," ",r),l.a.createElement("br",null),l.a.createElement("div",{className:"portfolioAwardSummary"},i))),l.a.createElement(B.a,null,l.a.createElement(j.a,{onClick:function(){return t({title:n})}},"Close"))))}var q=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(e){var n;Object(f.a)(this,t);var l=(n=a.call(this,e)).props,i=l.awards,r=l.publications,o=l.languages,s=l.skills;return n.state={openPublishDialog:!1,openAwardDialog:!1,userAwards:i,userPublication:r,userLanguages:o,userSkills:s,title:"",company:"",date:"",website:"",text:""},n.handleDialogOpen=n.handleDialogOpen.bind(Object(v.a)(n)),n.handleDialogClose=n.handleDialogClose.bind(Object(v.a)(n)),n}return Object(g.a)(t,[{key:"handleDialogOpen",value:function(e,a){"publications"===e?this.setState({openPublishDialog:!0,title:a.name,company:a.publisher,date:a.releaseDate,website:a.website,text:a.summary}):"awards"===e&&this.setState({openAwardDialog:!0,title:a.title,company:a.awarder,date:a.date,text:a.details})}},{key:"handleDialogClose",value:function(){this.setState({openAwardDialog:!1,openPublishDialog:!1})}},{key:"render",value:function(){var e,a,t,n=this.state,i=n.title,r=n.openPublishDialog,o=n.openAwardDialog,s=n.company,c=n.date,m=n.website,d=n.text,p=n.userAwards,u=n.userLanguages,E=n.userSkills,f=n.userPublication;return p.length>0&&""!==p[0].title&&(e=l.a.createElement(T,{title:"awards",items:p,handleDialogOpen:this.handleDialogOpen})),f.length>0&&""!==f[0].name&&(a=l.a.createElement(A,{title:"publications",items:f,handleDialogOpen:this.handleDialogOpen})),E.length>0&&""!==E[0].name&&(t=l.a.createElement(W,{title:"skills",items:E})),l.a.createElement("div",{className:"portfolioPage extrasPage"},l.a.createElement("div",{className:"portfolioPageTitle floodFill"},"Extra's"),l.a.createElement("div",{className:"portfolioFlatContainer"},e,a,t,l.a.createElement(I,{title:"languages",items:u,handleDialogOpen:this.handleDialogOpen})),l.a.createElement(V,{title:i,handleDialogClose:this.handleDialogClose,open:r,publisher:s,date:c,website:m},d),l.a.createElement(_,{title:i,handleDialogClose:this.handleDialogClose,open:o,awarder:s,date:c},d),l.a.createElement("div",{className:"miniLine"}))}}]),t}(l.a.Component),G=function(e){var a=e.email,t=e.phone,n=e.location;return l.a.createElement("div",{className:"portfolioPage contactPage"},l.a.createElement("div",{className:"portfolioPageTitle"},"Contact Me"),l.a.createElement("div",{className:"portfolioContactCard"},l.a.createElement("div",{className:"miniLine"}),l.a.createElement("li",null,l.a.createElement("span",{className:"portfolioContactCardInfo"},l.a.createElement("span",{className:"portfolioContactCardInfoTitle"},"Email ID -")," ",l.a.createElement("span",{className:"portfolioContactCardInfoDetails"},a))),l.a.createElement("li",null,l.a.createElement("span",{className:"portfolioContactCardInfo"},l.a.createElement("span",{className:"portfolioContactCardInfoTitle"},"Contact No -")," ",l.a.createElement("span",{className:"portfolioContactCardInfoDetails"},t))),l.a.createElement("div",{className:"miniLine"})),l.a.createElement("div",{className:"portfolioContactCard"},l.a.createElement("div",{className:"miniLine"}),l.a.createElement("div",{className:"portfolioContactCardAddress"},l.a.createElement("span",null,n.addressline1),l.a.createElement("br",null),l.a.createElement("span",null,n.addressline2),l.a.createElement("br",null),n.city,l.a.createElement("br",null),n.country," | ",n.pincode),l.a.createElement("div",{className:"miniLine"})))};t(93);var K=function(e){var a,t=e.appData.profile,n=t.volunteer;return n.length>0&&n[0].organisation.trim().length>0&&n[0].summary.trim().length>0&&(a=l.a.createElement(k,{volunteer:t.volunteer})),l.a.createElement("div",{className:"portfolioContainerFull"},l.a.createElement(s,{name:t.user.name,label:t.about.label,img:t.about.imgUrl,initScroll:function(){return o.animateScroll.scrollTo(window.innerHeight)}}),l.a.createElement("div",{className:"portfolioBodyCont",style:{top:"".concat(window.innerHeight,"px")}},l.a.createElement(c,{summary:t.about,top:window.innerHeight}),l.a.createElement(d,{education:t.education}),l.a.createElement(E,{work:t.work}),a,l.a.createElement(q,{awards:t.awards,publications:t.publications,languages:t.languages,skills:t.skills}),l.a.createElement(G,{email:t.user.email,phone:t.about.number,location:t.location})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));fetch("./Data/file.json").then((function(e){return e.json()})).then((function(e){r.a.render(l.a.createElement(K,{appData:e}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[74,1,2]]]);
//# sourceMappingURL=main.5378a5d7.chunk.js.map