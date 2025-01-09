
export default 
{
  success: () => ({
    code: 200,
    message: "Ok"
  }),

  success_with_data: (data) => ({
    code: 200,
    message: "Ok",
    data: data
  }),

  error_invalid_request: () => ({
    code: 100,
    message: "Invalid Request Format"
  }),

  error_invalid_input: () => ({
    code: 101,
    message: "Invalid Data"
  }),

  error_invalid_input: (inputs) => ({
    code: 101,
    message: "Invalid Data",
    inputs
  }),

  error_duplicate_entry: (inputs) => ({
    code: 102,
    message: "Duplicate Data",
    inputs: inputs
  }),

  error_operation_failed: () => ({
    code: 103,
    message: "Internal Server Error"
  }),

  error_token_expired: () => ({
    code: 104,
    message: "Token Expired"
  }),

  error_account_not_actived: () => ({
    code: 105,
    message: "This Account Is Not Actived"
  }),

  error_cannot_request_new_codes: () => ({
    code: 106,
    message: "You Cannot Request New Scodes"
  }),


  error_json_format: () => ({
    code: 300,
    message: "Invalid JSON Format"
  })
};
