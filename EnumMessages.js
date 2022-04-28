const EnumMessages = {
  Success: {
    message: 'Success',
    code: 0
  },
  UnexpectedError: {
    message: 'Unexpected Error',
    code: 1
  },
  MissingParameterId: {
    message: 'missing parameter: id should be a number',
    code: 2
  },
  UserNotFound: {
    message: 'User Not Found',
    code: 3
  },
  EmailExists: {
    message: 'Email exists',
    code: 4
  },
  IsNotAuthenticated: {
    message: 'Is not authenticated',
    code: 5
  },
  InsufficientPrivileges: {
    message: 'Insufficient privileges',
    code: 6
  },
  CategoryNotFound: {
    message: 'Category Not Found',
    code: 7
  },
  InvalidLogin: {
    message: 'Invalid login',
    code: 8
  },
  InvalidInformation: {
    message: 'Invalid information',
    code: 9
  },
  ErrorGettingProduct: {
    message: 'Error Getting Product(s)',
    code: 10
  },
  ErrorUpdatingProduct: {
    message: 'Error Updating Product',
    code: 11
  },
  ErrorAddingProduct: {
    message: 'Error Adding Product',
    code: 12
  },
  ErrorDeletingProduct: {
    message: 'Error Deleting Product',
    code: 13
  },
  ProductNotFound: {
    message: 'Product Not Found',
    code: 14
  }
}

module.exports = EnumMessages
