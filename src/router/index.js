import Vue from 'vue'
import Router from 'vue-router'
import app from '@/App'
import Crmmessage from '@/components/message'
import Crmmesmanagement from '@/components/mesmanagement'
import Crmsearch from '@/components/search'
import Crmallbusins from '@/components/allbusins'
import Crmapplymanagement from '@/components/applymanagement'
import Crmvisamanagement from '@/components/visamanagement'
import Crmcermanagement from '@/components/cermanagement'
import Crmothersmanagement from '@/components/othersmanagement'
import Crmapply from '@/components/apply'
import CrmT4China from '@/components/T4China'
import CrmT4England from '@/components/T4England'
import CrmvisitAndShortTremStudentVisa from '@/components/visitAndShortTremStudentVisa'
import CrmreapplyBRP from '@/components/reapplyBRP'
import CrmreturnStudyCertification from '@/components/returnStudyCertification'
import CrmforeignDegreeCertification from '@/components/foreignDegreeCertification'
import CrmappealOthers from '@/components/appealOthers'
import CrmtrackingCAS from '@/components/trackingCAS'
import Crmcampus from '@/components/campus'
import Crmdrafts from '@/components/drafts'
import CrmbusinessType from '@/components/businessType'
import CrmbusinessNumber from '@/components/businessNumber'
import CrmcustomerArea from '@/components/customerArea'
import CrmreadingSchool from '@/components/readingSchool'
import CrmknowShidai from '@/components/knowShidai'
import CrmcoursersGrade from '@/components/coursersGrade'
import Crmmatriculation from '@/components/matriculation'
import CrmcertificationSchool from '@/components/certificationSchool'
import CrmusersManagement from '@/components/usersManagement'
import CrmpermissionsManagement from '@/components/permissionsManagement'
import CrmdictionaryManagement from '@/components/dictionaryManagement'
import CrmschoolListManagement from '@/components/schoolListManagement'
import CrmadjustBusiness from '@/components/adjustBusiness'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path:'/2-1',
      name:'message',
      component:Crmmessage
    },
    {
      path:'/2-2',
      name:'mesmanagement',
      component:Crmmesmanagement
    },
    {
      path:'/3-1',
      name:'search',
      component:Crmsearch
    },
    {
      path:'/3-2',
      name:'allbusins',
      component:Crmallbusins
    },
    {
      path:'/3-3',
      name:'applymanagement',
      component:Crmapplymanagement
    },
    {
      path:'/3-4',
      name:'visamanagement',
      component:Crmvisamanagement
    },
    {
      path:'/3-5',
      name:'cermanagement',
      component:Crmcermanagement
    },
    {
      path:'/3-6',
      name:'othersmanagement',
      component:Crmothersmanagement
    },
    {
      path:'/4-1',
      name:'apply',
      component:Crmapply
    },
    {
      path:'/4-2-1',
      name:'T4China',
      component:CrmT4China
    },
    {
      path:'/4-2-2',
      name:'T4England',
      component:CrmT4England
    },
    {
      path:'/4-2-3',
      name:'visitAndShortTremStudentVisa',
      component:CrmvisitAndShortTremStudentVisa
    },
    {
      path:'/4-2-4',
      name:'reapplyBRP',
      component:CrmreapplyBRP
    },
    {
      path:'/4-3-1',
      name:'returnStudyCertification',
      component:CrmreturnStudyCertification
    },
    {
      path:'/4-3-2',
      name:'foreignDegreeCertification',
      component:CrmforeignDegreeCertification
    },
    {
      path:'/4-4-1',
      name:'appealOthers',
      component:CrmappealOthers
    },
    {
      path:'/4-4-2',
      name:'trackingCAS',
      component:CrmtrackingCAS
    },
    {
      path:'/4-4-3',
      name:'campus',
      component:Crmcampus
    },
    {
      path:'/4-5',
      name:'drafts',
      component:Crmdrafts
    },
    {
      path:'/5-1',
      name:'businessType',
      component:CrmbusinessType
    },
    {
      path:'/5-2',
      name:'businessNumber',
      component:CrmbusinessNumber
    },
    {
      path:'/5-3',
      name:'customerArea',
      component:CrmcustomerArea
    },
    {
      path:'/5-4',
      name:'readingSchool',
      component:CrmreadingSchool
    },
    {
      path:'/5-5',
      name:'knowShidai',
      component:CrmknowShidai
    },
    {
      path:'/5-6',
      name:'coursersGrade',
      component:CrmcoursersGrade
    },
    {
      path:'/5-7',
      name:'matriculation',
      component:Crmmatriculation
    },
    {
      path:'/5-8',
      name:'certificationSchool',
      component:CrmcertificationSchool
    },
    {
      path:'/6-1',
      name:'usersManagement',
      component:CrmusersManagement
    },
    {
      path:'/6-2',
      name:'permissionsManagement',
      component:CrmpermissionsManagement
    },
    {
      path:'/6-3',
      name:'dictionaryManagement',
      component:CrmdictionaryManagement
    },
    {
      path:'/6-4',
      name:'schoolListManagement',
      component:CrmschoolListManagement
    },
    {
      path:'/6-5',
      name:'adjustBusiness',
      component:CrmadjustBusiness
    }
  ]
})
