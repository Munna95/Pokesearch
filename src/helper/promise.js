export default (promise)=>{
    promise()
    .then(data=>[data,null])
    .catch(err=>[null,err])
}




