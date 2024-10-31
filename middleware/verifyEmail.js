export const verify = (req, res, next) => {
  const data = req.body;
  if (data.email === process.env.EMAIL) {
    return res
      .status(500)
      .json({ success: false, message: "Email already exist..." });
  }
  next();
};
