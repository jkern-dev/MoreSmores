class AddPriceBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :total_price, :integer, null: false
  end
end
