json.extract! reservation, :id, :user-id, :flight-id, :created_at, :updated_at
json.url reservation_url(reservation, format: :json)
