import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: String,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },

    // we can use both ways for orderItems , in first we define seperate schema and then write in the array and in 2nd we defined in side of the array a object
    orderItems: [orderItemSchema],
    // Or
    orderItems: [
      {
        productId: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Failed', 'Delevered'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', OrderSchema);
