class AddLikesToFavorites < ActiveRecord::Migration[5.1]
  def change
    add_column :favorites, :likes, :integer
  end
end
