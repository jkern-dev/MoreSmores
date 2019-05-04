class AddSiteDescription < ActiveRecord::Migration[5.2]
  def change
    add_column :sites, :description, :string, null: false, default: "" 
  end
end
