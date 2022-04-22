export const validateEmail = (email: string) => {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const isEmpty = (string: string) => {
  if (!string || string.trim() === '') {
    return true
  }

  return false
}

export const tooLong = (string: string) => {
  if (string && string.length > 20) {
    return true
  }

  return false
}

export const emailValidation = (email: string) => {
  const errors: { email?: string } = {}

  if (isEmpty(email)) {
    errors.email = 'Required'
  }
  if (!validateEmail(email)) {
    errors.email = 'It is not email'
  }
  if (tooLong(email)) {
    errors.email = 'Too long'
  }

  return errors.email
}

export const nameValidation = (name: string) => {
  const errors: { name?: string } = {}

  if (isEmpty(name)) {
    errors.name = 'Required'
  }
  if (tooLong(name)) {
    errors.name = 'Too long'
  }

  return errors.name
}

export const passwordValidation = (password: string) => {
  const errors: { password?: string } = {}

  if (isEmpty(password)) {
    errors.password = 'Required'
  }
  if (tooLong(password)) {
    errors.password = 'Too long'
  }

  return errors.password
}

export const titleValidation = (title: string) => {
  const errors: { title?: string } = {}

  if (isEmpty(title)) {
    errors.title = 'Required'
  }
  if (tooLong(title)) {
    errors.title = 'Too long'
  }

  return errors.title
}

export const bodyValidation = (body: string) => {
  const errors: { body?: string } = {}

  if (isEmpty(body)) {
    errors.body = 'Required'
  }
  if (tooLong(body)) {
    errors.body = 'Too long'
  }

  return errors.body
}

export const loginValidate = (values: { email: string, password: string }) => {
  const errors: { email?: string, password?: string } = {}
  const emailValidate = emailValidation(values.email)
  const passwordValidate = passwordValidation(values.password)
  if (emailValidate) {
    errors.email = emailValidate
  }
  if (passwordValidate) {
    errors.password = passwordValidate
  }
  return errors
}

export const signUpValidate = (values: { email: string, name: string, password: string }) => {
  const errors: { email?: string, name?: string, password?: string } = {}
  const emailValidate = emailValidation(values.email)
  const nameValidate = nameValidation(values.name)
  const passwordValidate = passwordValidation(values.password)
  if (emailValidate) {
    errors.email = emailValidate
  }
  if (nameValidate) {
    errors.name = nameValidate
  }
  if (passwordValidate) {
    errors.password = passwordValidate
  }
  return errors
}

export const columnValidate = (values: { title: string }) => {
  const errors: { title?: string } = {}
  const titleValidate = titleValidation(values.title)
  if (titleValidate) {
    errors.title = titleValidate
  }
  return errors
}

export const prayerValidate = (values: { title: string }) => {
  const errors: { title?: string } = {}
  const titleValidate = titleValidation(values.title)
  if (titleValidate) {
    errors.title = titleValidate
  }
  return errors
}

export const commentValidate = (values: { body: string }) => {
  const errors: { body?: string } = {}
  const bodyValidate = bodyValidation(values.body)
  if (bodyValidate) {
    errors.body = bodyValidate
  }
  return errors
}
