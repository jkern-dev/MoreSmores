class RemoveSites < ActiveRecord::Migration[5.2]
  def change
    drop_table :sites 
  end
end
