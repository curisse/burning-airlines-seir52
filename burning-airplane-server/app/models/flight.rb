class Flight < ApplicationRecord
    has_many :reservations
    belongs_to :airplane
    has_many :users, :through => :reservation
end
