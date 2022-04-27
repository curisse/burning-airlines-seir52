json.extract! flight, :id, :flight-number, :origin, :destination, :date, :plane, :created_at, :updated_at
json.url flight_url(flight, format: :json)
