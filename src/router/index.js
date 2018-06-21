import Vue from 'vue'
import Router from 'vue-router'
import WindowMain from '@/components/WindowMain'

import Frame0 from '@/components/frameGroup/Frame0'
import Frame1 from '@/components/frameGroup/Frame1'
import Frame2 from '@/components/frameGroup/Frame2'
import Frame3 from '@/components/frameGroup/Frame3'
import Frame4 from '@/components/frameGroup/Frame4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WindowMain',
      redirect: '/frame0',
      component: WindowMain,
      children: [
        {
          path: '/frame0',
          name: 'Frame0',
          component: Frame0
        },
        {
          path: '/frame1',
          name: 'Frame1',
          component: Frame1
        },
        {
          path: '/frame2',
          name: 'Frame2',
          component: Frame2
        },
        {
          path: '/frame3',
          name: 'Frame3',
          component: Frame3
        },
        {
          path: '/frame4',
          name: 'Frame4',
          component: Frame4
        }
      ]
    }
  ]
})
