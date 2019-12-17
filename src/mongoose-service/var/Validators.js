function createMsg(props) { 
  return props.reason.message;
}

const toID = [
  {
    validator: (v) => {
      if (v.length < 6 || v.length > 10) {
        throw new Error('Length of id must be between 6 and 10.')
      }
    }
  },
  {
    validator: (v) => {
      if ( /^[a-zA-Z0-9]{6,10}$/.test(v) === false) {
        throw new Error('No special character allowed.')
      }
    },
    message: createMsg
  }
]

const toPassword = [
  {
    validator: (v) => {
      if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/.test(v)
        === false
      ) {
        throw new Error('Invalid password')
      }
    },
    message: createMsg
  }
]

const toEmail = [
  {
    validator: (v) => {
      const regExpToEmail =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regExpToEmail.test(v)) {
        throw new Error('Invalid email.')
      }
    },
    message: createMsg
  }
]
const Validators = {}

Validators.toID = toID
Validators.toPassword = toPassword
Validators.toEmail = toEmail

module.exports = Validators