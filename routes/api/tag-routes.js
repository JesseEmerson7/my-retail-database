const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({include:Product});
    res.status(200).json(allTags);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const selectedTag = await Tag.findByPk(req.params.id, {
      include: [Product]
    });
    res.status(200).json(selectedTag);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json({
      message: "Your new tag",
      newTag,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    putTagName = await Tag.findByPk(req.params.id)
    putTagName.tag_name = req.body.tag_name;
    await putTagName.save();
    res.status(200).json({
      "message":"Your tag has been updated",
      putTagName
    })
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const destroyedTag = await Tag.destroy({
      where:{
        id: req.params.id
      }
    });
  
    if(!destroyedTag){
      res.status(404).json({message:`No tag found with id: ${req.params.id}`})
      return;
    };
    res.status(200).json({
      message:`Tag deleted at id: ${req.params.id}`,
      destroyedTag
    })
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
