class AddDescription < ActiveRecord::Migration[7.1]
  def change
    add_column :articles, :description, :string
  end
end
