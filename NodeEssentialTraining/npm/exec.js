const cp = require('child_process')


//cp.exec("open http://www.google.com")

//cp.exec("open -a Terminal .")



cp.exec("node readStream", (err, data, stderr) => {
    console.log(data)
})



/*
cp.exec("lst", (err, data, stderr) => {
    console.log(stderr)
})
*/


/*
cp.exec("ls", (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
})
*/