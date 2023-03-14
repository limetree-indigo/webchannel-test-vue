function btnClick1(val) {
    if (window.backend) {
        window.backend.getRef(val)
    }
}

const test = {btnClick1}

export default test