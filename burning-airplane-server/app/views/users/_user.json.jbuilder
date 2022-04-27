json.extract! user, :id, :user-name, :user-id, :created_at, :updated_at
json.url user_url(user, format: :json)
