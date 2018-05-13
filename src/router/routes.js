
export default [
  { path: '/', component: () => import('pages/Home') },
  { path: '/Characters', component: () => import('pages/Characters') },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
