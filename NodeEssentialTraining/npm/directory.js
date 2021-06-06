const fs = require("fs")

if (fs.existsSync("storage-files")) {
    console.log("Folder already created")
} else {
    fs.mkdir("storage-files", err => {
        if (err) {
            throw err
        }

        console.log("directory created")
    })
}

/*
fs.mkdir("storage-files", err => {
    if (err) {
        throw err
    }

    console.log("directory created")
})
*/