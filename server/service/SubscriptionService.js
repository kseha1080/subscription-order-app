import SubscriptionModel from '../models/Subscription.model';
import { isEmpty, isUndefined, trim } from 'lodash';

class SubscriptionService {
  validateAndSave = ({ params, id }) => {
    return this.validateData(params, id).then((res) => {
      if (res === 'validation passed' && id) {
        return this.updateSubscription(params, id);
      } else if (res === 'validation passed' && !id) {
        return this.createSubscription(params);
      }
    });
  };

  validateData = (params, id) => {
    return new Promise((resolve, reject) => {
      if (Object.keys(params).length === 0) {
        return reject({
          error: 'Validation Failed',
          message: 'Please provide all required fields.',
        });
      }

      return this.getSubscriptionByEmail(params.userInfo.userEmail).then(
        (res) => {
          if (isEmpty(res)) {
            return resolve('validation passed');
          } else {
            return reject({
              error: 'Validation Failed',
              message: 'User email already exists.',
            });
          }
        },
      );
    });
  };

  getAllSubscriptions = () => {
    return SubscriptionModel.find()
      .sort({ orderedAt: -1 })
      .exec();
  };

  getSubscriptionById = (id) => {
    return SubscriptionModel.findById(id).exec();
  };

  createSubscription = (params) => {
    const newSub = { ...params };
    newSub.orderedAt = new Date();

    return SubscriptionModel.create(newSub);
  };

  deleteSubscription = (id) => {
    return SubscriptionModel.findByIdAndRemove(id).exec();
  };

  updateSubscription = (params, id) => {
    let updatedSubscription = { ...params };

    return SubscriptionModel.findByIdAndUpdate(id, updatedSubscription, {
      new: true,
    }).exec();
  };

  getSubscriptionByEmail = (userEmail) => {
    return SubscriptionModel.findOne({
      'userInfo.userEmail': userEmail,
    }).exec();
  };
}

export default SubscriptionService;
