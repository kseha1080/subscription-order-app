import ViewSubs from '../views/ViewSubs';
import CreateUpdateSub from '../views/CreateUpdateSub';

export default [
  {
    name: 'view subs',
    path: '/',
    component: ViewSubs,
  },
  {
    name: 'createSubscription',
    path: '/create-subscription',
    component: CreateUpdateSub,
  },
  {
    name: 'updateSubscription',
    path: '/update-subscription/:id',
    component: CreateUpdateSub,
  },
];
