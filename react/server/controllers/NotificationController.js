import NotificationModel from "../models/Notification.js";

export const create = async (req, res) => {
  try {
    const doc = new NotificationModel({
      title: req.body.title,
      content: req.body.content,
      duration: req.body.duration,
    });

    const notification = await doc.save();

    res.json(notification);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Couldnt create notification.",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const notifications = await NotificationModel.find();
    res.json(notifications);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Couldnt get all notifications.",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const notificationId = req.params.id;

    NotificationModel.findOneAndDelete(
      {
        _id: notificationId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Couldnt remove notification.",
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: "Notification not found.",
          });
        }

        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Couldnt get notifications.",
    });
  }
};

export const update = async (req, res) => {
  try {
    const notificationId = req.params.id;

    await NotificationModel.updateOne(
      {
        _id: notificationId,
      },
      {
        title: req.body.title,
        content: req.body.content,
        duration: req.body.duration,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Couldnt update notification.",
    });
  }
};
