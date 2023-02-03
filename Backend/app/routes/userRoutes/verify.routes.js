module.exports = app => {
	var router = require("express").Router();
	const db = require("../../models");
	const User = db.users;
	const CoverLetter = db.coverLetters
	const Token = db.tokens
	const EmailSender = require("../../helpers/emailVerification");
	// ======================= User ==================================

	router.get('/check/email/:id', async (req, res) => {
		const existedUser = await User.findOne({ email: req.params.id });
		if (!existedUser) {
			res.status(200).send({
				exist: false,
				verified: false,
				message: "email does not exist"
			});
			return;
		}
		res.status(200).send({
			exist: true,
			verified: existedUser.verified,
			message: "email exists"
		});
		return;
	})

	router.post('/check/proposal', async (req, res) => {
		console.log(req.body)
		const proposalWritten = await CoverLetter.findOne({ sender: req.body.sender, intPostId: req.body.intPostId });

		if (!proposalWritten) {
			res.status(200).send({
				sent: false,
				content: 'empty'
			});
			return;
		}
		res.status(200).send({
			sent: true,
			content: proposalWritten
		});
		return;
	})



	router.post("/resendlink", async (req, res) => {
		// res.send('here I am')

		const user = await User.findOne({ _id: req.body.id });

		if (!user) return res.status(200).send({
			success: false,
			message: "There is no such user"
		});

		const token = await Token.findOne({ userId: user._id });
		if (!token) return res.status(200).send({
			success: false,
			message: "There no token for such User"
		});

		const message = `${process.env.BASE_URL}/user/verify/${user._id}/${token.token}`;
		console.log(message)
		EmailSender({ email: user.email, subject: "Verify Email", message });

		res.status(200).send({
			success: true,
			message: "email Sent sucessfully"
		});
		return;

	});


	router.get("/verify/:id/:token", async (req, res) => {
		// res.send('here I am')

		const user = await User.findOne({ _id: req.params.id });
		if (!user) return res.status(200).send({
			success: false,
			message: "Invalid link"
		});

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(200).send({
			success: false,
			message: "Invalid link"
		});

		await User.updateOne({ _id: user._id }, { verified: true });
		await Token.findByIdAndRemove(token._id);

		res.status(200).send({
			success: true,
			message: "email verified sucessfully"
		});
		return;

	});

	app.use('/api/user', router);

}


