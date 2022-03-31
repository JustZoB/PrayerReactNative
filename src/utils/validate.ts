export const validateEmail = (email: string) => {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const loginValidate = (values: { email: string, password: string }) => {
  const errors: { email?: string, password?: string } = {}

  if (!values.email || values.email.trim() === '') {
    errors.email = 'Required'
  }
  if (!validateEmail(values.email)) {
    errors.email = 'It is not email'
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

  if (!values.email || values.email.trim() === '') {
    errors.email = 'Required'
  }
  if (!validateEmail(values.email)) {
    errors.email = 'It is not email'
  }
  if (values.email && values.email.length > 20) {
    errors.email = 'Too long'
  }
  if (!values.name.trim()) {
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

export const columnValidate = (values: { title: string }) => {
  const errors: { title?: string } = {}

  if (!values.title || values.title.trim() === '') {
    errors.title = 'Required'
  }
  if (values.title && values.title.length > 20) {
    errors.title = 'Too long'
  }

  return errors
}

export const prayerValidate = (values: { title: string }) => {
  const errors: { title?: string } = {}

  if (!values.title || values.title.trim() === '') {
    errors.title = 'Required'
  }
  if (values.title && values.title.length > 20) {
    errors.title = 'Too long'
  }

  return errors
}

export const commentValidate = (values: { body: string }) => {
  const errors: { body?: string } = {}

  if (!values.body.trim()) {
    errors.body = 'Required'
  }
  if (values.body && values.body.length > 20) {
    errors.body = 'Too long'
  }

  return errors
}
