const btn = document.querySelector("button")
const len = document.querySelector("#leng")
const outP = document.querySelector(".output")
const numb = document.querySelector("#num")
const upperC = document.querySelector("#upper")
const loweC = document.querySelector("#lower")
const symbol = document.querySelector("#symbol")
const copy = document.querySelector("a")

detail = () => {
    const arr = []
    if (numb.checked) {
        const st = '1234567890'
        const v = Math.floor(Math.random() * st.length)
        arr.splice(0, 0, st[v])
    }

    if (upperC.checked) {
        const st = 'abcdefghijklmnopqrstuvwxyz'
        const v = Math.floor(Math.random() * st.length)
        arr.splice(0, 0, st.toUpperCase()[v])
    }

    if (loweC.checked) {
        const st = 'abcdefghijklmnopqrstuvwxyz'
        const v = Math.floor(Math.random() * st.length)
        arr.splice(0, 0, st[v])
    }

    if (symbol.checked) {
        const st = '*()&%$#@!-+=[]/?><'
        const v = Math.floor(Math.random() * st.length)
        arr.splice(0, 0, st[v])
    }
    return arr[Math.floor(Math.random() * arr.length)]
}


btn.addEventListener('click', () => {
    const all = []
    for (let i = 0; i < len.value; i++) {
        const h = detail()
        all.splice(0, 0, h)
    }
    outP.value = all.join('')
})


copy.addEventListener('click', () => {
    const password = document.createElement('input');
    document.body.appendChild(password);
    password.value = outP.value;
    if (!password) {
        return;
    }

    password.select()
    document.execCommand('copy')
    password.remove();
    alert('hogya')
})