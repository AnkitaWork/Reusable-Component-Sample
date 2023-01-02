export const constants = {
    loginForm: [
        {
          type: 'input',
          icon: 'mdi-account-outline',
          label: 'User name',
          inputType: 'text',
          name: 'username',
          validations: [
            {
              name: 'required',
              validator: 'required',
              message: 'User name required',
            },
            {
              name: 'pattern',
              validator: '^[a-zA-Z]+$',
              message: 'Accept only text',
            },
          ],
        },
        {
          type: 'password',
          icon: 'mdi-lock-outline',
          label: 'Password',
          inputType: 'text',
          name: 'password',
          validations: [
            {
              name: 'required',
              validator: 'required',
              message: 'Password required',
            },
            {
              name: 'minlength',
              validator: 4,
              message: 'Password should be 4 character long'
            }
          ],
        },
    ],
    crudOperationForm: [
        {
          type: 'input',
          icon: 'mdi-account-outline',
          label: 'Name',
          inputType: 'text',
          name: 'name',
          validations: [
            {
              name: 'required',
              validator: 'required',
              message: 'Name required',
            }
          ],
        },
        {
          type: 'input',
          icon: 'mdi-email-outline',
          label: 'Email',
          inputType: 'email',
          name: 'email',
          validations: [
            {
              name: 'required',
              validator: 'required',
              message: 'Email name required',
            },
            {
              name: 'pattern',
              validator: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$',
              message: 'Please enter valid email address',
            },
          ],
        },
        {
          type: 'input',
          icon: 'mdi-comment-text-outline',
          label: 'Body',
          inputType: 'text',
          name: 'body',
          validations: [
            {
              name: 'required',
              validator: 'required',
              message: 'Name required',
            }
          ],
        },
    ]
}