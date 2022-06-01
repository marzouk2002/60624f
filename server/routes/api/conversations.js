const router = require("express").Router();
const { User, Conversation, Message } = require("../../db/models");
const { Op } = require("sequelize");
const onlineUsers = require("../../onlineUsers");

// get all conversations for a user, include latest message text for preview, and all messages
// include other user model so we have info on username/profile pic (don't include current user info)
router.get("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const userId = req.user.id;
    const conversations = await Conversation.findAll({
      attributes: ["id"],
      order: [[Message, "createdAt", "DESC"]],
      include: [
        { model: Message, order: ["createdAt", "DESC"] },
        {
          model: User,
          where: {
            id: {
              [Op.eq]: userId,
            }
          },
        },
      ],
    });
  

    for (let i = 0; i < conversations.length; i++) {
      const convo = conversations[i];
      const convoJSON = convo.toJSON();
      const convOtherUsers = await convo.getUsers({
        where: {
          id: {
            [Op.not]: userId
          },
          
        },
        attributes: ["id", "username", "photoUrl"],
        required: false,
      })
      // set property for online status of the other users

      let otherUsers = convOtherUsers.map((user) => {
        let userJSON = user.toJSON()
        return ({
          ...userJSON,
          online: onlineUsers.includes(userJSON.id)
        })
      })
      convoJSON.otherUsers = otherUsers
      convoJSON.otherUser = otherUsers[0]
      delete convoJSON.users

      // set properties for notification count and latest message preview
      convoJSON.latestMessageText = convoJSON.messages[0].text;
      conversations[i] = convoJSON;
    }

    res.json(conversations);
  } catch (error) {
    next(error);
  }
});

router.post('/:id/addUser/:user_id', async (req, res, next) => {
  try {
    // if (!req.user) {
    //   return res.sendStatus(401);
    // }
    const { id, user_id } = req.params

    const conversation = await Conversation.findByPk(id)

    const otherUser = await User.findByPk(user_id)
    
    await conversation.addUser(otherUser)

    res.json(conversation).status(200)
  } catch (error) {
    next(error);
  }
})

module.exports = router;
