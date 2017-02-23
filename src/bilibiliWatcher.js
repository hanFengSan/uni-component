
let target = document.getElementsByClassName('bilibiliHtml5Player')[0].contentWindow.document.getElementsByClassName('bilibili-player-watching')[0]
let printData = () => {
    let sum = target.textContent.replace('人正在看，', '')
    if (sum !== '')
        console.log(`time: ${(new Date()).toLocaleString()}, sum: ${sum}`)
}
printData()
target.addEventListener('DOMSubtreeModified', printData)
'global_notice_wrap'