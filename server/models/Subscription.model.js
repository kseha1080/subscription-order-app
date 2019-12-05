import mongoose from 'mongoose';

const SubscriptionSchema = new mongoose.Schema(
  {
    subscription: {
      duration: Number,
      cloudGB: Number,
      upfrontPayment: String,
    },
    userInfo: {
      userEmail: String,
      firstName: String,
      lastName: String,
      address: {
        street: String,
        city: String,
        state: String,
        zipcode: String,
      },
    },
    creditCard: {
      cardNumber: String,
      expireDate: String,
      securityCode: String,
    },
    orderedAt: Date,
  },
  {
    collection: 'SUBSCRIPTION_ORDER',
  },
);

export default mongoose.model('SubscriptionModel', SubscriptionSchema);
