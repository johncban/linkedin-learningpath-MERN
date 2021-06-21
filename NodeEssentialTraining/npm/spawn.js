const cp = require("child_process")



const questionApp = cp.spawn("node", ["questionsstart"])

questionApp.stdin.write("Jc \n")
questionApp.stdin.write("Jersey \n")
questionApp.stdin.write("Change the world \n")



questionApp.stdout.on("data", data => {
    console.log(`from the questions app: ${data}`)
})

questionApp.on("close", () => {
    console.log(`questionApp process exited`)
})


