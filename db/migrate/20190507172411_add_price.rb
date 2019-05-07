class AddPrice < ActiveRecord::Migration[5.2]
  def change
    add_column :sites, :price, :integer, null: false, default: 0
  end
end
