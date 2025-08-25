if @user
  json.authenticated true
  json.id @user.id
  json.username @user.username
end