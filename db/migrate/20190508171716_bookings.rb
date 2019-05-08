class Bookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false 
      t.integer :site_id, null: false
      t.integer :group_size, null: false 
      t.date :start_date, null: false
      t.date :end_date, null: false 
      t.boolean :approved, default: false 
      t.boolean :reviewed, default: false 
    end
    add_index :bookings, :user_id 
    add_index :bookings, :site_id
  end
end
