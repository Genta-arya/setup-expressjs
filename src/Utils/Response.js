export const sendResponse = async (res, statusCode, message, data = null) => {
  const responsePayload = {
    message,
  };
  console.log("LOG: " + message +"," + statusCode);

  if (data) {
    responsePayload.data = data;
  }

  return res.status(statusCode).json(responsePayload);
};
