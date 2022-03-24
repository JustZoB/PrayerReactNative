export const loginValidate = (values: { email: string, password: string }) => {
  const errors: { email?: string, password?: string } = {}

  if (!values.email) {
    errors.email = 'Required'
  }
  if (values.email && values.email.length > 20) {
    errors.email = 'Too long'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (values.password && values.password.length > 20) {
    errors.password = 'Too long'
  }

  return errors
}

export const singUpValidate = (values: { email: string, name: string, password: string }) => {
  const errors: { email?: string, name?: string, password?: string } = {}

  if (!values.email) {
    errors.email = 'Required'
  }
  if (values.email && values.email.length > 20) {
    errors.email = 'Too long'
  }
  if (!values.name) {
    errors.name = 'Required'
  }
  if (values.name && values.name.length > 20) {
    errors.name = 'Too long'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (values.password && values.password.length > 20) {
    errors.password = 'Too long'
  }

  return errors
}
