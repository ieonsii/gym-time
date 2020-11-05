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
