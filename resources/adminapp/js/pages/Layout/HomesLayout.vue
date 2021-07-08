<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar :sidebarLinks="sidebarLinks">
      <mobile-menu slot="content"></mobile-menu>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar> <!-- Languages -->
    </div>
  </div>
</template>

<script>
import TopNavbar from './TopNavbar.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    MobileMenu
  },
  data() {
    return {
      sidebarLinks: [
        {
          title: 'cruds.home.title',
          icon: 'table_view',
          path: { name: 'homes.index' }
        }, 
        {
          title: 'cruds.blog.title',
          icon: 'table_view',
          path: { name: 'blogs.index' }
        },
        {
          title: 'cruds.annoucement.title',
          icon: 'table_view',
          path: { name: 'annoucements.index' }
        },
        {
          title: 'cruds.policyManagement.title',
          icon: 'table_view',
          path: { name: 'policy_management' },
          children: [
            {
              title: 'cruds.policyCategory.title',
              icon: 'table_view',
              path: { name: 'policy_categories.index' }
            },
            {
              title: 'cruds.policy.title',
              icon: 'table_view',
              path: { name: 'policies.index' }
            }
          ]
        },
        {
          title: 'cruds.downloadManagement.title',
          icon: 'table_view',
          path: { name: 'download_management' },
          children: [
            {
              title: 'cruds.downloadCategory.title',
              icon: 'table_view',
              path: { name: 'download_categories.index' }
            },
            {
              title: 'cruds.download.title',
              icon: 'table_view',
              path: { name: 'downloads.index' }
            }
          ]
        },
        {
          title: 'cruds.aboutUs.title',
          icon: 'table_view',
          path: { name: 'aboutuses.index' }
        } 
      ]
    }
  }
}
</script>
