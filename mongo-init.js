db.createUser({
  user: "app_user",
  pwd: "apppassword",
  roles: [
    {
      role: "readWrite",
      db: "gym-time-prod",
    },
  ],
});

db.createCollection("customers");

db.customers.createIndex({ email: 1 }, { unique: true });
