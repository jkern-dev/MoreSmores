class AddStateCitySites < ActiveRecord::Migration[5.2]
  def change
    add_column :sites, :city, :string, null: false, default: ""
  end
end
