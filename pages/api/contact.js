// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailjet = require('node-mailjet').connect(
	process.env.MAILJET_API_KEY,
	process.env.MAILJET_SECRET_KEY,
)

export default (req, res) => {
	if (req.method === 'POST') {
		console.log(req.body)
		const request = mailjet.post('send', { version: 'v3.1' }).request({
			Messages: [
				{
					From: {
						Email: 'dayoo.oladele@gmail.com',
						Name: req.body.name,
					},
					To: [
						{
							Email: 'dayoo.oladele@gmail.com',
							Name: 'Temidayo',
						},
					],
					Subject: 'Portfolio Contact Form' + req.body.subject,
					TextPart: 'Portfolio Contact Form',
					HTMLPart: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		    <html lang="en">
		    <head>
		      <meta charset="utf-8">

		      <title>The HTML5 Herald</title>
		      <meta name="description" content="The HTML5 Herald">
		      <meta name="author" content="SitePoint">
		    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

		      <link rel="stylesheet" href="css/styles.css?v=1.0">

		    </head>

		    <body>
		      <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
		            </div>
		            <div class="container" style="margin-left: 20px;margin-right: 20px;">
		            <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
		            <div style="font-size: 16px;">
		            <p>Message:</p>
		            <p>Name : ${req.body.name}</p>
		            <p>Message : ${req.body.message}</p>
		            <br>
		            </div>
		            <h2>O T M .</h2>
		            <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Temidayo Michael<br>Software Developer<br>+234 8102334561</p>
		            <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
		              <a href="https://temidayomichael.vercel.app/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
		              <a href="https://facebook.com/oladele.dayo.165/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Facebook</a>
		              <a href="https://github.com/Temidayomichael/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
		              <a href="https://instagram.com/michaell.dev/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
		              <a href="https://linkedin.com/in/temidayo-oladele-8aba21116/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
		              <a href="https://twitter.com/Temidayo_olad/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>

		            </div>
		            </div>
		    </body>
		    </html>`,
					CustomID: 'AppGettingStartedTest',
				},
			],
		})
		request
			.then((result) => {
				console.log(result)
				res.status(200).send({
					message: result,
				})
			})
			.catch((err) => {
				console.log(error)
				res.status(400).send({
					message: err.message,
				})
			})

		// 	 try {
		//   await sendgrid.send({
		//     from: req.body.email, // Your email where you'll receive emails
		//     to: "dayoo.oladele@gmail.com", // your website email address here
		//     subject: `[Lead from website] : ${req.body.subject}`,
		//     html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		//     <html lang="en">
		//     <head>
		//       <meta charset="utf-8">

		//       <title>The HTML5 Herald</title>
		//       <meta name="description" content="The HTML5 Herald">
		//       <meta name="author" content="SitePoint">
		//     <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

		//       <link rel="stylesheet" href="css/styles.css?v=1.0">

		//     </head>

		//     <body>
		//       <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
		//             </div>
		//             <div class="container" style="margin-left: 20px;margin-right: 20px;">
		//             <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
		//             <div style="font-size: 16px;">
		//             <p>Message:</p>
		//             <p>${req.body.company_name}</p>
		//             <p>${req.body.product_type}</p>
		//             <p>${req.body.emp_type}</p>
		//             <p>${req.body.payment}</p>
		//             <p>${req.body.desc}</p>
		//             <br>
		//             </div>
		//             <img src="https://manuarora.in/logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
		//             <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Manu Arora<br>Software Developer<br>+91 9587738861</p>
		//             <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
		//               <a href="https://manuarora.in/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
		//               <a href="https://manuarora.in/blog/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
		//               <a href="https://github.com/manuarora700/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
		//               <a href="https://instagram.com/maninthere/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
		//               <a href="https://linkedin.com/in/manuarora28/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
		//               <a href="https://twitter.com/mannupaaji/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>

		//             </div>
		//             </div>
		//     </body>
		//     </html>`,
		//   });
		// } catch (error) {
		//   // console.log(error);
		//   return res.status(error.statusCode || 500).json({ error: error.message });
		// }
	} else {
		res.status(400).send({
			message: 'Method not allowed',
		})
	}
}
