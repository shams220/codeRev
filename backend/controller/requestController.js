// const main = require("../services/ai.service");
// const request = async (req, res) => {
// //   const prompt = req.query.prompt;
// const {code} = req.body
//   if (!code) {
//     return res.status(400).send({
//       message: "Prompt is required,Please enter some prompt",
//       success: false,
//     });
//   }

//   const response = await main(code);
//   if(!response){
//     return res.status(400).send({
//         message:"some error while generating the response",
//         success:false
//     })
//   }
//   console.log(response);

//   return res.status(200).send({
//     message:"response generated succesfully",
//     success:true
//   })
// };
// module.exports = request;


const main = require("../services/ai.service");

const request = async (req, res) => {
  const { code } = req.body;  // ✅ FIXED

  if (!code) {
    return res.status(400).send({
      message: "Code is required, please provide code",
      success: false,
    });
  }

  try {
    const response = await main(code);

    if (!response) {
      return res.status(400).send({
        message: "Some error while generating the response",
        success: false,
      });
    }

    return res.status(200).send({
      message: "Response generated successfully",
      success: true,
      data: response,  // ✅ send the result back
    });

  } catch (error) {
    return res.status(500).send({
      message: "Server error while processing the request",
      success: false,
      error: error.message,
    });
  }
};

module.exports = request;
