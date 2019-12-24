
// import Vue from 'vue'
// import Router from 'vue-router'
// import BasicIndex from '@/components/navMain/mainComponents/BasicIndex'
// import BasicLayout from '@/components/navMain/mainComponents/BasicLayout'
// import BasicContainer from '@/components/navMain/mainComponents/BasicContainer'
// import BasicCheckbox from '@/components/navMain/mainComponents/BasicCheckbox'
// import BasicRadio from '@/components/navMain/mainComponents/BasicRadio'
// import SingleOrder from '@/components/navMain/mainComponents/SingleOrder'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/index',
//       name: 'index',
//       component: BasicIndex
//     },
//     {
//       path: '/BasicLayout',
//       name: 'BasicLayout',
//       component: BasicLayout
//     }, {
//       path: '/BasicContainer',
//       name: 'BasicContainer',
//       component: BasicContainer
//     }, {
//       path: '/BasicCheckbox',
//       name: 'BasicCheckbox',
//       component: BasicCheckbox
//     }, {
//       path: '/BasicRadio',
//       name: 'BasicRadio',
//       component: BasicRadio
//     }, {
//       path: '/SingleOrder',
//       name: 'SingleOrder',
//       component: SingleOrder
//     }
//   ]
// // })
// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)
// export default new Router({
//   mode: "hash",
//   routes: [
//     { path: "/", redirect: "/navMain/mainComponents/SingleOrder" },
//     { path: "/index/index.html", redirect:"/navMain/mainComponents/SingleOrder.vue" },

