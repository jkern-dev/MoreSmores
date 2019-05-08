# == Schema Information
#
# Table name: sites
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  name          :string           not null
#  capacity      :integer          not null
#  fire_allowed  :boolean          default(FALSE)
#  rv_allowed    :boolean          default(FALSE)
#  pet_allowed   :boolean          default(FALSE)
#  bike_activity :boolean          default(FALSE)
#  hike_activity :boolean          default(FALSE)
#  latitude      :float            not null
#  longitude     :float            not null
#  state         :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  description   :string           default(""), not null
#  city          :string           default(""), not null
#  price         :integer          default(0), not null
#

class Site < ApplicationRecord
    validates :user_id, :name, :capacity, :latitude, :longitude, :state, :city, :price, presence: true

    belongs_to :user
    has_one_attached :photo
    has_many :bookings

end
