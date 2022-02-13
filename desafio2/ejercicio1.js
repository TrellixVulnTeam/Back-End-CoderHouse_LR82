const showLetters = (string, callback) =>{
    let index = 0
    const timer = setInterval(()=>{
        if(index<string.length){
            console.log(string[index])
            index++
        }else{
            clearInterval(timer)
            callback()
        }
    },1000)
}
const fin = () => console.log('finished')
showLetters('banana',fin) 