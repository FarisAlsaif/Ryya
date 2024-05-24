import User from "../models/user.model.js";

const userResolver = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (_, { id }) => {
      return await User.findById(id);
    },
  },
  Mutation: {
    createUser: async (_, { name, email, password }) => {
      const user = new User({ name, email, password });
      await user.save();
      return user;
    },
    updateUser: async (_, { id, name, email, password }) => {
      const update = { name, email, password };
      return await User.findByIdAndUpdate(id, update, { new: true });
    },
    deleteUser: async (_, { id }) => {
      return await User.findByIdAndDelete(id);
    },
  },
};

export default userResolver;
