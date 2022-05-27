const { Op } = require("sequelize");
const db = require("../db");
const Message = require("./message");
const User = require("./user");

const Conversation = db.define("conversation", {});

// find conversation given two user Ids

Conversation.findConversation = async function (user1Id, user2Id) {
  const conversations = await Conversation.findAll({
    attributes: ["id"],
    include: [
      { model: Message, order: ["createdAt", "DESC"] },
      {
        model: User,
        where: {
          id: {
            [Op.eq]: user1Id,
          }
        },
      },
    ],
  });

  for (let i = 0; i < conversations.length; i++) {
    const convo = conversations[i];
    const convOtherUsers = await convo.getUsers({
      attributes: ["id"],
      where: {
        id: {
          [Op.not]: user1Id,
        }
      },
    })
    console.log(convOtherUsers)
    // return conversation if only the other user is found and only him
    if (convOtherUsers.some(user => user.dataValues.id === user2Id) && convOtherUsers.length === 1) {
      return convo;
    }
  }
  // return null if no conversation between the two users and only them is found
  return null;
};

module.exports = Conversation;
