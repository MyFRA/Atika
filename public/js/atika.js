/**
 * Sidebar Submenu Accordion
 * 
 */
const renderFunctionalitySidebarItemDropdown = () => {
    const submenuItemElements = document.querySelectorAll('.submenu-item')
    submenuItemElements.forEach((submenuItemElement) => {
        submenuItemElement.addEventListener('click', () => {
            const submenuItemAccordElement = submenuItemElement.querySelector('ul')
            const submenuItemChevronElement = submenuItemElement.querySelector('.submenu-item-chevron')

            submenuItemElements.forEach((submenuItemElementLayer2) => {
                if (submenuItemElementLayer2 != submenuItemElement && !submenuItemElementLayer2.querySelector('.submenu-accord')) {
                    submenuItemElementLayer2.classList.contains('active') ? submenuItemElementLayer2.classList.remove('active') : ''
                }
            })

            submenuItemElement.classList.toggle('active')

            if (submenuItemAccordElement) {

                if (submenuItemElement.classList.contains('active')) {
                    !submenuItemAccordElement.classList.contains('active') ? submenuItemAccordElement.classList.add('active') : ''
                } else {
                    submenuItemAccordElement.classList.contains('active') ? submenuItemAccordElement.classList.remove('active') : ''
                }

                if (submenuItemAccordElement.classList.contains('active')) {
                    submenuItemChevronElement.innerHTML =
                        `
                        <span class="bg-gray-300 p-1 rounded-full">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="w-4 h-4"
                            >
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" 
                                />
                            </svg>
                        </span>
                    `
                } else {
                    submenuItemChevronElement.innerHTML =
                        `
                        <span class="bg-gray-100 p-1 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                ></path>
                            </svg>
                        </span>
                    `
                }
            }
        })
    })
}

/**
 * Reload Chevron Active After Reloaded
 * 
 */
const reloadChevronActiveAfterReloaded = () => {
    const submenuItemChevronElements = document.querySelectorAll('.submenu-item-chevron')

    submenuItemChevronElements.forEach((submenuItemChevronElement) => {
        if (submenuItemChevronElement.parentElement.parentElement.classList.contains('active')) {
            submenuItemChevronElement.innerHTML =
                `
            <span class="bg-gray-300 p-1 rounded-full">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="w-4 h-4"
                >
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" 
                    />
                </svg>
            </span>
        `
        }
    })
}

/**
 * Event when close sidebar toggled
 * 
 */
const toggledMobileSidebar = () => {
    const closeSidebarBtnElement = document.querySelector('.close-sidebar-btn')
    const showSidebarBtnElement = document.querySelector('.show-sidebar-btn')
    const sidebarElement = document.querySelector('.sidebar')

    closeSidebarBtnElement.addEventListener('click', () => {
        sidebarElement.classList.toggle('show')
    })
    showSidebarBtnElement.addEventListener('click', () => {
        sidebarElement.classList.toggle('show')
    })
}

/**
 * Initialization
 * 
 */
renderFunctionalitySidebarItemDropdown()
reloadChevronActiveAfterReloaded()
toggledMobileSidebar()