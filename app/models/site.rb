# == Schema Information
#
# Table name: sites
#
#  id                :bigint           not null, primary key
#  host_id           :integer          not null
#  name              :string           not null
#  capacity          :integer          not null
#  rv_allowed        :boolean          default(FALSE)
#  pet_allowed       :boolean          default(FALSE)
#  bike_activity     :boolean          default(FALSE)
#  hike_activity     :boolean          default(FALSE)
#  latitude          :float            not null
#  longitude         :float            not null
#  state             :string           not null
#  profile_photo_url :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Site < ApplicationRecord
    validates :host_id, :name, :capacity, :rv_allowed, :pet_allowed, :bike_activity, :hike_activity, :latitude, :longitude, :state, :profile_photo_url, presence: true
end
