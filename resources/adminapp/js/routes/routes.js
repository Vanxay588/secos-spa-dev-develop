import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/admin',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
     /*  {
        path: 'homes',
        name: 'homes.index',
        component: () => import('@cruds/Homes/Index.vue'),
        meta: { title: 'cruds.home.title' }
      }, */
      {
        path: 'blogs',
        name: 'blogs.index',
        component: () => import('@cruds/Blogs/Index.vue'),
        meta: { title: 'cruds.blog.title' }
      },
      {
        path: 'blogs/create',
        name: 'blogs.create',
        component: () => import('@cruds/Blogs/Create.vue'),
        meta: { title: 'cruds.blog.title' }
      },
      {
        path: 'blogs/:id',
        name: 'blogs.show',
        component: () => import('@cruds/Blogs/Show.vue'),
        meta: { title: 'cruds.blog.title' }
      },
      {
        path: 'blogs/:id/edit',
        name: 'blogs.edit',
        component: () => import('@cruds/Blogs/Edit.vue'),
        meta: { title: 'cruds.blog.title' }
      },
      {
        path: 'annoucements',
        name: 'annoucements.index',
        component: () => import('@cruds/Annoucements/Index.vue'),
        meta: { title: 'cruds.annoucement.title' }
      },
      {
        path: 'annoucements/create',
        name: 'annoucements.create',
        component: () => import('@cruds/Annoucements/Create.vue'),
        meta: { title: 'cruds.annoucement.title' }
      },
      {
        path: 'annoucements/:id',
        name: 'annoucements.show',
        component: () => import('@cruds/Annoucements/Show.vue'),
        meta: { title: 'cruds.annoucement.title' }
      },
      {
        path: 'annoucements/:id/edit',
        name: 'annoucements.edit',
        component: () => import('@cruds/Annoucements/Edit.vue'),
        meta: { title: 'cruds.annoucement.title' }
      },
      {
        path: 'policy-management',
        name: 'policy_management',
        component: View,
        redirect: { name: 'policy_categories.index' },
        children: [
          {
            path: 'policy-categories',
            name: 'policy_categories.index',
            component: () => import('@cruds/PolicyCategories/Index.vue'),
            meta: { title: 'cruds.policyCategory.title' }
          },
          {
            path: 'policy-categories/create',
            name: 'policy_categories.create',
            component: () => import('@cruds/PolicyCategories/Create.vue'),
            meta: { title: 'cruds.policyCategory.title' }
          },
          {
            path: 'policy-categories/:id',
            name: 'policy_categories.show',
            component: () => import('@cruds/PolicyCategories/Show.vue'),
            meta: { title: 'cruds.policyCategory.title' }
          },
          {
            path: 'policy-categories/:id/edit',
            name: 'policy_categories.edit',
            component: () => import('@cruds/PolicyCategories/Edit.vue'),
            meta: { title: 'cruds.policyCategory.title' }
          },
          {
            path: 'policies',
            name: 'policies.index',
            component: () => import('@cruds/Policies/Index.vue'),
            meta: { title: 'cruds.policy.title' }
          },
          {
            path: 'policies/create',
            name: 'policies.create',
            component: () => import('@cruds/Policies/Create.vue'),
            meta: { title: 'cruds.policy.title' }
          },
          {
            path: 'policies/:id',
            name: 'policies.show',
            component: () => import('@cruds/Policies/Show.vue'),
            meta: { title: 'cruds.policy.title' }
          },
          {
            path: 'policies/:id/edit',
            name: 'policies.edit',
            component: () => import('@cruds/Policies/Edit.vue'),
            meta: { title: 'cruds.policy.title' }
          }
        ]
      },
      {
        path: 'download-management',
        name: 'download_management',
        component: View,
        redirect: { name: 'download_categories.index' },
        children: [
          {
            path: 'download-categories',
            name: 'download_categories.index',
            component: () => import('@cruds/DownloadCategories/Index.vue'),
            meta: { title: 'cruds.downloadCategory.title' }
          },
          {
            path: 'download-categories/create',
            name: 'download_categories.create',
            component: () => import('@cruds/DownloadCategories/Create.vue'),
            meta: { title: 'cruds.downloadCategory.title' }
          },
          {
            path: 'download-categories/:id',
            name: 'download_categories.show',
            component: () => import('@cruds/DownloadCategories/Show.vue'),
            meta: { title: 'cruds.downloadCategory.title' }
          },
          {
            path: 'download-categories/:id/edit',
            name: 'download_categories.edit',
            component: () => import('@cruds/DownloadCategories/Edit.vue'),
            meta: { title: 'cruds.downloadCategory.title' }
          },
          {
            path: 'downloads',
            name: 'downloads.index',
            component: () => import('@cruds/Downloads/Index.vue'),
            meta: { title: 'cruds.download.title' }
          },
          {
            path: 'downloads/create',
            name: 'downloads.create',
            component: () => import('@cruds/Downloads/Create.vue'),
            meta: { title: 'cruds.download.title' }
          },
          {
            path: 'downloads/:id',
            name: 'downloads.show',
            component: () => import('@cruds/Downloads/Show.vue'),
            meta: { title: 'cruds.download.title' }
          },
          {
            path: 'downloads/:id/edit',
            name: 'downloads.edit',
            component: () => import('@cruds/Downloads/Edit.vue'),
            meta: { title: 'cruds.download.title' }
          }
        ]
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      }/* ,
      {
        path: 'aboutuses',
        name: 'aboutuses.index',
        component: () => import('@cruds/Aboutuses/Index.vue'),
        meta: { title: 'cruds.aboutUs.title' }
      } */
    ]
  },
  {
    path: '/',
    component: () => import('@pages/Layout/HomesLayout.vue'),
    redirect: 'homes',
    children: [
      {
        path: 'homes',
        name: 'homes.index',
        component: () => import('@cruds/Homes/Index.vue'),
        meta: { title: 'cruds.home.title' }
      }/* ,
      {
        path: 'blogs',
        name: 'blogs.index',
        component: () => import('@cruds/Blogs/Index.vue'),
        meta: { title: 'cruds.blog.title' }
      },
      {
        path: 'blogs/create',
        name: 'blogs.create',
        component: () => import('@cruds/Blogs/Create.vue'),
        meta: { title: 'cruds.blog.title' }
      },
      {
        path: 'blogs/:id',
        name: 'blogs.show',
        component: () => import('@cruds/Blogs/Show.vue'),
        meta: { title: 'cruds.blog.title' }
      },
      {
        path: 'blogs/:id/edit',
        name: 'blogs.edit',
        component: () => import('@cruds/Blogs/Edit.vue'),
        meta: { title: 'cruds.blog.title' }
      },
      {
        path: 'annoucements',
        name: 'annoucements.index',
        component: () => import('@cruds/Annoucements/Index.vue'),
        meta: { title: 'cruds.annoucement.title' }
      },
      {
        path: 'annoucements/create',
        name: 'annoucements.create',
        component: () => import('@cruds/Annoucements/Create.vue'),
        meta: { title: 'cruds.annoucement.title' }
      },
      {
        path: 'annoucements/:id',
        name: 'annoucements.show',
        component: () => import('@cruds/Annoucements/Show.vue'),
        meta: { title: 'cruds.annoucement.title' }
      },
      {
        path: 'annoucements/:id/edit',
        name: 'annoucements.edit',
        component: () => import('@cruds/Annoucements/Edit.vue'),
        meta: { title: 'cruds.annoucement.title' }
      },
      {
        path: 'policy-management',
        name: 'policy_management',
        component: View,
        redirect: { name: 'policy_categories.index' },
        children: [
          {
            path: 'policy-categories',
            name: 'policy_categories.index',
            component: () => import('@cruds/PolicyCategories/Index.vue'),
            meta: { title: 'cruds.policyCategory.title' }
          },
          {
            path: 'policy-categories/create',
            name: 'policy_categories.create',
            component: () => import('@cruds/PolicyCategories/Create.vue'),
            meta: { title: 'cruds.policyCategory.title' }
          },
          {
            path: 'policy-categories/:id',
            name: 'policy_categories.show',
            component: () => import('@cruds/PolicyCategories/Show.vue'),
            meta: { title: 'cruds.policyCategory.title' }
          },
          {
            path: 'policy-categories/:id/edit',
            name: 'policy_categories.edit',
            component: () => import('@cruds/PolicyCategories/Edit.vue'),
            meta: { title: 'cruds.policyCategory.title' }
          },
          {
            path: 'policies',
            name: 'policies.index',
            component: () => import('@cruds/Policies/Index.vue'),
            meta: { title: 'cruds.policy.title' }
          },
          {
            path: 'policies/create',
            name: 'policies.create',
            component: () => import('@cruds/Policies/Create.vue'),
            meta: { title: 'cruds.policy.title' }
          },
          {
            path: 'policies/:id',
            name: 'policies.show',
            component: () => import('@cruds/Policies/Show.vue'),
            meta: { title: 'cruds.policy.title' }
          },
          {
            path: 'policies/:id/edit',
            name: 'policies.edit',
            component: () => import('@cruds/Policies/Edit.vue'),
            meta: { title: 'cruds.policy.title' }
          }
        ]
      },
      {
        path: 'download-management',
        name: 'download_management',
        component: View,
        redirect: { name: 'download_categories.index' },
        children: [
          {
            path: 'download-categories',
            name: 'download_categories.index',
            component: () => import('@cruds/DownloadCategories/Index.vue'),
            meta: { title: 'cruds.downloadCategory.title' }
          },
          {
            path: 'download-categories/create',
            name: 'download_categories.create',
            component: () => import('@cruds/DownloadCategories/Create.vue'),
            meta: { title: 'cruds.downloadCategory.title' }
          },
          {
            path: 'download-categories/:id',
            name: 'download_categories.show',
            component: () => import('@cruds/DownloadCategories/Show.vue'),
            meta: { title: 'cruds.downloadCategory.title' }
          },
          {
            path: 'download-categories/:id/edit',
            name: 'download_categories.edit',
            component: () => import('@cruds/DownloadCategories/Edit.vue'),
            meta: { title: 'cruds.downloadCategory.title' }
          },
          {
            path: 'downloads',
            name: 'downloads.index',
            component: () => import('@cruds/Downloads/Index.vue'),
            meta: { title: 'cruds.download.title' }
          },
          {
            path: 'downloads/create',
            name: 'downloads.create',
            component: () => import('@cruds/Downloads/Create.vue'),
            meta: { title: 'cruds.download.title' }
          },
          {
            path: 'downloads/:id',
            name: 'downloads.show',
            component: () => import('@cruds/Downloads/Show.vue'),
            meta: { title: 'cruds.download.title' }
          },
          {
            path: 'downloads/:id/edit',
            name: 'downloads.edit',
            component: () => import('@cruds/Downloads/Edit.vue'),
            meta: { title: 'cruds.download.title' }
          }
        ]
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      } */,
      {
        path: 'aboutuses',
        name: 'aboutuses.index',
        component: () => import('@cruds/Aboutuses/Index.vue'),
        meta: { title: 'cruds.aboutUs.title' }
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes
})
