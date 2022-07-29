window.addEventListener('load', function () {
    const content = document.getElementById('current-guess')
    const buttonDEL = document.getElementById('button-DEL')
    const buttonGO = document.getElementById('button-GO')
    const box = document.getElementById('resultbox')

    let contentList = []
    let answer = []
    for (let i = 0; i < 4; i++) {
        let n = String(Math.floor(Math.random() * 10))
        if (!answer.includes(n)) {
            answer.push(n)
        }
        else {
            i--
        }
    }

    console.log(answer);

    document.querySelectorAll('button.number').forEach(item => {
        item.addEventListener('click', event => {
            contentList.push({
                content: item.textContent,
            }
            )
            console.log(contentList);
            let htmlStr = ''
            contentList.forEach(function (item) {
                htmlStr += `
                <h3 style="display:inline">${item.content}</h3>
                `
            })
            content.innerHTML = htmlStr
        })
    })

    buttonDEL.addEventListener('click', function () {
        contentList.pop()
        let htmlStr = ''
        contentList.forEach(function (item) {
            htmlStr += `
            <h3 style="display:inline">${item.content}</h3>
            `
        })
        content.innerHTML = htmlStr
    })
    let box_htmlStr = ''

    buttonGO.addEventListener('click', function () {
        if (contentList.length != 4) {
            window.alert('要四位數 且 不能有重複數字')
            contentList = []
        }
        else {
            if ((contentList[0].content != contentList[1].content) &&
                (contentList[0].content != contentList[2].content) &&
                (contentList[0].content != contentList[3].content) &&
                (contentList[1].content != contentList[2].content) &&
                (contentList[1].content != contentList[3].content) &&
                (contentList[2].content != contentList[3].content)) {
                let A = 0
                let B = 0
                contentList.forEach(function (item) {
                    box_htmlStr += `
                    <h3 style="display:inline">${item.content}</h3>
                    `                    
                    if (answer.includes(item.content)) {
                        if (answer.indexOf(item.content) == contentList.indexOf(item)) {
                            console.log("A");
                            A++
                        }
                        else {
                            console.log("B");
                            B++
                        }
                    }
                    
                })
                box_htmlStr += `
                    <h3 style="display:inline">&nbsp;${A}A${B}B</h3>
                    `
                box_htmlStr += '<br>'
                box.innerHTML = box_htmlStr
                contentList = []

            }
            else {
                window.alert('要四位數 且 不能有重複數字')
                contentList = []
            }

        }
        let htmlStr = ''
        contentList.forEach(function (item) {
            htmlStr += `
            <h3 style="display:inline">${item.content}</h3>
            `
        })
        content.innerHTML = htmlStr
    })
})