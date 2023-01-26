module.exports = app => {
  var router = require("express").Router();
  const db = require("../../models");
  const User = db.users;
  const Token=db.tokens
  // ======================= User ==================================
  router.get('/sifan',(req,res) => {
	res.send("Here We are in verify routes ")
  })
  router.get("/verify/:id/:token", async (req, res) => {
		// res.send('here I am')
		
			const user = await User.findOne({ _id: req.params.id });
			if (!user) return res.status(400).send({
				success:false,
				message:"Invalid link"
			});

			const token = await Token.findOne({
				userId: user._id,
				token: req.params.token,
			});
			if (!token) return res.status(400).send({
				success:false,
				message:"Invalid link"
			});

			await User.updateOne({ _id: user._id},{verified: true} );
			await Token.findByIdAndRemove(token._id);

			res.status(200).send({
				success:true,
				message:"email verified sucessfully"
			});
			return;
		
	});

  app.use('/api/user', router);

}


