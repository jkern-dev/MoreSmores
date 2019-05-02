class RecreateSites < ActiveRecord::Migration[5.2]
  def change
    create_table :sites do |t|
      t.integer :host_id, null: false
      t.string :name, null: false 
      t.integer :capacity, null: false
      t.boolean :rv_allowed, default: false
      t.boolean :pet_allowed, default: false 
      t.boolean :bike_activity, default: false 
      t.boolean :hike_activity, default: false 
      t.float :latitude, null: false 
      t.float :longitude, null: false 
      t.string :state, null: false 
      t.string :profile_photo_url, null: false 
      t.timestamps
    end
    add_index :sites, :host_id
  end
end
