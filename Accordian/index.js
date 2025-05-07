const sections = [
    {
        title: "section 1",
        content: "Content for section 1"
    },
    {
        title: "section 2",
        content: "Content for section 2"
    },
    {
        title: "section 3",
        content: "Content for section 3"
    }
]

document.addEventListener("DOMContentLoaded", () => {
    const accordianContainer = document.querySelector("#accordian")

    sections.forEach((section, index) => {
        const sectionItem = document.createElement('div')
        sectionItem.classList.add('accordian-item')

        const sectionHeader = document.createElement('div')
        sectionHeader.classList.add('section-header')
        sectionHeader.innerHTML = `<h2>${section.title}</h2>`

        const sectionContainer = document.createElement("div")
        sectionContainer.classList.add("section-container")
        sectionContainer.innerHTML = `<p>${section.content}</p>`

        sectionItem.appendChild(sectionHeader)
        sectionItem.appendChild(sectionContainer)

        accordianContainer.appendChild(sectionItem)

        if (index === 0) {
            sectionItem.classList.add("active")
            sectionContainer.style.display = "block"
        }

    })

    accordianContainer.addEventListener("click", (e) => {
        const header = e.target.closest(".section-header")

        if (!header) return

        const sectionItem = header.parentNode
        const content = sectionItem.querySelector(".section-container")
        const isActive = sectionItem.classList.contains("active")

        document.querySelectorAll(".accordian-item").forEach((item) => {
            item.classList.remove("active")
            item.querySelector(".section-container").style.display = "none"
        })
        if (!isActive) {
            sectionItem.classList.add("active")
            content.style.display = "block"
        }

    })


})