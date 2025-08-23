json.user do
  json.username @user.username
  json.email @user.email
end

json.success true