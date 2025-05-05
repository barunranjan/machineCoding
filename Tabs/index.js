const tabsData = [
    {
        title: "Tab 1",
        id: "tab1",
        content: "content for tab1 "
    },
    {
        title: "Tab 2",
        id: "tab2",
        content: "content for tab2 "
    },
    {
        title: "Tab 3",
        id: "tab3",
        content: "content for tab3 "
    }
]
document.addEventListener("DOMContentLoaded", () => {
    let activeTab = tabsData[0].id

    const functionRenderTab = () => {
        const tabContainer = document.querySelector("#tabContainer")
        const tabContentContainer = document.querySelector("#tabContentContainer")
        tabsData.forEach((tab) => {
            const tabButton = document.createElement("button")
            tabButton.className = "tabLinks"
            tabButton.textContent = tab.title
            tabButton.setAttribute("data-tab", tab.id)
            tabContainer.appendChild(tabButton)

            const tabContent = document.createElement("div")
            tabContent.id = tab.id
            tabContent.className = "tabContent"
            tabContent.innerHTML = `<h3>${tab.title}</h3>${tab.content}<p></p>`
            tabContentContainer.appendChild(tabContent)
        })

        tabContainer.addEventListener("click", (e) => {
            if (e.target.matches(".tabLinks")) {
                const tabId = e.target.getAttribute("data-tab")
                if (tabId != activeTab) {
                    openTab(tabId)
                    activeTab = tabId
                }
            }
        })
    }
    const openTab = (tabId) => {
        const tabContent = document.querySelectorAll(".tabContent")
        const tabLink = document.querySelectorAll(".tabLinks")

        tabContent.forEach((tab) => tab.classList.remove("active"))
        tabLink.forEach((tab) => tab.classList.remove("active"))

        document.getElementById(tabId).classList.add("active")
        document.querySelector(`button[data-tab="${tabId}"]`).classList.add("active")
    }
    functionRenderTab()
    document.getElementById(activeTab).classList.add("active")
    console.log()
    document.querySelector(`button[data-tab="${activeTab}"]`).classList.add("active")
})