class AddSitesTable < ActiveRecord::Migration[5.2]
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



 s = Site.new(user_id: 14, name: "test", capacity: 5, fire_allowed: true, rv_allowed: false, pet_allowed: true, bike_activity: true, hike_activity: false, latitude: 5.555, longitude: 5.555, state: "CA")
 s = Site.new(user_id: 14, name: "test", capacity: 5, fire_allowed: true, rv_allowed: true, pet_allowed: true, bike_activity: true, hike_activity: true, latitude: 5.555, longitude: 5.555, state: "CA")