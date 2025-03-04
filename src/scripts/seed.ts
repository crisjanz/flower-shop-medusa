const { UserModuleService } = require("@medusajs/user");
const userService = new UserModuleService({ manager });
await userService.createUsers([{
  id: "admin_id",
  email: "admin@medusa-test.com",
  password_hash: "$2a$10$dPw8oCMnmfS0eS4QzK9U9eV8j8k8k8k8k8k8k8k8k8k8k8k8k8k8k",
}]);