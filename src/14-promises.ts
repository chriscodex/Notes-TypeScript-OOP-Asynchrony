(async ()=>{

    function delay(time: number) {
        const promise = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(true)
            })
        })
        return promise
    }

    const rta = await delay(2000)

})()
