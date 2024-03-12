export const useUiStore = defineStore('uiStore', () => {
  const showSidebar = useState('sidebarShowList', () => true)

  return { showSidebar }
})
