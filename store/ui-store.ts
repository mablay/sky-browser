export const useUiStore = defineStore('uiStore', () => {
  const showSidebar = useState('showList', () => true)

  return { showSidebar }
})
