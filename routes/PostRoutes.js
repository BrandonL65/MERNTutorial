let express = require("express");
let router = express.Router();
let PostController = require("../controllers/PostController");

router.get("/posts", PostController.getAll);
router.get("/posts/findOne", PostController.findOne);
router.post("/posts", PostController.create);
router.put("/posts", PostController.update);
router.delete("/posts", PostController.delete);

module.exports = router;