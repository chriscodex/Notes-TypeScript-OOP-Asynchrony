(async ()=>{

    function delay() {
        const promise = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(true)
            })
        })
        return promise
    }
})()
