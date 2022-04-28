class Reservation < ApplicationRecord
    belongs_to :user, :flight, :optional => true
end