//     {
//       path: "/SingleOrder",
//       name: "SingleOrder",
//       component: resolve => require(["@/components/navMain/mainComponents/SingleOrder.vue"], resolve)
//     },
//     {
//       path: "/OrderInquiry",
//       name: "OrderInquiry",
//       component: resolve => require(["@/components/navMain/mainComponents/OrderInquiry.vue"], resolve)
//     },
//     {
//       path: '/BasicCheckbox',
//       name: 'BasicCheckbox',
//       component: resolve => require(["@/components/navMain/mainComponents/BasicCheckbox"], resolve)
//     },
//     {
//       path: '/BasicRadio',
//       name: 'BasicRadio',
//       component: resolve => require(["@/components/navMain/mainComponents/BasicRadio"], resolve)
//     }, 
//   ]
// })
//  router.beforeEach((to, from, next) => {
//    if (to.matched.length === 0) {
//     from.name
//        ? next({
//       name: from.name
//       })
//       : next("/pages/HelloWorld");
//   } else {
//     next(); //如果匹配到正确跳转
//   }
// });
// export default router;
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: "hash",
  routes: [
    { path: "/", redirect: "/shouye" },
    { path: "/index/index.html", redirect:"/shouye.vue" },
    // {
    //   path: "/DataAnalysis",
    //   name: "DataAnalysis",
    //   component: resolve => require(["@/components/pages/DataAnalysis.vue"], resolve)
    // },
    // {
    //   path: "/MyHome",
    //   name: "MyHome",
    //   component: resolve => require(["@/components/pages/MyHome.vue"], resolve)
    // // },
    // // {
    // //   path: "/cookie",
    // //   name: "cookie",
    // //   component: resolve => require(["@/components/pages/cookie.vue"], resolve)
    // // },
    // // {
    // //   path: "/OnlineService",
    // //   name: "OnlineService",
    // //   component: resolve => require(["@/components/pages/OnlineService.vue"], resolve)
    // // },
    // // {
    // //   path: "/pages/ProductsAndServices",
    // //   name: "ProductsAndServices",
    // //   component: resolve => require(["@/components/pages/ProductsAndServices.vue"], resolve)
    // // },


    // // {
    // //   path: "/BatchImportOrder",
    // //   name: "BatchImportOrder",
    // //   component: resolve => require(["@/components/navMain/mainComponents/BatchImportOrder.vue"], resolve)
    // // },
    // {
    //   path: "/SingleOrder",
    //   name: "SingleOrder",
    //   component: resolve => require(["@/components/navMain/mainComponents/SingleOrder.vue"], resolve)
    // },
    // {
    //   path: "/OrderInquiry",
    //   name: "OrderInquiry",
    //   component: resolve => require(["@/components/navMain/mainComponents/OrderInquiry.vue"], resolve)
    // },
    // {
    //   path: '/BasicCheckbox',
    //   name: 'BasicCheckbox',
    //   component: resolve => require(["@/components/navMain/mainComponents/BasicCheckbox"], resolve)
    // },
    // {
    //   path: '/BasicRadio',
    //   name: 'BasicRadio',
    //   component: resolve => require(["@/components/navMain/mainComponents/BasicRadio"], resolve)
    // }, 
    // {
    //   path: '/AgentNoQuery',
    //   name: 'AgentNoQuery',
    //   component: resolve => require(["@/components/navMain/mainComponents/OrderManagement/AgentNoQuery"], resolve)
    // }, 
    // {
    //   path: '/ArrearsInquiries',
    //   name: 'ArrearsInquiries',
    //   component: resolve => require(["@/components/navMain/mainComponents/OrderManagement/ArrearsInquiries"], resolve)
    // },{
    //   path: '/InterceptProductNameQuery',
    //   name: 'InterceptProductNameQuery',
    //   component: resolve => require(["@/components/navMain/mainComponents/OrderManagement/InterceptProductNameQuery"], resolve)
    // }, {
    //   path: '/OrderSeach',
    //   name: 'OrderSeach',
    //   component: resolve => require(["@/components/navMain/mainComponents/OrderManagement/OrderSeach"], resolve)
    // },{
    //   path: '/SeachOtherQuestions',
    //   name: 'SeachOtherQuestions',
    //   component: resolve => require(["@/components/navMain/mainComponents/OrderManagement/SeachOtherQuestions"], resolve)
    // }
    {
      path: '/caidanlan',
      name: 'caidanlan',
      component: resolve => require(["@/components/caidanlan.vue"], resolve)
    },{
      path: '/shouye',
      name: 'shouye',
      component: resolve => require(["@/components/shouye.vue"], resolve)
    },
    {
        path: '/MyFooter',
        name: 'MyFooter',
        component: resolve => require(["@/components/pages/MyFooter.vue"], resolve)
      },
    
    // {
    //   path: '/Recharge',
    //   name: 'Recharge',
    //   component: resolve => require(["@/components/navMain/mainComponents/financialManagement/Recharge"], resolve)
    // },
    // {
    //   path: '/BillsHaveBeenIssued',
    //   name: 'BillsHaveBeenIssued',
    //   component: resolve => require(["@/components/navMain/mainComponents/financialManagement/BillsHaveBeenIssued"], resolve)
    // },
    // {
    //   path: 'BillsLeft',
    //   name: 'NoBillsLeft',
    //   component: resolve => require(["@/components/navMain/mainComponents/financialManagementBillsLeft"], resolve)
    // },
    // {
    //   path: '/RechargeRecord',
    //   name: 'RechargeRecord',
    //   component: resolve => require(["@/components/navMain/mainComponents/financialManagement/RechargeRecord"], resolve)
    // },
    // {
    //   path: '/TransactionRecord',
    //   name: 'TransactionRecord',
    //   component: resolve => require(["@/components/navMain/mainComponents/financialManagement/TransactionRecord"], resolve)
    // },
    // {
    //   path: '/FreightInquiry',
    //   name: 'FreightInquiry',
    //   component: resolve => require(["@/components/navMain/mainComponents/financialManagement/FreightInquiry"], resolve)
    // },{
    //   path: '/BillReceipt',
    //   name: 'BillReceipt',
    //   component: resolve => require(["@/components/navMain/mainComponents/financialManagement/BillReceipt"], resolve)
    // },


    // {
    //   path: '/AccountInformation',
    //   name: 'AccountInformation',
    //   component: resolve => require(["@/components/navMain/mainComponents/MyMessage/AccountInformation"], resolve)
    // },
    // {
    //   path: '/MyDiscount',
    //   name: 'MyDiscount',
    //   component: resolve => require(["@/components/navMain/mainComponents/MyMessage/MyDiscount"], resolve)
    // }, {
    //   path: '/MyCoupon',
    //   name: 'MyCoupon',
    //   component: resolve => require(["@/components/navMain/mainComponents/MyMessage/MyCoupon"], resolve)
    // }, {
    //   path: '/MyInvitationCode',
    //   name: 'MyInvitationCode',
    //   component: resolve => require(["@/components/navMain/mainComponents/MyMessage/MyInvitationCode"], resolve)
    // }, {
    //   path: '/ModifyUserInformation',
    //   name: 'ModifyUserInformation',
    //   component: resolve => require(["@/components/navMain/mainComponents/MyMessage/ModifyUserInformation"], resolve)
    // }, {
    //   path: '/xiugaishimingrenzheng',
    //   name: 'xiugaishimingrenzheng',
    //   component: resolve => require(["@/components/navMain/mainComponents/MyMessage/xiugaishimingrenzheng"], resolve)
    // }, {
    //   path: '/SenderDatamanagement',
    //   name: 'SenderDatamanagement',
    //   component: resolve => require(["@/components/navMain/mainComponents/MyMessage/SenderDatamanagement"], resolve)
    // }, {
    //   path: '/E-commerceBind',
    //   name: 'E-commerceBind',
    //   component: resolve => require(["@/components/navMain/mainComponents/MyMessage/E-commerceBind"], resolve)
    // },
    // {
    //   path: '/FeedbackAndHelp/help',
    //   name: 'help',
    //   component: resolve => require(["@/components/navMain/mainComponents/FeedbackAndHelp/help"], resolve)
    // }, {
    //   path: '/CommonProblem',
    //   name: 'CommonProblem',
    //   component: resolve => require(["@/components/navMain/mainComponents/FeedbackAndHelp/CommonProblem"], resolve)
    // }, {
    //   path: '/ComplaintSuggestion',
    //   name: 'ComplaintSuggestion',
    //   component: resolve => require(["@/components/navMain/mainComponents/FeedbackAndHelp/ComplaintSuggestion"], resolve)
    // },
    //  {
    //   path: '/HomeBackstage',
    //   name: 'HomeBackstage',
    //   component: resolve => require(["@/components/navMain/mainComponents/Home/HomeBackstage"], resolve)
    // },{
    //   path: "/LogisticsAnalysis",
    //   name: "LogisticsAnalysis",
    //   component: resolve => require(["@/components/navMain/mainComponents/LogisticsAnalysis.vue"], resolve)
    // },

  ]
})