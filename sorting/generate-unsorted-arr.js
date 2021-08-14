const NUM_OF_ITEMS = 100

module.exports = (length = NUM_OF_ITEMS) => {
    return Array.from({
            length
        },
        () => Math.floor(Math.random() * 1000)
    )
}