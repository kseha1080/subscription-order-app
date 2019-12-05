import SubscriptionService from '../service/SubscriptionService';
import { isEmpty } from 'lodash';

const respondWithResult = (res, statusCode, entity, message) => {
  statusCode = statusCode || 200;
  const response = { message };
  if (entity) {
    response.result = entity;
  }

  res.status(statusCode).json(response);
};

export const index = (req, res) => {
  const service = new SubscriptionService();
  service
    .getAllSubscriptions()
    .then((response) => {
      if (!isEmpty(response)) {
        return respondWithResult(res, 200, response, 'Fetch succcess');
      } else {
        return respondWithResult(res, 200, null, 'There are no records');
      }
    })
    .catch((err) => {
      return respondWithResult(res, 500, null, err.message);
    });
};

export const show = (req, res) => {
  const service = new SubscriptionService();
  service
    .getSubscriptionById(req.params.id)
    .then((response) => {
      if (!isEmpty(response)) {
        return respondWithResult(res, 200, response, 'Fetch succcess');
      } else {
        return respondWithResult(res, 200, null, 'There are no records');
      }
    })
    .catch((err) => {
      return respondWithResult(res, 500, null, err.message);
    });
};

export const create = (req, res) => {
  const service = new SubscriptionService();
  service
    .validateAndSave({ params: req.body })
    .then((response) => {
      return respondWithResult(
        res,
        201,
        response,
        'Subscription created successfully.',
      );
    })
    .catch((err) => {
      if (err.error === 'Validation Failed') {
        return respondWithResult(res, 400, null, err.message);
      }
      return respondWithResult(res, 500, null, err.message);
    });
};

export const destroy = (req, res) => {
  const service = new SubscriptionService();
  service
    .deleteSubscription(req.params.id)
    .then((response) => {
      if (response) {
        return respondWithResult(
          res,
          200,
          null,
          'Subscription deleted successfully.',
        );
      } else {
        return respondWithResult(
          res,
          404,
          null,
          'No such subscription order exists.',
        );
      }
    })
    .catch((err) => {
      return respondWithResult(res, 500, null, err.message);
    });
};

export const update = (req, res) => {
  const service = new SubscriptionService();
  service
    .validateAndSave({ params: req.body, id: req.params.id })
    .then((response) => {
      if (response) {
        return respondWithResult(
          res,
          200,
          response,
          'Subscription updated successfully.',
        );
      } else {
        return respondWithResult(
          res,
          404,
          null,
          'No such subscription order exists',
        );
      }
    })
    .catch((err) => {
      if (err.error === 'Validation Failed') {
        return respondWithResult(res, 400, null, err.message);
      }
      return respondWithResult(res, 500, null, err.message);
    });
};
