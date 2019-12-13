/**
 * @param {any} passport 
 * @param {any} authOpts 
 */
function verifyPassportSerial(passport, authOpts) {
  return () => {
    const {session} = authOpts
    const {_serializers, _deserializers} = passport

    if (session !== false 
      && (_serializers.length === 0 || _deserializers.length === 0)
    ) {
      throw new Error('The session prop is able, but passport.serializeUser and passport.deserializeUer are not configured.')
    }   
  }
}

module.exports = verifyPassportSerial