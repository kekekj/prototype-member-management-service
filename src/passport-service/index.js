const initSerialization = require('./init-serialization')
const useLocal = require('./use-local')
const useFacebook = require('./use-facebook')
const useGoogle = require('./use-google')

const PassportService = {}

PassportService.initSerialization = initSerialization
PassportService.useLocal = useLocal
PassportService.useFacebook = useFacebook
PassportService.useGoogle = useGoogle

module.exports = PassportService