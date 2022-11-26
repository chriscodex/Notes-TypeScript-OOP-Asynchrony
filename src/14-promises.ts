import axios from 'axios'

(async ()=>{

    function delay(time: number) {
        /* This promise return a string */
        const promise = new Promise<string>((resolve)=>{
            setTimeout(()=>{
                resolve('Hello friends')
            })
        })
        return promise
    }
    console.log('---'.repeat(10))
    const rta = await delay(2000)
    console.log(rta)
})()
