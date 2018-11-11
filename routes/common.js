module.exports = {
  response_json: function (req, res, next) {
		res.json(req.data);
	},
}
