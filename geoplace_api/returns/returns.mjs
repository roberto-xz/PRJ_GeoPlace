
export default {
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

  error_duplicate_entry: (type) => ({
    code: 102,
    message: "Duplicate Data",
    type: type
  }),

  error_operation_failed: () => ({
    code: 103,
    message: "Operation Failed"
  }),

  error_token_expired: () => ({
    code: 104,
    message: "Token Expired"
  }),

  error_json_format: () => ({
    code: 300,
    message: "Invalid JSON Format"
  })
};
