"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[717],{4362:function(s,e,t){t.r(e),t.d(e,{default:function(){return _s}});var r=t(8683),a=t(5671),n=t(3144),i=t(136),o=t(5716),l=t(2791),c="ProfileHeader_profileHeaderWrapper__lYXA+",u="ProfileHeader_profileHeaderImage__L8nEW",d="ProfileHeader_avatarBlock__EBqx0",h="ProfileHeader_avatarContainer__nuZc6",p="ProfileHeader_avatar__TgI5Y",m=t(272),x=t(9526),j=t(4364),f=t(1907),_=t(7025),v=t(885),P="ProfileStatus_profileStatusContainer__d9zUF",g=t(184),Z=function(s){var e=(0,l.useState)(!1),t=(0,v.Z)(e,2),r=t[0],a=t[1],n=(0,l.useState)(s.status),i=(0,v.Z)(n,2),o=i[0],c=i[1];(0,l.useEffect)((function(){c(s.status)}),[s.status]);return(0,g.jsxs)("div",{className:P,children:[!r&&(0,g.jsx)("span",{onDoubleClick:function(){a(!0)},children:s.status||(0,g.jsx)("span",{children:"Change status..."})}),r&&(0,g.jsx)("input",{autoFocus:!0,onChange:function(s){c(s.currentTarget.value)},value:o,onBlur:function(){a(!1),s.updateStatus(o)}})]})},N=t(3006),b=t(1061),k=function(s){var e=s.isOwner,t=s.profile,r=s.status,a=s.updateStatus,n=s.savePhoto,i=(0,g.jsx)(m.Z,{className:p,src:null!==t.photos.small?t.photos.small:"",alt:"avatar"});return t?(0,g.jsxs)(x.Z,{elevation:2,className:c,children:[(0,g.jsx)("div",{className:u,children:(0,g.jsx)("img",{src:"https://cdn.pixabay.com/photo/2016/10/03/13/53/banner-1711718_960_720.jpg",alt:"profileHeaderImage"})}),(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)("figure",{children:(0,g.jsx)("div",{className:h,children:e?(0,g.jsx)(j.Z,{style:{margin:"0"},anchorOrigin:{vertical:"bottom",horizontal:"right"},overlap:"circle",showZero:!0,badgeContent:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("input",{style:{display:"none"},type:"file",onChange:function(s){s.currentTarget.files&&n(s.currentTarget.files[0])},id:"icon-button-photo"}),(0,g.jsx)("label",{htmlFor:"icon-button-photo",children:(0,g.jsx)(f.ZP,{title:"Update photo",placement:"bottom-start",children:(0,g.jsx)(_.Z,{component:"span",style:{padding:"2px",backgroundColor:"#fff"},children:(0,g.jsx)(b.Z,{})})})})]}),children:i}):i})}),(0,g.jsxs)("h4",{children:[t.fullName,(0,g.jsx)(Z,{status:r,updateStatus:a})]})]})]}):(0,g.jsx)(N.p,{})},S="SectionAbout_sectionAboutWrapper__nfiIf",y="SectionAbout_aboutBlock__S1w5i",C="SectionAbout_iconBtn__LkBOg",w="SectionAbout_ico__t1ZBy",I="SectionAbout_cardBody__ozYvr",B=t(3623),A=t(5443),F=t(2109),M=t(9323),H=t(7447),O=t(1079),z=t(8388),T=function(s){var e=s.profile,t=s.isOwner,r=(0,l.useState)(!1),a=(0,v.Z)(r,2),n=a[0],i=a[1];return(0,g.jsxs)(x.Z,{elevation:2,className:S,children:[(0,g.jsx)("div",{className:y,children:n?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("h4",{children:["About",(0,g.jsx)(_.Z,{className:C,onClick:function(){return i(!1)},children:(0,g.jsx)(z.Z,{className:w})})]}),(0,g.jsx)("textarea",{})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("h4",{children:["About",t&&(0,g.jsx)(_.Z,{className:C,onClick:function(){return i(!0)},children:(0,g.jsx)(O.Z,{className:w})})]}),(0,g.jsx)("p",{children:e.aboutMe})]})}),(0,g.jsx)(H.Z,{variant:"middle"}),(0,g.jsxs)("div",{className:I,children:[(0,g.jsx)("i",{children:(0,g.jsx)(B.Z,{})}),(0,g.jsxs)("h4",{children:["Private",(0,g.jsx)("span",{children:"What's up, how are you?"})]})]}),(0,g.jsxs)("div",{className:I,children:[(0,g.jsx)("i",{children:(0,g.jsx)(A.Z,{})}),(0,g.jsxs)("h4",{children:["Visible",(0,g.jsx)("span",{children:"Anyone can find you"})]})]}),(0,g.jsxs)("div",{className:I,children:[(0,g.jsx)("i",{children:(0,g.jsx)(F.Z,{})}),(0,g.jsx)("h4",{children:"Minsk, Belarus "})]}),(0,g.jsxs)("div",{className:I,children:[(0,g.jsx)("i",{children:(0,g.jsx)(M.Z,{})}),(0,g.jsx)("h4",{children:"IT-Incubator"})]})]})},L=t(81),U={postsBlock:"MyPosts_postsBlock__yLIi9",createPost:"MyPosts_createPost__7Grks",createPostForm:"MyPosts_createPostForm__R3CO+",createPostAddButton:"MyPosts_createPostAddButton__ETMM8",editIco:"MyPosts_editIco__NnQa3",avatarInput:"MyPosts_avatarInput__nzx1+"},D=t(1703),E="Post_postContainer__flyHY",W="Post_postHeader__8unOX",q="Post_MoreHorizontal__cjPQZ",Y="Post_postBody__5TkC5",G="Post_postFooter__Z3aLm",R="Post_postFooterLikes__9KLgR",Q="Post_thumbsUp__kL2rH",V="Post_postFooterComments__uhxWG",X="Post_messageSquare__uPOGV",$="Post_postFooterShareButton__ql9dB",J="Post_share2__S-EOb",K=t(5187),ss=t(6216),es=t(8804),ts=t(8435),rs=function(s){return(0,g.jsxs)(x.Z,{elevation:2,className:E,children:[(0,g.jsxs)("div",{className:W,children:[(0,g.jsx)("figure",{children:(0,g.jsx)("img",{src:"https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg",alt:"avatar"})}),(0,g.jsxs)("h4",{children:["Anton Yakavenka",(0,g.jsx)("span",{children:"22 min ago"})]}),(0,g.jsx)("div",{children:(0,g.jsx)("i",{children:(0,g.jsx)(K.Z,{className:q})})})]}),(0,g.jsx)("div",{className:Y,children:(0,g.jsx)("p",{children:s.message})}),(0,g.jsxs)("div",{className:G,children:[(0,g.jsxs)("div",{className:R,children:[(0,g.jsx)("i",{children:(0,g.jsx)(ss.Z,{size:16,className:Q})}),s.likesCount," Like"]}),(0,g.jsxs)("div",{className:V,children:[(0,g.jsx)("i",{children:(0,g.jsx)(es.Z,{size:17,className:X})}),(0,g.jsx)("span",{children:"22 Comment"})]}),(0,g.jsxs)("div",{className:$,children:[(0,g.jsx)("i",{children:(0,g.jsx)(ts.Z,{className:J})}),(0,g.jsx)("span",{children:"Share"})]})]})]})},as=t(6139),ns=t(704),is=t(3079),os=l.memo((function(s){var e=s.createPost,t=s.profilePage.posts.map((function(s){return(0,g.jsx)(rs,{message:s.message,likesCount:s.likesCount},s.id)}));return(0,g.jsxs)("div",{className:U.postsBlock,children:[(0,g.jsx)(x.Z,{elevation:2,className:U.createPost,children:(0,g.jsx)(cs,{onSubmit:function(s){return e(s.newPostText)}})}),(0,g.jsx)("div",{className:U.posts,children:t})]})})),ls=(0,is.D)(10),cs=(0,ns.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,g.jsxs)("form",{className:U.createPostForm,onSubmit:s.handleSubmit,children:[(0,g.jsx)("div",{className:U.createPostAddButton,children:(0,g.jsxs)("button",{children:[(0,g.jsx)("i",{children:(0,g.jsx)(D.Z,{className:U.editIco,size:18})}),"Create post"]})}),(0,g.jsx)("figure",{className:U.avatarInput,children:(0,g.jsx)("img",{src:"https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg",alt:"avatar"})}),(0,g.jsx)(as.Z,{name:"newPostText",placeholder:"What's on your mind?",component:"textarea",validate:[is.C,ls]})]})})),us=t(364),ds=(0,us.$j)((function(s){return{profilePage:s.profilePage}}),(function(s){return{createPost:function(e){return s((0,L.nr)(e))}}}))(os),hs=t(1288),ps=function(s){var e=s.isOwner,t=s.profile,r=s.status,a=s.updateStatus,n=s.savePhoto;return(0,g.jsxs)(hs.Z,{container:!0,spacing:2,children:[(0,g.jsx)(hs.Z,{item:!0,children:(0,g.jsx)(k,{isOwner:e,profile:t,status:r,updateStatus:a,savePhoto:n})}),(0,g.jsx)(hs.Z,{item:!0,children:(0,g.jsx)(T,{profile:t,isOwner:e})}),(0,g.jsx)(hs.Z,{item:!0,children:(0,g.jsx)(ds,{})})]})},ms=t(5571),xs=t(9271),js=t(7781),fs=function(s){(0,i.Z)(t,s);var e=(0,o.Z)(t);function t(){return(0,a.Z)(this,t),e.apply(this,arguments)}return(0,n.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.match.params.userId;s||(s=String(this.props.authorizedUserId))||this.props.history.push("/login"),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s){this.props.match.params.userId!==s.match.params.userId&&this.refreshProfile(),document.title=this.props.profile.fullName}},{key:"render",value:function(){return(0,g.jsx)(ps,(0,r.Z)((0,r.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(l.Component),_s=(0,js.qC)((0,us.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.id,isAuth:s.auth.isAuth}}),{getUserProfile:L.et,getStatus:L.lR,updateStatus:L.Nf,savePhoto:L.Ju}),xs.EN,ms.D)(fs)},3079:function(s,e,t){t.d(e,{C:function(){return r},D:function(){return a}});var r=function(s){if(!s)return"Field is required"},a=function(s){return function(e){if(e.length>s)return"Max length is ".concat(s," symbols")}}}}]);
//# sourceMappingURL=717.9bcb8f2b.chunk.js.map