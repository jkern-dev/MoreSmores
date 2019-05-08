# == Schema Information
#
# Table name: bookings
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  site_id     :integer          not null
#  group_size  :integer          not null
#  start_date  :date             not null
#  end_date    :date             not null
#  approved    :boolean          default(FALSE)
#  reviewed    :boolean          default(FALSE)
#  total_price :integer          not null
#

class Booking < ApplicationRecord
  validates :user_id, :site_id, :group_size, :start_date, :end_date, presence: true
  after_initialize :total_price 

  belongs_to :user 
  belongs_to :site

  def total_days
    @total_days = end_date - start_date
    @total_days.to_int
  end

  def total_price 
    priceTotal = (self.site.price * total_days)
    priceTotal.to_int 
    self.total_price = priceTotal
  end
end
