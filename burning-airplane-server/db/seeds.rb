# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Airplane.destroy_all
a1 = Airplane.create :name => "Hugh's Magic Shuttle"
puts "#{ Airplane.count } airplanes"


Flight.destroy_all
f1 = Flight.create :flight_number => 1, :origin => 'Melbourne', :airplane_id => 1, :destination => 'Sydney'
f2 = Flight.create :airplane_id => 2, :flight_number => 2, :origin => 'Melbourne', :destination => 'Sydney', :date => 2152022
f3 = Flight.create :airplane_id => 3, :flight_number => 3, :origin => 'Gold Coast', :destination => 'Canberra', :date => 2552022

puts "#{ Flight.count } flights"

User.destroy_all
u1 = User.create :user_name => 'admin'
puts "#{ User.count } users"

