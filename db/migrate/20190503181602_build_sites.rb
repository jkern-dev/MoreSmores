class BuildSites < ActiveRecord::Migration[5.2]
  def change
    create_table :sites do |t|
      t.integer :user_id, null: false
      t.string :name, null: false 
      t.integer :capacity, null: false
      t.boolean :fire_allowed, default: false
      t.boolean :rv_allowed, default: false
      t.boolean :pet_allowed, default: false 
      t.boolean :bike_activity, default: false 
      t.boolean :hike_activity, default: false 
      t.float :latitude, null: false 
      t.float :longitude, null: false 
      t.string :state, null: false 
      t.timestamps
    end
    add_index :sites, :user_id
  end
end
