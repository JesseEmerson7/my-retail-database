const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll({ include: Product });
    res.status(200).json(allCategories);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  console.log(req.params.id);
  try {
    const selectedCategory = await Category.findByPk(req.params.id, {
      include: Product,
    });
    res.status(200).json(selectedCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json({
      message: "Your new category",
      newCategory,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    putCategoryName = await Category.findByPk(req.params.id)
    putCategoryName.category_name = req.body.category_name;
    await putCategoryName.save();
    res.status(200).json({
      "message":"Your category has been updated",
      putCategoryName
    })
  } catch (error) {
    res.status(400).json(error);
  }
  
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const destroyedCategory = await Category.destroy({
      where:{
        id: req.params.id
      }
    });
  
    if(!destroyedCategory){
      res.status(404).json({message:'No location found with this id'})
      return;
    };
    res.status(200).json({
      message:'category DELETED',
      destroyedCategory
    })
  } catch (error) {
    res.status(500).json(error)
  }
 
});

module.exports = router;
