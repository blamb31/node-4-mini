let id = 1
let allMessages = [
        {
            id: id++,
            username: "user1",
            message: "Hello"
        }
    ]

module.exports = {
    getAllMessages: (req, res) => {
        res.send(allMessages)
    },

    createMessage: (req, res) => {
        req.body.id = id++
        allMessages.push(req.body)
        res.send(allMessages)
    }
}
