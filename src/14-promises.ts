(async ()=>{

    function delay(time: number) {
        /* This promise return a boolean */
        const promise = new Promise<boolean>((resolve)=>{
            setTimeout(()=>{
                resolve(true)
            })
        })
        return promise
    }
    console.log('---'.repeat(10))
    const rta = await delay(2000)
    console.log(rta)
})()
