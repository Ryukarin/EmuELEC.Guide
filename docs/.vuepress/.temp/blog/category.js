export const categoryMap = {"category":{"/":{"path":"/category/","map":{"Guide":{"path":"/category/guide/","keys":["v-5405215c","v-7d7b647f","v-087f1896","v-1a886d2b","v-7a121ece","v-cf0207e8","v-523c4948","v-475a9557","v-16592aea","v-7797be4c"]},"Navigation":{"path":"/category/navigation/","keys":["v-fffb8e28","v-14f73021"]},"Skill":{"path":"/category/skill/","keys":["v-d1650102","v-515d4f58","v-1e8ce436","v-43b5ea50","v-5ec6d68e","v-7cfca044","v-c88d73b0","v-1f1c4792"]}}}},"tag":{"/":{"path":"/tag/","map":{"EmuELEC":{"path":"/tag/emuelec/","keys":["v-5405215c","v-7d7b647f","v-087f1896","v-1a886d2b","v-7a121ece","v-cf0207e8","v-523c4948","v-475a9557","v-16592aea","v-7797be4c","v-fffb8e28","v-d1650102","v-515d4f58","v-1e8ce436","v-43b5ea50","v-5ec6d68e","v-7cfca044","v-c88d73b0","v-1f1c4792","v-14f73021"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
